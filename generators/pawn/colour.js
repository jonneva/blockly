/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2014 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Pawn for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Pawn.colour');

goog.require('Blockly.Pawn');


Blockly.Pawn.addReservedWords('Math');

Blockly.Pawn['colour_picker'] = function(block) {
  // Colour picker.
  var code = '\'' + block.getFieldValue('COLOUR') + '\'';
  return [code, Blockly.Pawn.ORDER_ATOMIC];
};

Blockly.Pawn['colour_random'] = function(block) {
  // Generate a random colour.
  Blockly.Pawn.definitions_['import_dart_math'] =
      'import \'Pawn:math\' as Math;';
  var functionName = Blockly.Pawn.provideFunction_(
      'colour_random',
      ['String ' + Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_ + '() {',
       '  String hex = \'0123456789abcdef\';',
       '  var rnd = new Math.Random();',
       '  return \'#${hex[rnd.nextInt(16)]}${hex[rnd.nextInt(16)]}\'',
       '      \'${hex[rnd.nextInt(16)]}${hex[rnd.nextInt(16)]}\'',
       '      \'${hex[rnd.nextInt(16)]}${hex[rnd.nextInt(16)]}\';',
       '}']);
  var code = functionName + '()';
  return [code, Blockly.Pawn.ORDER_UNARY_POSTFIX];
};

Blockly.Pawn['colour_rgb'] = function(block) {
  // Compose a colour from RGB components expressed as percentages.
  var red = Blockly.Pawn.valueToCode(block, 'RED',
      Blockly.Pawn.ORDER_NONE) || 0;
  var green = Blockly.Pawn.valueToCode(block, 'GREEN',
      Blockly.Pawn.ORDER_NONE) || 0;
  var blue = Blockly.Pawn.valueToCode(block, 'BLUE',
      Blockly.Pawn.ORDER_NONE) || 0;

  Blockly.Pawn.definitions_['import_dart_math'] =
      'import \'Pawn:math\' as Math;';
  var functionName = Blockly.Pawn.provideFunction_(
      'colour_rgb',
      ['String ' + Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_ +
          '(num r, num g, num b) {',
       '  num rn = (Math.max(Math.min(r, 1), 0) * 255).round();',
       '  String rs = rn.toInt().toRadixString(16);',
       '  rs = \'0$rs\';',
       '  rs = rs.substring(rs.length - 2);',
       '  num gn = (Math.max(Math.min(g, 1), 0) * 255).round();',
       '  String gs = gn.toInt().toRadixString(16);',
       '  gs = \'0$gs\';',
       '  gs = gs.substring(gs.length - 2);',
       '  num bn = (Math.max(Math.min(b, 1), 0) * 255).round();',
       '  String bs = bn.toInt().toRadixString(16);',
       '  bs = \'0$bs\';',
       '  bs = bs.substring(bs.length - 2);',
       '  return \'#$rs$gs$bs\';',
       '}']);
  var code = functionName + '(' + red + ', ' + green + ', ' + blue + ')';
  return [code, Blockly.Pawn.ORDER_UNARY_POSTFIX];
};

Blockly.Pawn['colour_blend'] = function(block) {
  // Blend two colours together.
  var c1 = Blockly.Pawn.valueToCode(block, 'COLOUR1',
      Blockly.Pawn.ORDER_NONE) || '\'#000000\'';
  var c2 = Blockly.Pawn.valueToCode(block, 'COLOUR2',
      Blockly.Pawn.ORDER_NONE) || '\'#000000\'';
  var ratio = Blockly.Pawn.valueToCode(block, 'RATIO',
      Blockly.Pawn.ORDER_NONE) || 0.5;

  Blockly.Pawn.definitions_['import_dart_math'] =
      'import \'Pawn:math\' as Math;';
  var functionName = Blockly.Pawn.provideFunction_(
      'colour_blend',
      ['String ' + Blockly.Pawn.FUNCTION_NAME_PLACEHOLDER_ +
          '(String c1, String c2, num ratio) {',
       '  ratio = Math.max(Math.min(ratio, 1), 0);',
       '  int r1 = int.parse(\'0x${c1.substring(1, 3)}\');',
       '  int g1 = int.parse(\'0x${c1.substring(3, 5)}\');',
       '  int b1 = int.parse(\'0x${c1.substring(5, 7)}\');',
       '  int r2 = int.parse(\'0x${c2.substring(1, 3)}\');',
       '  int g2 = int.parse(\'0x${c2.substring(3, 5)}\');',
       '  int b2 = int.parse(\'0x${c2.substring(5, 7)}\');',
       '  num rn = (r1 * (1 - ratio) + r2 * ratio).round();',
       '  String rs = rn.toInt().toRadixString(16);',
       '  num gn = (g1 * (1 - ratio) + g2 * ratio).round();',
       '  String gs = gn.toInt().toRadixString(16);',
       '  num bn = (b1 * (1 - ratio) + b2 * ratio).round();',
       '  String bs = bn.toInt().toRadixString(16);',
       '  rs = \'0$rs\';',
       '  rs = rs.substring(rs.length - 2);',
       '  gs = \'0$gs\';',
       '  gs = gs.substring(gs.length - 2);',
       '  bs = \'0$bs\';',
       '  bs = bs.substring(bs.length - 2);',
       '  return \'#$rs$gs$bs\';',
       '}']);
  var code = functionName + '(' + c1 + ', ' + c2 + ', ' + ratio + ')';
  return [code, Blockly.Pawn.ORDER_UNARY_POSTFIX];
};
