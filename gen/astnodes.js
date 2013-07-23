/* File automatically generated by asdl_js.py. */

/* ----- expr_context ----- */
/** @constructor */
function Load() {}
/** @constructor */
function Store() {}
/** @constructor */
function Del() {}
/** @constructor */
function AugLoad() {}
/** @constructor */
function AugStore() {}
/** @constructor */
function Param() {}

/* ----- boolop ----- */
/** @constructor */
function And() {}
/** @constructor */
function Or() {}

/* ----- operator ----- */
/** @constructor */
function Add() {}
/** @constructor */
function Sub() {}
/** @constructor */
function Mult() {}
/** @constructor */
function Div() {}
/** @constructor */
function Mod() {}
/** @constructor */
function Pow() {}
/** @constructor */
function LShift() {}
/** @constructor */
function RShift() {}
/** @constructor */
function BitOr() {}
/** @constructor */
function BitXor() {}
/** @constructor */
function BitAnd() {}
/** @constructor */
function FloorDiv() {}

/* ----- unaryop ----- */
/** @constructor */
function Invert() {}
/** @constructor */
function Not() {}
/** @constructor */
function UAdd() {}
/** @constructor */
function USub() {}

/* ----- cmpop ----- */
/** @constructor */
function Eq() {}
/** @constructor */
function NotEq() {}
/** @constructor */
function Lt() {}
/** @constructor */
function LtE() {}
/** @constructor */
function Gt() {}
/** @constructor */
function GtE() {}
/** @constructor */
function Is() {}
/** @constructor */
function IsNot() {}
/** @constructor */
function In_() {}
/** @constructor */
function NotIn() {}







/* ---------------------- */
/* constructors for nodes */
/* ---------------------- */





/** @constructor */
function Module(/* {asdl_seq *} */ body)
{
    this.body = body;
    return this;
}

/** @constructor */
function Interactive(/* {asdl_seq *} */ body)
{
    this.body = body;
    return this;
}

/** @constructor */
function Expression(/* {expr_ty} */ body)
{
    goog.asserts.assert(body !== null && body !== undefined);
    this.body = body;
    return this;
}

/** @constructor */
function Suite(/* {asdl_seq *} */ body)
{
    this.body = body;
    return this;
}

