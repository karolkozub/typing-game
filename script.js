"use strict";

var dictionary = ["abstract", "abstraction", "access", "accessor", "account", "action", "add", "admin", "administrator", "after", "agent", "algebra", "algorithm", "alias", "align", "all", "allocate", "allocation", "alt", "ambient", "amount", "analog", "analysis", "analytic", "analyze", "and", "animate", "annealing", "api", "app", "append", "application", "applied", "apply", "arbitrary", "architecture", "archive", "arctangent", "arithmetic", "array", "art", "article", "artificial", "ascent", "assembler", "assembly", "assert", "assertion", "asymptotic", "attribute", "audio", "auto", "automata", "automated", "automatic", "automaton", "auxiliary", "axiom", "backbuffer", "backend", "background", "backslash", "backspace", "base", "bash", "basic", "basis", "before", "begin", "behaviour", "better", "beyond", "bignumber", "binary", "bind", "bit", "bitwise", "black", "blackbox", "block", "blur", "body", "book", "bool", "boolean", "border", "bottleneck", "bottom", "boundary", "bounded", "box", "braces", "bracket", "brackets", "branch", "break", "browser", "buffer", "bug", "build", "builder", "byte", "bytecode", "c++", "calculate", "calculation", "calculus", "call", "caps", "card", "case", "cast", "cat", "catch", "category", "central", "change", "char", "character", "check", "child", "children", "choice", "choose", "circle", "circular", "circumference", "class", "classical", "clear", "click", "client", "clip", "clone", "close", "closed", "closure", "cloud", "code", "coding", "coefficient", "collect", "collection", "collector", "color", "combination", "combinatorics", "combine", "comment", "commit", "common", "communication", "compilation", "compiled", "compiler", "complete", "complex", "complexity", "component", "compress", "compression", "computable", "computer", "computing", "concat", "concatenation", "condition", "conditional", "conf", "config", "configuration", "connect", "connection", "consistent", "const", "constant", "contents", "context", "continuation", "continue", "continuous", "control", "controller", "convention", "converge", "convergence", "coordinates", "correct", "cosine", "count", "countable", "cpu", "crack", "cracker", "craft", "crash", "create", "critical", "cryptanalysis", "cryptography", "cryptology", "css", "cube", "cubic", "cursor", "curve", "cycle", "cyclic", "data", "database", "date", "datetime", "datum", "debug", "debugger", "debugging", "decision", "decode", "decompilation", "decompiler", "decompress", "decryption", "def", "default", "deferred", "define", "defined", "definite", "definition", "delay", "delegate", "delete", "dependent", "deployment", "depth", "dequeue", "derivative", "derive", "descent", "deserialize", "design", "designer", "desired", "destroy", "deterministic", "develop", "developer", "development", "device", "diameter", "die", "diff", "difference", "differential", "differentiate", "difficulty", "digit", "digital", "digraph", "dimension", "dimensional", "dir", "directed", "directory", "disassembler", "discrete", "display", "distribute", "distribution", "divide", "division", "divisor", "do", "documentation", "done", "double", "down", "download", "drag", "draw", "driven", "drop", "duplicate", "duration", "dvorak", "dynamic", "dynamical", "dynamics", "each", "ease", "easy", "edge", "edit", "editor", "effect", "efficiency", "efficient", "electronic", "else", "email", "embedded", "emerge", "empty", "encapsulation", "encode", "encryption", "end", "engineer", "engineering", "engine", "ensure", "enter", "enum", "enumerate", "enumeration", "environment", "equal", "equation", "error", "eval", "evaluate", "evaluation", "exception", "exec", "executable", "execution", "expect", "expectation", "experience", "export", "expression", "extend", "extension", "exterior", "factory", "fade", "fail", "false", "falsehood", "fast", "fatal", "fault", "feature", "feedback", "field", "file", "filename", "fill", "filter", "final", "finally", "find", "finite", "first", "fixnum", "flexible", "float", "flow", "focus", "foobar", "footer", "for", "foreground", "fork", "formal", "format", "fortran", "frame", "free", "freeze", "friend", "frontend", "frozen", "full", "function", "functional", "fuzzy", "game", "garbage", "gate", "gdb", "general", "generate", "generation", "generator", "genetic", "geometry", "get", "getter", "git", "global", "goto", "garbage", "gradient", "graph", "graphical", "greater", "grep", "group", "growth", "guide", "hack", "hacker", "hard", "hardware", "harmonic", "harmony", "hash", "hashbang", "hashmap", "header", "heapsort", "height", "hello", "help", "helper", "hex", "hexadecimal", "hidden", "high", "higher", "horizontal", "hover", "html", "ideal", "if", "image", "implement", "implementation", "import", "improve", "improvement", "include", "incomplete", "incorrect", "indent", "indentation", "independence", "independent", "inequality", "infer", "inference", "infinite", "infinitesimal", "infinity", "informal", "information", "inherit", "inheritance", "initialize", "inline", "inner", "input", "insert", "inspect", "install", "instance", "instanceof", "int", "integer", "integral", "integrate", "integrated", "integration", "intelligence", "intelligent", "interface", "interior", "international", "internationalization", "internet", "interpreted", "interpreter", "interrupt", "interruption", "invariant", "inverse", "isomorphism", "jargon", "java", "javascript", "jit", "job", "join", "jump", "just-in-time", "kernel", "key", "keyboard", "keypress", "knowledge", "label", "lambda", "language", "last", "layer", "layered", "layout", "learn", "learning", "left", "length", "less", "lesser", "let", "lib", "libraries", "library", "likelihood", "likely", "limit", "line", "linear", "link", "linker", "linux", "lisp", "list", "load", "local", "lock", "logarithm", "logic", "logical", "long", "loop", "low", "lower", "lowercase", "machine", "macro", "mail", "mainframe", "maintain", "maintainability", "maintenance", "make", "makefile", "malloc", "manage", "management", "manager", "map", "mark", "master", "match", "math", "mathematical", "mathematician", "mathematics", "mathlab", "matrices", "matrix", "max", "maximum", "measure", "measuring", "media", "memory", "merge", "mergesort", "message", "meta", "metaprogramming", "method", "methodology", "metric", "min", "minimum", "minus", "mixin", "mkdir", "model", "modelling", "modified", "modify", "modular", "module", "monitor", "more", "mount", "mouse", "mouseclick", "multi", "multiplication", "multiply", "multiset", "mutable", "mutex", "naive", "namespace", "naming", "near", "neighbourhood", "net", "network", "new", "next", "nil", "node", "none", "noop", "nor", "normal", "normed", "not", "notation", "note", "now", "np-hard", "null", "number", "numeric", "numerical", "object", "object-oriented", "octave", "offset", "opaque", "open", "operating", "operation", "operations", "operator", "optimal", "optimization", "optimize", "optimum", "option", "or", "order", "ordered", "oriented", "origin", "orthogonal", "out", "outer", "outline", "output", "pack", "package", "packet", "page", "panel", "paradox", "parameter", "parent", "parentheses", "parenthesis", "parse", "parser", "partition", "pascal", "patch", "path", "pattern", "pause", "perfect", "perfection", "perform", "performance", "perl", "permutation", "physics", "plain", "plane", "platform", "play", "plugin", "plus", "point", "points", "polynomial", "pop", "port", "portability", "portable", "portage", "position", "post", "power", "precision", "preferences", "premise", "prepend", "preprocessor", "preset", "prev", "prevent", "preview", "previous", "prime", "print", "printf", "println", "priority", "private", "probability", "probably", "problem", "proc", "procedural", "procedure", "process", "processing", "processor", "product", "profile", "profiler", "profiling", "program", "programmer", "programming", "project", "proof", "propagate", "protected", "protocol", "prototype", "prove", "proxy", "public", "purge", "push", "put", "puzzle", "python", "quadruple", "quality", "queue", "quicksort", "quotes", "quotient", "qwerty", "radius", "rake", "rakefile", "rand", "random", "range", "rational", "rationality", "read", "readability", "real", "receive", "rect", "rectangle", "recv", "redo", "refactor", "refactoring", "reference", "regex", "register", "registration", "regular", "reinforced", "reinstall", "relate", "relation", "release", "reliability", "reliable", "remote", "remove", "repeat", "repetition", "replace", "reply", "report", "require", "requirements", "rescue", "research", "reset", "resolution", "resolve", "resource", "result", "retry", "return", "reverse", "rewind", "right", "rmdir", "robot", "robotics", "robust", "robustness", "root", "route", "router", "ruby", "run", "scalar", "scale", "scan", "scanf", "scheme", "science", "sciences", "scope", "script", "scripting", "scroll", "search", "second", "secure", "security", "select", "selection", "self", "semantic", "semantics", "send", "sequence", "sequential", "serialization", "serialize", "series", "server", "service", "set", "setter", "setting", "settings", "setup", "shell", "shift", "short", "show", "sibling", "sidebar", "signal", "signed", "simple", "simplex", "simplicity", "simplify", "simulate", "simulated", "simulation", "sine", "single", "singleton", "size", "skill", "skip", "slash", "slice", "slide", "slot", "slow", "social", "software", "solution", "solve", "some", "sorting", "source", "space", "span", "spec", "special", "specification", "specify", "speed", "speedup", "split", "sqrt", "square", "standard", "start", "state", "static", "statistics", "status", "stochastic", "stop", "storage", "stream", "string", "struct", "structure", "study", "style", "stylesheet", "subtotal", "subtract", "subtraction", "subversion", "succeed", "sum", "summation", "super", "switch", "symbol", "synchronized", "syntax", "system", "systems", "tab", "table", "taint", "tangent", "teach", "tech", "technique", "technology", "template", "tensor", "terminal", "test", "tester", "testing", "text", "texture", "that", "then", "theorem", "theory", "this", "thread", "throw", "throws", "tick", "tilde", "time", "timeout", "times", "timestamp", "toggle", "tolerance", "tolerate", "tool", "top", "topological", "topology", "total", "train", "training", "transaction", "transfer", "transform", "transformation", "translation", "transparent", "tree", "triangle", "trigonometric", "trigonometry", "trim", "triple", "true", "truth", "try", "tuple", "turn", "tutorial", "type", "typedef", "undefined", "unicode", "uninstall", "union", "unique", "unit", "universal", "unix", "unless", "unload", "unmerge", "unmount", "unordered", "unpack", "unshift", "unsigned", "until", "untrue", "up", "update", "upgrade", "upload", "uppercase", "usability", "usable", "usage", "use", "usecase", "user", "using", "util", "utility", "validate", "validation", "value", "var", "variable", "vector", "verify", "version", "vertex", "vertical", "video", "view", "virtual", "visible", "visit", "visitor", "visual", "visualization", "void", "volatile", "volume", "web", "website", "well-defined", "wheel", "when", "while", "wide", "width", "window", "with", "worker", "world", "worse", "wrap", "wrapper", "write", "writeln", "xml", "xor", "yes", "yield", "zero"];

