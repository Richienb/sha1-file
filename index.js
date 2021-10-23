import hasha from 'hasha';

const hashaOptions = {
	algorithm: 'sha1',
};

export function sha1File(filepath) {
	return hasha.fromFile(filepath, hashaOptions);
}

export function sha1FileSync(filepath) {
	return hasha.fromFileSync(filepath, hashaOptions);
}