/** @constructor */
function FunctionDef(/* {identifier} */ name, /* {arguments__ty} */ args, /*
                          {asdl_seq *} */ body, /* {asdl_seq *} */
                          decorator_list, /* {int} */ lineno, /* {int} */
                          col_offset)
{
    goog.asserts.assert(name !== null && name !== undefined);
    goog.asserts.assert(args !== null && args !== undefined);
    this.name = name;
    this.args = args;
    this.body = body;
    this.decorator_list = decorator_list;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function ClassDef(/* {identifier} */ name, /* {asdl_seq *} */ bases, /*
                       {asdl_seq *} */ body, /* {asdl_seq *} */ decorator_list,
                       /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(name !== null && name !== undefined);
    this.name = name;
    this.bases = bases;
    this.body = body;
    this.decorator_list = decorator_list;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Return_(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */
                      col_offset)
{
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Delete_(/* {asdl_seq *} */ targets, /* {int} */ lineno, /* {int} */
                      col_offset)
{
    this.targets = targets;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Assign(/* {asdl_seq *} */ targets, /* {expr_ty} */ value, /* {int} */
                     lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(value !== null && value !== undefined);
    this.targets = targets;
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function AugAssign(/* {expr_ty} */ target, /* {operator_ty} */ op, /* {expr_ty}
                        */ value, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(target !== null && target !== undefined);
    goog.asserts.assert(op !== null && op !== undefined);
    goog.asserts.assert(value !== null && value !== undefined);
    this.target = target;
    this.op = op;
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Print(/* {expr_ty} */ dest, /* {asdl_seq *} */ values, /* {bool} */
                    nl, /* {int} */ lineno, /* {int} */ col_offset)
{
    this.dest = dest;
    this.values = values;
    this.nl = nl;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function For_(/* {expr_ty} */ target, /* {expr_ty} */ iter, /* {asdl_seq *} */
                   body, /* {asdl_seq *} */ orelse, /* {int} */ lineno, /*
                   {int} */ col_offset)
{
    goog.asserts.assert(target !== null && target !== undefined);
    goog.asserts.assert(iter !== null && iter !== undefined);
    this.target = target;
    this.iter = iter;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function While_(/* {expr_ty} */ test, /* {asdl_seq *} */ body, /* {asdl_seq *}
                     */ orelse, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(test !== null && test !== undefined);
    this.test = test;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function If_(/* {expr_ty} */ test, /* {asdl_seq *} */ body, /* {asdl_seq *} */
                  orelse, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(test !== null && test !== undefined);
    this.test = test;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function With_(/* {expr_ty} */ context_expr, /* {expr_ty} */ optional_vars, /*
                    {asdl_seq *} */ body, /* {int} */ lineno, /* {int} */
                    col_offset)
{
    goog.asserts.assert(context_expr !== null && context_expr !== undefined);
    this.context_expr = context_expr;
    this.optional_vars = optional_vars;
    this.body = body;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Raise(/* {expr_ty} */ type, /* {expr_ty} */ inst, /* {expr_ty} */
                    tback, /* {int} */ lineno, /* {int} */ col_offset)
{
    this.type = type;
    this.inst = inst;
    this.tback = tback;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function TryExcept(/* {asdl_seq *} */ body, /* {asdl_seq *} */ handlers, /*
                        {asdl_seq *} */ orelse, /* {int} */ lineno, /* {int} */
                        col_offset)
{
    this.body = body;
    this.handlers = handlers;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function TryFinally(/* {asdl_seq *} */ body, /* {asdl_seq *} */ finalbody, /*
                         {int} */ lineno, /* {int} */ col_offset)
{
    this.body = body;
    this.finalbody = finalbody;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Assert(/* {expr_ty} */ test, /* {expr_ty} */ msg, /* {int} */ lineno,
                     /* {int} */ col_offset)
{
    goog.asserts.assert(test !== null && test !== undefined);
    this.test = test;
    this.msg = msg;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Import_(/* {asdl_seq *} */ names, /* {int} */ lineno, /* {int} */
                      col_offset)
{
    this.names = names;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function ImportFrom(/* {identifier} */ module, /* {asdl_seq *} */ names, /*
                         {int} */ level, /* {int} */ lineno, /* {int} */
                         col_offset)
{
    goog.asserts.assert(module !== null && module !== undefined);
    this.module = module;
    this.names = names;
    this.level = level;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Exec(/* {expr_ty} */ body, /* {expr_ty} */ globals, /* {expr_ty} */
                   locals, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(body !== null && body !== undefined);
    this.body = body;
    this.globals = globals;
    this.locals = locals;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Global(/* {asdl_seq *} */ names, /* {int} */ lineno, /* {int} */
                     col_offset)
{
    this.names = names;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Expr(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(value !== null && value !== undefined);
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Pass(/* {int} */ lineno, /* {int} */ col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Break_(/* {int} */ lineno, /* {int} */ col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Continue_(/* {int} */ lineno, /* {int} */ col_offset)
{
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function BoolOp(/* {boolop_ty} */ op, /* {asdl_seq *} */ values, /* {int} */
                     lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(op !== null && op !== undefined);
    this.op = op;
    this.values = values;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function BinOp(/* {expr_ty} */ left, /* {operator_ty} */ op, /* {expr_ty} */
                    right, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(left !== null && left !== undefined);
    goog.asserts.assert(op !== null && op !== undefined);
    goog.asserts.assert(right !== null && right !== undefined);
    this.left = left;
    this.op = op;
    this.right = right;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function UnaryOp(/* {unaryop_ty} */ op, /* {expr_ty} */ operand, /* {int} */
                      lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(op !== null && op !== undefined);
    goog.asserts.assert(operand !== null && operand !== undefined);
    this.op = op;
    this.operand = operand;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Lambda(/* {arguments__ty} */ args, /* {expr_ty} */ body, /* {int} */
                     lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(args !== null && args !== undefined);
    goog.asserts.assert(body !== null && body !== undefined);
    this.args = args;
    this.body = body;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function IfExp(/* {expr_ty} */ test, /* {expr_ty} */ body, /* {expr_ty} */
                    orelse, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(test !== null && test !== undefined);
    goog.asserts.assert(body !== null && body !== undefined);
    goog.asserts.assert(orelse !== null && orelse !== undefined);
    this.test = test;
    this.body = body;
    this.orelse = orelse;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Dict(/* {asdl_seq *} */ keys, /* {asdl_seq *} */ values, /* {int} */
                   lineno, /* {int} */ col_offset)
{
    this.keys = keys;
    this.values = values;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function ListComp(/* {expr_ty} */ elt, /* {asdl_seq *} */ generators, /* {int}
                       */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(elt !== null && elt !== undefined);
    this.elt = elt;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function GeneratorExp(/* {expr_ty} */ elt, /* {asdl_seq *} */ generators, /*
                           {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(elt !== null && elt !== undefined);
    this.elt = elt;
    this.generators = generators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Yield(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */
                    col_offset)
{
    this.value = value;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Compare(/* {expr_ty} */ left, /* {asdl_int_seq *} */ ops, /* {asdl_seq
                      *} */ comparators, /* {int} */ lineno, /* {int} */
                      col_offset)
{
    goog.asserts.assert(left !== null && left !== undefined);
    this.left = left;
    this.ops = ops;
    this.comparators = comparators;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Call(/* {expr_ty} */ func, /* {asdl_seq *} */ args, /* {asdl_seq *} */
                   keywords, /* {expr_ty} */ starargs, /* {expr_ty} */ kwargs,
                   /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(func !== null && func !== undefined);
    this.func = func;
    this.args = args;
    this.keywords = keywords;
    this.starargs = starargs;
    this.kwargs = kwargs;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Num(/* {object} */ n, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(n !== null && n !== undefined);
    this.n = n;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Str(/* {string} */ s, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(s !== null && s !== undefined);
    this.s = s;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Attribute(/* {expr_ty} */ value, /* {identifier} */ attr, /*
                        {expr_context_ty} */ ctx, /* {int} */ lineno, /* {int}
                        */ col_offset)
{
    goog.asserts.assert(value !== null && value !== undefined);
    goog.asserts.assert(attr !== null && attr !== undefined);
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.value = value;
    this.attr = attr;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Subscript(/* {expr_ty} */ value, /* {slice_ty} */ slice, /*
                        {expr_context_ty} */ ctx, /* {int} */ lineno, /* {int}
                        */ col_offset)
{
    goog.asserts.assert(value !== null && value !== undefined);
    goog.asserts.assert(slice !== null && slice !== undefined);
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.value = value;
    this.slice = slice;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Name(/* {identifier} */ id, /* {expr_context_ty} */ ctx, /* {int} */
                   lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(id !== null && id !== undefined);
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.id = id;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function List(/* {asdl_seq *} */ elts, /* {expr_context_ty} */ ctx, /* {int} */
                   lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.elts = elts;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Tuple(/* {asdl_seq *} */ elts, /* {expr_context_ty} */ ctx, /* {int}
                    */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(ctx !== null && ctx !== undefined);
    this.elts = elts;
    this.ctx = ctx;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function Ellipsis()
{
    return this;
}

/** @constructor */
function Slice(/* {expr_ty} */ lower, /* {expr_ty} */ upper, /* {expr_ty} */
                    step)
{
    this.lower = lower;
    this.upper = upper;
    this.step = step;
    return this;
}

/** @constructor */
function ExtSlice(/* {asdl_seq *} */ dims)
{
    this.dims = dims;
    return this;
}

/** @constructor */
function Index(/* {expr_ty} */ value)
{
    goog.asserts.assert(value !== null && value !== undefined);
    this.value = value;
    return this;
}

/** @constructor */
function comprehension(/* {expr_ty} */ target, /* {expr_ty} */ iter, /*
                            {asdl_seq *} */ ifs)
{
    goog.asserts.assert(target !== null && target !== undefined);
    goog.asserts.assert(iter !== null && iter !== undefined);
    this.target = target;
    this.iter = iter;
    this.ifs = ifs;
    return this;
}

/** @constructor */
function ExceptHandler(/* {expr_ty} */ type, /* {expr_ty} */ name, /* {asdl_seq
                            *} */ body, /* {int} */ lineno, /* {int} */
                            col_offset)
{
    this.type = type;
    this.name = name;
    this.body = body;
    this.lineno = lineno;
    this.col_offset = col_offset;
    return this;
}

/** @constructor */
function arguments_(/* {asdl_seq *} */ args, /* {identifier} */ vararg, /*
                         {identifier} */ kwarg, /* {asdl_seq *} */ defaults)
{
    this.args = args;
    this.vararg = vararg;
    this.kwarg = kwarg;
    this.defaults = defaults;
    return this;
}

/** @constructor */
function keyword(/* {identifier} */ arg, /* {expr_ty} */ value)
{
    goog.asserts.assert(arg !== null && arg !== undefined);
    goog.asserts.assert(value !== null && value !== undefined);
    this.arg = arg;
    this.value = value;
    return this;
}

/** @constructor */
function alias(/* {identifier} */ name, /* {identifier} */ asname)
{
    goog.asserts.assert(name !== null && name !== undefined);
    this.name = name;
    this.asname = asname;
    return this;
}


Module.prototype._astname = "Module";
Module.prototype._fields = [
    "body", function(n) { return n.body; }
];
Interactive.prototype._astname = "Interactive";
Interactive.prototype._fields = [
    "body", function(n) { return n.body; }
];
Expression.prototype._astname = "Expression";
Expression.prototype._fields = [
    "body", function(n) { return n.body; }
];
Suite.prototype._astname = "Suite";
Suite.prototype._fields = [
    "body", function(n) { return n.body; }
];
FunctionDef.prototype._astname = "FunctionDef";
FunctionDef.prototype._fields = [
    "name", function(n) { return n.name; },
    "args", function(n) { return n.args; },
    "body", function(n) { return n.body; },
    "decorator_list", function(n) { return n.decorator_list; }
];
ClassDef.prototype._astname = "ClassDef";
ClassDef.prototype._fields = [
    "name", function(n) { return n.name; },
    "bases", function(n) { return n.bases; },
    "body", function(n) { return n.body; },
    "decorator_list", function(n) { return n.decorator_list; }
];
Return_.prototype._astname = "Return";
Return_.prototype._fields = [
    "value", function(n) { return n.value; }
];
Delete_.prototype._astname = "Delete";
Delete_.prototype._fields = [
    "targets", function(n) { return n.targets; }
];
Assign.prototype._astname = "Assign";
Assign.prototype._fields = [
    "targets", function(n) { return n.targets; },
    "value", function(n) { return n.value; }
];
AugAssign.prototype._astname = "AugAssign";
AugAssign.prototype._fields = [
    "target", function(n) { return n.target; },
    "op", function(n) { return n.op; },
    "value", function(n) { return n.value; }
];
Print.prototype._astname = "Print";
Print.prototype._fields = [
    "dest", function(n) { return n.dest; },
    "values", function(n) { return n.values; },
    "nl", function(n) { return n.nl; }
];
For_.prototype._astname = "For";
For_.prototype._fields = [
    "target", function(n) { return n.target; },
    "iter", function(n) { return n.iter; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
While_.prototype._astname = "While";
While_.prototype._fields = [
    "test", function(n) { return n.test; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
If_.prototype._astname = "If";
If_.prototype._fields = [
    "test", function(n) { return n.test; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
With_.prototype._astname = "With";
With_.prototype._fields = [
    "context_expr", function(n) { return n.context_expr; },
    "optional_vars", function(n) { return n.optional_vars; },
    "body", function(n) { return n.body; }
];
Raise.prototype._astname = "Raise";
Raise.prototype._fields = [
    "type", function(n) { return n.type; },
    "inst", function(n) { return n.inst; },
    "tback", function(n) { return n.tback; }
];
TryExcept.prototype._astname = "TryExcept";
TryExcept.prototype._fields = [
    "body", function(n) { return n.body; },
    "handlers", function(n) { return n.handlers; },
    "orelse", function(n) { return n.orelse; }
];
TryFinally.prototype._astname = "TryFinally";
TryFinally.prototype._fields = [
    "body", function(n) { return n.body; },
    "finalbody", function(n) { return n.finalbody; }
];
Assert.prototype._astname = "Assert";
Assert.prototype._fields = [
    "test", function(n) { return n.test; },
    "msg", function(n) { return n.msg; }
];
Import_.prototype._astname = "Import";
Import_.prototype._fields = [
    "names", function(n) { return n.names; }
];
ImportFrom.prototype._astname = "ImportFrom";
ImportFrom.prototype._fields = [
    "module", function(n) { return n.module; },
    "names", function(n) { return n.names; },
    "level", function(n) { return n.level; }
];
Exec.prototype._astname = "Exec";
Exec.prototype._fields = [
    "body", function(n) { return n.body; },
    "globals", function(n) { return n.globals; },
    "locals", function(n) { return n.locals; }
];
Global.prototype._astname = "Global";
Global.prototype._fields = [
    "names", function(n) { return n.names; }
];
Expr.prototype._astname = "Expr";
Expr.prototype._fields = [
    "value", function(n) { return n.value; }
];
Pass.prototype._astname = "Pass";
Pass.prototype._fields = [
];
Break_.prototype._astname = "Break";
Break_.prototype._fields = [
];
Continue_.prototype._astname = "Continue";
Continue_.prototype._fields = [
];
BoolOp.prototype._astname = "BoolOp";
BoolOp.prototype._fields = [
    "op", function(n) { return n.op; },
    "values", function(n) { return n.values; }
];
BinOp.prototype._astname = "BinOp";
BinOp.prototype._fields = [
    "left", function(n) { return n.left; },
    "op", function(n) { return n.op; },
    "right", function(n) { return n.right; }
];
UnaryOp.prototype._astname = "UnaryOp";
UnaryOp.prototype._fields = [
    "op", function(n) { return n.op; },
    "operand", function(n) { return n.operand; }
];
Lambda.prototype._astname = "Lambda";
Lambda.prototype._fields = [
    "args", function(n) { return n.args; },
    "body", function(n) { return n.body; }
];
IfExp.prototype._astname = "IfExp";
IfExp.prototype._fields = [
    "test", function(n) { return n.test; },
    "body", function(n) { return n.body; },
    "orelse", function(n) { return n.orelse; }
];
Dict.prototype._astname = "Dict";
Dict.prototype._fields = [
    "keys", function(n) { return n.keys; },
    "values", function(n) { return n.values; }
];
ListComp.prototype._astname = "ListComp";
ListComp.prototype._fields = [
    "elt", function(n) { return n.elt; },
    "generators", function(n) { return n.generators; }
];
GeneratorExp.prototype._astname = "GeneratorExp";
GeneratorExp.prototype._fields = [
    "elt", function(n) { return n.elt; },
    "generators", function(n) { return n.generators; }
];
Yield.prototype._astname = "Yield";
Yield.prototype._fields = [
    "value", function(n) { return n.value; }
];
Compare.prototype._astname = "Compare";
Compare.prototype._fields = [
    "left", function(n) { return n.left; },
    "ops", function(n) { return n.ops; },
    "comparators", function(n) { return n.comparators; }
];
Call.prototype._astname = "Call";
Call.prototype._fields = [
    "func", function(n) { return n.func; },
    "args", function(n) { return n.args; },
    "keywords", function(n) { return n.keywords; },
    "starargs", function(n) { return n.starargs; },
    "kwargs", function(n) { return n.kwargs; }
];
Num.prototype._astname = "Num";
Num.prototype._fields = [
    "n", function(n) { return n.n; }
];
Str.prototype._astname = "Str";
Str.prototype._fields = [
    "s", function(n) { return n.s; }
];
Attribute.prototype._astname = "Attribute";
Attribute.prototype._fields = [
    "value", function(n) { return n.value; },
    "attr", function(n) { return n.attr; },
    "ctx", function(n) { return n.ctx; }
];
Subscript.prototype._astname = "Subscript";
Subscript.prototype._fields = [
    "value", function(n) { return n.value; },
    "slice", function(n) { return n.slice; },
    "ctx", function(n) { return n.ctx; }
];
Name.prototype._astname = "Name";
Name.prototype._fields = [
    "id", function(n) { return n.id; },
    "ctx", function(n) { return n.ctx; }
];
List.prototype._astname = "List";
List.prototype._fields = [
    "elts", function(n) { return n.elts; },
    "ctx", function(n) { return n.ctx; }
];
Tuple.prototype._astname = "Tuple";
Tuple.prototype._fields = [
    "elts", function(n) { return n.elts; },
    "ctx", function(n) { return n.ctx; }
];
Load.prototype._astname = "Load";
Load.prototype._isenum = true;
Store.prototype._astname = "Store";
Store.prototype._isenum = true;
Del.prototype._astname = "Del";
Del.prototype._isenum = true;
AugLoad.prototype._astname = "AugLoad";
AugLoad.prototype._isenum = true;
AugStore.prototype._astname = "AugStore";
AugStore.prototype._isenum = true;
Param.prototype._astname = "Param";
Param.prototype._isenum = true;
Ellipsis.prototype._astname = "Ellipsis";
Ellipsis.prototype._fields = [
];
Slice.prototype._astname = "Slice";
Slice.prototype._fields = [
    "lower", function(n) { return n.lower; },
    "upper", function(n) { return n.upper; },
    "step", function(n) { return n.step; }
];
ExtSlice.prototype._astname = "ExtSlice";
ExtSlice.prototype._fields = [
    "dims", function(n) { return n.dims; }
];
Index.prototype._astname = "Index";
Index.prototype._fields = [
    "value", function(n) { return n.value; }
];
And.prototype._astname = "And";
And.prototype._isenum = true;
Or.prototype._astname = "Or";
Or.prototype._isenum = true;
Add.prototype._astname = "Add";
Add.prototype._isenum = true;
Sub.prototype._astname = "Sub";
Sub.prototype._isenum = true;
Mult.prototype._astname = "Mult";
Mult.prototype._isenum = true;
Div.prototype._astname = "Div";
Div.prototype._isenum = true;
Mod.prototype._astname = "Mod";
Mod.prototype._isenum = true;
Pow.prototype._astname = "Pow";
Pow.prototype._isenum = true;
LShift.prototype._astname = "LShift";
LShift.prototype._isenum = true;
RShift.prototype._astname = "RShift";
RShift.prototype._isenum = true;
BitOr.prototype._astname = "BitOr";
BitOr.prototype._isenum = true;
BitXor.prototype._astname = "BitXor";
BitXor.prototype._isenum = true;
BitAnd.prototype._astname = "BitAnd";
BitAnd.prototype._isenum = true;
FloorDiv.prototype._astname = "FloorDiv";
FloorDiv.prototype._isenum = true;
Invert.prototype._astname = "Invert";
Invert.prototype._isenum = true;
Not.prototype._astname = "Not";
Not.prototype._isenum = true;
UAdd.prototype._astname = "UAdd";
UAdd.prototype._isenum = true;
USub.prototype._astname = "USub";
USub.prototype._isenum = true;
Eq.prototype._astname = "Eq";
Eq.prototype._isenum = true;
NotEq.prototype._astname = "NotEq";
NotEq.prototype._isenum = true;
Lt.prototype._astname = "Lt";
Lt.prototype._isenum = true;
LtE.prototype._astname = "LtE";
LtE.prototype._isenum = true;
Gt.prototype._astname = "Gt";
Gt.prototype._isenum = true;
GtE.prototype._astname = "GtE";
GtE.prototype._isenum = true;
Is.prototype._astname = "Is";
Is.prototype._isenum = true;
IsNot.prototype._astname = "IsNot";
IsNot.prototype._isenum = true;
In_.prototype._astname = "In";
In_.prototype._isenum = true;
NotIn.prototype._astname = "NotIn";
NotIn.prototype._isenum = true;
comprehension.prototype._astname = "comprehension";
comprehension.prototype._fields = [
    "target", function(n) { return n.target; },
    "iter", function(n) { return n.iter; },
    "ifs", function(n) { return n.ifs; }
];
ExceptHandler.prototype._astname = "ExceptHandler";
ExceptHandler.prototype._fields = [
    "type", function(n) { return n.type; },
    "name", function(n) { return n.name; },
    "body", function(n) { return n.body; }
];
arguments_.prototype._astname = "arguments";
arguments_.prototype._fields = [
    "args", function(n) { return n.args; },
    "vararg", function(n) { return n.vararg; },
    "kwarg", function(n) { return n.kwarg; },
    "defaults", function(n) { return n.defaults; }
];
keyword.prototype._astname = "keyword";
keyword.prototype._fields = [
    "arg", function(n) { return n.arg; },
    "value", function(n) { return n.value; }
];
alias.prototype._astname = "alias";
alias.prototype._fields = [
    "name", function(n) { return n.name; },
    "asname", function(n) { return n.asname; }
];