/***************************************************************************
 ***************************************************************************/

Math.randInt = function (min, max) {
    return min + Math.floor(Math.random() * (max - min));
};

Array.prototype.random = function () {
    var index = Math.randInt(0, this.length);

    return this[index];
};

/***************************************************************************
 ***************************************************************************/

var Timer = function (duration) {
    this.duration_  = duration;
    this.startTime_ = null;
    this.pauseTime_ = null;
    this.state_     = "init";
};

Timer.prototype.start = function () {
    switch (this.state_) {
    case "init":
        this.startTime_ = $.now();
        break;
    case "paused":
        this.startTime_ += ($.now() - this.pauseTime_);
        this.pauseTime_ = null;
        break;
    }

    this.state_ = "active";
};

Timer.prototype.pause = function () {
    if (this.state_ === "paused") {
        return;
    }

    this.pauseTime_ = $.now();

    this.state_ = "paused";
};

Timer.prototype.progress = function () {
    switch (this.state_) {
    case "init":
        return 0;
    case "active":
        return ($.now() - this.startTime_) / this.duration_;
    case "paused":
        return (this.pauseTime_ - this.startTime_) / this.duration_;
    }
};

Timer.prototype.finished = function () {
    return this.progress() >= 1;
};

/***************************************************************************
 ***************************************************************************/

