/**
 * @see http://stackoverflow.com/q/7616461/940217
 * @return {number}
 */
 
String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length === 0) return hash;
    if (Array.prototype.reduce){
    	hash = this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0); 
    }
    else 
    for (var i = 0; i < this.length; i++) {
        hash  = ((hash<<5)-hash) + this.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
    }
	return hash&65535;
};
