# debug-filename

A wrapper around the debug module, providing the additional ability to determine the calling file name for debug's namespace. Get automatic unique namespaces each time you use debug!

## Install
```sh
npm i debug-filename
```

## Configuration
### `DEBUG_FILENAME_PREFIX` : <`string`>
Namespace prefix, Default value is `app` .

### `DEBUG_FILENAME_START` : <`string`>
The directory hierarchy at the beginning of the namespace, Default value is `0` .

### `DEBUG_FILENAME_LENGTH` : <`string`>
The number of directory hierarchies the namespace contains, Default value is `0` .

## Quick Examples

### Basic usage

```javascript
// test/foo.js
import debug from 'debug-filename';

// DEBUG can be triggered by the following format:
// - DEBUG=app:test:foo
// - DEBUG=app:test:*
// - DEBUG=app:*
// - DEBUG=*
debug('logging data'); // "app:test:foo logging data"
```

### Advanced usage

- Modify App name
    ```javascript
    // test/foo.js
    import debug from 'debug-filename';

    // DEBUG_FILENAME_PREFIX=Application DEBUG=Application:test:foo
    debug('logging data'); // "Application:test:foo logging data"
    ```

- Stripped off the first layer of the catalog
    ```javascript
    // test/foo.js
    import debug from 'debug-filename';

    // DEBUG_FILENAME_START=1 DEBUG=app:foo
    debug('logging data'); // "app:foo logging data"
    ```

- Specify the length of the namespace
    ```javascript
    // test/a/b/c/d.js
    import debug from 'debug-filename';

    // DEBUG_FILENAME_LENGTH=2 DEBUG=app:test:a
    debug('logging data'); // "app:test:a logging data"
    ```