var Task = function (node, checkAnswer, duration, boardNode, onFinish) {
    this.node_        = node;
    this.checkAnswer_ = checkAnswer;
    this.boardNode_   = boardNode;
    this.onFinish_    = onFinish;

    this.position_    = Math.random();
    this.timer_       = new Timer(duration);

    this.state_       = "init";
};

Task.prototype.start = function () {
    if (this.state_ === "init") {
        this.node_
            .hide()
            .appendTo(this.boardNode_);
        
        this.update();

        this.node_.show();
    }

    if (this.state_ !== "finished") {
        this.state_ = "active";
        
        this.timer_.start();
    }
};

Task.prototype.pause = function () {
    if (this.state_ !== "finished") {
        this.state_ = "paused";
        
        this.timer_.pause();
    }
};

Task.prototype.update = function () {
    if (this.timer_.finished()) {
        this.finish_(false);
    } else {
        this.updateNode_();
    }
};

Task.prototype.updateNode_ = function () {
    var wScale = this.boardNode_.width()  - this.node_.outerWidth();
    var hScale = this.boardNode_.height()

    this.node_.css({
        left: this.position_   * wScale, 
        top:  this.progress_() * hScale - this.node_.outerHeight()
    });
};

Task.prototype.progress_ = function () {
    return Math.min(1, this.timer_.progress());
}

