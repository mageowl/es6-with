/**
 * A with workaround
 *
 * @param {Object} obj The object to expose
 * @param {Function} cb A callback
 */
export default function wth(obj, cb) {
	const props = /\(([^),]+,?)*\)/
		.exec(cb.toString())[0]
		.slice(1, -1)
		.split(",")
		.map((x) => x.trim());
	if (props.length <= 0) {
		console.warn(
			"You are using wth() on an object without requesting any properties.\nCalling callback anyway."
		);
		cb();
	}

	cb(
		...props.map((key) => {
			if (!obj.hasOwnProperty(key)) {
				console.warn(
					`You are using wth() on the ${obj} and requesting the property ${key}, which it doesn't have. Passing undefined to function.`
				);
				return undefined;
			}
			return obj[key];
		})
	);
}
