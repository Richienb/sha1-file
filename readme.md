# sha1-file

Get the SHA1 of a file.

## Install

```sh
npm install sha1-file
```

## Usage

```js
import {sha1File} from 'sha1-file';

console.log(await sha1File('file.txt'));
//=> 'a0b65939670bc2c010f4d5d6a0b3e4e4590fb92b'
```

## API

### sha1File(filepath)

Returns a promise for the file hash.

### sha1FileSync(filepath)

Returns the file hash.