Task.prototype.finish_ = function (success) {
    if (this.state_ !== "finished") {
        this.state_ = "finished";

        this.onFinish_(this, success);

        this.puff_(success ? "green" : "red");
    }
};

Task.prototype.tryAnswer = function (answer) {
    if (this.state_ === "active" && this.checkAnswer_(answer)) {
        this.finish_(true);
        
        return true;
    }

    return false;
};

Task.prototype.puff_ = function (color) {
    this.node_
        .effect("puff")
        .animate({
            backgroundColor: color
        }, {
            queue: false, 
            complete: this.remove.bind(this)
        });
};

Task.prototype.remove = function () {
    this.node_.remove();
};

Task.prototype.getNode = function () {
    return this.node_;
};

/***************************************************************************
 ***************************************************************************/

var WordTaskFactory = function (dictionary) {
    this.dictionary_ = dictionary;
};

WordTaskFactory.prototype.createTask = function (boardNode, onFinish, points) {
    var string = this.string_(this.numOfWords_(points));

    return new Task(this.node_(string),
                    this.checkAnswer_(string),
                    this.duration_(string, points),
                    boardNode,
                    onFinish);
};

WordTaskFactory.prototype.numOfWords_ = function (points) {
    return Math.floor(1 + Math.random() * Math.sqrt(points) / 4);
};

WordTaskFactory.prototype.string_ = function (numOfWords) {
    var words = [];

    for (var i = 0; i < numOfWords; i++) {
        words.push(this.dictionary_.random());
    }

    return words.join(" ");
};

WordTaskFactory.prototype.node_ = function (string) {
    return $("<div>").html(string).addClass("task");
}

WordTaskFactory.prototype.checkAnswer_ = function (string) {
    return function (answer) {
        return answer === string;
    };
};

WordTaskFactory.prototype.duration_ = function (string, points) {
    return (2000 + string.length * 700) / Math.max(1, Math.log(Math.log(points)) || 1);
};

/***************************************************************************
 ***************************************************************************/

var InputBar = function (node, onAnswer, onPause) {
    this.inputNode_   = node.find("input");
    this.pointsNode_  = node.find(".sidebar .points");
    this.livesNode_   = node.find(".sidebar .lives");
    this.pauseButton_ = node.find("button.pause");
    
    this.pauseButton_.click(onPause);

    this.inputNode_
        .keydown(function (event) {
            if (event.keyCode === 13) {
                onAnswer.call(null, $(this).val());
                
                $(this).val("");
            }
        })
        .blur(function () {
            $(this).focus();
        })
        .focus();
};

