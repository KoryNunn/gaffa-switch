var Gaffa = require('gaffa');

function Switch(){}
Switch = Gaffa.createSpec(Switch, Gaffa.Action);
Switch.prototype._type = 'switch';
Switch.prototype['switch'] = new Gaffa.Property();

Switch.prototype.trigger = function(parent, scope, event) {

    var switchValue = this['switch'].value;

    if(this.actions[switchValue]){
        this.triggerActions(switchValue, scope, event);
    }else if(this.actions['default']){
        this.triggerActions('default', scope, event);
    }
};

module.exports = Switch;