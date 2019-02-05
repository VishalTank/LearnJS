//Base class
var Job = function() {
    this.pays = true;
};

Job.prototype.print = function() {
    console.log(this.pays ? "job print, yes" : "job print, no");
}

//Sub Class
var TechJob = function(title, pays) {
    Job.call(this);

    this.title = title;
    this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

TechJob.prototype.print = function() {
    console.log(this.pays ? "techjob print, yes" : "techjob print, no");
}


var softwarePosition = new TechJob('JS Programmer', true);
console.log(softwarePosition.print());