// to be refactored
InputBar.prototype.setup_ = function (onAnswer) {
};

InputBar.prototype.setPoints = function (points) {
    this.pointsNode_
        .animate({progress: 1}, {duration: 0})
        .animate({progress: 0}, {
            step: (function (progress) {
                this.pointsNode_.css({
                    backgroundColor: "rgba(0,255,0," + progress + ")"
                });
            }).bind(this)});

    this.pointsNode_.find(".value").html(points);
};

InputBar.prototype.setLives = function (lives) {
    this.livesNode_
        .animate({progress: 1}, {duration: 0})
        .animate({progress: 0}, {
            step: (function (progress) {
                this.livesNode_.css({
                    backgroundColor: "rgba(255,0,0," + progress + ")"
                });
            }).bind(this)});

    this.livesNode_.find(".value").html(lives);
};

InputBar.prototype.highlight = function (color) {
    this.inputNode_
        .stop()
        .css({backgroundColor: color})
        .animate({backgroundColor: "white"}, 
                 {duration: 1000});
};

InputBar.prototype.start = function () {
    this.inputNode_.removeAttr('disabled');
    this.pauseButton_.removeAttr('disabled');
    
    this.inputNode_.focus();
};

InputBar.prototype.pause = function () {
    this.inputNode_.attr({disabled: "disabled"});
    this.pauseButton_.attr({disabled: "disabled"});
};

InputBar.prototype.reset = function () {
    this.inputNode_.val("");
};

/***************************************************************************
 ***************************************************************************/

// to be refactored (add state)

var TickGenerator = function (delay, onTick) {
    this.lastTime_  = null;
    this.pauseTime_ = null;
    this.timer_     = null;

    this.delay_    = delay;
    this.onTick_ = onTick;
};

TickGenerator.prototype.start = function () {
    if (this.timer_ === null) {
        var now = $.now();
        
        if (this.lastTime_ === null) {
            this.onTick_();
            this.lastTime_ = now;
        } else if (this.puaseTime_ !== null) {
            this.lastTime_ += (now - this.pauseTime_);
            this.pauseTime_ = null;
        }
        
        this.update_();
    }
};

TickGenerator.prototype.update_ = function () {
    var now = $.now();

    if (now - this.lastTime_ >= this.delay_) {
        this.onTick_();
        this.lastTime_ += this.delay_;
    }

    this.timer_ = setTimeout(this.update_.bind(this), 
                             this.lastTime_ + this.delay - now);
};

TickGenerator.prototype.pause = function () {
    if (this.timer !== null) {
        clearTimeout(this.timer_);

        this.timer_     = null;
        this.pauseTime_ = $.now();
    }
};

/* */

var Ticker = function (onTick) {
    this.onTick_ = onTick;
    this.timer_  = null;
};

Ticker.prototype.pause = function () {
    clearTimeout(this.timer_);
    this.timer_ = null;
};

Ticker.prototype.start = function () {
    this.update_();
};

Ticker.prototype.update_ = function () {
    this.onTick_();

    this.timer_ = setTimeout(this.update_.bind(this), 0);
};

/***************************************************************************
 ***************************************************************************/

// to be refactored
var Game = function (body, dictionary) {
    this.boardNode_ = body.find(".board");
    this.inputBar_ = new InputBar(body.find(".input-bar"), 
                                  this.tryAnswer.bind(this),
                                  this.pauseGame_.bind(this));
    this.tickGenerator_ = new TickGenerator(2500, this.addTask.bind(this));
    this.taskFactory_ = new WordTaskFactory(dictionary);
    this.ticker_ = new Ticker(this.update_.bind(this));

    // menu setup
    this.grayLayer_ = body.find(".gray-layer");
    this.initMenu_      = body.find(".init-menu");
    this.pauseMenu_     = body.find(".pause-menu");
    this.endingMenu_    = body.find(".ending-menu");
    this.initMenu_.find("button").click(this.startGame_.bind(this));
    this.pauseMenu_.find("button").click(this.resumeGame_.bind(this));
    this.endingMenu_.find("button").click(this.startGame_.bind(this));

    this.tasks_  = [];
    this.points_ = null;
    this.lives_  = null;
    this.state_  = "paused";
};

