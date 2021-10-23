import {expectType} from 'tsd';
import {sha1File, sha1FileSync} from './index.js';

expectType<Promise<string>>(sha1File('fixture.txt'));
expectType<string>(sha1FileSync('fixture.txt'));
