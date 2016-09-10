// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2014 Google Inc.  Apache License 2.0
Blockly.Pawn=new Blockly.Generator("Pawn");Blockly.Pawn.addReservedWords("assert,defined,#assert,const,break,sizeof,#define,forward,case,state,#else,native,continue,tagof,#elseif,new,default,#endif,operator,do,#endinput,public,else,#error,static,exit,#file,stock,for,#if,goto,#include,if,#line,return,#pragma,sleep,#section,state,#tryinclude,switch,#undef,while,print,identityHashCode,identical,BidirectionalIterator,Comparable,double,Function,int,Invocation,Iterable,Iterator,List,Map,Match,num,Pattern,RegExp,Set,StackTrace,String,StringSink,Type,bool,DateTime,Deprecated,Duration,Expando,Null,Object,RuneIterator,Runes,Stopwatch,StringBuffer,Symbol,Uri,Comparator,AbstractClassInstantiationError,ArgumentError,AssertionError,CastError,ConcurrentModificationError,CyclicInitializationError,Error,Exception,FallThroughError,FormatException,IntegerDivisionByZeroException,NoSuchMethodError,NullThrownError,OutOfMemoryError,RangeError,StackOverflowError,StateError,TypeError,UnimplementedError,UnsupportedError");
Blockly.Pawn.ORDER_ATOMIC=0;Blockly.Pawn.ORDER_UNARY_POSTFIX=1;Blockly.Pawn.ORDER_UNARY_PREFIX=2;Blockly.Pawn.ORDER_MULTIPLICATIVE=3;Blockly.Pawn.ORDER_ADDITIVE=4;Blockly.Pawn.ORDER_SHIFT=5;Blockly.Pawn.ORDER_BITWISE_AND=6;Blockly.Pawn.ORDER_BITWISE_XOR=7;Blockly.Pawn.ORDER_BITWISE_OR=8;Blockly.Pawn.ORDER_RELATIONAL=9;Blockly.Pawn.ORDER_EQUALITY=10;Blockly.Pawn.ORDER_LOGICAL_AND=11;Blockly.Pawn.ORDER_LOGICAL_OR=12;Blockly.Pawn.ORDER_IF_NULL=13;Blockly.Pawn.ORDER_CONDITIONAL=14;
Blockly.Pawn.ORDER_CASCADE=15;Blockly.Pawn.ORDER_ASSIGNMENT=16;Blockly.Pawn.ORDER_NONE=99;Blockly.Pawn.ONE_BASED_INDEXING=!0;
Blockly.Pawn.init=function(a){Blockly.Pawn.definitions_=Object.create(null);Blockly.Pawn.functionNames_=Object.create(null);Blockly.Pawn.variableDB_?Blockly.Pawn.variableDB_.reset():Blockly.Pawn.variableDB_=new Blockly.Names(Blockly.Pawn.RESERVED_WORDS_);var b=[];a=a.variableList;if(a.length){for(var c=0;c<a.length;c++)b[c]=Blockly.Pawn.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE);Blockly.Pawn.definitions_.variables="var "+b.join(", ")+";"}};
Blockly.Pawn.finish=function(a){a&&(a=Blockly.Pawn.prefixLines(a,Blockly.Pawn.INDENT));a="main() {\n"+a+"}";var b=[],c=[],d;for(d in Blockly.Pawn.definitions_){var e=Blockly.Pawn.definitions_[d];e.match(/^import\s/)?b.push(e):c.push(e)}delete Blockly.Pawn.definitions_;delete Blockly.Pawn.functionNames_;Blockly.Pawn.variableDB_.reset();return(b.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Pawn.scrubNakedValue=function(a){return a+";\n"};
Blockly.Pawn.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Pawn.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();(d=Blockly.utils.wrap(d,Blockly.Pawn.COMMENT_WRAP-3))&&(c=a.getProcedureDef?c+Blockly.Pawn.prefixLines(d+"\n","/// "):c+Blockly.Pawn.prefixLines(d+"\n","// "));for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Pawn.allNestedComments(d))&&(c+=Blockly.Pawn.prefixLines(d,"// "))}e=a.nextConnection&&
a.nextConnection.targetBlock();e=Blockly.Pawn.blockToCode(e);return c+b+e};
Blockly.Pawn.getAdjusted=function(a,b,c,d,e){c=c||0;e=e||Blockly.Pawn.ORDER_NONE;Blockly.Pawn.ONE_BASED_INDEXING&&c--;var f=Blockly.Pawn.ONE_BASED_INDEXING?"1":"0";a=c?Blockly.Pawn.valueToCode(a,b,Blockly.Pawn.ORDER_ADDITIVE)||f:d?Blockly.Pawn.valueToCode(a,b,Blockly.Pawn.ORDER_UNARY_PREFIX)||f:Blockly.Pawn.valueToCode(a,b,e)||f;if(Blockly.isNumber(a))a=parseInt(a,10)+c,d&&(a=-a);else{if(0<c){a=a+" + "+c;var g=Blockly.Pawn.ORDER_ADDITIVE}else 0>c&&(a=a+" - "+-c,g=Blockly.Pawn.ORDER_ADDITIVE);d&&(a=
c?"-("+a+")":"-"+a,g=Blockly.Pawn.ORDER_UNARY_PREFIX);g=Math.floor(g);e=Math.floor(e);g&&e>=g&&(a="("+a+")")}return a};Blockly.Pawn.colour={};Blockly.Pawn.addReservedWords("Math");Blockly.Pawn.colour_picker=function(a){return["'"+a.getFieldValue("COLOUR")+"'",Blockly.Pawn.ORDER_ATOMIC]};
Blockly.Pawn.colour_random=function(a){Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";return[Blockly.Pawn.provideFunction_("colour_random",["String "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"() {","  String hex = '0123456789abcdef';","  var rnd = new Math.Random();","  return '#${hex[rnd.nextInt(16)]}${hex[rnd.nextInt(16)]}'","      '${hex[rnd.nextInt(16)]}${hex[rnd.nextInt(16)]}'","      '${hex[rnd.nextInt(16)]}${hex[rnd.nextInt(16)]}';","}"])+"()",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.colour_rgb=function(a){var b=Blockly.Pawn.valueToCode(a,"RED",Blockly.Pawn.ORDER_NONE)||0,c=Blockly.Pawn.valueToCode(a,"GREEN",Blockly.Pawn.ORDER_NONE)||0;a=Blockly.Pawn.valueToCode(a,"BLUE",Blockly.Pawn.ORDER_NONE)||0;Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";return[Blockly.Pawn.provideFunction_("colour_rgb",["String "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(num r, num g, num b) {","  num rn = (Math.max(Math.min(r, 1), 0) * 255).round();","  String rs = rn.toInt().toRadixString(16);",
"  rs = '0$rs';","  rs = rs.substring(rs.length - 2);","  num gn = (Math.max(Math.min(g, 1), 0) * 255).round();","  String gs = gn.toInt().toRadixString(16);","  gs = '0$gs';","  gs = gs.substring(gs.length - 2);","  num bn = (Math.max(Math.min(b, 1), 0) * 255).round();","  String bs = bn.toInt().toRadixString(16);","  bs = '0$bs';","  bs = bs.substring(bs.length - 2);","  return '#$rs$gs$bs';","}"])+"("+b+", "+c+", "+a+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.colour_blend=function(a){var b=Blockly.Pawn.valueToCode(a,"COLOUR1",Blockly.Pawn.ORDER_NONE)||"'#000000'",c=Blockly.Pawn.valueToCode(a,"COLOUR2",Blockly.Pawn.ORDER_NONE)||"'#000000'";a=Blockly.Pawn.valueToCode(a,"RATIO",Blockly.Pawn.ORDER_NONE)||.5;Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";return[Blockly.Pawn.provideFunction_("colour_blend",["String "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(String c1, String c2, num ratio) {","  ratio = Math.max(Math.min(ratio, 1), 0);",
"  int r1 = int.parse('0x${c1.substring(1, 3)}');","  int g1 = int.parse('0x${c1.substring(3, 5)}');","  int b1 = int.parse('0x${c1.substring(5, 7)}');","  int r2 = int.parse('0x${c2.substring(1, 3)}');","  int g2 = int.parse('0x${c2.substring(3, 5)}');","  int b2 = int.parse('0x${c2.substring(5, 7)}');","  num rn = (r1 * (1 - ratio) + r2 * ratio).round();","  String rs = rn.toInt().toRadixString(16);","  num gn = (g1 * (1 - ratio) + g2 * ratio).round();","  String gs = gn.toInt().toRadixString(16);",
"  num bn = (b1 * (1 - ratio) + b2 * ratio).round();","  String bs = bn.toInt().toRadixString(16);","  rs = '0$rs';","  rs = rs.substring(rs.length - 2);","  gs = '0$gs';","  gs = gs.substring(gs.length - 2);","  bs = '0$bs';","  bs = bs.substring(bs.length - 2);","  return '#$rs$gs$bs';","}"])+"("+b+", "+c+", "+a+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]};Blockly.Pawn.lists={};Blockly.Pawn.addReservedWords("Math");Blockly.Pawn.lists_create_empty=function(a){return["[]",Blockly.Pawn.ORDER_ATOMIC]};Blockly.Pawn.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.Pawn.valueToCode(a,"ADD"+c,Blockly.Pawn.ORDER_NONE)||"null";return["["+b.join(", ")+"]",Blockly.Pawn.ORDER_ATOMIC]};
Blockly.Pawn.lists_repeat=function(a){var b=Blockly.Pawn.valueToCode(a,"ITEM",Blockly.Pawn.ORDER_NONE)||"null";return["new List.filled("+(Blockly.Pawn.valueToCode(a,"NUM",Blockly.Pawn.ORDER_NONE)||"0")+", "+b+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]};Blockly.Pawn.lists_length=function(a){return[(Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"[]")+".length",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.lists_isEmpty=function(a){return[(Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"[]")+".isEmpty",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.lists_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Pawn.valueToCode(a,"FIND",Blockly.Pawn.ORDER_NONE)||"''";a=(Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"[]")+"."+b+"("+c+")";return Blockly.Pawn.ONE_BASED_INDEXING?[a+" + 1",Blockly.Pawn.ORDER_ADDITIVE]:[a,Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.lists_getIndex=function(a){function b(){var a=Blockly.Pawn.variableDB_.getDistinctName("tmp_list",Blockly.Variables.NAME_TYPE),b="List "+a+" = "+e+";\n";e=a;return b}var c=a.getFieldValue("MODE")||"GET",d=a.getFieldValue("WHERE")||"FROM_START",e=Blockly.Pawn.valueToCode(a,"VALUE","RANDOM"==d||"FROM_END"==d?Blockly.Pawn.ORDER_NONE:Blockly.Pawn.ORDER_UNARY_POSTFIX)||"[]";if(("RANDOM"!=d||"REMOVE"!=c)&&"FROM_END"!=d||e.match(/^\w+$/))switch(d){case "FIRST":if("GET"==c)return[e+".first",
Blockly.Pawn.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==c)return[e+".removeAt(0)",Blockly.Pawn.ORDER_UNARY_POSTFIX];if("REMOVE"==c)return e+".removeAt(0);\n";break;case "LAST":if("GET"==c)return[e+".last",Blockly.Pawn.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==c)return[e+".removeLast()",Blockly.Pawn.ORDER_UNARY_POSTFIX];if("REMOVE"==c)return e+".removeLast();\n";break;case "FROM_START":d=Blockly.Pawn.getAdjusted(a,"AT");if("GET"==c)return[e+"["+d+"]",Blockly.Pawn.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==c)return[e+
".removeAt("+d+")",Blockly.Pawn.ORDER_UNARY_POSTFIX];if("REMOVE"==c)return e+".removeAt("+d+");\n";break;case "FROM_END":d=Blockly.Pawn.getAdjusted(a,"AT",1,!1,Blockly.Pawn.ORDER_ADDITIVE);if("GET"==c)return[e+"["+e+".length - "+d+"]",Blockly.Pawn.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==c||"REMOVE"==c){a=e+".removeAt("+e+".length - "+d+")";if("GET_REMOVE"==c)return[a,Blockly.Pawn.ORDER_UNARY_POSTFIX];if("REMOVE"==c)return a+";\n"}break;case "RANDOM":Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";
if("REMOVE"==c)return c=Blockly.Pawn.variableDB_.getDistinctName("tmp_x",Blockly.Variables.NAME_TYPE),"int "+c+" = new Math.Random().nextInt("+e+".length);\n"+(e+".removeAt("+c+");\n");if("GET"==c)return c=Blockly.Pawn.provideFunction_("lists_get_random_item",["dynamic "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List my_list) {","  int x = new Math.Random().nextInt(my_list.length);","  return my_list[x];","}"]),[c+"("+e+")",Blockly.Pawn.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==c)return c=Blockly.Pawn.provideFunction_("lists_remove_random_item",
["dynamic "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List my_list) {","  int x = new Math.Random().nextInt(my_list.length);","  return my_list.removeAt(x);","}"]),[c+"("+e+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]}else{if("RANDOM"==d)return Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;",a=b(),c=Blockly.Pawn.variableDB_.getDistinctName("tmp_x",Blockly.Variables.NAME_TYPE),a+("int "+c+" = new Math.Random().nextInt("+e+".length);\n")+(e+".removeAt("+c+");\n");if("REMOVE"==c)return d=
Blockly.Pawn.getAdjusted(a,"AT",1,!1,Blockly.Pawn.ORDER_ADDITIVE),a=b(),a+=e+".removeAt("+e+".length - "+d+");\n";if("GET"==c)return d=Blockly.Pawn.getAdjusted(a,"AT",1),c=Blockly.Pawn.provideFunction_("lists_get_from_end",["dynamic "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List my_list, num x) {","  x = my_list.length - x;","  return my_list[x];","}"]),[c+"("+e+", "+d+")",Blockly.Pawn.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==c)return d=Blockly.Pawn.getAdjusted(a,"AT",1),c=Blockly.Pawn.provideFunction_("lists_remove_from_end",
["dynamic "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List my_list, num x) {","  x = my_list.length - x;","  return my_list.removeAt(x);","}"]),[c+"("+e+", "+d+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]}throw"Unhandled combination (lists_getIndex).";};
Blockly.Pawn.lists_setIndex=function(a){function b(){if(e.match(/^\w+$/))return"";var a=Blockly.Pawn.variableDB_.getDistinctName("tmp_list",Blockly.Variables.NAME_TYPE),b="List "+a+" = "+e+";\n";e=a;return b}var c=a.getFieldValue("MODE")||"GET",d=a.getFieldValue("WHERE")||"FROM_START",e=Blockly.Pawn.valueToCode(a,"LIST",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"[]",f=Blockly.Pawn.valueToCode(a,"TO",Blockly.Pawn.ORDER_ASSIGNMENT)||"null";switch(d){case "FIRST":if("SET"==c)return e+"[0] = "+f+";\n";if("INSERT"==
c)return e+".insert(0, "+f+");\n";break;case "LAST":if("SET"==c)return a=b(),a+(e+"["+e+".length - 1] = "+f+";\n");if("INSERT"==c)return e+".add("+f+");\n";break;case "FROM_START":d=Blockly.Pawn.getAdjusted(a,"AT");if("SET"==c)return e+"["+d+"] = "+f+";\n";if("INSERT"==c)return e+".insert("+d+", "+f+");\n";break;case "FROM_END":d=Blockly.Pawn.getAdjusted(a,"AT",1,!1,Blockly.Pawn.ORDER_ADDITIVE);a=b();if("SET"==c)return a+(e+"["+e+".length - "+d+"] = "+f+";\n");if("INSERT"==c)return a+(e+".insert("+
e+".length - "+d+", "+f+");\n");break;case "RANDOM":Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";a=b();d=Blockly.Pawn.variableDB_.getDistinctName("tmp_x",Blockly.Variables.NAME_TYPE);a+="int "+d+" = new Math.Random().nextInt("+e+".length);\n";if("SET"==c)return a+(e+"["+d+"] = "+f+";\n");if("INSERT"==c)return a+(e+".insert("+d+", "+f+");\n")}throw"Unhandled combination (lists_setIndex).";};
Blockly.Pawn.lists_getSublist=function(a){var b=Blockly.Pawn.valueToCode(a,"LIST",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"[]",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2");if(b.match(/^\w+$/)||"FROM_END"!=c&&"FROM_START"==d){switch(c){case "FROM_START":var e=Blockly.Pawn.getAdjusted(a,"AT1");break;case "FROM_END":e=Blockly.Pawn.getAdjusted(a,"AT1",1,!1,Blockly.Pawn.ORDER_ADDITIVE);e=b+".length - "+e;break;case "FIRST":e="0";break;default:throw"Unhandled option (lists_getSublist).";}switch(d){case "FROM_START":var f=
Blockly.Pawn.getAdjusted(a,"AT2",1);break;case "FROM_END":f=Blockly.Pawn.getAdjusted(a,"AT2",0,!1,Blockly.Pawn.ORDER_ADDITIVE);f=b+".length - "+f;break;case "LAST":break;default:throw"Unhandled option (lists_getSublist).";}a="LAST"==d?b+".sublist("+e+")":b+".sublist("+e+", "+f+")"}else e=Blockly.Pawn.getAdjusted(a,"AT1"),f=Blockly.Pawn.getAdjusted(a,"AT2"),a=Blockly.Pawn.provideFunction_("lists_get_sublist",["List "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(list, where1, at1, where2, at2) {","  int getAt(where, at) {",
"    if (where == 'FROM_END') {","      at = list.length - 1 - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = list.length - 1;","    } else if (where != 'FROM_START') {","      throw 'Unhandled option (lists_getSublist).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return list.sublist(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+f+")";return[a,Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.lists_sort=function(a){var b=Blockly.Pawn.valueToCode(a,"LIST",Blockly.Pawn.ORDER_NONE)||"[]",c="1"===a.getFieldValue("DIRECTION")?1:-1;a=a.getFieldValue("TYPE");return[Blockly.Pawn.provideFunction_("lists_sort",["List "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(list, type, direction) {","  var compareFuncs = {",'    "NUMERIC": (a, b) => direction * a.compareTo(b),','    "TEXT": (a, b) => direction * a.toString().compareTo(b.toString()),','    "IGNORE_CASE": ',"       (a, b) => direction * ",
"      a.toString().toLowerCase().compareTo(b.toString().toLowerCase())","  };","  list = new List.from(list);","  var compare = compareFuncs[type];","  list.sort(compare);","  return list;","}"])+"("+b+', "'+a+'", '+c+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.lists_split=function(a){var b=Blockly.Pawn.valueToCode(a,"INPUT",Blockly.Pawn.ORDER_UNARY_POSTFIX),c=Blockly.Pawn.valueToCode(a,"DELIM",Blockly.Pawn.ORDER_NONE)||"''";a=a.getFieldValue("MODE");if("SPLIT"==a)b||(b="''"),a="split";else if("JOIN"==a)b||(b="[]"),a="join";else throw"Unknown mode: "+a;return[b+"."+a+"("+c+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]};Blockly.Pawn.logic={};Blockly.Pawn.controls_if=function(a){for(var b=0,c=Blockly.Pawn.valueToCode(a,"IF"+b,Blockly.Pawn.ORDER_NONE)||"false",d=Blockly.Pawn.statementToCode(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.elseifCount_;b++)c=Blockly.Pawn.valueToCode(a,"IF"+b,Blockly.Pawn.ORDER_NONE)||"false",d=Blockly.Pawn.statementToCode(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.elseCount_&&(d=Blockly.Pawn.statementToCode(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};
Blockly.Pawn.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.Pawn.ORDER_EQUALITY:Blockly.Pawn.ORDER_RELATIONAL,d=Blockly.Pawn.valueToCode(a,"A",c)||"0";a=Blockly.Pawn.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.Pawn.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.Pawn.ORDER_LOGICAL_AND:Blockly.Pawn.ORDER_LOGICAL_OR,d=Blockly.Pawn.valueToCode(a,"A",c);a=Blockly.Pawn.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.Pawn.logic_negate=function(a){var b=Blockly.Pawn.ORDER_UNARY_PREFIX;return["!"+(Blockly.Pawn.valueToCode(a,"BOOL",b)||"true"),b]};
Blockly.Pawn.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Pawn.ORDER_ATOMIC]};Blockly.Pawn.logic_null=function(a){return["null",Blockly.Pawn.ORDER_ATOMIC]};Blockly.Pawn.logic_ternary=function(a){var b=Blockly.Pawn.valueToCode(a,"IF",Blockly.Pawn.ORDER_CONDITIONAL)||"false",c=Blockly.Pawn.valueToCode(a,"THEN",Blockly.Pawn.ORDER_CONDITIONAL)||"null";a=Blockly.Pawn.valueToCode(a,"ELSE",Blockly.Pawn.ORDER_CONDITIONAL)||"null";return[b+" ? "+c+" : "+a,Blockly.Pawn.ORDER_CONDITIONAL]};Blockly.Pawn.loops={};
Blockly.Pawn.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.Pawn.valueToCode(a,"TIMES",Blockly.Pawn.ORDER_ASSIGNMENT)||"0",c=Blockly.Pawn.statementToCode(a,"DO"),c=Blockly.Pawn.addLoopTrap(c,a.id);a="";var d=Blockly.Pawn.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.Pawn.variableDB_.getDistinctName("repeat_end",Blockly.Variables.NAME_TYPE),a+="var "+e+" = "+b+";\n");
return a+("for (new "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};Blockly.Pawn.controls_repeat=Blockly.Pawn.controls_repeat_ext;Blockly.Pawn.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Pawn.valueToCode(a,"BOOL",b?Blockly.Pawn.ORDER_UNARY_PREFIX:Blockly.Pawn.ORDER_NONE)||"false",d=Blockly.Pawn.statementToCode(a,"DO"),d=Blockly.Pawn.addLoopTrap(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.Pawn.controls_for=function(a){var b=Blockly.Pawn.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Pawn.valueToCode(a,"FROM",Blockly.Pawn.ORDER_ASSIGNMENT)||"0",d=Blockly.Pawn.valueToCode(a,"TO",Blockly.Pawn.ORDER_ASSIGNMENT)||"0",e=Blockly.Pawn.valueToCode(a,"BY",Blockly.Pawn.ORDER_ASSIGNMENT)||"1",f=Blockly.Pawn.statementToCode(a,"DO"),f=Blockly.Pawn.addLoopTrap(f,a.id);if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){var g=parseFloat(c)<=
parseFloat(d);a="for ("+b+" = "+c+"; "+b+(g?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(g?"++":"--"):a+((g?" += ":" -= ")+b))+(") {\n"+f+"}\n")}else a="",g=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(g=Blockly.Pawn.variableDB_.getDistinctName(b+"_start",Blockly.Variables.NAME_TYPE),a+="var "+g+" = "+c+";\n"),c=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.Pawn.variableDB_.getDistinctName(b+"_end",Blockly.Variables.NAME_TYPE),a+="var "+c+" = "+d+";\n"),d=Blockly.Pawn.variableDB_.getDistinctName(b+
"_inc",Blockly.Variables.NAME_TYPE),a+="num "+d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("("+e+").abs();\n"),a=a+("if ("+g+" > "+c+") {\n")+(Blockly.Pawn.INDENT+d+" = -"+d+";\n"),a+="}\n",a+="for ("+b+" = "+g+"; "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+"; "+b+" += "+d+") {\n"+f+"}\n";return a};
Blockly.Pawn.controls_forEach=function(a){var b=Blockly.Pawn.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Pawn.valueToCode(a,"LIST",Blockly.Pawn.ORDER_ASSIGNMENT)||"[]",d=Blockly.Pawn.statementToCode(a,"DO"),d=Blockly.Pawn.addLoopTrap(d,a.id);return"for (var "+b+" in "+c+") {\n"+d+"}\n"};
Blockly.Pawn.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};Blockly.Pawn.math={};Blockly.Pawn.addReservedWords("Math");Blockly.Pawn.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));var b;Infinity==a?(a="double.INFINITY",b=Blockly.Pawn.ORDER_UNARY_POSTFIX):-Infinity==a?(a="-double.INFINITY",b=Blockly.Pawn.ORDER_UNARY_PREFIX):b=0>a?Blockly.Pawn.ORDER_UNARY_PREFIX:Blockly.Pawn.ORDER_ATOMIC;return[a,b]};
Blockly.Pawn.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.Pawn.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Pawn.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Pawn.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Pawn.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.Pawn.ORDER_NONE]}[a.getFieldValue("OP")],c=b[0],b=b[1],d=Blockly.Pawn.valueToCode(a,"A",b)||"0";a=Blockly.Pawn.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:(Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;",["Math.pow("+d+", "+a+
")",Blockly.Pawn.ORDER_UNARY_POSTFIX])};
Blockly.Pawn.math_single=function(a){var b=a.getFieldValue("OP"),c;if("NEG"==b)return a=Blockly.Pawn.valueToCode(a,"NUM",Blockly.Pawn.ORDER_UNARY_PREFIX)||"0","-"==a[0]&&(a=" "+a),["-"+a,Blockly.Pawn.ORDER_UNARY_PREFIX];Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";a="ABS"==b||"ROUND"==b.substring(0,5)?Blockly.Pawn.valueToCode(a,"NUM",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"0":"SIN"==b||"COS"==b||"TAN"==b?Blockly.Pawn.valueToCode(a,"NUM",Blockly.Pawn.ORDER_MULTIPLICATIVE)||
"0":Blockly.Pawn.valueToCode(a,"NUM",Blockly.Pawn.ORDER_NONE)||"0";switch(b){case "ABS":c=a+".abs()";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c=a+".round()";break;case "ROUNDUP":c=a+".ceil()";break;case "ROUNDDOWN":c=a+".floor()";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+
" / 180 * Math.PI)"}if(c)return[c,Blockly.Pawn.ORDER_UNARY_POSTFIX];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,Blockly.Pawn.ORDER_MULTIPLICATIVE]};
Blockly.Pawn.math_constant=function(a){var b={PI:["Math.PI",Blockly.Pawn.ORDER_UNARY_POSTFIX],E:["Math.E",Blockly.Pawn.ORDER_UNARY_POSTFIX],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",Blockly.Pawn.ORDER_MULTIPLICATIVE],SQRT2:["Math.SQRT2",Blockly.Pawn.ORDER_UNARY_POSTFIX],SQRT1_2:["Math.SQRT1_2",Blockly.Pawn.ORDER_UNARY_POSTFIX],INFINITY:["double.INFINITY",Blockly.Pawn.ORDER_ATOMIC]};a=a.getFieldValue("CONSTANT");"INFINITY"!=a&&(Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;");
return b[a]};
Blockly.Pawn.math_number_property=function(a){var b=Blockly.Pawn.valueToCode(a,"NUMBER_TO_CHECK",Blockly.Pawn.ORDER_MULTIPLICATIVE);if(!b)return["false",Blockly.Python.ORDER_ATOMIC];var c=a.getFieldValue("PROPERTY"),d;if("PRIME"==c)return Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;",[Blockly.Pawn.provideFunction_("math_isPrime",["bool "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;",
"  }","  // False if n is null, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.","  if (n == null || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",Blockly.Pawn.ORDER_UNARY_POSTFIX];switch(c){case "EVEN":d=b+
" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Pawn.valueToCode(a,"DIVISOR",Blockly.Pawn.ORDER_MULTIPLICATIVE);if(!a)return["false",Blockly.Python.ORDER_ATOMIC];d=b+" % "+a+" == 0"}return[d,Blockly.Pawn.ORDER_EQUALITY]};
Blockly.Pawn.math_change=function(a){var b=Blockly.Pawn.valueToCode(a,"DELTA",Blockly.Pawn.ORDER_ADDITIVE)||"0";a=Blockly.Pawn.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return a+" = ("+a+" is num ? "+a+" : 0) + "+b+";\n"};Blockly.Pawn.math_round=Blockly.Pawn.math_single;Blockly.Pawn.math_trig=Blockly.Pawn.math_single;
Blockly.Pawn.math_on_list=function(a){var b=a.getFieldValue("OP");a=Blockly.Pawn.valueToCode(a,"LIST",Blockly.Pawn.ORDER_NONE)||"[]";switch(b){case "SUM":b=Blockly.Pawn.provideFunction_("math_sum",["num "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  num sumVal = 0;","  myList.forEach((num entry) {sumVal += entry;});","  return sumVal;","}"]);b=b+"("+a+")";break;case "MIN":Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";b=Blockly.Pawn.provideFunction_("math_min",
["num "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  if (myList.isEmpty) return null;","  num minVal = myList[0];","  myList.forEach((num entry) {minVal = Math.min(minVal, entry);});","  return minVal;","}"]);b=b+"("+a+")";break;case "MAX":Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";b=Blockly.Pawn.provideFunction_("math_max",["num "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  if (myList.isEmpty) return null;","  num maxVal = myList[0];",
"  myList.forEach((num entry) {maxVal = Math.max(maxVal, entry);});","  return maxVal;","}"]);b=b+"("+a+")";break;case "AVERAGE":b=Blockly.Pawn.provideFunction_("math_mean",["num "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  // First filter list for numbers only.","  List localList = new List.from(myList);","  localList.removeWhere((a) => a is! num);","  if (localList.isEmpty) return null;","  num sumVal = 0;","  localList.forEach((num entry) {sumVal += entry;});","  return sumVal / localList.length;",
"}"]);b=b+"("+a+")";break;case "MEDIAN":b=Blockly.Pawn.provideFunction_("math_median",["num "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  // First filter list for numbers only, then sort, then return middle value","  // or the average of two middle values if list has an even number of elements.","  List localList = new List.from(myList);","  localList.removeWhere((a) => a is! num);","  if (localList.isEmpty) return null;","  localList.sort((a, b) => (a - b));","  int index = localList.length ~/ 2;",
"  if (localList.length % 2 == 1) {","    return localList[index];","  } else {","    return (localList[index - 1] + localList[index]) / 2;","  }","}"]);b=b+"("+a+")";break;case "MODE":Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";b=Blockly.Pawn.provideFunction_("math_modes",["List "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List values) {","  List modes = [];","  List counts = [];","  int maxCount = 0;","  for (int i = 0; i < values.length; i++) {","    var value = values[i];",
"    bool found = false;","    int thisCount;","    for (int j = 0; j < counts.length; j++) {","      if (counts[j][0] == value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.add([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }","  for (int j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.add(counts[j][0]);","    }","  }","  return modes;",
"}"]);b=b+"("+a+")";break;case "STD_DEV":Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";b=Blockly.Pawn.provideFunction_("math_standard_deviation",["num "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  // First filter list for numbers only.","  List numbers = new List.from(myList);","  numbers.removeWhere((a) => a is! num);","  if (numbers.isEmpty) return null;","  num n = numbers.length;","  num sum = 0;","  numbers.forEach((x) => sum += x);","  num mean = sum / n;",
"  num sumSquare = 0;","  numbers.forEach((x) => sumSquare += Math.pow(x - mean, 2));","  return Math.sqrt(sumSquare / n);","}"]);b=b+"("+a+")";break;case "RANDOM":Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";b=Blockly.Pawn.provideFunction_("math_random_item",["dynamic "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  int x = new Math.Random().nextInt(myList.length);","  return myList[x];","}"]);b=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[b,
Blockly.Pawn.ORDER_UNARY_POSTFIX]};Blockly.Pawn.math_modulo=function(a){var b=Blockly.Pawn.valueToCode(a,"DIVIDEND",Blockly.Pawn.ORDER_MULTIPLICATIVE)||"0";a=Blockly.Pawn.valueToCode(a,"DIVISOR",Blockly.Pawn.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,Blockly.Pawn.ORDER_MULTIPLICATIVE]};
Blockly.Pawn.math_constrain=function(a){Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";var b=Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_NONE)||"0",c=Blockly.Pawn.valueToCode(a,"LOW",Blockly.Pawn.ORDER_NONE)||"0";a=Blockly.Pawn.valueToCode(a,"HIGH",Blockly.Pawn.ORDER_NONE)||"double.INFINITY";return["Math.min(Math.max("+b+", "+c+"), "+a+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.math_random_int=function(a){Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";var b=Blockly.Pawn.valueToCode(a,"FROM",Blockly.Pawn.ORDER_NONE)||"0";a=Blockly.Pawn.valueToCode(a,"TO",Blockly.Pawn.ORDER_NONE)||"0";return[Blockly.Pawn.provideFunction_("math_random_int",["int "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(num a, num b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    num c = a;","    a = b;","    b = c;","  }","  return new Math.Random().nextInt(b - a + 1) + a;",
"}"])+"("+b+", "+a+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]};Blockly.Pawn.math_random_float=function(a){Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;";return["new Math.Random().nextDouble()",Blockly.Pawn.ORDER_UNARY_POSTFIX]};Blockly.Pawn.procedures={};
Blockly.Pawn.procedures_defreturn=function(a){var b=Blockly.Pawn.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.Pawn.statementToCode(a,"STACK");Blockly.Pawn.STATEMENT_PREFIX&&(c=Blockly.Pawn.prefixLines(Blockly.Pawn.STATEMENT_PREFIX.replace(/%1/g,"'"+a.id+"'"),Blockly.Pawn.INDENT)+c);Blockly.Pawn.INFINITE_LOOP_TRAP&&(c=Blockly.Pawn.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);var d=Blockly.Pawn.valueToCode(a,"RETURN",Blockly.Pawn.ORDER_NONE)||"";d&&(d="  return "+
d+";\n");for(var e=d?"dynamic":"void",f=[],g=0;g<a.arguments_.length;g++)f[g]=Blockly.Pawn.variableDB_.getName(a.arguments_[g],Blockly.Variables.NAME_TYPE);c=e+" "+b+"("+f.join(", ")+") {\n"+c+d+"}";c=Blockly.Pawn.scrub_(a,c);Blockly.Pawn.definitions_["%"+b]=c;return null};Blockly.Pawn.procedures_defnoreturn=Blockly.Pawn.procedures_defreturn;
Blockly.Pawn.procedures_callreturn=function(a){for(var b=Blockly.Pawn.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Pawn.valueToCode(a,"ARG"+d,Blockly.Pawn.ORDER_NONE)||"null";return[b+"("+c.join(", ")+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.procedures_callnoreturn=function(a){for(var b=Blockly.Pawn.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Pawn.valueToCode(a,"ARG"+d,Blockly.Pawn.ORDER_NONE)||"null";return b+"("+c.join(", ")+");\n"};
Blockly.Pawn.procedures_ifreturn=function(a){var b="if ("+(Blockly.Pawn.valueToCode(a,"CONDITION",Blockly.Pawn.ORDER_NONE)||"false")+") {\n";a.hasReturnValue_?(a=Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_NONE)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};Blockly.Pawn.texts={};Blockly.Pawn.addReservedWords("Html,Math");Blockly.Pawn.text=function(a){return[Blockly.Pawn.quote_(a.getFieldValue("TEXT")),Blockly.Pawn.ORDER_ATOMIC]};
Blockly.Pawn.text_join=function(a){switch(a.itemCount_){case 0:return["''",Blockly.Pawn.ORDER_ATOMIC];case 1:return[(Blockly.Pawn.valueToCode(a,"ADD0",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"''")+".toString()",Blockly.Pawn.ORDER_UNARY_POSTFIX];default:for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.Pawn.valueToCode(a,"ADD"+c,Blockly.Pawn.ORDER_NONE)||"''";a="["+b.join(",")+"].join()";return[a,Blockly.Pawn.ORDER_UNARY_POSTFIX]}};
Blockly.Pawn.text_append=function(a){var b=Blockly.Pawn.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.Pawn.valueToCode(a,"TEXT",Blockly.Pawn.ORDER_NONE)||"''";return b+" = ["+b+", "+a+"].join();\n"};Blockly.Pawn.text_length=function(a){return[(Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"''")+".length",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.text_isEmpty=function(a){return[(Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"''")+".isEmpty",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Pawn.valueToCode(a,"FIND",Blockly.Pawn.ORDER_NONE)||"''";a=(Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"''")+"."+b+"("+c+")";return Blockly.Pawn.ONE_BASED_INDEXING?[a+" + 1",Blockly.Pawn.ORDER_ADDITIVE]:[a,Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"''";switch(b){case "FIRST":return[c+"[0]",Blockly.Pawn.ORDER_UNARY_POSTFIX];case "FROM_START":return a=Blockly.Pawn.getAdjusted(a,"AT"),[c+"["+a+"]",Blockly.Pawn.ORDER_UNARY_POSTFIX];case "LAST":case "FROM_END":return a=Blockly.Pawn.getAdjusted(a,"AT",1),b=Blockly.Pawn.provideFunction_("text_get_from_end",["String "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+
"(String text, num x) {","  return text[text.length - x];","}"]),[b+"("+c+", "+a+")",Blockly.Pawn.ORDER_UNARY_POSTFIX];case "RANDOM":return Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;",b=Blockly.Pawn.provideFunction_("text_random_letter",["String "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(String text) {","  int x = new Math.Random().nextInt(text.length);","  return text[x];","}"]),[b+"("+c+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]}throw"Unhandled option (text_charAt).";};
Blockly.Pawn.text_getSubstring=function(a){var b=Blockly.Pawn.valueToCode(a,"STRING",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"''",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2");if("FIRST"==c&&"LAST"==d)a=b;else if(b.match(/^'?\w+'?$/)||"FROM_END"!=c&&"FROM_START"==d){switch(c){case "FROM_START":var e=Blockly.Pawn.getAdjusted(a,"AT1");break;case "FROM_END":e=Blockly.Pawn.getAdjusted(a,"AT1",1,!1,Blockly.Pawn.ORDER_ADDITIVE);e=b+".length - "+e;break;case "FIRST":e="0";break;default:throw"Unhandled option (text_getSubstring).";
}switch(d){case "FROM_START":var f=Blockly.Pawn.getAdjusted(a,"AT2",1);break;case "FROM_END":f=Blockly.Pawn.getAdjusted(a,"AT2",0,!1,Blockly.Pawn.ORDER_ADDITIVE);f=b+".length - "+f;break;case "LAST":break;default:throw"Unhandled option (text_getSubstring).";}a="LAST"==d?b+".substring("+e+")":b+".substring("+e+", "+f+")"}else e=Blockly.Pawn.getAdjusted(a,"AT1"),f=Blockly.Pawn.getAdjusted(a,"AT2"),a=Blockly.Pawn.provideFunction_("text_get_substring",["List "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+
"(text, where1, at1, where2, at2) {","  int getAt(where, at) {","    if (where == 'FROM_END') {","      at = text.length - 1 - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = text.length - 1;","    } else if (where != 'FROM_START') {","      throw 'Unhandled option (text_getSubstring).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return text.substring(at1, at2);","}"])+"("+b+", '"+c+"', "+
e+", '"+d+"', "+f+")";return[a,Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[a.getFieldValue("CASE")];a=Blockly.Pawn.valueToCode(a,"TEXT",b?Blockly.Pawn.ORDER_UNARY_POSTFIX:Blockly.Pawn.ORDER_NONE)||"''";return[b?a+b:Blockly.Pawn.provideFunction_("text_toTitleCase",["String "+Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_+"(String str) {","  RegExp exp = new RegExp(r'\\b');","  List<String> list = str.split(exp);","  final title = new StringBuffer();","  for (String part in list) {",
"    if (part.length > 0) {","      title.write(part[0].toUpperCase());","      if (part.length > 0) {","        title.write(part.substring(1).toLowerCase());","      }","    }","  }","  return title.toString();","}"])+"("+a+")",Blockly.Pawn.ORDER_UNARY_POSTFIX]};
Blockly.Pawn.text_trim=function(a){var b={LEFT:".replaceFirst(new RegExp(r'^\\s+'), '')",RIGHT:".replaceFirst(new RegExp(r'\\s+$'), '')",BOTH:".trim()"}[a.getFieldValue("MODE")];return[(Blockly.Pawn.valueToCode(a,"TEXT",Blockly.Pawn.ORDER_UNARY_POSTFIX)||"''")+b,Blockly.Pawn.ORDER_UNARY_POSTFIX]};Blockly.Pawn.text_print=function(a){return"print("+(Blockly.Pawn.valueToCode(a,"TEXT",Blockly.Pawn.ORDER_NONE)||"''")+");\n"};
Blockly.Pawn.text_prompt_ext=function(a){Blockly.Pawn.definitions_.import_dart_html="import 'Pawn:html' as Html;";var b="Html.window.prompt("+(a.getField("TEXT")?Blockly.Pawn.quote_(a.getFieldValue("TEXT")):Blockly.Pawn.valueToCode(a,"TEXT",Blockly.Pawn.ORDER_NONE)||"''")+", '')";"NUMBER"==a.getFieldValue("TYPE")&&(Blockly.Pawn.definitions_.import_dart_math="import 'Pawn:math' as Math;",b="Math.parseDouble("+b+")");return[b,Blockly.Pawn.ORDER_UNARY_POSTFIX]};Blockly.Pawn.text_prompt=Blockly.Pawn.text_prompt_ext;Blockly.Pawn.variables={};Blockly.Pawn.variables_get=function(a){return[Blockly.Pawn.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Pawn.ORDER_ATOMIC]};Blockly.Pawn.variables_set=function(a){var b=Blockly.Pawn.valueToCode(a,"VALUE",Blockly.Pawn.ORDER_ASSIGNMENT)||"0";return Blockly.Pawn.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+b+";\n"};