Game.prototype.start = function () {
    if (this.state_ === "paused") {
        this.state_ = "active";

        this.inputBar_.start();
        this.tickGenerator_.start();
        this.ticker_.start();
        
        this.tasks_.forEach(function (task) {
            task.start();
        });
    }
};

Game.prototype.pause = function () {
    if (this.state_ === "active") {
        this.state_ = "paused";

        this.inputBar_.pause();
        this.tickGenerator_.pause();
        this.ticker_.pause();

        this.tasks_.forEach(function (task) {
            task.pause();
        });    
    }
};

Game.prototype.startGame_ = function () {
    // hide menus
    this.grayLayer_.hide();
    this.initMenu_.hide();
    this.endingMenu_.hide();

    // remove old tasks
    this.tasks_.forEach(function (task) {
        task.remove();
    });
    this.tasks_  = [];

    // setup points & lives
    this.points_ = 0;
    this.lives_  = 10;
    this.inputBar_.setPoints(this.points_);
    this.inputBar_.setLives(this.lives_);
    this.inputBar_.reset();

    //start
    this.countdownStart();
};

Game.prototype.resumeGame_ = function () {
    // hide menu
    this.grayLayer_.hide();
    this.pauseMenu_.hide();
    
    //start
    this.countdownStart();    
};

Game.prototype.pauseGame_ = function () {
    //show menu
    this.grayLayer_.show();
    this.pauseMenu_.show();

    //pause
    this.pause();
};

Game.prototype.endGame_ = function () {
    //show menu
    this.grayLayer_.show();
    this.endingMenu_.show();

    //show score
    this.endingMenu_.find(".score").html(this.points_);

    //pause
    this.pause();
};

Game.prototype.countdownStart = function () {
    var countdown = $(".countdown");
    var value = countdown.find(".value");
    var startGame = this.start.bind(this);

    var startCountdown = function (seconds) {
        if (seconds > 0) {
            value.show().html(seconds).effect("puff", {
                duration: 1000,
                complete: startCountdown.bind(null, seconds - 1)
            });
        } else {
            countdown.hide();
            startGame.call();
        }
    };

    countdown.show();
    startCountdown(3);
};

Game.prototype.addTask = function () {
    var task = this.taskFactory_.createTask(this.boardNode_, 
                                            this.onTaskFinish_.bind(this),
                                            this.points_);

    if (this.state_ === "active") {
        task.start();
    }

    this.tasks_.push(task);
};

Game.prototype.onTaskFinish_ = function (finishedTask, isSuccessful) {
    if (isSuccessful) {
        this.addPoint();
    } else {
        this.removeLife();
    }

    this.tasks_ = this.tasks_.filter(function (task) {
        return task !== finishedTask;
    });
};

Game.prototype.removeLife = function () {
    this.lives_ -= 1;

    this.inputBar_.setLives(this.lives_);

    if (this.lives_ <= 0) {
        this.endGame_();
    }
};

Game.prototype.addPoint = function () {
    this.points_ += 1;

    this.inputBar_.setPoints(this.points_);    
};

Game.prototype.tryAnswer = function (answer) {
    var correct = false;

    this.tasks_.forEach(function (task) {
        correct = correct || task.tryAnswer(answer);
    });

    this.inputBar_.highlight(correct ? "#CFC" : "#FCC");
};

Game.prototype.update_ = function () {
    this.tasks_.forEach(function (task) {
        task.update();
    });    
};

/***************************************************************************
 ***************************************************************************/

var game;

$(document).ready(function () {
    game = new Game($("body"), dictionary);
});