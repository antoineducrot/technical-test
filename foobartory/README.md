# Foobartory

## Statement

The goal is to code an automatic production line of `foobar`.

At the beginning, we have 2 robots, each of which is able to perform several actions:

- Move to change activity: Take 5 seconds.
- Mining `foo`:
    - Take 1 second.
- Mining `bar': 
    - Take between 0.5 and 2 seconds.
- Assembling a `foobar` from a `foo` and a `bar`: 
    - Take 2 seconds.
    - The operation has 60% chance of success.
    - In case of failure the `bar` can be reused, the `foo` is lost.
- Sell `foobar` :
    - Take 10 seconds to sell from 1 to 5 foobar
    - we earn 1€ per foobar sold
- Buy a new robot:
    - Take 0 second
    - cost 3€ and 6 `foo`
    

You have large warehouses, stock management is not a problem.

On the other hand, the legislation imposes the traceability of the parts used to manufacture the `foobars`: 
- each `foo` and each `bar` must have a unique serial number that must be found on the `foobar` when it leaves the factory.

The game stops when you have 30 robots.

Note:

- 1 second of the game does not have to be a real second.
- The choice of actions does not have to be optimal (no need to do math), only functional.

## How to launch

If you have docker just launch
```console
foo@bar:~$ docker-compose up
```
If you don't just download nodejs and run
```console
foo@bar:~$ yarn install
foo@bar:~$ yarn build
foo@bar:~$ node build/index.js
```
You can accelerate the time by creating a .env file with the TIME_MULTIPLIER variable. You can find an example in the .env.example file.