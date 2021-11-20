# Effector Reshape

Reshape creates multiple derived stores from one store.

> Please, use [patronum/reshape](https://github.com/effector/patronum)

## Installation

```bash
npm install --save effector effector-reshape

# or

yarn add effector effector-reshape
```

## Usage

Create original store:

```ts
import { createStore } from 'effector';

const $original = createStore<string>('Example');
```

Reshape it to another stores:

```ts
import { reshape } from 'effector-reshape';

const shape = reshape($original, {
  length: (string) => string.length,
  lowercase: (string) => string.toLowerCase(),
  uppercase: (string) => string.toUpperCase(),
});
```

Now you have three derived stores:

```ts
shape.length.watch((length) => console.log('String length:', length));
shape.lowercase.watch((lowercase) => console.log('lowercase:', lowercase));
```

You can simply destructure shape to consts:

```ts
import { createStore } from 'effector';
import { reshape } from 'effector-reshape';

const $user = createStore({ id: 12, name: 'Sergey', surname: 'Sova' });

const { $id, $name, $surname } = reshape($user, {
  $id: (user) => user.id,
  $name: (user) => user.name,
  $surname: (user) => user.surname,
});

$id.watch((userId) => console.log('user id', userId));
```
