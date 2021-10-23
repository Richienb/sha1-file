/**
Asynchronously get the SHA1 of a file.

@param filepath The path of the file to hash.

@example
```
import {sha1File} from 'sha1-file';

console.log(await sha1File('file.txt'));
//=> 'a0b65939670bc2c010f4d5d6a0b3e4e4590fb92b'
```
*/
export function sha1File(filepath: string): Promise<string>;

/**
Synchronously get the SHA1 of a file.

@param filepath The path of the file to hash.

@example
```
import {sha1FileSync} from 'sha1-file';

console.log(sha1FileSync('file.txt'));
//=> 'a0b65939670bc2c010f4d5d6a0b3e4e4590fb92b'
*/
export function sha1FileSync(filepath: string): string;
