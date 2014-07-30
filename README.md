# gaffa-switch

switch action for gaffa

Run different actions based on the result of an expression.

## Install:

    npm i gaffa-switch

## Add to gaffa:

    var Switch = require('gaffa-switch');

    gaffa.registerCnstructor(Switch);

## Usage

    var switchAction = new SwitchContainer();

    // Add to gaffa...

# API

## Properties (instanceof Gaffa.Property)

### switch (get)

The value to switch on.

eg:

    switchAction['switch'].binding = '(? a "thing" "stuff")';
    switchAction.actions.thing = [thingActions...];
    switchAction.actions.stuff = [stuffActions...];

You can also provide a default if nothing matches:

    switchAction.actions['default'] = [defaultActions...]