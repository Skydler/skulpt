JavaScript debugger enabled
/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($forcegbl) {
/*     3 */         var $loadname122, $loadname122, $lattr123, $loadname146, $str147, $loadname153, $str154, $loadname941, $str942;
/*     4 */         var $wakeFromSuspension = function() {
/*     5 */             var susp = $scope120.$wakingSuspension;
/*     6 */             delete $scope120.$wakingSuspension;
/*     7 */             $blk = susp.$blk;
/*     8 */             $loc = susp.$loc;
/*     9 */             $gbl = susp.$gbl;
/*    10 */             $exc = susp.$exc;
/*    11 */             $err = susp.$err;
/*    12 */             Sk.err = $err;
/*    13 */             $postfinally = susp.$postfinally;
/*    14 */             $currLineNo = susp.$lineno;
/*    15 */             $currColNo = susp.$colno;
/*    16 */             Sk.lastYield = Date.now();
/*    17 */             $loadname122 = susp.$tmps.$loadname122;
/*    18 */             $lattr123 = susp.$tmps.$lattr123;
/*    19 */             $loadname146 = susp.$tmps.$loadname146;
/*    20 */             $str147 = susp.$tmps.$str147;
/*    21 */             $loadname153 = susp.$tmps.$loadname153;
/*    22 */             $str154 = susp.$tmps.$str154;
/*    23 */             $loadname941 = susp.$tmps.$loadname941;
/*    24 */             $str942 = susp.$tmps.$str942;
/*    25 */             try {
/*    26 */                 $ret = susp.child.resume();
/*    27 */             } catch (err) {
/*    28 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*    29 */                     Sk.execStart = Date.now()
/*    30 */                 }
/*    31 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    32 */                     err = new Sk.builtin.ExternalError(err);
/*    33 */                 }
/*    34 */                 err.traceback.push({
/*    35 */                     lineno: $currLineNo,
/*    36 */                     colno: $currColNo,
/*    37 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*    38 */                 });
/*    39 */                 if ($exc.length > 0) {
/*    40 */                     $err = err;
/*    41 */                     Sk.err = $err;
/*    42 */                     $blk = $exc.pop();
/*    43 */                 } else {
/*    44 */                     throw err;
/*    45 */                 }
/*    46 */             }
/*    47 */         };
/*    48 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    49 */             var susp = new Sk.misceval.Suspension();
/*    50 */             susp.child = $child;
/*    51 */             susp.resume = function() {
/*    52 */                 $scope120.$wakingSuspension = susp;
/*    53 */                 return $scope120();
/*    54 */             };
/*    55 */             susp.data = susp.child.data;
/*    56 */             susp.$blk = $blk;
/*    57 */             susp.$loc = $loc;
/*    58 */             susp.$gbl = $gbl;
/*    59 */             susp.$exc = $exc;
/*    60 */             susp.$err = $err;
/*    61 */             susp.$postfinally = $postfinally;
/*    62 */             susp.$filename = $filename;
/*    63 */             susp.$lineno = $lineno;
/*    64 */             susp.$colno = $colno;
/*    65 */             susp.optional = susp.child.optional;
/*    66 */             susp.$tmps = {
/*    67 */                 "$loadname122": $loadname122,
/*    68 */                 "$lattr123": $lattr123,
/*    69 */                 "$loadname146": $loadname146,
/*    70 */                 "$str147": $str147,
/*    71 */                 "$loadname153": $loadname153,
/*    72 */                 "$str154": $str154,
/*    73 */                 "$loadname941": $loadname941,
/*    74 */                 "$str942": $str942
/*    75 */             };
/*    76 */             return susp;
/*    77 */         };
/*    78 */         var $gbl = $forcegbl || {},
/*    79 */             $blk = 0,
/*    80 */             $exc = [],
/*    81 */             $loc = $gbl,
/*    82 */             $err = undefined;
/*    83 */         Sk.err = $err;
/*    84 */         $loc.__file__ = new Sk.builtins.str('src/lib/pedal/cait/cait_node.py');
/*    85 */         var $ret = undefined,
/*    86 */             $postfinally = undefined,
/*    87 */             $currLineNo = undefined,
/*    88 */             $currColNo = undefined;
/*    89 */         if (typeof Sk.execStart === 'undefined') {
/*    90 */             Sk.execStart = Date.now()
/*    91 */         }
/*    92 */         if (typeof Sk.lastYield === 'undefined') {
/*    93 */             Sk.lastYield = Date.now()
/*    94 */         }
/*    95 */         if ($scope120.$wakingSuspension !== undefined) {
/*    96 */             $wakeFromSuspension();
/*    97 */         }
/*    98 */         if (Sk.retainGlobals) {
/*    99 */             if (Sk.globals) {
/*   100 */                 $gbl = Sk.globals;
/*   101 */                 Sk.globals = $gbl;
/*   102 */                 $loc = $gbl;
/*   103 */             } else {
/*   104 */                 Sk.globals = $gbl;
/*   105 */             }
/*   106 */         } else {
/*   107 */             Sk.globals = $gbl;
/*   108 */         }
/*   109 */         Sk.exc = $exc;
/*   110 */         while (true) {
/*   111 */             try {
/*   112 */                 var $dateNow = Date.now();
/*   113 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*   114 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   115 */                 }
/*   116 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   117 */                     var $susp = $saveSuspension({
/*   118 */                         data: {
/*   119 */                             type: 'Sk.yield'
/*   120 */                         },
/*   121 */                         resume: function() {}
/*   122 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*   123 */                     $susp.$blk = $blk;
/*   124 */                     $susp.optional = true;
/*   125 */                     return $susp;
/*   126 */                 }
/*   127 */                 switch ($blk) {
/*   128 */                 case 0:
/*   129 */                     /* --- module entry --- */
/*   130 */ 
/*   131 */                     //
/*   132 */                     // line 1:
/*   133 */                     // import time
/*   134 */                     // ^
/*   135 */                     //
/*   136 */                     Sk.currLineNo = 1;
/*   137 */                     Sk.currColNo = 0;
/*   138 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   139 */                     $currLineNo = 1;
/*   140 */                     $currColNo = 0;
/*   141 */                     $ret = Sk.builtin.__import__('time', $gbl, $loc, []);
/*   142 */                     $blk = 1; /* allowing case fallthrough */
/*   143 */                 case 1:
/*   144 */                     /* --- function return or resume suspension --- */
/*   145 */                     if ($ret && $ret.$isSuspension) {
/*   146 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 1, 0);
/*   147 */                     }
/*   148 */                     var $module121 = $ret;
/*   149 */                     $loc.time = $module121;
/*   150 */ 
/*   151 */                     //
/*   152 */                     // line 2:
/*   153 */                     // stopwatch = time.time()
/*   154 */                     // ^
/*   155 */                     //
/*   156 */                     Sk.currLineNo = 2;
/*   157 */                     Sk.currColNo = 0;
/*   158 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   159 */                     $currLineNo = 2;
/*   160 */                     $currColNo = 0;
/*   161 */                     var $loadname122 = $loc.time !== undefined ? $loc.time : Sk.misceval.loadname('time', $gbl);;
/*   162 */                     $ret = Sk.abstr.gattr($loadname122, 'time', true);
/*   163 */                     $blk = 2; /* allowing case fallthrough */
/*   164 */                 case 2:
/*   165 */                     /* --- function return or resume suspension --- */
/*   166 */                     if ($ret && $ret.$isSuspension) {
/*   167 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 2, 12);
/*   168 */                     }
/*   169 */                     var $lattr123 = $ret;
/*   170 */                     $ret;
/*   171 */                     $ret = Sk.misceval.callsimOrSuspend($lattr123);
/*   172 */                     $blk = 3; /* allowing case fallthrough */
/*   173 */                 case 3:
/*   174 */                     /* --- function return or resume suspension --- */
/*   175 */                     if ($ret && $ret.$isSuspension) {
/*   176 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 2, 12);
/*   177 */                     }
/*   178 */                     var $call124 = $ret;
/*   179 */ 
/*   180 */                     //
/*   181 */                     // line 2:
/*   182 */                     // stopwatch = time.time()
/*   183 */                     //             ^
/*   184 */                     //
/*   185 */                     Sk.currLineNo = 2;
/*   186 */                     Sk.currColNo = 12;
/*   187 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   188 */                     $currLineNo = 2;
/*   189 */                     $currColNo = 12;
/*   190 */                     $gbl.stopwatch = $call124;
/*   191 */ 
/*   192 */                     //
/*   193 */                     // line 3:
/*   194 */                     // def click(phase):
/*   195 */                     // ^
/*   196 */                     //
/*   197 */                     Sk.currLineNo = 3;
/*   198 */                     Sk.currColNo = 0;
/*   199 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   200 */                     $currLineNo = 3;
/*   201 */                     $currColNo = 0;
/*   202 */                     $scope125.co_name = new Sk.builtins['str']('click');
/*   203 */                     $scope125.co_varnames = ['phase'];
/*   204 */                     var $funcobj142 = new Sk.builtins['function']($scope125, $gbl);
/*   205 */                     $loc.click = $funcobj142;
/*   206 */ 
/*   207 */                     //
/*   208 */                     // line 8:
/*   209 */                     // import ast
/*   210 */                     // ^
/*   211 */                     //
/*   212 */                     Sk.currLineNo = 8;
/*   213 */                     Sk.currColNo = 0;
/*   214 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   215 */                     $currLineNo = 8;
/*   216 */                     $currColNo = 0;
/*   217 */                     $ret = Sk.builtin.__import__('ast', $gbl, $loc, []);
/*   218 */                     $blk = 4; /* allowing case fallthrough */
/*   219 */                 case 4:
/*   220 */                     /* --- function return or resume suspension --- */
/*   221 */                     if ($ret && $ret.$isSuspension) {
/*   222 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 8, 0);
/*   223 */                     }
/*   224 */                     var $module143 = $ret;
/*   225 */                     $loc.ast = $module143;
/*   226 */ 
/*   227 */                     //
/*   228 */                     // line 9:
/*   229 */                     // from pedal.cait.ast_helpers import dump
/*   230 */                     // ^
/*   231 */                     //
/*   232 */                     Sk.currLineNo = 9;
/*   233 */                     Sk.currColNo = 0;
/*   234 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   235 */                     $currLineNo = 9;
/*   236 */                     $currColNo = 0;
/*   237 */                     $ret = Sk.builtin.__import__('pedal.cait.ast_helpers', $gbl, $loc, ['dump']);
/*   238 */                     $blk = 5; /* allowing case fallthrough */
/*   239 */                 case 5:
/*   240 */                     /* --- function return or resume suspension --- */
/*   241 */                     if ($ret && $ret.$isSuspension) {
/*   242 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 9, 0);
/*   243 */                     }
/*   244 */                     var $module144 = $ret;
/*   245 */                     var $item145 = Sk.abstr.gattr($module144, 'dump');
/*   246 */                     $loc.dump = $item145;
/*   247 */ 
/*   248 */                     //
/*   249 */                     // line 10:
/*   250 */                     // click("CaitNode: imported asthelpers")
/*   251 */                     // ^
/*   252 */                     //
/*   253 */                     Sk.currLineNo = 10;
/*   254 */                     Sk.currColNo = 0;
/*   255 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   256 */                     $currLineNo = 10;
/*   257 */                     $currColNo = 0;
/*   258 */                     var $loadname146 = $loc.click !== undefined ? $loc.click : Sk.misceval.loadname('click', $gbl);;
/*   259 */                     var $str147 = new Sk.builtins['str']('CaitNode: imported asthelpers');
/*   260 */                     $ret;
/*   261 */                     $ret = Sk.misceval.callsimOrSuspend($loadname146, $str147);
/*   262 */                     $blk = 6; /* allowing case fallthrough */
/*   263 */                 case 6:
/*   264 */                     /* --- function return or resume suspension --- */
/*   265 */                     if ($ret && $ret.$isSuspension) {
/*   266 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 10, 0);
/*   267 */                     }
/*   268 */                     var $call148 = $ret;
/*   269 */ 
/*   270 */                     //
/*   271 */                     // line 10:
/*   272 */                     // click("CaitNode: imported asthelpers")
/*   273 */                     // ^
/*   274 */                     //
/*   275 */                     Sk.currLineNo = 10;
/*   276 */                     Sk.currColNo = 0;
/*   277 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   278 */                     $currLineNo = 10;
/*   279 */                     $currColNo = 0;
/*   280 */ 
/*   281 */ 
/*   282 */                     //
/*   283 */                     // line 11:
/*   284 */                     // from types import MethodType
/*   285 */                     // ^
/*   286 */                     //
/*   287 */                     Sk.currLineNo = 11;
/*   288 */                     Sk.currColNo = 0;
/*   289 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   290 */                     $currLineNo = 11;
/*   291 */                     $currColNo = 0;
/*   292 */                     $ret = Sk.builtin.__import__('types', $gbl, $loc, ['MethodType']);
/*   293 */                     $blk = 7; /* allowing case fallthrough */
/*   294 */                 case 7:
/*   295 */                     /* --- function return or resume suspension --- */
/*   296 */                     if ($ret && $ret.$isSuspension) {
/*   297 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 11, 0);
/*   298 */                     }
/*   299 */                     var $module149 = $ret;
/*   300 */                     var $item150 = Sk.abstr.gattr($module149, 'MethodType');
/*   301 */                     $loc.MethodType = $item150;
/*   302 */ 
/*   303 */                     //
/*   304 */                     // line 12:
/*   305 */                     // from pedal.report import MAIN_REPORT
/*   306 */                     // ^
/*   307 */                     //
/*   308 */                     Sk.currLineNo = 12;
/*   309 */                     Sk.currColNo = 0;
/*   310 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   311 */                     $currLineNo = 12;
/*   312 */                     $currColNo = 0;
/*   313 */                     $ret = Sk.builtin.__import__('pedal.report', $gbl, $loc, ['MAIN_REPORT']);
/*   314 */                     $blk = 8; /* allowing case fallthrough */
/*   315 */                 case 8:
/*   316 */                     /* --- function return or resume suspension --- */
/*   317 */                     if ($ret && $ret.$isSuspension) {
/*   318 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 12, 0);
/*   319 */                     }
/*   320 */                     var $module151 = $ret;
/*   321 */                     var $item152 = Sk.abstr.gattr($module151, 'MAIN_REPORT');
/*   322 */                     $loc.MAIN_REPORT = $item152;
/*   323 */ 
/*   324 */                     //
/*   325 */                     // line 13:
/*   326 */                     // click("CaitNode: imported others")
/*   327 */                     // ^
/*   328 */                     //
/*   329 */                     Sk.currLineNo = 13;
/*   330 */                     Sk.currColNo = 0;
/*   331 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   332 */                     $currLineNo = 13;
/*   333 */                     $currColNo = 0;
/*   334 */                     var $loadname153 = $loc.click !== undefined ? $loc.click : Sk.misceval.loadname('click', $gbl);;
/*   335 */                     var $str154 = new Sk.builtins['str']('CaitNode: imported others');
/*   336 */                     $ret;
/*   337 */                     $ret = Sk.misceval.callsimOrSuspend($loadname153, $str154);
/*   338 */                     $blk = 9; /* allowing case fallthrough */
/*   339 */                 case 9:
/*   340 */                     /* --- function return or resume suspension --- */
/*   341 */                     if ($ret && $ret.$isSuspension) {
/*   342 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 13, 0);
/*   343 */                     }
/*   344 */                     var $call155 = $ret;
/*   345 */ 
/*   346 */                     //
/*   347 */                     // line 13:
/*   348 */                     // click("CaitNode: imported others")
/*   349 */                     // ^
/*   350 */                     //
/*   351 */                     Sk.currLineNo = 13;
/*   352 */                     Sk.currColNo = 0;
/*   353 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   354 */                     $currLineNo = 13;
/*   355 */                     $currColNo = 0;
/*   356 */ 
/*   357 */ 
/*   358 */                     //
/*   359 */                     // line 16:
/*   360 */                     // class CaitNode:
/*   361 */                     // ^
/*   362 */                     //
/*   363 */                     Sk.currLineNo = 16;
/*   364 */                     Sk.currColNo = 0;
/*   365 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   366 */                     $currLineNo = 16;
/*   367 */                     $currColNo = 0;
/*   368 */                     $scope156.co_name = new Sk.builtins['str']('CaitNode');
/*   369 */                     var $built932 = Sk.misceval.buildClass($gbl, $scope156, 'CaitNode', []);
/*   370 */                     $loc.CaitNode = $built932;
/*   371 */ 
/*   372 */                     //
/*   373 */                     // line 510:
/*   374 */                     // AST_SINGLE_FUNCTIONS = ["ctx_name", "op_name"]
/*   375 */                     // ^
/*   376 */                     //
/*   377 */                     Sk.currLineNo = 510;
/*   378 */                     Sk.currColNo = 0;
/*   379 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   380 */                     $currLineNo = 510;
/*   381 */                     $currColNo = 0;
/*   382 */                     var $str933 = new Sk.builtins['str']('ctx_name');
/*   383 */                     var $elem934 = $str933;
/*   384 */                     var $str935 = new Sk.builtins['str']('op_name');
/*   385 */                     var $elem936 = $str935;
/*   386 */                     var $loadlist937 = new Sk.builtins['list']([$elem934, $elem936]);
/*   387 */                     $loc.AST_SINGLE_FUNCTIONS = $loadlist937;
/*   388 */ 
/*   389 */                     //
/*   390 */                     // line 511:
/*   391 */                     // AST_ARRAYS_OF_FUNCTIONS = ["ops_names"]
/*   392 */                     // ^
/*   393 */                     //
/*   394 */                     Sk.currLineNo = 511;
/*   395 */                     Sk.currColNo = 0;
/*   396 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   397 */                     $currLineNo = 511;
/*   398 */                     $currColNo = 0;
/*   399 */                     var $str938 = new Sk.builtins['str']('ops_names');
/*   400 */                     var $elem939 = $str938;
/*   401 */                     var $loadlist940 = new Sk.builtins['list']([$elem939]);
/*   402 */                     $loc.AST_ARRAYS_OF_FUNCTIONS = $loadlist940;
/*   403 */ 
/*   404 */                     //
/*   405 */                     // line 512:
/*   406 */                     // click("CaitNode: self")
/*   407 */                     // ^
/*   408 */                     //
/*   409 */                     Sk.currLineNo = 512;
/*   410 */                     Sk.currColNo = 0;
/*   411 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   412 */                     $currLineNo = 512;
/*   413 */                     $currColNo = 0;
/*   414 */                     var $loadname941 = $loc.click !== undefined ? $loc.click : Sk.misceval.loadname('click', $gbl);;
/*   415 */                     var $str942 = new Sk.builtins['str']('CaitNode: self');
/*   416 */                     $ret;
/*   417 */                     $ret = Sk.misceval.callsimOrSuspend($loadname941, $str942);
/*   418 */                     $blk = 10; /* allowing case fallthrough */
/*   419 */                 case 10:
/*   420 */                     /* --- function return or resume suspension --- */
/*   421 */                     if ($ret && $ret.$isSuspension) {
/*   422 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 512, 0);
/*   423 */                     }
/*   424 */                     var $call943 = $ret;
/*   425 */ 
/*   426 */                     //
/*   427 */                     // line 512:
/*   428 */                     // click("CaitNode: self")
/*   429 */                     // ^
/*   430 */                     //
/*   431 */                     Sk.currLineNo = 512;
/*   432 */                     Sk.currColNo = 0;
/*   433 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   434 */                     $currLineNo = 512;
/*   435 */                     $currColNo = 0;
/*   436 */                     return $loc;
/*   437 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   438 */                 }
/*   439 */             } catch (err) {
/*   440 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*   441 */                     Sk.execStart = Date.now()
/*   442 */                 }
/*   443 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   444 */                     err = new Sk.builtin.ExternalError(err);
/*   445 */                 }
/*   446 */                 err.traceback.push({
/*   447 */                     lineno: $currLineNo,
/*   448 */                     colno: $currColNo,
/*   449 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*   450 */                 });
/*   451 */                 if ($exc.length > 0) {
/*   452 */                     $err = err;
/*   453 */                     Sk.err = $err;
/*   454 */                     $blk = $exc.pop();
/*   455 */                     continue;
/*   456 */                 } else {
/*   457 */                     throw err;
/*   458 */                 }
/*   459 */             }
/*   460 */         }
/*   461 */     });
/*   462 */     var $scope125 = (function $click126$(phase) {
/*   463 */         var diff; /* locals */
/*   464 */         var diff, diff, phase, phase, $loadgbl127, $loadgbl127, $lattr128, $loadgbl132, $str133, $loadgbl132, $str133, $lattr134, $loadgbl135, $loadgbl132, $str133, $lattr134, $loadgbl135, $call136, $loadgbl132, $str133, $lattr134, $loadgbl135, $call136, $call137, $loadgbl139, $loadgbl139, $lattr140;
/*   465 */         var $wakeFromSuspension = function() {
/*   466 */             var susp = $scope125.$wakingSuspension;
/*   467 */             delete $scope125.$wakingSuspension;
/*   468 */             $blk = susp.$blk;
/*   469 */             $loc = susp.$loc;
/*   470 */             $gbl = susp.$gbl;
/*   471 */             $exc = susp.$exc;
/*   472 */             $err = susp.$err;
/*   473 */             Sk.err = $err;
/*   474 */             $postfinally = susp.$postfinally;
/*   475 */             $currLineNo = susp.$lineno;
/*   476 */             $currColNo = susp.$colno;
/*   477 */             Sk.lastYield = Date.now();
/*   478 */             diff = susp.$tmps.diff;
/*   479 */             phase = susp.$tmps.phase;
/*   480 */             $loadgbl127 = susp.$tmps.$loadgbl127;
/*   481 */             $lattr128 = susp.$tmps.$lattr128;
/*   482 */             $loadgbl132 = susp.$tmps.$loadgbl132;
/*   483 */             $str133 = susp.$tmps.$str133;
/*   484 */             $lattr134 = susp.$tmps.$lattr134;
/*   485 */             $loadgbl135 = susp.$tmps.$loadgbl135;
/*   486 */             $call136 = susp.$tmps.$call136;
/*   487 */             $call137 = susp.$tmps.$call137;
/*   488 */             $loadgbl139 = susp.$tmps.$loadgbl139;
/*   489 */             $lattr140 = susp.$tmps.$lattr140;
/*   490 */             try {
/*   491 */                 $ret = susp.child.resume();
/*   492 */             } catch (err) {
/*   493 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*   494 */                     Sk.execStart = Date.now()
/*   495 */                 }
/*   496 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   497 */                     err = new Sk.builtin.ExternalError(err);
/*   498 */                 }
/*   499 */                 err.traceback.push({
/*   500 */                     lineno: $currLineNo,
/*   501 */                     colno: $currColNo,
/*   502 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*   503 */                 });
/*   504 */                 if ($exc.length > 0) {
/*   505 */                     $err = err;
/*   506 */                     Sk.err = $err;
/*   507 */                     $blk = $exc.pop();
/*   508 */                 } else {
/*   509 */                     throw err;
/*   510 */                 }
/*   511 */             }
/*   512 */         };
/*   513 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   514 */             var susp = new Sk.misceval.Suspension();
/*   515 */             susp.child = $child;
/*   516 */             susp.resume = function() {
/*   517 */                 $scope125.$wakingSuspension = susp;
/*   518 */                 return $scope125();
/*   519 */             };
/*   520 */             susp.data = susp.child.data;
/*   521 */             susp.$blk = $blk;
/*   522 */             susp.$loc = $loc;
/*   523 */             susp.$gbl = $gbl;
/*   524 */             susp.$exc = $exc;
/*   525 */             susp.$err = $err;
/*   526 */             susp.$postfinally = $postfinally;
/*   527 */             susp.$filename = $filename;
/*   528 */             susp.$lineno = $lineno;
/*   529 */             susp.$colno = $colno;
/*   530 */             susp.optional = susp.child.optional;
/*   531 */             susp.$tmps = {
/*   532 */                 "diff": diff,
/*   533 */                 "phase": phase,
/*   534 */                 "$loadgbl127": $loadgbl127,
/*   535 */                 "$lattr128": $lattr128,
/*   536 */                 "$loadgbl132": $loadgbl132,
/*   537 */                 "$str133": $str133,
/*   538 */                 "$lattr134": $lattr134,
/*   539 */                 "$loadgbl135": $loadgbl135,
/*   540 */                 "$call136": $call136,
/*   541 */                 "$call137": $call137,
/*   542 */                 "$loadgbl139": $loadgbl139,
/*   543 */                 "$lattr140": $lattr140
/*   544 */             };
/*   545 */             return susp;
/*   546 */         };
/*   547 */         var $blk = 0,
/*   548 */             $exc = [],
/*   549 */             $loc = {},
/*   550 */             $gbl = this,
/*   551 */             $err = undefined,
/*   552 */             $ret = undefined,
/*   553 */             $postfinally = undefined,
/*   554 */             $currLineNo = undefined,
/*   555 */             $currColNo = undefined;
/*   556 */         Sk.err = $err;
/*   557 */         if (typeof Sk.execStart === 'undefined') {
/*   558 */             Sk.execStart = Date.now()
/*   559 */         }
/*   560 */         if (typeof Sk.lastYield === 'undefined') {
/*   561 */             Sk.lastYield = Date.now()
/*   562 */         }
/*   563 */         if ($scope125.$wakingSuspension !== undefined) {
/*   564 */             $wakeFromSuspension();
/*   565 */         } else {
/*   566 */             Sk.builtin.pyCheckArgs("click", arguments, 1, 1, false, false);
/*   567 */         }
/*   568 */         while (true) {
/*   569 */             try {
/*   570 */                 var $dateNow = Date.now();
/*   571 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*   572 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   573 */                 }
/*   574 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   575 */                     var $susp = $saveSuspension({
/*   576 */                         data: {
/*   577 */                             type: 'Sk.yield'
/*   578 */                         },
/*   579 */                         resume: function() {}
/*   580 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*   581 */                     $susp.$blk = $blk;
/*   582 */                     $susp.optional = true;
/*   583 */                     return $susp;
/*   584 */                 }
/*   585 */                 switch ($blk) {
/*   586 */                 case 0:
/*   587 */                     /* --- codeobj entry --- */
/*   588 */                     if (phase === undefined) {
/*   589 */                         throw new Sk.builtin.UnboundLocalError('local variable \'phase\' referenced before assignment');
/*   590 */                     }
/*   591 */ 
/*   592 */ 
/*   593 */                     //
/*   594 */                     // line 4:
/*   595 */                     //     global stopwatch
/*   596 */                     //     ^
/*   597 */                     //
/*   598 */                     Sk.currLineNo = 4;
/*   599 */                     Sk.currColNo = 4;
/*   600 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   601 */                     $currLineNo = 4;
/*   602 */                     $currColNo = 4;
/*   603 */ 
/*   604 */ 
/*   605 */                     //
/*   606 */                     // line 5:
/*   607 */                     //     diff = time.time() - stopwatch
/*   608 */                     //     ^
/*   609 */                     //
/*   610 */                     Sk.currLineNo = 5;
/*   611 */                     Sk.currColNo = 4;
/*   612 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   613 */                     $currLineNo = 5;
/*   614 */                     $currColNo = 4;
/*   615 */                     var $loadgbl127 = Sk.misceval.loadname('time', $gbl);
/*   616 */                     $ret = Sk.abstr.gattr($loadgbl127, 'time', true);
/*   617 */                     $blk = 1; /* allowing case fallthrough */
/*   618 */                 case 1:
/*   619 */                     /* --- function return or resume suspension --- */
/*   620 */                     if ($ret && $ret.$isSuspension) {
/*   621 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 5, 11);
/*   622 */                     }
/*   623 */                     var $lattr128 = $ret;
/*   624 */                     $ret;
/*   625 */                     $ret = Sk.misceval.callsimOrSuspend($lattr128);
/*   626 */                     $blk = 2; /* allowing case fallthrough */
/*   627 */                 case 2:
/*   628 */                     /* --- function return or resume suspension --- */
/*   629 */                     if ($ret && $ret.$isSuspension) {
/*   630 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 5, 11);
/*   631 */                     }
/*   632 */                     var $call129 = $ret;
/*   633 */ 
/*   634 */                     //
/*   635 */                     // line 5:
/*   636 */                     //     diff = time.time() - stopwatch
/*   637 */                     //            ^
/*   638 */                     //
/*   639 */                     Sk.currLineNo = 5;
/*   640 */                     Sk.currColNo = 11;
/*   641 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   642 */                     $currLineNo = 5;
/*   643 */                     $currColNo = 11;
/*   644 */                     var $loadgbl130 = Sk.misceval.loadname('stopwatch', $gbl);
/*   645 */                     var $binop131 = Sk.abstr.numberBinOp($call129, $loadgbl130, 'Sub');
/*   646 */                     diff = $binop131;
/*   647 */ 
/*   648 */                     //
/*   649 */                     // line 6:
/*   650 */                     //     print("Phase {}: {} secs".format(phase, round(diff, 2)))
/*   651 */                     //     ^
/*   652 */                     //
/*   653 */                     Sk.currLineNo = 6;
/*   654 */                     Sk.currColNo = 4;
/*   655 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   656 */                     $currLineNo = 6;
/*   657 */                     $currColNo = 4;
/*   658 */                     var $loadgbl132 = Sk.misceval.loadname('print', $gbl);
/*   659 */                     var $str133 = new Sk.builtins['str']('Phase {}: {} secs');
/*   660 */                     $ret = Sk.abstr.gattr($str133, 'format', true);
/*   661 */                     $blk = 3; /* allowing case fallthrough */
/*   662 */                 case 3:
/*   663 */                     /* --- function return or resume suspension --- */
/*   664 */                     if ($ret && $ret.$isSuspension) {
/*   665 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 6, 10);
/*   666 */                     }
/*   667 */                     var $lattr134 = $ret;
/*   668 */                     if (phase === undefined) {
/*   669 */                         throw new Sk.builtin.UnboundLocalError('local variable \'phase\' referenced before assignment');
/*   670 */                     }
/*   671 */                     var $loadgbl135 = Sk.misceval.loadname('round', $gbl);
/*   672 */                     if (diff === undefined) {
/*   673 */                         throw new Sk.builtin.UnboundLocalError('local variable \'diff\' referenced before assignment');
/*   674 */                     }
/*   675 */                     $ret;
/*   676 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl135, diff, new Sk.builtin.int_(2));
/*   677 */                     $blk = 4; /* allowing case fallthrough */
/*   678 */                 case 4:
/*   679 */                     /* --- function return or resume suspension --- */
/*   680 */                     if ($ret && $ret.$isSuspension) {
/*   681 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 6, 44);
/*   682 */                     }
/*   683 */                     var $call136 = $ret;
/*   684 */ 
/*   685 */                     //
/*   686 */                     // line 6:
/*   687 */                     //     print("Phase {}: {} secs".format(phase, round(diff, 2)))
/*   688 */                     //                                             ^
/*   689 */                     //
/*   690 */                     Sk.currLineNo = 6;
/*   691 */                     Sk.currColNo = 44;
/*   692 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   693 */                     $currLineNo = 6;
/*   694 */                     $currColNo = 44;
/*   695 */                     $ret;
/*   696 */                     $ret = Sk.misceval.callsimOrSuspend($lattr134, phase, $call136);
/*   697 */                     $blk = 5; /* allowing case fallthrough */
/*   698 */                 case 5:
/*   699 */                     /* --- function return or resume suspension --- */
/*   700 */                     if ($ret && $ret.$isSuspension) {
/*   701 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 6, 10);
/*   702 */                     }
/*   703 */                     var $call137 = $ret;
/*   704 */ 
/*   705 */                     //
/*   706 */                     // line 6:
/*   707 */                     //     print("Phase {}: {} secs".format(phase, round(diff, 2)))
/*   708 */                     //           ^
/*   709 */                     //
/*   710 */                     Sk.currLineNo = 6;
/*   711 */                     Sk.currColNo = 10;
/*   712 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   713 */                     $currLineNo = 6;
/*   714 */                     $currColNo = 10;
/*   715 */                     $ret;
/*   716 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl132, $call137);
/*   717 */                     $blk = 6; /* allowing case fallthrough */
/*   718 */                 case 6:
/*   719 */                     /* --- function return or resume suspension --- */
/*   720 */                     if ($ret && $ret.$isSuspension) {
/*   721 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 6, 4);
/*   722 */                     }
/*   723 */                     var $call138 = $ret;
/*   724 */ 
/*   725 */                     //
/*   726 */                     // line 6:
/*   727 */                     //     print("Phase {}: {} secs".format(phase, round(diff, 2)))
/*   728 */                     //     ^
/*   729 */                     //
/*   730 */                     Sk.currLineNo = 6;
/*   731 */                     Sk.currColNo = 4;
/*   732 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   733 */                     $currLineNo = 6;
/*   734 */                     $currColNo = 4;
/*   735 */ 
/*   736 */ 
/*   737 */                     //
/*   738 */                     // line 7:
/*   739 */                     //     stopwatch = time.time()
/*   740 */                     //     ^
/*   741 */                     //
/*   742 */                     Sk.currLineNo = 7;
/*   743 */                     Sk.currColNo = 4;
/*   744 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   745 */                     $currLineNo = 7;
/*   746 */                     $currColNo = 4;
/*   747 */                     var $loadgbl139 = Sk.misceval.loadname('time', $gbl);
/*   748 */                     $ret = Sk.abstr.gattr($loadgbl139, 'time', true);
/*   749 */                     $blk = 7; /* allowing case fallthrough */
/*   750 */                 case 7:
/*   751 */                     /* --- function return or resume suspension --- */
/*   752 */                     if ($ret && $ret.$isSuspension) {
/*   753 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 7, 16);
/*   754 */                     }
/*   755 */                     var $lattr140 = $ret;
/*   756 */                     $ret;
/*   757 */                     $ret = Sk.misceval.callsimOrSuspend($lattr140);
/*   758 */                     $blk = 8; /* allowing case fallthrough */
/*   759 */                 case 8:
/*   760 */                     /* --- function return or resume suspension --- */
/*   761 */                     if ($ret && $ret.$isSuspension) {
/*   762 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 7, 16);
/*   763 */                     }
/*   764 */                     var $call141 = $ret;
/*   765 */ 
/*   766 */                     //
/*   767 */                     // line 7:
/*   768 */                     //     stopwatch = time.time()
/*   769 */                     //                 ^
/*   770 */                     //
/*   771 */                     Sk.currLineNo = 7;
/*   772 */                     Sk.currColNo = 16;
/*   773 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   774 */                     $currLineNo = 7;
/*   775 */                     $currColNo = 16;
/*   776 */                     $gbl.stopwatch = $call141;
/*   777 */                     return Sk.builtin.none.none$;
/*   778 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   779 */                 }
/*   780 */             } catch (err) {
/*   781 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*   782 */                     Sk.execStart = Date.now()
/*   783 */                 }
/*   784 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   785 */                     err = new Sk.builtin.ExternalError(err);
/*   786 */                 }
/*   787 */                 err.traceback.push({
/*   788 */                     lineno: $currLineNo,
/*   789 */                     colno: $currColNo,
/*   790 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*   791 */                 });
/*   792 */                 if ($exc.length > 0) {
/*   793 */                     $err = err;
/*   794 */                     Sk.err = $err;
/*   795 */                     $blk = $exc.pop();
/*   796 */                     continue;
/*   797 */                 } else {
/*   798 */                     throw err;
/*   799 */                 }
/*   800 */             }
/*   801 */         }
/*   802 */     });
/*   803 */     var $scope156 = (function $CaitNode$class_outer($globals, $locals, $rest) {
/*   804 */         var $gbl = $globals,
/*   805 */             $loc = $locals;
/*   806 */         (function $CaitNode$_closure() {
/*   807 */             var $blk = 0,
/*   808 */                 $exc = [],
/*   809 */                 $ret = undefined,
/*   810 */                 $postfinally = undefined,
/*   811 */                 $currLineNo = undefined,
/*   812 */                 $currColNo = undefined;
/*   813 */             if (typeof Sk.execStart === 'undefined') {
/*   814 */                 Sk.execStart = Date.now()
/*   815 */             }
/*   816 */             while (true) {
/*   817 */                 try {
/*   818 */                     var $dateNow = Date.now();
/*   819 */                     if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*   820 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   821 */                     }
/*   822 */                     switch ($blk) {
/*   823 */                     case 0:
/*   824 */                         /* --- class entry --- */
/*   825 */ 
/*   826 */                         //
/*   827 */                         // line 17:
/*   828 */                         //     """
/*   829 */                         //     ^
/*   830 */                         //
/*   831 */                         Sk.currLineNo = 17;
/*   832 */                         Sk.currColNo = 4;
/*   833 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   834 */                         $currLineNo = 17;
/*   835 */                         $currColNo = 4;
/*   836 */                         var $str157 = new Sk.builtins['str']('\n    A wrapper class for AST nodes. Linearizes access to the children of the ast\n    node and saves the field this AST node\n    originated from.\n\n    Attributes:\n        ast_name (str): The name of the original AstNode (e.g., "Name" or\n            "FunctionDef")\n\n    TODO: May want to just add fields and methods to the existing AST nodes and\n    use a production pattern instead.\n    ');
/*   837 */ 
/*   838 */                         //
/*   839 */                         // line 30:
/*   840 */                         //     def __init__(self, ast_node, my_field='', tid=0, lin_tree=None,
/*   841 */                         //     ^
/*   842 */                         //
/*   843 */                         Sk.currLineNo = 30;
/*   844 */                         Sk.currColNo = 4;
/*   845 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   846 */                         $currLineNo = 30;
/*   847 */                         $currColNo = 4;
/*   848 */                         var $str158 = new Sk.builtins['str']('');
/*   849 */                         $scope159.co_name = new Sk.builtins['str']('__init__');
/*   850 */                         $scope159.$defaults = [$str158, new Sk.builtin.int_(0), Sk.builtin.none.none$, Sk.builtin.none.none$, Sk.builtin.none.none$];
/*   851 */                         $scope159.co_varnames = ['self', 'ast_node', 'my_field', 'tid', 'lin_tree', 'ancestor', 'report'];
/*   852 */                         var $funcobj213 = new Sk.builtins['function']($scope159, $gbl);
/*   853 */                         $loc.__init__ = $funcobj213;
/*   854 */ 
/*   855 */                         //
/*   856 */                         // line 86:
/*   857 */                         //     def __str__(self):
/*   858 */                         //     ^
/*   859 */                         //
/*   860 */                         Sk.currLineNo = 86;
/*   861 */                         Sk.currColNo = 4;
/*   862 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   863 */                         $currLineNo = 86;
/*   864 */                         $currColNo = 4;
/*   865 */                         $scope214.co_name = new Sk.builtins['str']('__str__');
/*   866 */                         $scope214.co_varnames = ['self'];
/*   867 */                         var $funcobj228 = new Sk.builtins['function']($scope214, $gbl);
/*   868 */                         $loc.__str__ = $funcobj228;
/*   869 */ 
/*   870 */                         //
/*   871 */                         // line 89:
/*   872 */                         //     def numeric_logic_check(self, mag, expr):
/*   873 */                         //     ^
/*   874 */                         //
/*   875 */                         Sk.currLineNo = 89;
/*   876 */                         Sk.currColNo = 4;
/*   877 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   878 */                         $currLineNo = 89;
/*   879 */                         $currColNo = 4;
/*   880 */                         $scope229.co_name = new Sk.builtins['str']('numeric_logic_check');
/*   881 */                         $scope229.co_varnames = ['self', 'mag', 'expr'];
/*   882 */                         var $funcobj448 = new Sk.builtins['function']($scope229, $gbl);
/*   883 */                         $loc.numeric_logic_check = $funcobj448;
/*   884 */ 
/*   885 */                         //
/*   886 */                         // line 221:
/*   887 */                         //     def get_next_tree(self):
/*   888 */                         //     ^
/*   889 */                         //
/*   890 */                         Sk.currLineNo = 221;
/*   891 */                         Sk.currColNo = 4;
/*   892 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   893 */                         $currLineNo = 221;
/*   894 */                         $currColNo = 4;
/*   895 */                         $scope449.co_name = new Sk.builtins['str']('get_next_tree');
/*   896 */                         $scope449.co_varnames = ['self'];
/*   897 */                         var $funcobj481 = new Sk.builtins['function']($scope449, $gbl);
/*   898 */                         $loc.get_next_tree = $funcobj481;
/*   899 */ 
/*   900 */                         //
/*   901 */                         // line 249:
/*   902 */                         //     def get_child(self, node):
/*   903 */                         //     ^
/*   904 */                         //
/*   905 */                         Sk.currLineNo = 249;
/*   906 */                         Sk.currColNo = 4;
/*   907 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   908 */                         $currLineNo = 249;
/*   909 */                         $currColNo = 4;
/*   910 */                         $scope482.co_name = new Sk.builtins['str']('get_child');
/*   911 */                         $scope482.co_varnames = ['self', 'node'];
/*   912 */                         var $funcobj503 = new Sk.builtins['function']($scope482, $gbl);
/*   913 */                         $loc.get_child = $funcobj503;
/*   914 */ 
/*   915 */                         //
/*   916 */                         // line 266:
/*   917 */                         //     @staticmethod
/*   918 */                         //     ^
/*   919 */                         //
/*   920 */                         Sk.currLineNo = 266;
/*   921 */                         Sk.currColNo = 4;
/*   922 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   923 */                         $currLineNo = 266;
/*   924 */                         $currColNo = 4;
/*   925 */                         var $loadname504 = $loc.staticmethod !== undefined ? $loc.staticmethod : Sk.misceval.loadname('staticmethod', $gbl);;
/*   926 */                         $scope505.co_name = new Sk.builtins['str']('get_ast_name');
/*   927 */                         $scope505.$decorators = [$loadname504];
/*   928 */                         $scope505.co_varnames = ['node'];
/*   929 */                         $ret = Sk.misceval.callsimOrSuspend($scope505.$decorators[0], new Sk.builtins['function']($scope505, $gbl));
/*   930 */                         if ($ret && $ret.$isSuspension) {
/*   931 */                             $ret = Sk.misceval.retryOptionalSuspensionOrThrow($ret);
/*   932 */                         }
/*   933 */                         var $funcobj510 = $ret;
/*   934 */                         $loc.get_ast_name = $funcobj510;
/*   935 */ 
/*   936 */                         //
/*   937 */                         // line 270:
/*   938 */                         //     def get_clashing_attr(self, key):
/*   939 */                         //     ^
/*   940 */                         //
/*   941 */                         Sk.currLineNo = 270;
/*   942 */                         Sk.currColNo = 4;
/*   943 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   944 */                         $currLineNo = 270;
/*   945 */                         $currColNo = 4;
/*   946 */                         $scope511.co_name = new Sk.builtins['str']('get_clashing_attr');
/*   947 */                         $scope511.co_varnames = ['self', 'key'];
/*   948 */                         var $funcobj519 = new Sk.builtins['function']($scope511, $gbl);
/*   949 */                         $loc.get_clashing_attr = $funcobj519;
/*   950 */ 
/*   951 */                         //
/*   952 */                         // line 274:
/*   953 */                         //     def __getattr__(self, item):
/*   954 */                         //     ^
/*   955 */                         //
/*   956 */                         Sk.currLineNo = 274;
/*   957 */                         Sk.currColNo = 4;
/*   958 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   959 */                         $currLineNo = 274;
/*   960 */                         $currColNo = 4;
/*   961 */                         $scope520.co_name = new Sk.builtins['str']('__getattr__');
/*   962 */                         $scope520.co_varnames = ['self', 'item'];
/*   963 */                         var $funcobj651 = new Sk.builtins['function']($scope520, $gbl);
/*   964 */                         $loc.__getattr__ = $funcobj651;
/*   965 */ 
/*   966 */                         //
/*   967 */                         // line 336:
/*   968 */                         //     def find_matches(self, pattern, is_mod=False):
/*   969 */                         //     ^
/*   970 */                         //
/*   971 */                         Sk.currLineNo = 336;
/*   972 */                         Sk.currColNo = 4;
/*   973 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   974 */                         $currLineNo = 336;
/*   975 */                         $currColNo = 4;
/*   976 */                         $scope652.co_name = new Sk.builtins['str']('find_matches');
/*   977 */                         $scope652.$defaults = [Sk.builtin.bool.false$];
/*   978 */                         $scope652.co_varnames = ['self', 'pattern', 'is_mod'];
/*   979 */                         var $funcobj700 = new Sk.builtins['function']($scope652, $gbl);
/*   980 */                         $loc.find_matches = $funcobj700;
/*   981 */ 
/*   982 */                         //
/*   983 */                         // line 351:
/*   984 */                         //     def find_match(self, pattern, is_mod=False):
/*   985 */                         //     ^
/*   986 */                         //
/*   987 */                         Sk.currLineNo = 351;
/*   988 */                         Sk.currColNo = 4;
/*   989 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*   990 */                         $currLineNo = 351;
/*   991 */                         $currColNo = 4;
/*   992 */                         $scope701.co_name = new Sk.builtins['str']('find_match');
/*   993 */                         $scope701.$defaults = [Sk.builtin.bool.false$];
/*   994 */                         $scope701.co_varnames = ['self', 'pattern', 'is_mod'];
/*   995 */                         var $funcobj711 = new Sk.builtins['function']($scope701, $gbl);
/*   996 */                         $loc.find_match = $funcobj711;
/*   997 */ 
/*   998 */                         //
/*   999 */                         // line 357:
/*  1000 */                         //     def find_all(self, node_type):
/*  1001 */                         //     ^
/*  1002 */                         //
/*  1003 */                         Sk.currLineNo = 357;
/*  1004 */                         Sk.currColNo = 4;
/*  1005 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1006 */                         $currLineNo = 357;
/*  1007 */                         $currColNo = 4;
/*  1008 */                         $scope712.co_name = new Sk.builtins['str']('find_all');
/*  1009 */                         $scope712.co_varnames = ['self', 'node_type'];
/*  1010 */                         var $funcobj741 = new Sk.builtins['function']($scope712, $gbl);
/*  1011 */                         $loc.find_all = $funcobj741;
/*  1012 */ 
/*  1013 */                         //
/*  1014 */                         // line 382:
/*  1015 */                         //     def has(self, node):
/*  1016 */                         //     ^
/*  1017 */                         //
/*  1018 */                         Sk.currLineNo = 382;
/*  1019 */                         Sk.currColNo = 4;
/*  1020 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1021 */                         $currLineNo = 382;
/*  1022 */                         $currColNo = 4;
/*  1023 */                         $scope742.co_name = new Sk.builtins['str']('has');
/*  1024 */                         $scope742.co_varnames = ['self', 'node'];
/*  1025 */                         var $funcobj801 = new Sk.builtins['function']($scope742, $gbl);
/*  1026 */                         $loc.has = $funcobj801;
/*  1027 */ 
/*  1028 */                         //
/*  1029 */                         // line 410:
/*  1030 */                         //     def is_before(self, other):
/*  1031 */                         //     ^
/*  1032 */                         //
/*  1033 */                         Sk.currLineNo = 410;
/*  1034 */                         Sk.currColNo = 4;
/*  1035 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1036 */                         $currLineNo = 410;
/*  1037 */                         $currColNo = 4;
/*  1038 */                         $scope802.co_name = new Sk.builtins['str']('is_before');
/*  1039 */                         $scope802.co_varnames = ['self', 'other'];
/*  1040 */                         var $funcobj821 = new Sk.builtins['function']($scope802, $gbl);
/*  1041 */                         $loc.is_before = $funcobj821;
/*  1042 */ 
/*  1043 */                         //
/*  1044 */                         // line 424:
/*  1045 */                         //     def is_ast(self, ast_name):
/*  1046 */                         //     ^
/*  1047 */                         //
/*  1048 */                         Sk.currLineNo = 424;
/*  1049 */                         Sk.currColNo = 4;
/*  1050 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1051 */                         $currLineNo = 424;
/*  1052 */                         $currColNo = 4;
/*  1053 */                         $scope822.co_name = new Sk.builtins['str']('is_ast');
/*  1054 */                         $scope822.co_varnames = ['self', 'ast_name'];
/*  1055 */                         var $funcobj844 = new Sk.builtins['function']($scope822, $gbl);
/*  1056 */                         $loc.is_ast = $funcobj844;
/*  1057 */ 
/*  1058 */                         //
/*  1059 */                         // line 437:
/*  1060 */                         //     def is_method(self):
/*  1061 */                         //     ^
/*  1062 */                         //
/*  1063 */                         Sk.currLineNo = 437;
/*  1064 */                         Sk.currColNo = 4;
/*  1065 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1066 */                         $currLineNo = 437;
/*  1067 */                         $currColNo = 4;
/*  1068 */                         $scope845.co_name = new Sk.builtins['str']('is_method');
/*  1069 */                         $scope845.co_varnames = ['self'];
/*  1070 */                         var $funcobj868 = new Sk.builtins['function']($scope845, $gbl);
/*  1071 */                         $loc.is_method = $funcobj868;
/*  1072 */ 
/*  1073 */                         //
/*  1074 */                         // line 457:
/*  1075 */                         //     def get_data_state(self):
/*  1076 */                         //     ^
/*  1077 */                         //
/*  1078 */                         Sk.currLineNo = 457;
/*  1079 */                         Sk.currColNo = 4;
/*  1080 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1081 */                         $currLineNo = 457;
/*  1082 */                         $currColNo = 4;
/*  1083 */                         $scope869.co_name = new Sk.builtins['str']('get_data_state');
/*  1084 */                         $scope869.co_varnames = ['self'];
/*  1085 */                         var $funcobj887 = new Sk.builtins['function']($scope869, $gbl);
/*  1086 */                         $loc.get_data_state = $funcobj887;
/*  1087 */ 
/*  1088 */                         //
/*  1089 */                         // line 471:
/*  1090 */                         //     def get_data_type(self):
/*  1091 */                         //     ^
/*  1092 */                         //
/*  1093 */                         Sk.currLineNo = 471;
/*  1094 */                         Sk.currColNo = 4;
/*  1095 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1096 */                         $currLineNo = 471;
/*  1097 */                         $currColNo = 4;
/*  1098 */                         $scope888.co_name = new Sk.builtins['str']('get_data_type');
/*  1099 */                         $scope888.co_varnames = ['self'];
/*  1100 */                         var $funcobj897 = new Sk.builtins['function']($scope888, $gbl);
/*  1101 */                         $loc.get_data_type = $funcobj897;
/*  1102 */ 
/*  1103 */                         //
/*  1104 */                         // line 483:
/*  1105 */                         //     def was_type(self, tp):
/*  1106 */                         //     ^
/*  1107 */                         //
/*  1108 */                         Sk.currLineNo = 483;
/*  1109 */                         Sk.currColNo = 4;
/*  1110 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1111 */                         $currLineNo = 483;
/*  1112 */                         $currColNo = 4;
/*  1113 */                         $scope898.co_name = new Sk.builtins['str']('was_type');
/*  1114 */                         $scope898.co_varnames = ['self', 'tp'];
/*  1115 */                         var $funcobj908 = new Sk.builtins['function']($scope898, $gbl);
/*  1116 */                         $loc.was_type = $funcobj908;
/*  1117 */ 
/*  1118 */                         //
/*  1119 */                         // line 495:
/*  1120 */                         //     def get_value(self):
/*  1121 */                         //     ^
/*  1122 */                         //
/*  1123 */                         Sk.currLineNo = 495;
/*  1124 */                         Sk.currColNo = 4;
/*  1125 */                         Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1126 */                         $currLineNo = 495;
/*  1127 */                         $currColNo = 4;
/*  1128 */                         $scope909.co_name = new Sk.builtins['str']('get_value');
/*  1129 */                         $scope909.co_varnames = ['self'];
/*  1130 */                         var $funcobj931 = new Sk.builtins['function']($scope909, $gbl);
/*  1131 */                         $loc.get_value = $funcobj931;
/*  1132 */                         return;
/*  1133 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1134 */                     }
/*  1135 */                 } catch (err) {
/*  1136 */                     if (err instanceof Sk.builtin.TimeLimitError) {
/*  1137 */                         Sk.execStart = Date.now()
/*  1138 */                     }
/*  1139 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*  1140 */                         err = new Sk.builtin.ExternalError(err);
/*  1141 */                     }
/*  1142 */                     err.traceback.push({
/*  1143 */                         lineno: $currLineNo,
/*  1144 */                         colno: $currColNo,
/*  1145 */                         filename: 'src/lib/pedal/cait/cait_node.py'
/*  1146 */                     });
/*  1147 */                     if ($exc.length > 0) {
/*  1148 */                         $err = err;
/*  1149 */                         Sk.err = $err;
/*  1150 */                         $blk = $exc.pop();
/*  1151 */                         continue;
/*  1152 */                     } else {
/*  1153 */                         throw err;
/*  1154 */                     }
/*  1155 */                 }
/*  1156 */             }
/*  1157 */         }).apply(null, $rest);
/*  1158 */     });
/*  1159 */     var $scope159 = (function $__init__160$(self, ast_node, my_field, tid, lin_tree, ancestor, report) {
/*  1160 */         var field, item, my_field_generator, new_child, sub_value, tid_count, value; /* locals */
/*  1161 */         var ancestor, ancestor, ancestor, ast_node, ast_node, ast_node, field, field, item, item, lin_tree, lin_tree, lin_tree, lin_tree, lin_tree, my_field, my_field, my_field, my_field_generator, my_field_generator, new_child, new_child, report, report, report, report, report, self, self, self, self, self, self, self, self, self, self, self, self, self, self, self, self, self, self, sub_value, sub_value, sub_value, tid, tid, tid, tid, tid_count, tid_count, tid_count, value, value, value, value, value, value, $compareres162, $loadlist166, $compareres167, $elem170, $loadlist171, $lattr172, $loadgbl174, $str175, $loadgbl177, $loadgbl177, $lattr178, $loadgbl177, $lattr178, $lattr179, $iter181, $iter181, $compareres184, $loadgbl187, $loadgbl188, $iter194, $iter194, $loadgbl196, $loadgbl197, $loadgbl196, $loadgbl197, $lattr198, $loadgbl201, $binop202, $loadgbl201, $binop202, $lattr203, $loadgbl201, $binop202, $lattr203, $lattr204, $lattr206, $lattr206, $lattr207, $loadgbl209, $loadgbl209, $lattr210;
/*  1162 */         var $wakeFromSuspension = function() {
/*  1163 */             var susp = $scope159.$wakingSuspension;
/*  1164 */             delete $scope159.$wakingSuspension;
/*  1165 */             $blk = susp.$blk;
/*  1166 */             $loc = susp.$loc;
/*  1167 */             $gbl = susp.$gbl;
/*  1168 */             $exc = susp.$exc;
/*  1169 */             $err = susp.$err;
/*  1170 */             Sk.err = $err;
/*  1171 */             $postfinally = susp.$postfinally;
/*  1172 */             $currLineNo = susp.$lineno;
/*  1173 */             $currColNo = susp.$colno;
/*  1174 */             Sk.lastYield = Date.now();
/*  1175 */             ancestor = susp.$tmps.ancestor;
/*  1176 */             ast_node = susp.$tmps.ast_node;
/*  1177 */             field = susp.$tmps.field;
/*  1178 */             item = susp.$tmps.item;
/*  1179 */             lin_tree = susp.$tmps.lin_tree;
/*  1180 */             my_field = susp.$tmps.my_field;
/*  1181 */             my_field_generator = susp.$tmps.my_field_generator;
/*  1182 */             new_child = susp.$tmps.new_child;
/*  1183 */             report = susp.$tmps.report;
/*  1184 */             self = susp.$tmps.self;
/*  1185 */             sub_value = susp.$tmps.sub_value;
/*  1186 */             tid = susp.$tmps.tid;
/*  1187 */             tid_count = susp.$tmps.tid_count;
/*  1188 */             value = susp.$tmps.value;
/*  1189 */             $compareres162 = susp.$tmps.$compareres162;
/*  1190 */             $loadlist166 = susp.$tmps.$loadlist166;
/*  1191 */             $compareres167 = susp.$tmps.$compareres167;
/*  1192 */             $elem170 = susp.$tmps.$elem170;
/*  1193 */             $loadlist171 = susp.$tmps.$loadlist171;
/*  1194 */             $lattr172 = susp.$tmps.$lattr172;
/*  1195 */             $loadgbl174 = susp.$tmps.$loadgbl174;
/*  1196 */             $str175 = susp.$tmps.$str175;
/*  1197 */             $loadgbl177 = susp.$tmps.$loadgbl177;
/*  1198 */             $lattr178 = susp.$tmps.$lattr178;
/*  1199 */             $lattr179 = susp.$tmps.$lattr179;
/*  1200 */             $iter181 = susp.$tmps.$iter181;
/*  1201 */             $compareres184 = susp.$tmps.$compareres184;
/*  1202 */             $loadgbl187 = susp.$tmps.$loadgbl187;
/*  1203 */             $loadgbl188 = susp.$tmps.$loadgbl188;
/*  1204 */             $iter194 = susp.$tmps.$iter194;
/*  1205 */             $loadgbl196 = susp.$tmps.$loadgbl196;
/*  1206 */             $loadgbl197 = susp.$tmps.$loadgbl197;
/*  1207 */             $lattr198 = susp.$tmps.$lattr198;
/*  1208 */             $loadgbl201 = susp.$tmps.$loadgbl201;
/*  1209 */             $binop202 = susp.$tmps.$binop202;
/*  1210 */             $lattr203 = susp.$tmps.$lattr203;
/*  1211 */             $lattr204 = susp.$tmps.$lattr204;
/*  1212 */             $lattr206 = susp.$tmps.$lattr206;
/*  1213 */             $lattr207 = susp.$tmps.$lattr207;
/*  1214 */             $loadgbl209 = susp.$tmps.$loadgbl209;
/*  1215 */             $lattr210 = susp.$tmps.$lattr210;
/*  1216 */             try {
/*  1217 */                 $ret = susp.child.resume();
/*  1218 */             } catch (err) {
/*  1219 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  1220 */                     Sk.execStart = Date.now()
/*  1221 */                 }
/*  1222 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1223 */                     err = new Sk.builtin.ExternalError(err);
/*  1224 */                 }
/*  1225 */                 err.traceback.push({
/*  1226 */                     lineno: $currLineNo,
/*  1227 */                     colno: $currColNo,
/*  1228 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  1229 */                 });
/*  1230 */                 if ($exc.length > 0) {
/*  1231 */                     $err = err;
/*  1232 */                     Sk.err = $err;
/*  1233 */                     $blk = $exc.pop();
/*  1234 */                 } else {
/*  1235 */                     throw err;
/*  1236 */                 }
/*  1237 */             }
/*  1238 */         };
/*  1239 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1240 */             var susp = new Sk.misceval.Suspension();
/*  1241 */             susp.child = $child;
/*  1242 */             susp.resume = function() {
/*  1243 */                 $scope159.$wakingSuspension = susp;
/*  1244 */                 return $scope159();
/*  1245 */             };
/*  1246 */             susp.data = susp.child.data;
/*  1247 */             susp.$blk = $blk;
/*  1248 */             susp.$loc = $loc;
/*  1249 */             susp.$gbl = $gbl;
/*  1250 */             susp.$exc = $exc;
/*  1251 */             susp.$err = $err;
/*  1252 */             susp.$postfinally = $postfinally;
/*  1253 */             susp.$filename = $filename;
/*  1254 */             susp.$lineno = $lineno;
/*  1255 */             susp.$colno = $colno;
/*  1256 */             susp.optional = susp.child.optional;
/*  1257 */             susp.$tmps = {
/*  1258 */                 "ancestor": ancestor,
/*  1259 */                 "ast_node": ast_node,
/*  1260 */                 "field": field,
/*  1261 */                 "item": item,
/*  1262 */                 "lin_tree": lin_tree,
/*  1263 */                 "my_field": my_field,
/*  1264 */                 "my_field_generator": my_field_generator,
/*  1265 */                 "new_child": new_child,
/*  1266 */                 "report": report,
/*  1267 */                 "self": self,
/*  1268 */                 "sub_value": sub_value,
/*  1269 */                 "tid": tid,
/*  1270 */                 "tid_count": tid_count,
/*  1271 */                 "value": value,
/*  1272 */                 "$compareres162": $compareres162,
/*  1273 */                 "$loadlist166": $loadlist166,
/*  1274 */                 "$compareres167": $compareres167,
/*  1275 */                 "$elem170": $elem170,
/*  1276 */                 "$loadlist171": $loadlist171,
/*  1277 */                 "$lattr172": $lattr172,
/*  1278 */                 "$loadgbl174": $loadgbl174,
/*  1279 */                 "$str175": $str175,
/*  1280 */                 "$loadgbl177": $loadgbl177,
/*  1281 */                 "$lattr178": $lattr178,
/*  1282 */                 "$lattr179": $lattr179,
/*  1283 */                 "$iter181": $iter181,
/*  1284 */                 "$compareres184": $compareres184,
/*  1285 */                 "$loadgbl187": $loadgbl187,
/*  1286 */                 "$loadgbl188": $loadgbl188,
/*  1287 */                 "$iter194": $iter194,
/*  1288 */                 "$loadgbl196": $loadgbl196,
/*  1289 */                 "$loadgbl197": $loadgbl197,
/*  1290 */                 "$lattr198": $lattr198,
/*  1291 */                 "$loadgbl201": $loadgbl201,
/*  1292 */                 "$binop202": $binop202,
/*  1293 */                 "$lattr203": $lattr203,
/*  1294 */                 "$lattr204": $lattr204,
/*  1295 */                 "$lattr206": $lattr206,
/*  1296 */                 "$lattr207": $lattr207,
/*  1297 */                 "$loadgbl209": $loadgbl209,
/*  1298 */                 "$lattr210": $lattr210
/*  1299 */             };
/*  1300 */             return susp;
/*  1301 */         };
/*  1302 */         var $blk = 0,
/*  1303 */             $exc = [],
/*  1304 */             $loc = {},
/*  1305 */             $gbl = this,
/*  1306 */             $err = undefined,
/*  1307 */             $ret = undefined,
/*  1308 */             $postfinally = undefined,
/*  1309 */             $currLineNo = undefined,
/*  1310 */             $currColNo = undefined;
/*  1311 */         Sk.err = $err;
/*  1312 */         if (typeof Sk.execStart === 'undefined') {
/*  1313 */             Sk.execStart = Date.now()
/*  1314 */         }
/*  1315 */         if (typeof Sk.lastYield === 'undefined') {
/*  1316 */             Sk.lastYield = Date.now()
/*  1317 */         }
/*  1318 */         if ($scope159.$wakingSuspension !== undefined) {
/*  1319 */             $wakeFromSuspension();
/*  1320 */         } else {
/*  1321 */             if (my_field === undefined) my_field = $scope159.$defaults[0];
/*  1322 */             if (tid === undefined) tid = $scope159.$defaults[1];
/*  1323 */             if (lin_tree === undefined) lin_tree = $scope159.$defaults[2];
/*  1324 */             if (ancestor === undefined) ancestor = $scope159.$defaults[3];
/*  1325 */             if (report === undefined) report = $scope159.$defaults[4];
/*  1326 */             Sk.builtin.pyCheckArgs("__init__", arguments, 2, 7, false, false);
/*  1327 */         }
/*  1328 */         while (true) {
/*  1329 */             try {
/*  1330 */                 var $dateNow = Date.now();
/*  1331 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  1332 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1333 */                 }
/*  1334 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1335 */                     var $susp = $saveSuspension({
/*  1336 */                         data: {
/*  1337 */                             type: 'Sk.yield'
/*  1338 */                         },
/*  1339 */                         resume: function() {}
/*  1340 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  1341 */                     $susp.$blk = $blk;
/*  1342 */                     $susp.optional = true;
/*  1343 */                     return $susp;
/*  1344 */                 }
/*  1345 */                 switch ($blk) {
/*  1346 */                 case 0:
/*  1347 */                     /* --- codeobj entry --- */
/*  1348 */                     if (self === undefined) {
/*  1349 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1350 */                     }
/*  1351 */                     if (ast_node === undefined) {
/*  1352 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ast_node\' referenced before assignment');
/*  1353 */                     }
/*  1354 */                     if (my_field === undefined) {
/*  1355 */                         throw new Sk.builtin.UnboundLocalError('local variable \'my_field\' referenced before assignment');
/*  1356 */                     }
/*  1357 */                     if (tid === undefined) {
/*  1358 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tid\' referenced before assignment');
/*  1359 */                     }
/*  1360 */                     if (lin_tree === undefined) {
/*  1361 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lin_tree\' referenced before assignment');
/*  1362 */                     }
/*  1363 */                     if (ancestor === undefined) {
/*  1364 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ancestor\' referenced before assignment');
/*  1365 */                     }
/*  1366 */                     if (report === undefined) {
/*  1367 */                         throw new Sk.builtin.UnboundLocalError('local variable \'report\' referenced before assignment');
/*  1368 */                     }
/*  1369 */                     if (my_field === undefined) {
/*  1370 */                         throw new Sk.builtin.UnboundLocalError('local variable \'my_field\' referenced before assignment');
/*  1371 */                     }
/*  1372 */                     if (tid === undefined) {
/*  1373 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tid\' referenced before assignment');
/*  1374 */                     }
/*  1375 */                     if (lin_tree === undefined) {
/*  1376 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lin_tree\' referenced before assignment');
/*  1377 */                     }
/*  1378 */                     if (ancestor === undefined) {
/*  1379 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ancestor\' referenced before assignment');
/*  1380 */                     }
/*  1381 */                     if (report === undefined) {
/*  1382 */                         throw new Sk.builtin.UnboundLocalError('local variable \'report\' referenced before assignment');
/*  1383 */                     }
/*  1384 */ 
/*  1385 */ 
/*  1386 */                     //
/*  1387 */                     // line 32:
/*  1388 */                     //         """
/*  1389 */                     //         ^
/*  1390 */                     //
/*  1391 */                     Sk.currLineNo = 32;
/*  1392 */                     Sk.currColNo = 8;
/*  1393 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1394 */                     $currLineNo = 32;
/*  1395 */                     $currColNo = 8;
/*  1396 */                     var $str161 = new Sk.builtins['str']('\n\n        Args:\n            ast_node (ast_node): The AST node to be wrapped\n            my_field (str): the field of the parent node that produced this child.\n            tid (int): the tree id\n            lin_tree list of cait_node: A linear version of the tree\n            ancestor (cait_node): The parent of this node\n            report: The report associated with this particular match.\n        ');
/*  1397 */ 
/*  1398 */                     //
/*  1399 */                     // line 42:
/*  1400 */                     //         if report is None:
/*  1401 */                     //         ^
/*  1402 */                     //
/*  1403 */                     Sk.currLineNo = 42;
/*  1404 */                     Sk.currColNo = 8;
/*  1405 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1406 */                     $currLineNo = 42;
/*  1407 */                     $currColNo = 8;
/*  1408 */                     if (report === undefined) {
/*  1409 */                         throw new Sk.builtin.UnboundLocalError('local variable \'report\' referenced before assignment');
/*  1410 */                     }
/*  1411 */                     var $compareres162 = null;
/*  1412 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(report, Sk.builtin.none.none$, 'Is', true));
/*  1413 */                     $blk = 3; /* allowing case fallthrough */
/*  1414 */                 case 3:
/*  1415 */                     /* --- function return or resume suspension --- */
/*  1416 */                     if ($ret && $ret.$isSuspension) {
/*  1417 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 42, 11);
/*  1418 */                     }
/*  1419 */                     $compareres162 = $ret;
/*  1420 */                     var $jfalse163 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1421 */                     if ($jfalse163) { /*test failed */
/*  1422 */                         $blk = 2;
/*  1423 */                         continue;
/*  1424 */                     }
/*  1425 */                     $blk = 2; /* allowing case fallthrough */
/*  1426 */                 case 2:
/*  1427 */                     /* --- done --- */
/*  1428 */                     var $jfalse164 = ($compareres162 === false || !Sk.misceval.isTrue($compareres162));
/*  1429 */                     if ($jfalse164) { /*test failed */
/*  1430 */                         $blk = 1;
/*  1431 */                         continue;
/*  1432 */                     }
/*  1433 */ 
/*  1434 */                     //
/*  1435 */                     // line 43:
/*  1436 */                     //             report = MAIN_REPORT
/*  1437 */                     //             ^
/*  1438 */                     //
/*  1439 */                     Sk.currLineNo = 43;
/*  1440 */                     Sk.currColNo = 12;
/*  1441 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1442 */                     $currLineNo = 43;
/*  1443 */                     $currColNo = 12;
/*  1444 */                     var $loadgbl165 = Sk.misceval.loadname('MAIN_REPORT', $gbl);
/*  1445 */                     report = $loadgbl165;
/*  1446 */                     $blk = 1; /* allowing case fallthrough */
/*  1447 */                 case 1:
/*  1448 */                     /* --- end of if --- */
/*  1449 */ 
/*  1450 */                     //
/*  1451 */                     // line 44:
/*  1452 */                     //         self.report = report
/*  1453 */                     //         ^
/*  1454 */                     //
/*  1455 */                     Sk.currLineNo = 44;
/*  1456 */                     Sk.currColNo = 8;
/*  1457 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1458 */                     $currLineNo = 44;
/*  1459 */                     $currColNo = 8;
/*  1460 */                     if (report === undefined) {
/*  1461 */                         throw new Sk.builtin.UnboundLocalError('local variable \'report\' referenced before assignment');
/*  1462 */                     }
/*  1463 */                     if (self === undefined) {
/*  1464 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1465 */                     }
/*  1466 */                     $ret = Sk.abstr.sattr(self, 'report', report, true);
/*  1467 */                     $blk = 4; /* allowing case fallthrough */
/*  1468 */                 case 4:
/*  1469 */                     /* --- function return or resume suspension --- */
/*  1470 */                     if ($ret && $ret.$isSuspension) {
/*  1471 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 44, 8);
/*  1472 */                     }
/*  1473 */ 
/*  1474 */                     //
/*  1475 */                     // line 45:
/*  1476 */                     //         self.children = []
/*  1477 */                     //         ^
/*  1478 */                     //
/*  1479 */                     Sk.currLineNo = 45;
/*  1480 */                     Sk.currColNo = 8;
/*  1481 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1482 */                     $currLineNo = 45;
/*  1483 */                     $currColNo = 8;
/*  1484 */                     var $loadlist166 = new Sk.builtins['list']([]);
/*  1485 */                     if (self === undefined) {
/*  1486 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1487 */                     }
/*  1488 */                     $ret = Sk.abstr.sattr(self, 'children', $loadlist166, true);
/*  1489 */                     $blk = 5; /* allowing case fallthrough */
/*  1490 */                 case 5:
/*  1491 */                     /* --- function return or resume suspension --- */
/*  1492 */                     if ($ret && $ret.$isSuspension) {
/*  1493 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 45, 8);
/*  1494 */                     }
/*  1495 */ 
/*  1496 */                     //
/*  1497 */                     // line 46:
/*  1498 */                     //         self.astNode = ast_node
/*  1499 */                     //         ^
/*  1500 */                     //
/*  1501 */                     Sk.currLineNo = 46;
/*  1502 */                     Sk.currColNo = 8;
/*  1503 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1504 */                     $currLineNo = 46;
/*  1505 */                     $currColNo = 8;
/*  1506 */                     if (ast_node === undefined) {
/*  1507 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ast_node\' referenced before assignment');
/*  1508 */                     }
/*  1509 */                     if (self === undefined) {
/*  1510 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1511 */                     }
/*  1512 */                     $ret = Sk.abstr.sattr(self, 'astNode', ast_node, true);
/*  1513 */                     $blk = 6; /* allowing case fallthrough */
/*  1514 */                 case 6:
/*  1515 */                     /* --- function return or resume suspension --- */
/*  1516 */                     if ($ret && $ret.$isSuspension) {
/*  1517 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 46, 8);
/*  1518 */                     }
/*  1519 */ 
/*  1520 */                     //
/*  1521 */                     // line 47:
/*  1522 */                     //         self.field = my_field
/*  1523 */                     //         ^
/*  1524 */                     //
/*  1525 */                     Sk.currLineNo = 47;
/*  1526 */                     Sk.currColNo = 8;
/*  1527 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1528 */                     $currLineNo = 47;
/*  1529 */                     $currColNo = 8;
/*  1530 */                     if (my_field === undefined) {
/*  1531 */                         throw new Sk.builtin.UnboundLocalError('local variable \'my_field\' referenced before assignment');
/*  1532 */                     }
/*  1533 */                     if (self === undefined) {
/*  1534 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1535 */                     }
/*  1536 */                     $ret = Sk.abstr.sattr(self, 'field', my_field, true);
/*  1537 */                     $blk = 7; /* allowing case fallthrough */
/*  1538 */                 case 7:
/*  1539 */                     /* --- function return or resume suspension --- */
/*  1540 */                     if ($ret && $ret.$isSuspension) {
/*  1541 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 47, 8);
/*  1542 */                     }
/*  1543 */ 
/*  1544 */                     //
/*  1545 */                     // line 48:
/*  1546 */                     //         self.tree_id = tid
/*  1547 */                     //         ^
/*  1548 */                     //
/*  1549 */                     Sk.currLineNo = 48;
/*  1550 */                     Sk.currColNo = 8;
/*  1551 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1552 */                     $currLineNo = 48;
/*  1553 */                     $currColNo = 8;
/*  1554 */                     if (tid === undefined) {
/*  1555 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tid\' referenced before assignment');
/*  1556 */                     }
/*  1557 */                     if (self === undefined) {
/*  1558 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1559 */                     }
/*  1560 */                     $ret = Sk.abstr.sattr(self, 'tree_id', tid, true);
/*  1561 */                     $blk = 8; /* allowing case fallthrough */
/*  1562 */                 case 8:
/*  1563 */                     /* --- function return or resume suspension --- */
/*  1564 */                     if ($ret && $ret.$isSuspension) {
/*  1565 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 48, 8);
/*  1566 */                     }
/*  1567 */ 
/*  1568 */                     //
/*  1569 */                     // line 49:
/*  1570 */                     //         self.parent = ancestor
/*  1571 */                     //         ^
/*  1572 */                     //
/*  1573 */                     Sk.currLineNo = 49;
/*  1574 */                     Sk.currColNo = 8;
/*  1575 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1576 */                     $currLineNo = 49;
/*  1577 */                     $currColNo = 8;
/*  1578 */                     if (ancestor === undefined) {
/*  1579 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ancestor\' referenced before assignment');
/*  1580 */                     }
/*  1581 */                     if (self === undefined) {
/*  1582 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1583 */                     }
/*  1584 */                     $ret = Sk.abstr.sattr(self, 'parent', ancestor, true);
/*  1585 */                     $blk = 9; /* allowing case fallthrough */
/*  1586 */                 case 9:
/*  1587 */                     /* --- function return or resume suspension --- */
/*  1588 */                     if ($ret && $ret.$isSuspension) {
/*  1589 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 49, 8);
/*  1590 */                     }
/*  1591 */ 
/*  1592 */                     //
/*  1593 */                     // line 50:
/*  1594 */                     //         if lin_tree is None:
/*  1595 */                     //         ^
/*  1596 */                     //
/*  1597 */                     Sk.currLineNo = 50;
/*  1598 */                     Sk.currColNo = 8;
/*  1599 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1600 */                     $currLineNo = 50;
/*  1601 */                     $currColNo = 8;
/*  1602 */                     if (lin_tree === undefined) {
/*  1603 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lin_tree\' referenced before assignment');
/*  1604 */                     }
/*  1605 */                     var $compareres167 = null;
/*  1606 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(lin_tree, Sk.builtin.none.none$, 'Is', true));
/*  1607 */                     $blk = 13; /* allowing case fallthrough */
/*  1608 */                 case 13:
/*  1609 */                     /* --- function return or resume suspension --- */
/*  1610 */                     if ($ret && $ret.$isSuspension) {
/*  1611 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 50, 11);
/*  1612 */                     }
/*  1613 */                     $compareres167 = $ret;
/*  1614 */                     var $jfalse168 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1615 */                     if ($jfalse168) { /*test failed */
/*  1616 */                         $blk = 12;
/*  1617 */                         continue;
/*  1618 */                     }
/*  1619 */                     $blk = 12; /* allowing case fallthrough */
/*  1620 */                 case 12:
/*  1621 */                     /* --- done --- */
/*  1622 */                     var $jfalse169 = ($compareres167 === false || !Sk.misceval.isTrue($compareres167));
/*  1623 */                     if ($jfalse169) { /*test failed */
/*  1624 */                         $blk = 11;
/*  1625 */                         continue;
/*  1626 */                     }
/*  1627 */ 
/*  1628 */                     //
/*  1629 */                     // line 51:
/*  1630 */                     //             self.linear_tree = [self]
/*  1631 */                     //             ^
/*  1632 */                     //
/*  1633 */                     Sk.currLineNo = 51;
/*  1634 */                     Sk.currColNo = 12;
/*  1635 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1636 */                     $currLineNo = 51;
/*  1637 */                     $currColNo = 12;
/*  1638 */                     if (self === undefined) {
/*  1639 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1640 */                     }
/*  1641 */                     var $elem170 = self;
/*  1642 */                     var $loadlist171 = new Sk.builtins['list']([$elem170]);
/*  1643 */                     if (self === undefined) {
/*  1644 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1645 */                     }
/*  1646 */                     $ret = Sk.abstr.sattr(self, 'linear_tree', $loadlist171, true);
/*  1647 */                     $blk = 14; /* allowing case fallthrough */
/*  1648 */                 case 14:
/*  1649 */                     /* --- function return or resume suspension --- */
/*  1650 */                     if ($ret && $ret.$isSuspension) {
/*  1651 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 51, 12);
/*  1652 */                     }
/*  1653 */                     $blk = 10; /* allowing case fallthrough */
/*  1654 */                 case 10:
/*  1655 */                     /* --- end of if --- */
/*  1656 */ 
/*  1657 */                     //
/*  1658 */                     // line 57:
/*  1659 */                     //         setattr(ast_node, 'cait_node', self)
/*  1660 */                     //         ^
/*  1661 */                     //
/*  1662 */                     Sk.currLineNo = 57;
/*  1663 */                     Sk.currColNo = 8;
/*  1664 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1665 */                     $currLineNo = 57;
/*  1666 */                     $currColNo = 8;
/*  1667 */                     var $loadgbl174 = Sk.misceval.loadname('setattr', $gbl);
/*  1668 */                     if (ast_node === undefined) {
/*  1669 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ast_node\' referenced before assignment');
/*  1670 */                     }
/*  1671 */                     var $str175 = new Sk.builtins['str']('cait_node');
/*  1672 */                     if (self === undefined) {
/*  1673 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1674 */                     }
/*  1675 */                     $ret;
/*  1676 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl174, ast_node, $str175, self);
/*  1677 */                     $blk = 18; /* allowing case fallthrough */
/*  1678 */                 case 18:
/*  1679 */                     /* --- function return or resume suspension --- */
/*  1680 */                     if ($ret && $ret.$isSuspension) {
/*  1681 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 57, 8);
/*  1682 */                     }
/*  1683 */                     var $call176 = $ret;
/*  1684 */ 
/*  1685 */                     //
/*  1686 */                     // line 57:
/*  1687 */                     //         setattr(ast_node, 'cait_node', self)
/*  1688 */                     //         ^
/*  1689 */                     //
/*  1690 */                     Sk.currLineNo = 57;
/*  1691 */                     Sk.currColNo = 8;
/*  1692 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1693 */                     $currLineNo = 57;
/*  1694 */                     $currColNo = 8;
/*  1695 */ 
/*  1696 */ 
/*  1697 */                     //
/*  1698 */                     // line 59:
/*  1699 */                     //         tid_count = tid
/*  1700 */                     //         ^
/*  1701 */                     //
/*  1702 */                     Sk.currLineNo = 59;
/*  1703 */                     Sk.currColNo = 8;
/*  1704 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1705 */                     $currLineNo = 59;
/*  1706 */                     $currColNo = 8;
/*  1707 */                     if (tid === undefined) {
/*  1708 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tid\' referenced before assignment');
/*  1709 */                     }
/*  1710 */                     tid_count = tid;
/*  1711 */ 
/*  1712 */                     //
/*  1713 */                     // line 61:
/*  1714 */                     //         my_field_generator = ast.iter_fields(self.astNode)
/*  1715 */                     //         ^
/*  1716 */                     //
/*  1717 */                     Sk.currLineNo = 61;
/*  1718 */                     Sk.currColNo = 8;
/*  1719 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1720 */                     $currLineNo = 61;
/*  1721 */                     $currColNo = 8;
/*  1722 */                     var $loadgbl177 = Sk.misceval.loadname('ast', $gbl);
/*  1723 */                     $ret = Sk.abstr.gattr($loadgbl177, 'iter_fields', true);
/*  1724 */                     $blk = 19; /* allowing case fallthrough */
/*  1725 */                 case 19:
/*  1726 */                     /* --- function return or resume suspension --- */
/*  1727 */                     if ($ret && $ret.$isSuspension) {
/*  1728 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 61, 29);
/*  1729 */                     }
/*  1730 */                     var $lattr178 = $ret;
/*  1731 */                     if (self === undefined) {
/*  1732 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1733 */                     }
/*  1734 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/*  1735 */                     $blk = 20; /* allowing case fallthrough */
/*  1736 */                 case 20:
/*  1737 */                     /* --- function return or resume suspension --- */
/*  1738 */                     if ($ret && $ret.$isSuspension) {
/*  1739 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 61, 45);
/*  1740 */                     }
/*  1741 */                     var $lattr179 = $ret;
/*  1742 */                     $ret;
/*  1743 */                     $ret = Sk.misceval.callsimOrSuspend($lattr178, $lattr179);
/*  1744 */                     $blk = 21; /* allowing case fallthrough */
/*  1745 */                 case 21:
/*  1746 */                     /* --- function return or resume suspension --- */
/*  1747 */                     if ($ret && $ret.$isSuspension) {
/*  1748 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 61, 29);
/*  1749 */                     }
/*  1750 */                     var $call180 = $ret;
/*  1751 */ 
/*  1752 */                     //
/*  1753 */                     // line 61:
/*  1754 */                     //         my_field_generator = ast.iter_fields(self.astNode)
/*  1755 */                     //                              ^
/*  1756 */                     //
/*  1757 */                     Sk.currLineNo = 61;
/*  1758 */                     Sk.currColNo = 29;
/*  1759 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1760 */                     $currLineNo = 61;
/*  1761 */                     $currColNo = 29;
/*  1762 */                     my_field_generator = $call180;
/*  1763 */ 
/*  1764 */                     //
/*  1765 */                     // line 62:
/*  1766 */                     //         for item in my_field_generator:
/*  1767 */                     //         ^
/*  1768 */                     //
/*  1769 */                     Sk.currLineNo = 62;
/*  1770 */                     Sk.currColNo = 8;
/*  1771 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1772 */                     $currLineNo = 62;
/*  1773 */                     $currColNo = 8;
/*  1774 */                     if (my_field_generator === undefined) {
/*  1775 */                         throw new Sk.builtin.UnboundLocalError('local variable \'my_field_generator\' referenced before assignment');
/*  1776 */                     }
/*  1777 */                     var $iter181 = Sk.abstr.iter(my_field_generator);
/*  1778 */                     $blk = 22; /* allowing case fallthrough */
/*  1779 */                 case 22:
/*  1780 */                     /* --- for start --- */
/*  1781 */                     $ret = Sk.abstr.iternext($iter181, true);
/*  1782 */                     $blk = 25; /* allowing case fallthrough */
/*  1783 */                 case 25:
/*  1784 */                     /* --- function return or resume suspension --- */
/*  1785 */                     if ($ret && $ret.$isSuspension) {
/*  1786 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 62, 8);
/*  1787 */                     }
/*  1788 */                     var $next182 = $ret;
/*  1789 */                     if ($next182 === undefined) {
/*  1790 */                         $blk = 23;
/*  1791 */                         continue;
/*  1792 */                     }
/*  1793 */                     item = $next182;
/*  1794 */ 
/*  1795 */                     //
/*  1796 */                     // line 63:
/*  1797 */                     //             field, value = item
/*  1798 */                     //             ^
/*  1799 */                     //
/*  1800 */                     Sk.currLineNo = 63;
/*  1801 */                     Sk.currColNo = 12;
/*  1802 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1803 */                     $currLineNo = 63;
/*  1804 */                     $currColNo = 12;
/*  1805 */                     if (item === undefined) {
/*  1806 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  1807 */                     }
/*  1808 */                     var $items183 = Sk.abstr.sequenceUnpack(item, 2);
/*  1809 */                     field = $items183[0];
/*  1810 */                     value = $items183[1];
/*  1811 */ 
/*  1812 */                     //
/*  1813 */                     // line 65:
/*  1814 */                     //             if value is None:
/*  1815 */                     //             ^
/*  1816 */                     //
/*  1817 */                     Sk.currLineNo = 65;
/*  1818 */                     Sk.currColNo = 12;
/*  1819 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1820 */                     $currLineNo = 65;
/*  1821 */                     $currColNo = 12;
/*  1822 */                     if (value === undefined) {
/*  1823 */                         throw new Sk.builtin.UnboundLocalError('local variable \'value\' referenced before assignment');
/*  1824 */                     }
/*  1825 */                     var $compareres184 = null;
/*  1826 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(value, Sk.builtin.none.none$, 'Is', true));
/*  1827 */                     $blk = 28; /* allowing case fallthrough */
/*  1828 */                 case 28:
/*  1829 */                     /* --- function return or resume suspension --- */
/*  1830 */                     if ($ret && $ret.$isSuspension) {
/*  1831 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 65, 15);
/*  1832 */                     }
/*  1833 */                     $compareres184 = $ret;
/*  1834 */                     var $jfalse185 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  1835 */                     if ($jfalse185) { /*test failed */
/*  1836 */                         $blk = 27;
/*  1837 */                         continue;
/*  1838 */                     }
/*  1839 */                     $blk = 27; /* allowing case fallthrough */
/*  1840 */                 case 27:
/*  1841 */                     /* --- done --- */
/*  1842 */                     var $jfalse186 = ($compareres184 === false || !Sk.misceval.isTrue($compareres184));
/*  1843 */                     if ($jfalse186) { /*test failed */
/*  1844 */                         $blk = 26;
/*  1845 */                         continue;
/*  1846 */                     }
/*  1847 */ 
/*  1848 */                     //
/*  1849 */                     // line 66:
/*  1850 */                     //                 continue
/*  1851 */                     //                 ^
/*  1852 */                     //
/*  1853 */                     Sk.currLineNo = 66;
/*  1854 */                     Sk.currColNo = 16;
/*  1855 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1856 */                     $currLineNo = 66;
/*  1857 */                     $currColNo = 16;
/*  1858 */                     $blk = 22; /* jump */
/*  1859 */                     continue;
/*  1860 */                 case 11:
/*  1861 */                     /* --- next branch of if --- */
/*  1862 */ 
/*  1863 */                     //
/*  1864 */                     // line 53:
/*  1865 */                     //             lin_tree.append(self)
/*  1866 */                     //             ^
/*  1867 */                     //
/*  1868 */                     Sk.currLineNo = 53;
/*  1869 */                     Sk.currColNo = 12;
/*  1870 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1871 */                     $currLineNo = 53;
/*  1872 */                     $currColNo = 12;
/*  1873 */                     if (lin_tree === undefined) {
/*  1874 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lin_tree\' referenced before assignment');
/*  1875 */                     }
/*  1876 */                     $ret = Sk.abstr.gattr(lin_tree, 'append', true);
/*  1877 */                     $blk = 15; /* allowing case fallthrough */
/*  1878 */                 case 15:
/*  1879 */                     /* --- function return or resume suspension --- */
/*  1880 */                     if ($ret && $ret.$isSuspension) {
/*  1881 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 53, 12);
/*  1882 */                     }
/*  1883 */                     var $lattr172 = $ret;
/*  1884 */                     if (self === undefined) {
/*  1885 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1886 */                     }
/*  1887 */                     $ret;
/*  1888 */                     $ret = Sk.misceval.callsimOrSuspend($lattr172, self);
/*  1889 */                     $blk = 16; /* allowing case fallthrough */
/*  1890 */                 case 16:
/*  1891 */                     /* --- function return or resume suspension --- */
/*  1892 */                     if ($ret && $ret.$isSuspension) {
/*  1893 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 53, 12);
/*  1894 */                     }
/*  1895 */                     var $call173 = $ret;
/*  1896 */ 
/*  1897 */                     //
/*  1898 */                     // line 53:
/*  1899 */                     //             lin_tree.append(self)
/*  1900 */                     //             ^
/*  1901 */                     //
/*  1902 */                     Sk.currLineNo = 53;
/*  1903 */                     Sk.currColNo = 12;
/*  1904 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1905 */                     $currLineNo = 53;
/*  1906 */                     $currColNo = 12;
/*  1907 */ 
/*  1908 */ 
/*  1909 */                     //
/*  1910 */                     // line 54:
/*  1911 */                     //             self.linear_tree = lin_tree
/*  1912 */                     //             ^
/*  1913 */                     //
/*  1914 */                     Sk.currLineNo = 54;
/*  1915 */                     Sk.currColNo = 12;
/*  1916 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1917 */                     $currLineNo = 54;
/*  1918 */                     $currColNo = 12;
/*  1919 */                     if (lin_tree === undefined) {
/*  1920 */                         throw new Sk.builtin.UnboundLocalError('local variable \'lin_tree\' referenced before assignment');
/*  1921 */                     }
/*  1922 */                     if (self === undefined) {
/*  1923 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1924 */                     }
/*  1925 */                     $ret = Sk.abstr.sattr(self, 'linear_tree', lin_tree, true);
/*  1926 */                     $blk = 17; /* allowing case fallthrough */
/*  1927 */                 case 17:
/*  1928 */                     /* --- function return or resume suspension --- */
/*  1929 */                     if ($ret && $ret.$isSuspension) {
/*  1930 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 54, 12);
/*  1931 */                     }
/*  1932 */                     $blk = 10; /* jump */
/*  1933 */                     continue;
/*  1934 */                 case 23:
/*  1935 */                     /* --- for cleanup --- */
/*  1936 */                     $blk = 24; /* allowing case fallthrough */
/*  1937 */                 case 24:
/*  1938 */                     /* --- for end --- */
/*  1939 */                     return Sk.builtin.none.none$;
/*  1940 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1941 */                 case 26:
/*  1942 */                     /* --- end of if --- */
/*  1943 */ 
/*  1944 */                     //
/*  1945 */                     // line 70:
/*  1946 */                     //             if not isinstance(value, list):
/*  1947 */                     //             ^
/*  1948 */                     //
/*  1949 */                     Sk.currLineNo = 70;
/*  1950 */                     Sk.currColNo = 12;
/*  1951 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1952 */                     $currLineNo = 70;
/*  1953 */                     $currColNo = 12;
/*  1954 */                     var $loadgbl187 = Sk.misceval.loadname('isinstance', $gbl);
/*  1955 */                     if (value === undefined) {
/*  1956 */                         throw new Sk.builtin.UnboundLocalError('local variable \'value\' referenced before assignment');
/*  1957 */                     }
/*  1958 */                     var $loadgbl188 = Sk.misceval.loadname('list', $gbl);
/*  1959 */                     $ret;
/*  1960 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl187, value, $loadgbl188);
/*  1961 */                     $blk = 30; /* allowing case fallthrough */
/*  1962 */                 case 30:
/*  1963 */                     /* --- function return or resume suspension --- */
/*  1964 */                     if ($ret && $ret.$isSuspension) {
/*  1965 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 70, 19);
/*  1966 */                     }
/*  1967 */                     var $call189 = $ret;
/*  1968 */ 
/*  1969 */                     //
/*  1970 */                     // line 70:
/*  1971 */                     //             if not isinstance(value, list):
/*  1972 */                     //                    ^
/*  1973 */                     //
/*  1974 */                     Sk.currLineNo = 70;
/*  1975 */                     Sk.currColNo = 19;
/*  1976 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1977 */                     $currLineNo = 70;
/*  1978 */                     $currColNo = 19;
/*  1979 */                     var $unaryop190 = Sk.abstr.numberUnaryOp($call189, 'Not');
/*  1980 */                     var $jfalse191 = ($unaryop190 === false || !Sk.misceval.isTrue($unaryop190));
/*  1981 */                     if ($jfalse191) { /*test failed */
/*  1982 */                         $blk = 29;
/*  1983 */                         continue;
/*  1984 */                     }
/*  1985 */ 
/*  1986 */                     //
/*  1987 */                     // line 71:
/*  1988 */                     //                 value = [value]
/*  1989 */                     //                 ^
/*  1990 */                     //
/*  1991 */                     Sk.currLineNo = 71;
/*  1992 */                     Sk.currColNo = 16;
/*  1993 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  1994 */                     $currLineNo = 71;
/*  1995 */                     $currColNo = 16;
/*  1996 */                     if (value === undefined) {
/*  1997 */                         throw new Sk.builtin.UnboundLocalError('local variable \'value\' referenced before assignment');
/*  1998 */                     }
/*  1999 */                     var $elem192 = value;
/*  2000 */                     var $loadlist193 = new Sk.builtins['list']([$elem192]);
/*  2001 */                     value = $loadlist193;
/*  2002 */                     $blk = 29; /* allowing case fallthrough */
/*  2003 */                 case 29:
/*  2004 */                     /* --- end of if --- */
/*  2005 */ 
/*  2006 */                     //
/*  2007 */                     // line 76:
/*  2008 */                     //             for sub_value in value:
/*  2009 */                     //             ^
/*  2010 */                     //
/*  2011 */                     Sk.currLineNo = 76;
/*  2012 */                     Sk.currColNo = 12;
/*  2013 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2014 */                     $currLineNo = 76;
/*  2015 */                     $currColNo = 12;
/*  2016 */                     if (value === undefined) {
/*  2017 */                         throw new Sk.builtin.UnboundLocalError('local variable \'value\' referenced before assignment');
/*  2018 */                     }
/*  2019 */                     var $iter194 = Sk.abstr.iter(value);
/*  2020 */                     $blk = 31; /* allowing case fallthrough */
/*  2021 */                 case 31:
/*  2022 */                     /* --- for start --- */
/*  2023 */                     $ret = Sk.abstr.iternext($iter194, true);
/*  2024 */                     $blk = 34; /* allowing case fallthrough */
/*  2025 */                 case 34:
/*  2026 */                     /* --- function return or resume suspension --- */
/*  2027 */                     if ($ret && $ret.$isSuspension) {
/*  2028 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 76, 12);
/*  2029 */                     }
/*  2030 */                     var $next195 = $ret;
/*  2031 */                     if ($next195 === undefined) {
/*  2032 */                         $blk = 32;
/*  2033 */                         continue;
/*  2034 */                     }
/*  2035 */                     sub_value = $next195;
/*  2036 */ 
/*  2037 */                     //
/*  2038 */                     // line 77:
/*  2039 */                     //                 if isinstance(sub_value, ast.AST):
/*  2040 */                     //                 ^
/*  2041 */                     //
/*  2042 */                     Sk.currLineNo = 77;
/*  2043 */                     Sk.currColNo = 16;
/*  2044 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2045 */                     $currLineNo = 77;
/*  2046 */                     $currColNo = 16;
/*  2047 */                     var $loadgbl196 = Sk.misceval.loadname('isinstance', $gbl);
/*  2048 */                     if (sub_value === undefined) {
/*  2049 */                         throw new Sk.builtin.UnboundLocalError('local variable \'sub_value\' referenced before assignment');
/*  2050 */                     }
/*  2051 */                     var $loadgbl197 = Sk.misceval.loadname('ast', $gbl);
/*  2052 */                     $ret = Sk.abstr.gattr($loadgbl197, 'AST', true);
/*  2053 */                     $blk = 36; /* allowing case fallthrough */
/*  2054 */                 case 36:
/*  2055 */                     /* --- function return or resume suspension --- */
/*  2056 */                     if ($ret && $ret.$isSuspension) {
/*  2057 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 77, 41);
/*  2058 */                     }
/*  2059 */                     var $lattr198 = $ret;
/*  2060 */                     $ret;
/*  2061 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl196, sub_value, $lattr198);
/*  2062 */                     $blk = 37; /* allowing case fallthrough */
/*  2063 */                 case 37:
/*  2064 */                     /* --- function return or resume suspension --- */
/*  2065 */                     if ($ret && $ret.$isSuspension) {
/*  2066 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 77, 19);
/*  2067 */                     }
/*  2068 */                     var $call199 = $ret;
/*  2069 */ 
/*  2070 */                     //
/*  2071 */                     // line 77:
/*  2072 */                     //                 if isinstance(sub_value, ast.AST):
/*  2073 */                     //                    ^
/*  2074 */                     //
/*  2075 */                     Sk.currLineNo = 77;
/*  2076 */                     Sk.currColNo = 19;
/*  2077 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2078 */                     $currLineNo = 77;
/*  2079 */                     $currColNo = 19;
/*  2080 */                     var $jfalse200 = ($call199 === false || !Sk.misceval.isTrue($call199));
/*  2081 */                     if ($jfalse200) { /*test failed */
/*  2082 */                         $blk = 35;
/*  2083 */                         continue;
/*  2084 */                     }
/*  2085 */ 
/*  2086 */                     //
/*  2087 */                     // line 78:
/*  2088 */                     //                     new_child = CaitNode(sub_value, my_field=field,
/*  2089 */                     //                     ^
/*  2090 */                     //
/*  2091 */                     Sk.currLineNo = 78;
/*  2092 */                     Sk.currColNo = 20;
/*  2093 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2094 */                     $currLineNo = 78;
/*  2095 */                     $currColNo = 20;
/*  2096 */                     var $loadgbl201 = Sk.misceval.loadname('CaitNode', $gbl);
/*  2097 */                     if (sub_value === undefined) {
/*  2098 */                         throw new Sk.builtin.UnboundLocalError('local variable \'sub_value\' referenced before assignment');
/*  2099 */                     }
/*  2100 */                     if (field === undefined) {
/*  2101 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/*  2102 */                     }
/*  2103 */                     if (tid_count === undefined) {
/*  2104 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tid_count\' referenced before assignment');
/*  2105 */                     }
/*  2106 */                     var $binop202 = Sk.abstr.numberBinOp(tid_count, new Sk.builtin.int_(1), 'Add');
/*  2107 */                     if (self === undefined) {
/*  2108 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2109 */                     }
/*  2110 */                     $ret = Sk.abstr.gattr(self, 'linear_tree', true);
/*  2111 */                     $blk = 38; /* allowing case fallthrough */
/*  2112 */                 case 38:
/*  2113 */                     /* --- function return or resume suspension --- */
/*  2114 */                     if ($ret && $ret.$isSuspension) {
/*  2115 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 80, 50);
/*  2116 */                     }
/*  2117 */                     var $lattr203 = $ret;
/*  2118 */                     if (self === undefined) {
/*  2119 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2120 */                     }
/*  2121 */                     if (self === undefined) {
/*  2122 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2123 */                     }
/*  2124 */                     $ret = Sk.abstr.gattr(self, 'report', true);
/*  2125 */                     $blk = 39; /* allowing case fallthrough */
/*  2126 */                 case 39:
/*  2127 */                     /* --- function return or resume suspension --- */
/*  2128 */                     if ($ret && $ret.$isSuspension) {
/*  2129 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 82, 48);
/*  2130 */                     }
/*  2131 */                     var $lattr204 = $ret;
/*  2132 */                     $ret;
/*  2133 */                     $ret = Sk.misceval.callOrSuspend($loadgbl201, undefined, undefined, ['my_field', field, 'tid', $binop202, 'lin_tree', $lattr203, 'ancestor', self, 'report', $lattr204], sub_value);
/*  2134 */                     $blk = 40; /* allowing case fallthrough */
/*  2135 */                 case 40:
/*  2136 */                     /* --- function return or resume suspension --- */
/*  2137 */                     if ($ret && $ret.$isSuspension) {
/*  2138 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 78, 32);
/*  2139 */                     }
/*  2140 */                     var $call205 = $ret;
/*  2141 */ 
/*  2142 */                     //
/*  2143 */                     // line 78:
/*  2144 */                     //                     new_child = CaitNode(sub_value, my_field=field,
/*  2145 */                     //                                 ^
/*  2146 */                     //
/*  2147 */                     Sk.currLineNo = 78;
/*  2148 */                     Sk.currColNo = 32;
/*  2149 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2150 */                     $currLineNo = 78;
/*  2151 */                     $currColNo = 32;
/*  2152 */                     new_child = $call205;
/*  2153 */ 
/*  2154 */                     //
/*  2155 */                     // line 83:
/*  2156 */                     //                     self.children.append(new_child)
/*  2157 */                     //                     ^
/*  2158 */                     //
/*  2159 */                     Sk.currLineNo = 83;
/*  2160 */                     Sk.currColNo = 20;
/*  2161 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2162 */                     $currLineNo = 83;
/*  2163 */                     $currColNo = 20;
/*  2164 */                     if (self === undefined) {
/*  2165 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2166 */                     }
/*  2167 */                     $ret = Sk.abstr.gattr(self, 'children', true);
/*  2168 */                     $blk = 41; /* allowing case fallthrough */
/*  2169 */                 case 41:
/*  2170 */                     /* --- function return or resume suspension --- */
/*  2171 */                     if ($ret && $ret.$isSuspension) {
/*  2172 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 83, 20);
/*  2173 */                     }
/*  2174 */                     var $lattr206 = $ret;
/*  2175 */                     $ret = Sk.abstr.gattr($lattr206, 'append', true);
/*  2176 */                     $blk = 42; /* allowing case fallthrough */
/*  2177 */                 case 42:
/*  2178 */                     /* --- function return or resume suspension --- */
/*  2179 */                     if ($ret && $ret.$isSuspension) {
/*  2180 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 83, 20);
/*  2181 */                     }
/*  2182 */                     var $lattr207 = $ret;
/*  2183 */                     if (new_child === undefined) {
/*  2184 */                         throw new Sk.builtin.UnboundLocalError('local variable \'new_child\' referenced before assignment');
/*  2185 */                     }
/*  2186 */                     $ret;
/*  2187 */                     $ret = Sk.misceval.callsimOrSuspend($lattr207, new_child);
/*  2188 */                     $blk = 43; /* allowing case fallthrough */
/*  2189 */                 case 43:
/*  2190 */                     /* --- function return or resume suspension --- */
/*  2191 */                     if ($ret && $ret.$isSuspension) {
/*  2192 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 83, 20);
/*  2193 */                     }
/*  2194 */                     var $call208 = $ret;
/*  2195 */ 
/*  2196 */                     //
/*  2197 */                     // line 83:
/*  2198 */                     //                     self.children.append(new_child)
/*  2199 */                     //                     ^
/*  2200 */                     //
/*  2201 */                     Sk.currLineNo = 83;
/*  2202 */                     Sk.currColNo = 20;
/*  2203 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2204 */                     $currLineNo = 83;
/*  2205 */                     $currColNo = 20;
/*  2206 */ 
/*  2207 */ 
/*  2208 */                     //
/*  2209 */                     // line 84:
/*  2210 */                     //                     tid_count = len(self.linear_tree) - 1
/*  2211 */                     //                     ^
/*  2212 */                     //
/*  2213 */                     Sk.currLineNo = 84;
/*  2214 */                     Sk.currColNo = 20;
/*  2215 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2216 */                     $currLineNo = 84;
/*  2217 */                     $currColNo = 20;
/*  2218 */                     var $loadgbl209 = Sk.misceval.loadname('len', $gbl);
/*  2219 */                     if (self === undefined) {
/*  2220 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2221 */                     }
/*  2222 */                     $ret = Sk.abstr.gattr(self, 'linear_tree', true);
/*  2223 */                     $blk = 44; /* allowing case fallthrough */
/*  2224 */                 case 44:
/*  2225 */                     /* --- function return or resume suspension --- */
/*  2226 */                     if ($ret && $ret.$isSuspension) {
/*  2227 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 84, 36);
/*  2228 */                     }
/*  2229 */                     var $lattr210 = $ret;
/*  2230 */                     $ret;
/*  2231 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl209, $lattr210);
/*  2232 */                     $blk = 45; /* allowing case fallthrough */
/*  2233 */                 case 45:
/*  2234 */                     /* --- function return or resume suspension --- */
/*  2235 */                     if ($ret && $ret.$isSuspension) {
/*  2236 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 84, 32);
/*  2237 */                     }
/*  2238 */                     var $call211 = $ret;
/*  2239 */ 
/*  2240 */                     //
/*  2241 */                     // line 84:
/*  2242 */                     //                     tid_count = len(self.linear_tree) - 1
/*  2243 */                     //                                 ^
/*  2244 */                     //
/*  2245 */                     Sk.currLineNo = 84;
/*  2246 */                     Sk.currColNo = 32;
/*  2247 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2248 */                     $currLineNo = 84;
/*  2249 */                     $currColNo = 32;
/*  2250 */                     var $binop212 = Sk.abstr.numberBinOp($call211, new Sk.builtin.int_(1), 'Sub');
/*  2251 */                     tid_count = $binop212;
/*  2252 */                     $blk = 35; /* allowing case fallthrough */
/*  2253 */                 case 35:
/*  2254 */                     /* --- end of if --- */
/*  2255 */                     $blk = 31; /* jump */
/*  2256 */                     continue;
/*  2257 */                 case 32:
/*  2258 */                     /* --- for cleanup --- */
/*  2259 */                     $blk = 33; /* allowing case fallthrough */
/*  2260 */                 case 33:
/*  2261 */                     /* --- for end --- */
/*  2262 */                     $blk = 22; /* jump */
/*  2263 */                     continue;
/*  2264 */                 }
/*  2265 */             } catch (err) {
/*  2266 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2267 */                     Sk.execStart = Date.now()
/*  2268 */                 }
/*  2269 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2270 */                     err = new Sk.builtin.ExternalError(err);
/*  2271 */                 }
/*  2272 */                 err.traceback.push({
/*  2273 */                     lineno: $currLineNo,
/*  2274 */                     colno: $currColNo,
/*  2275 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  2276 */                 });
/*  2277 */                 if ($exc.length > 0) {
/*  2278 */                     $err = err;
/*  2279 */                     Sk.err = $err;
/*  2280 */                     $blk = $exc.pop();
/*  2281 */                     continue;
/*  2282 */                 } else {
/*  2283 */                     throw err;
/*  2284 */                 }
/*  2285 */             }
/*  2286 */         }
/*  2287 */     });
/*  2288 */     var $scope214 = (function $__str__215$(self) {
/*  2289 */         var self, self, self, $str216, $str216, $lattr217, $str216, $lattr217, $lattr218, $elem219, $str220, $elem221, $loadgbl222, $str216, $lattr217, $lattr218, $elem219, $str220, $elem221, $loadgbl222, $lattr223, $str216, $lattr217, $lattr218, $elem219, $str220, $elem221, $loadgbl222, $lattr223, $call224, $elem225, $loadlist226;
/*  2290 */         var $wakeFromSuspension = function() {
/*  2291 */             var susp = $scope214.$wakingSuspension;
/*  2292 */             delete $scope214.$wakingSuspension;
/*  2293 */             $blk = susp.$blk;
/*  2294 */             $loc = susp.$loc;
/*  2295 */             $gbl = susp.$gbl;
/*  2296 */             $exc = susp.$exc;
/*  2297 */             $err = susp.$err;
/*  2298 */             Sk.err = $err;
/*  2299 */             $postfinally = susp.$postfinally;
/*  2300 */             $currLineNo = susp.$lineno;
/*  2301 */             $currColNo = susp.$colno;
/*  2302 */             Sk.lastYield = Date.now();
/*  2303 */             self = susp.$tmps.self;
/*  2304 */             $str216 = susp.$tmps.$str216;
/*  2305 */             $lattr217 = susp.$tmps.$lattr217;
/*  2306 */             $lattr218 = susp.$tmps.$lattr218;
/*  2307 */             $elem219 = susp.$tmps.$elem219;
/*  2308 */             $str220 = susp.$tmps.$str220;
/*  2309 */             $elem221 = susp.$tmps.$elem221;
/*  2310 */             $loadgbl222 = susp.$tmps.$loadgbl222;
/*  2311 */             $lattr223 = susp.$tmps.$lattr223;
/*  2312 */             $call224 = susp.$tmps.$call224;
/*  2313 */             $elem225 = susp.$tmps.$elem225;
/*  2314 */             $loadlist226 = susp.$tmps.$loadlist226;
/*  2315 */             try {
/*  2316 */                 $ret = susp.child.resume();
/*  2317 */             } catch (err) {
/*  2318 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2319 */                     Sk.execStart = Date.now()
/*  2320 */                 }
/*  2321 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2322 */                     err = new Sk.builtin.ExternalError(err);
/*  2323 */                 }
/*  2324 */                 err.traceback.push({
/*  2325 */                     lineno: $currLineNo,
/*  2326 */                     colno: $currColNo,
/*  2327 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  2328 */                 });
/*  2329 */                 if ($exc.length > 0) {
/*  2330 */                     $err = err;
/*  2331 */                     Sk.err = $err;
/*  2332 */                     $blk = $exc.pop();
/*  2333 */                 } else {
/*  2334 */                     throw err;
/*  2335 */                 }
/*  2336 */             }
/*  2337 */         };
/*  2338 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2339 */             var susp = new Sk.misceval.Suspension();
/*  2340 */             susp.child = $child;
/*  2341 */             susp.resume = function() {
/*  2342 */                 $scope214.$wakingSuspension = susp;
/*  2343 */                 return $scope214();
/*  2344 */             };
/*  2345 */             susp.data = susp.child.data;
/*  2346 */             susp.$blk = $blk;
/*  2347 */             susp.$loc = $loc;
/*  2348 */             susp.$gbl = $gbl;
/*  2349 */             susp.$exc = $exc;
/*  2350 */             susp.$err = $err;
/*  2351 */             susp.$postfinally = $postfinally;
/*  2352 */             susp.$filename = $filename;
/*  2353 */             susp.$lineno = $lineno;
/*  2354 */             susp.$colno = $colno;
/*  2355 */             susp.optional = susp.child.optional;
/*  2356 */             susp.$tmps = {
/*  2357 */                 "self": self,
/*  2358 */                 "$str216": $str216,
/*  2359 */                 "$lattr217": $lattr217,
/*  2360 */                 "$lattr218": $lattr218,
/*  2361 */                 "$elem219": $elem219,
/*  2362 */                 "$str220": $str220,
/*  2363 */                 "$elem221": $elem221,
/*  2364 */                 "$loadgbl222": $loadgbl222,
/*  2365 */                 "$lattr223": $lattr223,
/*  2366 */                 "$call224": $call224,
/*  2367 */                 "$elem225": $elem225,
/*  2368 */                 "$loadlist226": $loadlist226
/*  2369 */             };
/*  2370 */             return susp;
/*  2371 */         };
/*  2372 */         var $blk = 0,
/*  2373 */             $exc = [],
/*  2374 */             $loc = {},
/*  2375 */             $gbl = this,
/*  2376 */             $err = undefined,
/*  2377 */             $ret = undefined,
/*  2378 */             $postfinally = undefined,
/*  2379 */             $currLineNo = undefined,
/*  2380 */             $currColNo = undefined;
/*  2381 */         Sk.err = $err;
/*  2382 */         if (typeof Sk.execStart === 'undefined') {
/*  2383 */             Sk.execStart = Date.now()
/*  2384 */         }
/*  2385 */         if (typeof Sk.lastYield === 'undefined') {
/*  2386 */             Sk.lastYield = Date.now()
/*  2387 */         }
/*  2388 */         if ($scope214.$wakingSuspension !== undefined) {
/*  2389 */             $wakeFromSuspension();
/*  2390 */         } else {
/*  2391 */             Sk.builtin.pyCheckArgs("__str__", arguments, 1, 1, false, false);
/*  2392 */         }
/*  2393 */         while (true) {
/*  2394 */             try {
/*  2395 */                 var $dateNow = Date.now();
/*  2396 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  2397 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2398 */                 }
/*  2399 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2400 */                     var $susp = $saveSuspension({
/*  2401 */                         data: {
/*  2402 */                             type: 'Sk.yield'
/*  2403 */                         },
/*  2404 */                         resume: function() {}
/*  2405 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  2406 */                     $susp.$blk = $blk;
/*  2407 */                     $susp.optional = true;
/*  2408 */                     return $susp;
/*  2409 */                 }
/*  2410 */                 switch ($blk) {
/*  2411 */                 case 0:
/*  2412 */                     /* --- codeobj entry --- */
/*  2413 */                     if (self === undefined) {
/*  2414 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2415 */                     }
/*  2416 */ 
/*  2417 */ 
/*  2418 */                     //
/*  2419 */                     // line 87:
/*  2420 */                     //         return ''.join([self.field, "\n", dump(self.astNode)])
/*  2421 */                     //         ^
/*  2422 */                     //
/*  2423 */                     Sk.currLineNo = 87;
/*  2424 */                     Sk.currColNo = 8;
/*  2425 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2426 */                     $currLineNo = 87;
/*  2427 */                     $currColNo = 8;
/*  2428 */                     var $str216 = new Sk.builtins['str']('');
/*  2429 */                     $ret = Sk.abstr.gattr($str216, 'join', true);
/*  2430 */                     $blk = 1; /* allowing case fallthrough */
/*  2431 */                 case 1:
/*  2432 */                     /* --- function return or resume suspension --- */
/*  2433 */                     if ($ret && $ret.$isSuspension) {
/*  2434 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 87, 15);
/*  2435 */                     }
/*  2436 */                     var $lattr217 = $ret;
/*  2437 */                     if (self === undefined) {
/*  2438 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2439 */                     }
/*  2440 */                     $ret = Sk.abstr.gattr(self, 'field', true);
/*  2441 */                     $blk = 2; /* allowing case fallthrough */
/*  2442 */                 case 2:
/*  2443 */                     /* --- function return or resume suspension --- */
/*  2444 */                     if ($ret && $ret.$isSuspension) {
/*  2445 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 87, 24);
/*  2446 */                     }
/*  2447 */                     var $lattr218 = $ret;
/*  2448 */                     var $elem219 = $lattr218;
/*  2449 */                     var $str220 = new Sk.builtins['str']('\n');
/*  2450 */                     var $elem221 = $str220;
/*  2451 */                     var $loadgbl222 = Sk.misceval.loadname('dump', $gbl);
/*  2452 */                     if (self === undefined) {
/*  2453 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2454 */                     }
/*  2455 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/*  2456 */                     $blk = 3; /* allowing case fallthrough */
/*  2457 */                 case 3:
/*  2458 */                     /* --- function return or resume suspension --- */
/*  2459 */                     if ($ret && $ret.$isSuspension) {
/*  2460 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 87, 47);
/*  2461 */                     }
/*  2462 */                     var $lattr223 = $ret;
/*  2463 */                     $ret;
/*  2464 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl222, $lattr223);
/*  2465 */                     $blk = 4; /* allowing case fallthrough */
/*  2466 */                 case 4:
/*  2467 */                     /* --- function return or resume suspension --- */
/*  2468 */                     if ($ret && $ret.$isSuspension) {
/*  2469 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 87, 42);
/*  2470 */                     }
/*  2471 */                     var $call224 = $ret;
/*  2472 */ 
/*  2473 */                     //
/*  2474 */                     // line 87:
/*  2475 */                     //         return ''.join([self.field, "\n", dump(self.astNode)])
/*  2476 */                     //                                           ^
/*  2477 */                     //
/*  2478 */                     Sk.currLineNo = 87;
/*  2479 */                     Sk.currColNo = 42;
/*  2480 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2481 */                     $currLineNo = 87;
/*  2482 */                     $currColNo = 42;
/*  2483 */                     var $elem225 = $call224;
/*  2484 */                     var $loadlist226 = new Sk.builtins['list']([$elem219, $elem221, $elem225]);
/*  2485 */                     $ret;
/*  2486 */                     $ret = Sk.misceval.callsimOrSuspend($lattr217, $loadlist226);
/*  2487 */                     $blk = 5; /* allowing case fallthrough */
/*  2488 */                 case 5:
/*  2489 */                     /* --- function return or resume suspension --- */
/*  2490 */                     if ($ret && $ret.$isSuspension) {
/*  2491 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 87, 15);
/*  2492 */                     }
/*  2493 */                     var $call227 = $ret;
/*  2494 */ 
/*  2495 */                     //
/*  2496 */                     // line 87:
/*  2497 */                     //         return ''.join([self.field, "\n", dump(self.astNode)])
/*  2498 */                     //                ^
/*  2499 */                     //
/*  2500 */                     Sk.currLineNo = 87;
/*  2501 */                     Sk.currColNo = 15;
/*  2502 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2503 */                     $currLineNo = 87;
/*  2504 */                     $currColNo = 15;
/*  2505 */                     return $call227;
/*  2506 */                     return Sk.builtin.none.none$;
/*  2507 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  2508 */                 }
/*  2509 */             } catch (err) {
/*  2510 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2511 */                     Sk.execStart = Date.now()
/*  2512 */                 }
/*  2513 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2514 */                     err = new Sk.builtin.ExternalError(err);
/*  2515 */                 }
/*  2516 */                 err.traceback.push({
/*  2517 */                     lineno: $currLineNo,
/*  2518 */                     colno: $currColNo,
/*  2519 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  2520 */                 });
/*  2521 */                 if ($exc.length > 0) {
/*  2522 */                     $err = err;
/*  2523 */                     Sk.err = $err;
/*  2524 */                     $blk = $exc.pop();
/*  2525 */                     continue;
/*  2526 */                 } else {
/*  2527 */                     throw err;
/*  2528 */                 }
/*  2529 */             }
/*  2530 */         }
/*  2531 */     });
/*  2532 */     var $scope229 = (function $numeric_logic_check230$(self, mag, expr) {
/*  2533 */         // has cell
/*  2534 */         var ins_expr, ins_nums, ins_res, num, raw_num, std_nums, std_res, test_nums; /* locals */
/*  2535 */         var expr, expr, ins_expr, ins_expr, ins_expr, ins_expr, ins_expr, ins_expr, ins_nums, ins_nums, ins_res, ins_res, ins_res, mag, mag, mag, mag, mag, num, num, num, num, raw_num, raw_num, raw_num, raw_num, raw_num, raw_num, raw_num, raw_num, self, self, self, self, self, self, self, std_nums, std_nums, std_res, std_res, std_res, test_nums, test_nums, test_nums, test_nums, test_nums, test_nums, test_nums, test_nums, test_nums, test_nums, test_nums, $loadgbl379, $loadgbl380, $loadgbl379, $loadgbl380, $lattr381, $loadgbl379, $loadgbl380, $lattr381, $call382, $loadgbl379, $loadgbl380, $lattr381, $call382, $lattr383, $loadgbl379, $loadgbl380, $lattr381, $call382, $lattr383, $call384, $loadgbl379, $loadgbl380, $lattr381, $call382, $lattr383, $call384, $lattr385, $loadgbl379, $loadgbl380, $lattr381, $call382, $lattr383, $call384, $lattr385, $lsubscr386, $lattr388, $str389, $lattr391, $str392, $iter395, $iter395, $lattr398, $lattr400, $binop401, $lattr403, $binop404, $iter406, $iter406, $lattr409, $lattr411, $binop412, $lattr414, $binop415, $lattr417, $compareres418, $str419, $lattr423, $compareres424, $str425, $lattr429, $compareres430, $str431, $lattr435, $compareres436, $str437, $compareres443;
/*  2536 */         var $wakeFromSuspension = function() {
/*  2537 */             var susp = $scope229.$wakingSuspension;
/*  2538 */             delete $scope229.$wakingSuspension;
/*  2539 */             $blk = susp.$blk;
/*  2540 */             $loc = susp.$loc;
/*  2541 */             $gbl = susp.$gbl;
/*  2542 */             $exc = susp.$exc;
/*  2543 */             $err = susp.$err;
/*  2544 */             Sk.err = $err;
/*  2545 */             $postfinally = susp.$postfinally;
/*  2546 */             $currLineNo = susp.$lineno;
/*  2547 */             $currColNo = susp.$colno;
/*  2548 */             Sk.lastYield = Date.now();
/*  2549 */             $cell = susp.$cell;
/*  2550 */             expr = susp.$tmps.expr;
/*  2551 */             ins_expr = susp.$tmps.ins_expr;
/*  2552 */             ins_nums = susp.$tmps.ins_nums;
/*  2553 */             ins_res = susp.$tmps.ins_res;
/*  2554 */             mag = susp.$tmps.mag;
/*  2555 */             num = susp.$tmps.num;
/*  2556 */             raw_num = susp.$tmps.raw_num;
/*  2557 */             self = susp.$tmps.self;
/*  2558 */             std_nums = susp.$tmps.std_nums;
/*  2559 */             std_res = susp.$tmps.std_res;
/*  2560 */             test_nums = susp.$tmps.test_nums;
/*  2561 */             $loadgbl379 = susp.$tmps.$loadgbl379;
/*  2562 */             $loadgbl380 = susp.$tmps.$loadgbl380;
/*  2563 */             $lattr381 = susp.$tmps.$lattr381;
/*  2564 */             $call382 = susp.$tmps.$call382;
/*  2565 */             $lattr383 = susp.$tmps.$lattr383;
/*  2566 */             $call384 = susp.$tmps.$call384;
/*  2567 */             $lattr385 = susp.$tmps.$lattr385;
/*  2568 */             $lsubscr386 = susp.$tmps.$lsubscr386;
/*  2569 */             $lattr388 = susp.$tmps.$lattr388;
/*  2570 */             $str389 = susp.$tmps.$str389;
/*  2571 */             $lattr391 = susp.$tmps.$lattr391;
/*  2572 */             $str392 = susp.$tmps.$str392;
/*  2573 */             $iter395 = susp.$tmps.$iter395;
/*  2574 */             $lattr398 = susp.$tmps.$lattr398;
/*  2575 */             $lattr400 = susp.$tmps.$lattr400;
/*  2576 */             $binop401 = susp.$tmps.$binop401;
/*  2577 */             $lattr403 = susp.$tmps.$lattr403;
/*  2578 */             $binop404 = susp.$tmps.$binop404;
/*  2579 */             $iter406 = susp.$tmps.$iter406;
/*  2580 */             $lattr409 = susp.$tmps.$lattr409;
/*  2581 */             $lattr411 = susp.$tmps.$lattr411;
/*  2582 */             $binop412 = susp.$tmps.$binop412;
/*  2583 */             $lattr414 = susp.$tmps.$lattr414;
/*  2584 */             $binop415 = susp.$tmps.$binop415;
/*  2585 */             $lattr417 = susp.$tmps.$lattr417;
/*  2586 */             $compareres418 = susp.$tmps.$compareres418;
/*  2587 */             $str419 = susp.$tmps.$str419;
/*  2588 */             $lattr423 = susp.$tmps.$lattr423;
/*  2589 */             $compareres424 = susp.$tmps.$compareres424;
/*  2590 */             $str425 = susp.$tmps.$str425;
/*  2591 */             $lattr429 = susp.$tmps.$lattr429;
/*  2592 */             $compareres430 = susp.$tmps.$compareres430;
/*  2593 */             $str431 = susp.$tmps.$str431;
/*  2594 */             $lattr435 = susp.$tmps.$lattr435;
/*  2595 */             $compareres436 = susp.$tmps.$compareres436;
/*  2596 */             $str437 = susp.$tmps.$str437;
/*  2597 */             $compareres443 = susp.$tmps.$compareres443;
/*  2598 */             try {
/*  2599 */                 $ret = susp.child.resume();
/*  2600 */             } catch (err) {
/*  2601 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  2602 */                     Sk.execStart = Date.now()
/*  2603 */                 }
/*  2604 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  2605 */                     err = new Sk.builtin.ExternalError(err);
/*  2606 */                 }
/*  2607 */                 err.traceback.push({
/*  2608 */                     lineno: $currLineNo,
/*  2609 */                     colno: $currColNo,
/*  2610 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  2611 */                 });
/*  2612 */                 if ($exc.length > 0) {
/*  2613 */                     $err = err;
/*  2614 */                     Sk.err = $err;
/*  2615 */                     $blk = $exc.pop();
/*  2616 */                 } else {
/*  2617 */                     throw err;
/*  2618 */                 }
/*  2619 */             }
/*  2620 */         };
/*  2621 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  2622 */             var susp = new Sk.misceval.Suspension();
/*  2623 */             susp.child = $child;
/*  2624 */             susp.resume = function() {
/*  2625 */                 $scope229.$wakingSuspension = susp;
/*  2626 */                 return $scope229();
/*  2627 */             };
/*  2628 */             susp.data = susp.child.data;
/*  2629 */             susp.$blk = $blk;
/*  2630 */             susp.$loc = $loc;
/*  2631 */             susp.$gbl = $gbl;
/*  2632 */             susp.$exc = $exc;
/*  2633 */             susp.$err = $err;
/*  2634 */             susp.$postfinally = $postfinally;
/*  2635 */             susp.$filename = $filename;
/*  2636 */             susp.$lineno = $lineno;
/*  2637 */             susp.$colno = $colno;
/*  2638 */             susp.optional = susp.child.optional;
/*  2639 */             susp.$cell = $cell;
/*  2640 */             susp.$tmps = {
/*  2641 */                 "expr": expr,
/*  2642 */                 "ins_expr": ins_expr,
/*  2643 */                 "ins_nums": ins_nums,
/*  2644 */                 "ins_res": ins_res,
/*  2645 */                 "mag": mag,
/*  2646 */                 "num": num,
/*  2647 */                 "raw_num": raw_num,
/*  2648 */                 "self": self,
/*  2649 */                 "std_nums": std_nums,
/*  2650 */                 "std_res": std_res,
/*  2651 */                 "test_nums": test_nums,
/*  2652 */                 "$loadgbl379": $loadgbl379,
/*  2653 */                 "$loadgbl380": $loadgbl380,
/*  2654 */                 "$lattr381": $lattr381,
/*  2655 */                 "$call382": $call382,
/*  2656 */                 "$lattr383": $lattr383,
/*  2657 */                 "$call384": $call384,
/*  2658 */                 "$lattr385": $lattr385,
/*  2659 */                 "$lsubscr386": $lsubscr386,
/*  2660 */                 "$lattr388": $lattr388,
/*  2661 */                 "$str389": $str389,
/*  2662 */                 "$lattr391": $lattr391,
/*  2663 */                 "$str392": $str392,
/*  2664 */                 "$iter395": $iter395,
/*  2665 */                 "$lattr398": $lattr398,
/*  2666 */                 "$lattr400": $lattr400,
/*  2667 */                 "$binop401": $binop401,
/*  2668 */                 "$lattr403": $lattr403,
/*  2669 */                 "$binop404": $binop404,
/*  2670 */                 "$iter406": $iter406,
/*  2671 */                 "$lattr409": $lattr409,
/*  2672 */                 "$lattr411": $lattr411,
/*  2673 */                 "$binop412": $binop412,
/*  2674 */                 "$lattr414": $lattr414,
/*  2675 */                 "$binop415": $binop415,
/*  2676 */                 "$lattr417": $lattr417,
/*  2677 */                 "$compareres418": $compareres418,
/*  2678 */                 "$str419": $str419,
/*  2679 */                 "$lattr423": $lattr423,
/*  2680 */                 "$compareres424": $compareres424,
/*  2681 */                 "$str425": $str425,
/*  2682 */                 "$lattr429": $lattr429,
/*  2683 */                 "$compareres430": $compareres430,
/*  2684 */                 "$str431": $str431,
/*  2685 */                 "$lattr435": $lattr435,
/*  2686 */                 "$compareres436": $compareres436,
/*  2687 */                 "$str437": $str437,
/*  2688 */                 "$compareres443": $compareres443
/*  2689 */             };
/*  2690 */             return susp;
/*  2691 */         };
/*  2692 */         var $blk = 0,
/*  2693 */             $exc = [],
/*  2694 */             $loc = {},
/*  2695 */             $cell = {},
/*  2696 */             $gbl = this,
/*  2697 */             $err = undefined,
/*  2698 */             $ret = undefined,
/*  2699 */             $postfinally = undefined,
/*  2700 */             $currLineNo = undefined,
/*  2701 */             $currColNo = undefined;
/*  2702 */         Sk.err = $err;
/*  2703 */         if (typeof Sk.execStart === 'undefined') {
/*  2704 */             Sk.execStart = Date.now()
/*  2705 */         }
/*  2706 */         if (typeof Sk.lastYield === 'undefined') {
/*  2707 */             Sk.lastYield = Date.now()
/*  2708 */         }
/*  2709 */         if ($scope229.$wakingSuspension !== undefined) {
/*  2710 */             $wakeFromSuspension();
/*  2711 */         } else {
/*  2712 */             Sk.builtin.pyCheckArgs("numeric_logic_check", arguments, 3, 3, false, false);
/*  2713 */         }
/*  2714 */         while (true) {
/*  2715 */             try {
/*  2716 */                 var $dateNow = Date.now();
/*  2717 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  2718 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  2719 */                 }
/*  2720 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  2721 */                     var $susp = $saveSuspension({
/*  2722 */                         data: {
/*  2723 */                             type: 'Sk.yield'
/*  2724 */                         },
/*  2725 */                         resume: function() {}
/*  2726 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  2727 */                     $susp.$blk = $blk;
/*  2728 */                     $susp.optional = true;
/*  2729 */                     return $susp;
/*  2730 */                 }
/*  2731 */                 switch ($blk) {
/*  2732 */                 case 0:
/*  2733 */                     /* --- codeobj entry --- */
/*  2734 */                     if (self === undefined) {
/*  2735 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2736 */                     }
/*  2737 */                     if (mag === undefined) {
/*  2738 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mag\' referenced before assignment');
/*  2739 */                     }
/*  2740 */                     if (expr === undefined) {
/*  2741 */                         throw new Sk.builtin.UnboundLocalError('local variable \'expr\' referenced before assignment');
/*  2742 */                     }
/*  2743 */ 
/*  2744 */ 
/*  2745 */                     //
/*  2746 */                     // line 90:
/*  2747 */                     //         """
/*  2748 */                     //         ^
/*  2749 */                     //
/*  2750 */                     Sk.currLineNo = 90;
/*  2751 */                     Sk.currColNo = 8;
/*  2752 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2753 */                     $currLineNo = 90;
/*  2754 */                     $currColNo = 8;
/*  2755 */                     var $str231 = new Sk.builtins['str']('\n        If this node is a Compare or BoolOp node, sees if the logic in expr (a javascript string being a logical\n        statement) matches the logic of self. This assumes that we are only comparing numerical values to a single\n        variable\n        TODO: modify this to take multiple variables\n        TODO: modify to support more than +, -, *, and / BinOps\n        TODO: modify to support unary operators other than USub and Not\n        TODO: This is very finicky and buggy, try not to use it\n        Args:\n            mag (float): the order of magnitude that should be added to numbers to check logic, 1 is usually a good value,\n                    especially when working with the set of integers.\n            expr (Compare or BoolOp): the "Compare" or "BoolOp" tree to check self against\n\n        Returns:\n            bool: True if self (typically student node) and expr are equivalent boolean expressions\n        ');
/*  2756 */ 
/*  2757 */                     //
/*  2758 */                     // line 107:
/*  2759 */                     //         def eval_unop(unop_num, unop_node):
/*  2760 */                     //         ^
/*  2761 */                     //
/*  2762 */                     Sk.currLineNo = 107;
/*  2763 */                     Sk.currColNo = 8;
/*  2764 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2765 */                     $currLineNo = 107;
/*  2766 */                     $currColNo = 8;
/*  2767 */                     $scope232.co_name = new Sk.builtins['str']('eval_unop');
/*  2768 */                     $scope232.co_varnames = ['unop_num', 'unop_node'];
/*  2769 */                     var $funcobj243 = new Sk.builtins['function']($scope232, $gbl, $cell);
/*  2770 */                     $cell.eval_unop = $funcobj243;
/*  2771 */ 
/*  2772 */                     //
/*  2773 */                     // line 114:
/*  2774 */                     //         def eval_binop(binop_num, binop_node):
/*  2775 */                     //         ^
/*  2776 */                     //
/*  2777 */                     Sk.currLineNo = 114;
/*  2778 */                     Sk.currColNo = 8;
/*  2779 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2780 */                     $currLineNo = 114;
/*  2781 */                     $currColNo = 8;
/*  2782 */                     $scope244.co_name = new Sk.builtins['str']('eval_binop');
/*  2783 */                     $scope244.co_varnames = ['binop_num', 'binop_node'];
/*  2784 */                     var $funcobj261 = new Sk.builtins['function']($scope244, $gbl, $cell);
/*  2785 */                     $cell.eval_binop = $funcobj261;
/*  2786 */ 
/*  2787 */                     //
/*  2788 */                     // line 125:
/*  2789 */                     //         def eval_selector(op_num, op_expr):
/*  2790 */                     //         ^
/*  2791 */                     //
/*  2792 */                     Sk.currLineNo = 125;
/*  2793 */                     Sk.currColNo = 8;
/*  2794 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2795 */                     $currLineNo = 125;
/*  2796 */                     $currColNo = 8;
/*  2797 */                     $scope262.co_name = new Sk.builtins['str']('eval_selector');
/*  2798 */                     $scope262.co_varnames = ['op_num', 'op_expr'];
/*  2799 */                     var $funcobj298 = new Sk.builtins['function']($scope262, $gbl, $cell);
/*  2800 */                     $cell.eval_selector = $funcobj298;
/*  2801 */ 
/*  2802 */                     //
/*  2803 */                     // line 137:
/*  2804 */                     //         def eval_bool_comp(num_list, comp_ast):
/*  2805 */                     //         ^
/*  2806 */                     //
/*  2807 */                     Sk.currLineNo = 137;
/*  2808 */                     Sk.currColNo = 8;
/*  2809 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2810 */                     $currLineNo = 137;
/*  2811 */                     $currColNo = 8;
/*  2812 */                     $scope299.co_name = new Sk.builtins['str']('eval_bool_comp');
/*  2813 */                     $scope299.co_varnames = ['num_list', 'comp_ast'];
/*  2814 */                     var $funcobj341 = new Sk.builtins['function']($scope299, $gbl, $cell);
/*  2815 */                     $cell.eval_bool_comp = $funcobj341;
/*  2816 */ 
/*  2817 */                     //
/*  2818 */                     // line 166:
/*  2819 */                     //         def eval_boolop(num_list, boolop_ast):
/*  2820 */                     //         ^
/*  2821 */                     //
/*  2822 */                     Sk.currLineNo = 166;
/*  2823 */                     Sk.currColNo = 8;
/*  2824 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2825 */                     $currLineNo = 166;
/*  2826 */                     $currColNo = 8;
/*  2827 */                     $scope342.co_name = new Sk.builtins['str']('eval_boolop');
/*  2828 */                     $scope342.co_varnames = ['num_list', 'boolop_ast'];
/*  2829 */                     var $funcobj378 = new Sk.builtins['function']($scope342, $gbl, $cell);
/*  2830 */                     $cell.eval_boolop = $funcobj378;
/*  2831 */ 
/*  2832 */                     //
/*  2833 */                     // line 188:
/*  2834 */                     //         try:
/*  2835 */                     //         ^
/*  2836 */                     //
/*  2837 */                     Sk.currLineNo = 188;
/*  2838 */                     Sk.currColNo = 8;
/*  2839 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2840 */                     $currLineNo = 188;
/*  2841 */                     $currColNo = 8;
/*  2842 */                     $exc.push(1);
/*  2843 */ 
/*  2844 */                     //
/*  2845 */                     // line 189:
/*  2846 */                     //             ins_expr = CaitNode(ast.parse(expr), report=self.report).body[0].value
/*  2847 */                     //             ^
/*  2848 */                     //
/*  2849 */                     Sk.currLineNo = 189;
/*  2850 */                     Sk.currColNo = 12;
/*  2851 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2852 */                     $currLineNo = 189;
/*  2853 */                     $currColNo = 12;
/*  2854 */                     var $loadgbl379 = Sk.misceval.loadname('CaitNode', $gbl);
/*  2855 */                     var $loadgbl380 = Sk.misceval.loadname('ast', $gbl);
/*  2856 */                     $ret = Sk.abstr.gattr($loadgbl380, 'parse', true);
/*  2857 */                     $blk = 5; /* allowing case fallthrough */
/*  2858 */                 case 5:
/*  2859 */                     /* --- function return or resume suspension --- */
/*  2860 */                     if ($ret && $ret.$isSuspension) {
/*  2861 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 189, 32);
/*  2862 */                     }
/*  2863 */                     var $lattr381 = $ret;
/*  2864 */                     if (expr === undefined) {
/*  2865 */                         throw new Sk.builtin.UnboundLocalError('local variable \'expr\' referenced before assignment');
/*  2866 */                     }
/*  2867 */                     $ret;
/*  2868 */                     $ret = Sk.misceval.callsimOrSuspend($lattr381, expr);
/*  2869 */                     $blk = 6; /* allowing case fallthrough */
/*  2870 */                 case 6:
/*  2871 */                     /* --- function return or resume suspension --- */
/*  2872 */                     if ($ret && $ret.$isSuspension) {
/*  2873 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 189, 32);
/*  2874 */                     }
/*  2875 */                     var $call382 = $ret;
/*  2876 */ 
/*  2877 */                     //
/*  2878 */                     // line 189:
/*  2879 */                     //             ins_expr = CaitNode(ast.parse(expr), report=self.report).body[0].value
/*  2880 */                     //                                 ^
/*  2881 */                     //
/*  2882 */                     Sk.currLineNo = 189;
/*  2883 */                     Sk.currColNo = 32;
/*  2884 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2885 */                     $currLineNo = 189;
/*  2886 */                     $currColNo = 32;
/*  2887 */                     if (self === undefined) {
/*  2888 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  2889 */                     }
/*  2890 */                     $ret = Sk.abstr.gattr(self, 'report', true);
/*  2891 */                     $blk = 7; /* allowing case fallthrough */
/*  2892 */                 case 7:
/*  2893 */                     /* --- function return or resume suspension --- */
/*  2894 */                     if ($ret && $ret.$isSuspension) {
/*  2895 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 189, 56);
/*  2896 */                     }
/*  2897 */                     var $lattr383 = $ret;
/*  2898 */                     $ret;
/*  2899 */                     $ret = Sk.misceval.callOrSuspend($loadgbl379, undefined, undefined, ['report', $lattr383], $call382);
/*  2900 */                     $blk = 8; /* allowing case fallthrough */
/*  2901 */                 case 8:
/*  2902 */                     /* --- function return or resume suspension --- */
/*  2903 */                     if ($ret && $ret.$isSuspension) {
/*  2904 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 189, 23);
/*  2905 */                     }
/*  2906 */                     var $call384 = $ret;
/*  2907 */ 
/*  2908 */                     //
/*  2909 */                     // line 189:
/*  2910 */                     //             ins_expr = CaitNode(ast.parse(expr), report=self.report).body[0].value
/*  2911 */                     //                        ^
/*  2912 */                     //
/*  2913 */                     Sk.currLineNo = 189;
/*  2914 */                     Sk.currColNo = 23;
/*  2915 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2916 */                     $currLineNo = 189;
/*  2917 */                     $currColNo = 23;
/*  2918 */                     $ret = Sk.abstr.gattr($call384, 'body', true);
/*  2919 */                     $blk = 9; /* allowing case fallthrough */
/*  2920 */                 case 9:
/*  2921 */                     /* --- function return or resume suspension --- */
/*  2922 */                     if ($ret && $ret.$isSuspension) {
/*  2923 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 189, 23);
/*  2924 */                     }
/*  2925 */                     var $lattr385 = $ret;
/*  2926 */                     $ret = Sk.abstr.objectGetItem($lattr385, new Sk.builtin.int_(0), true);
/*  2927 */                     $blk = 10; /* allowing case fallthrough */
/*  2928 */                 case 10:
/*  2929 */                     /* --- function return or resume suspension --- */
/*  2930 */                     if ($ret && $ret.$isSuspension) {
/*  2931 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  2932 */                     }
/*  2933 */                     var $lsubscr386 = $ret;
/*  2934 */                     $ret = Sk.abstr.gattr($lsubscr386, 'value', true);
/*  2935 */                     $blk = 11; /* allowing case fallthrough */
/*  2936 */                 case 11:
/*  2937 */                     /* --- function return or resume suspension --- */
/*  2938 */                     if ($ret && $ret.$isSuspension) {
/*  2939 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 189, 23);
/*  2940 */                     }
/*  2941 */                     var $lattr387 = $ret;
/*  2942 */                     ins_expr = $lattr387;
/*  2943 */ 
/*  2944 */                     //
/*  2945 */                     // line 190:
/*  2946 */                     //             ins_nums = ins_expr.find_all("Num")
/*  2947 */                     //             ^
/*  2948 */                     //
/*  2949 */                     Sk.currLineNo = 190;
/*  2950 */                     Sk.currColNo = 12;
/*  2951 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2952 */                     $currLineNo = 190;
/*  2953 */                     $currColNo = 12;
/*  2954 */                     if (ins_expr === undefined) {
/*  2955 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ins_expr\' referenced before assignment');
/*  2956 */                     }
/*  2957 */                     $ret = Sk.abstr.gattr(ins_expr, 'find_all', true);
/*  2958 */                     $blk = 12; /* allowing case fallthrough */
/*  2959 */                 case 12:
/*  2960 */                     /* --- function return or resume suspension --- */
/*  2961 */                     if ($ret && $ret.$isSuspension) {
/*  2962 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 190, 23);
/*  2963 */                     }
/*  2964 */                     var $lattr388 = $ret;
/*  2965 */                     var $str389 = new Sk.builtins['str']('Num');
/*  2966 */                     $ret;
/*  2967 */                     $ret = Sk.misceval.callsimOrSuspend($lattr388, $str389);
/*  2968 */                     $blk = 13; /* allowing case fallthrough */
/*  2969 */                 case 13:
/*  2970 */                     /* --- function return or resume suspension --- */
/*  2971 */                     if ($ret && $ret.$isSuspension) {
/*  2972 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 190, 23);
/*  2973 */                     }
/*  2974 */                     var $call390 = $ret;
/*  2975 */ 
/*  2976 */                     //
/*  2977 */                     // line 190:
/*  2978 */                     //             ins_nums = ins_expr.find_all("Num")
/*  2979 */                     //                        ^
/*  2980 */                     //
/*  2981 */                     Sk.currLineNo = 190;
/*  2982 */                     Sk.currColNo = 23;
/*  2983 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2984 */                     $currLineNo = 190;
/*  2985 */                     $currColNo = 23;
/*  2986 */                     ins_nums = $call390;
/*  2987 */ 
/*  2988 */                     //
/*  2989 */                     // line 191:
/*  2990 */                     //             std_nums = self.find_all("Num")
/*  2991 */                     //             ^
/*  2992 */                     //
/*  2993 */                     Sk.currLineNo = 191;
/*  2994 */                     Sk.currColNo = 12;
/*  2995 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  2996 */                     $currLineNo = 191;
/*  2997 */                     $currColNo = 12;
/*  2998 */                     if (self === undefined) {
/*  2999 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3000 */                     }
/*  3001 */                     $ret = Sk.abstr.gattr(self, 'find_all', true);
/*  3002 */                     $blk = 14; /* allowing case fallthrough */
/*  3003 */                 case 14:
/*  3004 */                     /* --- function return or resume suspension --- */
/*  3005 */                     if ($ret && $ret.$isSuspension) {
/*  3006 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 191, 23);
/*  3007 */                     }
/*  3008 */                     var $lattr391 = $ret;
/*  3009 */                     var $str392 = new Sk.builtins['str']('Num');
/*  3010 */                     $ret;
/*  3011 */                     $ret = Sk.misceval.callsimOrSuspend($lattr391, $str392);
/*  3012 */                     $blk = 15; /* allowing case fallthrough */
/*  3013 */                 case 15:
/*  3014 */                     /* --- function return or resume suspension --- */
/*  3015 */                     if ($ret && $ret.$isSuspension) {
/*  3016 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 191, 23);
/*  3017 */                     }
/*  3018 */                     var $call393 = $ret;
/*  3019 */ 
/*  3020 */                     //
/*  3021 */                     // line 191:
/*  3022 */                     //             std_nums = self.find_all("Num")
/*  3023 */                     //                        ^
/*  3024 */                     //
/*  3025 */                     Sk.currLineNo = 191;
/*  3026 */                     Sk.currColNo = 23;
/*  3027 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3028 */                     $currLineNo = 191;
/*  3029 */                     $currColNo = 23;
/*  3030 */                     std_nums = $call393;
/*  3031 */ 
/*  3032 */                     //
/*  3033 */                     // line 192:
/*  3034 */                     //             test_nums = []
/*  3035 */                     //             ^
/*  3036 */                     //
/*  3037 */                     Sk.currLineNo = 192;
/*  3038 */                     Sk.currColNo = 12;
/*  3039 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3040 */                     $currLineNo = 192;
/*  3041 */                     $currColNo = 12;
/*  3042 */                     var $loadlist394 = new Sk.builtins['list']([]);
/*  3043 */                     test_nums = $loadlist394;
/*  3044 */ 
/*  3045 */                     //
/*  3046 */                     // line 193:
/*  3047 */                     //             for num in ins_nums:
/*  3048 */                     //             ^
/*  3049 */                     //
/*  3050 */                     Sk.currLineNo = 193;
/*  3051 */                     Sk.currColNo = 12;
/*  3052 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3053 */                     $currLineNo = 193;
/*  3054 */                     $currColNo = 12;
/*  3055 */                     if (ins_nums === undefined) {
/*  3056 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ins_nums\' referenced before assignment');
/*  3057 */                     }
/*  3058 */                     var $iter395 = Sk.abstr.iter(ins_nums);
/*  3059 */                     $blk = 16; /* allowing case fallthrough */
/*  3060 */                 case 16:
/*  3061 */                     /* --- for start --- */
/*  3062 */                     $ret = Sk.abstr.iternext($iter395, true);
/*  3063 */                     $blk = 19; /* allowing case fallthrough */
/*  3064 */                 case 19:
/*  3065 */                     /* --- function return or resume suspension --- */
/*  3066 */                     if ($ret && $ret.$isSuspension) {
/*  3067 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 193, 12);
/*  3068 */                     }
/*  3069 */                     var $next396 = $ret;
/*  3070 */                     if ($next396 === undefined) {
/*  3071 */                         $blk = 17;
/*  3072 */                         continue;
/*  3073 */                     }
/*  3074 */                     num = $next396;
/*  3075 */ 
/*  3076 */                     //
/*  3077 */                     // line 194:
/*  3078 */                     //                 raw_num = num.n
/*  3079 */                     //                 ^
/*  3080 */                     //
/*  3081 */                     Sk.currLineNo = 194;
/*  3082 */                     Sk.currColNo = 16;
/*  3083 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3084 */                     $currLineNo = 194;
/*  3085 */                     $currColNo = 16;
/*  3086 */                     if (num === undefined) {
/*  3087 */                         throw new Sk.builtin.UnboundLocalError('local variable \'num\' referenced before assignment');
/*  3088 */                     }
/*  3089 */                     $ret = Sk.abstr.gattr(num, 'n', true);
/*  3090 */                     $blk = 20; /* allowing case fallthrough */
/*  3091 */                 case 20:
/*  3092 */                     /* --- function return or resume suspension --- */
/*  3093 */                     if ($ret && $ret.$isSuspension) {
/*  3094 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 194, 26);
/*  3095 */                     }
/*  3096 */                     var $lattr397 = $ret;
/*  3097 */                     raw_num = $lattr397;
/*  3098 */ 
/*  3099 */                     //
/*  3100 */                     // line 195:
/*  3101 */                     //                 test_nums.append(raw_num)
/*  3102 */                     //                 ^
/*  3103 */                     //
/*  3104 */                     Sk.currLineNo = 195;
/*  3105 */                     Sk.currColNo = 16;
/*  3106 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3107 */                     $currLineNo = 195;
/*  3108 */                     $currColNo = 16;
/*  3109 */                     if (test_nums === undefined) {
/*  3110 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3111 */                     }
/*  3112 */                     $ret = Sk.abstr.gattr(test_nums, 'append', true);
/*  3113 */                     $blk = 21; /* allowing case fallthrough */
/*  3114 */                 case 21:
/*  3115 */                     /* --- function return or resume suspension --- */
/*  3116 */                     if ($ret && $ret.$isSuspension) {
/*  3117 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 195, 16);
/*  3118 */                     }
/*  3119 */                     var $lattr398 = $ret;
/*  3120 */                     if (raw_num === undefined) {
/*  3121 */                         throw new Sk.builtin.UnboundLocalError('local variable \'raw_num\' referenced before assignment');
/*  3122 */                     }
/*  3123 */                     $ret;
/*  3124 */                     $ret = Sk.misceval.callsimOrSuspend($lattr398, raw_num);
/*  3125 */                     $blk = 22; /* allowing case fallthrough */
/*  3126 */                 case 22:
/*  3127 */                     /* --- function return or resume suspension --- */
/*  3128 */                     if ($ret && $ret.$isSuspension) {
/*  3129 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 195, 16);
/*  3130 */                     }
/*  3131 */                     var $call399 = $ret;
/*  3132 */ 
/*  3133 */                     //
/*  3134 */                     // line 195:
/*  3135 */                     //                 test_nums.append(raw_num)
/*  3136 */                     //                 ^
/*  3137 */                     //
/*  3138 */                     Sk.currLineNo = 195;
/*  3139 */                     Sk.currColNo = 16;
/*  3140 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3141 */                     $currLineNo = 195;
/*  3142 */                     $currColNo = 16;
/*  3143 */ 
/*  3144 */ 
/*  3145 */                     //
/*  3146 */                     // line 196:
/*  3147 */                     //                 test_nums.append(raw_num + mag)
/*  3148 */                     //                 ^
/*  3149 */                     //
/*  3150 */                     Sk.currLineNo = 196;
/*  3151 */                     Sk.currColNo = 16;
/*  3152 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3153 */                     $currLineNo = 196;
/*  3154 */                     $currColNo = 16;
/*  3155 */                     if (test_nums === undefined) {
/*  3156 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3157 */                     }
/*  3158 */                     $ret = Sk.abstr.gattr(test_nums, 'append', true);
/*  3159 */                     $blk = 23; /* allowing case fallthrough */
/*  3160 */                 case 23:
/*  3161 */                     /* --- function return or resume suspension --- */
/*  3162 */                     if ($ret && $ret.$isSuspension) {
/*  3163 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 196, 16);
/*  3164 */                     }
/*  3165 */                     var $lattr400 = $ret;
/*  3166 */                     if (raw_num === undefined) {
/*  3167 */                         throw new Sk.builtin.UnboundLocalError('local variable \'raw_num\' referenced before assignment');
/*  3168 */                     }
/*  3169 */                     if (mag === undefined) {
/*  3170 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mag\' referenced before assignment');
/*  3171 */                     }
/*  3172 */                     var $binop401 = Sk.abstr.numberBinOp(raw_num, mag, 'Add');
/*  3173 */                     $ret;
/*  3174 */                     $ret = Sk.misceval.callsimOrSuspend($lattr400, $binop401);
/*  3175 */                     $blk = 24; /* allowing case fallthrough */
/*  3176 */                 case 24:
/*  3177 */                     /* --- function return or resume suspension --- */
/*  3178 */                     if ($ret && $ret.$isSuspension) {
/*  3179 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 196, 16);
/*  3180 */                     }
/*  3181 */                     var $call402 = $ret;
/*  3182 */ 
/*  3183 */                     //
/*  3184 */                     // line 196:
/*  3185 */                     //                 test_nums.append(raw_num + mag)
/*  3186 */                     //                 ^
/*  3187 */                     //
/*  3188 */                     Sk.currLineNo = 196;
/*  3189 */                     Sk.currColNo = 16;
/*  3190 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3191 */                     $currLineNo = 196;
/*  3192 */                     $currColNo = 16;
/*  3193 */ 
/*  3194 */ 
/*  3195 */                     //
/*  3196 */                     // line 197:
/*  3197 */                     //                 test_nums.append(raw_num - mag)
/*  3198 */                     //                 ^
/*  3199 */                     //
/*  3200 */                     Sk.currLineNo = 197;
/*  3201 */                     Sk.currColNo = 16;
/*  3202 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3203 */                     $currLineNo = 197;
/*  3204 */                     $currColNo = 16;
/*  3205 */                     if (test_nums === undefined) {
/*  3206 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3207 */                     }
/*  3208 */                     $ret = Sk.abstr.gattr(test_nums, 'append', true);
/*  3209 */                     $blk = 25; /* allowing case fallthrough */
/*  3210 */                 case 25:
/*  3211 */                     /* --- function return or resume suspension --- */
/*  3212 */                     if ($ret && $ret.$isSuspension) {
/*  3213 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 197, 16);
/*  3214 */                     }
/*  3215 */                     var $lattr403 = $ret;
/*  3216 */                     if (raw_num === undefined) {
/*  3217 */                         throw new Sk.builtin.UnboundLocalError('local variable \'raw_num\' referenced before assignment');
/*  3218 */                     }
/*  3219 */                     if (mag === undefined) {
/*  3220 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mag\' referenced before assignment');
/*  3221 */                     }
/*  3222 */                     var $binop404 = Sk.abstr.numberBinOp(raw_num, mag, 'Sub');
/*  3223 */                     $ret;
/*  3224 */                     $ret = Sk.misceval.callsimOrSuspend($lattr403, $binop404);
/*  3225 */                     $blk = 26; /* allowing case fallthrough */
/*  3226 */                 case 26:
/*  3227 */                     /* --- function return or resume suspension --- */
/*  3228 */                     if ($ret && $ret.$isSuspension) {
/*  3229 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 197, 16);
/*  3230 */                     }
/*  3231 */                     var $call405 = $ret;
/*  3232 */ 
/*  3233 */                     //
/*  3234 */                     // line 197:
/*  3235 */                     //                 test_nums.append(raw_num - mag)
/*  3236 */                     //                 ^
/*  3237 */                     //
/*  3238 */                     Sk.currLineNo = 197;
/*  3239 */                     Sk.currColNo = 16;
/*  3240 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3241 */                     $currLineNo = 197;
/*  3242 */                     $currColNo = 16;
/*  3243 */                     $blk = 16; /* jump */
/*  3244 */                     continue;
/*  3245 */                 case 1:
/*  3246 */                     /* --- except_0_ --- */
/*  3247 */                     var $loadgbl445 = Sk.misceval.loadname('Exception', $gbl);
/*  3248 */                     var $instance446 = Sk.misceval.isTrue(Sk.builtin.isinstance($err, $loadgbl445));
/*  3249 */                     var $jfalse447 = ($instance446 === false || !Sk.misceval.isTrue($instance446));
/*  3250 */                     if ($jfalse447) { /*test failed */
/*  3251 */                         $blk = 2;
/*  3252 */                         continue;
/*  3253 */                     }
/*  3254 */ 
/*  3255 */                     //
/*  3256 */                     // line 219:
/*  3257 */                     //             return False
/*  3258 */                     //             ^
/*  3259 */                     //
/*  3260 */                     Sk.currLineNo = 219;
/*  3261 */                     Sk.currColNo = 12;
/*  3262 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3263 */                     $currLineNo = 219;
/*  3264 */                     $currColNo = 12;
/*  3265 */                     return Sk.builtin.bool.false$;
/*  3266 */                     $blk = 4; /* allowing case fallthrough */
/*  3267 */                 case 4:
/*  3268 */                     /* --- end --- */
/*  3269 */                     return Sk.builtin.none.none$;
/*  3270 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3271 */                 case 2:
/*  3272 */                     /* --- unhandled --- */
/*  3273 */                     throw $err;
/*  3274 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  3275 */                 case 3:
/*  3276 */                     /* --- orelse --- */
/*  3277 */                     $blk = 4; /* jump */
/*  3278 */                     continue;
/*  3279 */                 case 17:
/*  3280 */                     /* --- for cleanup --- */
/*  3281 */                     $blk = 18; /* allowing case fallthrough */
/*  3282 */                 case 18:
/*  3283 */                     /* --- for end --- */
/*  3284 */ 
/*  3285 */                     //
/*  3286 */                     // line 198:
/*  3287 */                     //             for num in std_nums:
/*  3288 */                     //             ^
/*  3289 */                     //
/*  3290 */                     Sk.currLineNo = 198;
/*  3291 */                     Sk.currColNo = 12;
/*  3292 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3293 */                     $currLineNo = 198;
/*  3294 */                     $currColNo = 12;
/*  3295 */                     if (std_nums === undefined) {
/*  3296 */                         throw new Sk.builtin.UnboundLocalError('local variable \'std_nums\' referenced before assignment');
/*  3297 */                     }
/*  3298 */                     var $iter406 = Sk.abstr.iter(std_nums);
/*  3299 */                     $blk = 27; /* allowing case fallthrough */
/*  3300 */                 case 27:
/*  3301 */                     /* --- for start --- */
/*  3302 */                     $ret = Sk.abstr.iternext($iter406, true);
/*  3303 */                     $blk = 30; /* allowing case fallthrough */
/*  3304 */                 case 30:
/*  3305 */                     /* --- function return or resume suspension --- */
/*  3306 */                     if ($ret && $ret.$isSuspension) {
/*  3307 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 198, 12);
/*  3308 */                     }
/*  3309 */                     var $next407 = $ret;
/*  3310 */                     if ($next407 === undefined) {
/*  3311 */                         $blk = 28;
/*  3312 */                         continue;
/*  3313 */                     }
/*  3314 */                     num = $next407;
/*  3315 */ 
/*  3316 */                     //
/*  3317 */                     // line 199:
/*  3318 */                     //                 raw_num = num.n
/*  3319 */                     //                 ^
/*  3320 */                     //
/*  3321 */                     Sk.currLineNo = 199;
/*  3322 */                     Sk.currColNo = 16;
/*  3323 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3324 */                     $currLineNo = 199;
/*  3325 */                     $currColNo = 16;
/*  3326 */                     if (num === undefined) {
/*  3327 */                         throw new Sk.builtin.UnboundLocalError('local variable \'num\' referenced before assignment');
/*  3328 */                     }
/*  3329 */                     $ret = Sk.abstr.gattr(num, 'n', true);
/*  3330 */                     $blk = 31; /* allowing case fallthrough */
/*  3331 */                 case 31:
/*  3332 */                     /* --- function return or resume suspension --- */
/*  3333 */                     if ($ret && $ret.$isSuspension) {
/*  3334 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 199, 26);
/*  3335 */                     }
/*  3336 */                     var $lattr408 = $ret;
/*  3337 */                     raw_num = $lattr408;
/*  3338 */ 
/*  3339 */                     //
/*  3340 */                     // line 200:
/*  3341 */                     //                 test_nums.append(raw_num)
/*  3342 */                     //                 ^
/*  3343 */                     //
/*  3344 */                     Sk.currLineNo = 200;
/*  3345 */                     Sk.currColNo = 16;
/*  3346 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3347 */                     $currLineNo = 200;
/*  3348 */                     $currColNo = 16;
/*  3349 */                     if (test_nums === undefined) {
/*  3350 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3351 */                     }
/*  3352 */                     $ret = Sk.abstr.gattr(test_nums, 'append', true);
/*  3353 */                     $blk = 32; /* allowing case fallthrough */
/*  3354 */                 case 32:
/*  3355 */                     /* --- function return or resume suspension --- */
/*  3356 */                     if ($ret && $ret.$isSuspension) {
/*  3357 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 200, 16);
/*  3358 */                     }
/*  3359 */                     var $lattr409 = $ret;
/*  3360 */                     if (raw_num === undefined) {
/*  3361 */                         throw new Sk.builtin.UnboundLocalError('local variable \'raw_num\' referenced before assignment');
/*  3362 */                     }
/*  3363 */                     $ret;
/*  3364 */                     $ret = Sk.misceval.callsimOrSuspend($lattr409, raw_num);
/*  3365 */                     $blk = 33; /* allowing case fallthrough */
/*  3366 */                 case 33:
/*  3367 */                     /* --- function return or resume suspension --- */
/*  3368 */                     if ($ret && $ret.$isSuspension) {
/*  3369 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 200, 16);
/*  3370 */                     }
/*  3371 */                     var $call410 = $ret;
/*  3372 */ 
/*  3373 */                     //
/*  3374 */                     // line 200:
/*  3375 */                     //                 test_nums.append(raw_num)
/*  3376 */                     //                 ^
/*  3377 */                     //
/*  3378 */                     Sk.currLineNo = 200;
/*  3379 */                     Sk.currColNo = 16;
/*  3380 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3381 */                     $currLineNo = 200;
/*  3382 */                     $currColNo = 16;
/*  3383 */ 
/*  3384 */ 
/*  3385 */                     //
/*  3386 */                     // line 201:
/*  3387 */                     //                 test_nums.append(raw_num + mag)
/*  3388 */                     //                 ^
/*  3389 */                     //
/*  3390 */                     Sk.currLineNo = 201;
/*  3391 */                     Sk.currColNo = 16;
/*  3392 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3393 */                     $currLineNo = 201;
/*  3394 */                     $currColNo = 16;
/*  3395 */                     if (test_nums === undefined) {
/*  3396 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3397 */                     }
/*  3398 */                     $ret = Sk.abstr.gattr(test_nums, 'append', true);
/*  3399 */                     $blk = 34; /* allowing case fallthrough */
/*  3400 */                 case 34:
/*  3401 */                     /* --- function return or resume suspension --- */
/*  3402 */                     if ($ret && $ret.$isSuspension) {
/*  3403 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 201, 16);
/*  3404 */                     }
/*  3405 */                     var $lattr411 = $ret;
/*  3406 */                     if (raw_num === undefined) {
/*  3407 */                         throw new Sk.builtin.UnboundLocalError('local variable \'raw_num\' referenced before assignment');
/*  3408 */                     }
/*  3409 */                     if (mag === undefined) {
/*  3410 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mag\' referenced before assignment');
/*  3411 */                     }
/*  3412 */                     var $binop412 = Sk.abstr.numberBinOp(raw_num, mag, 'Add');
/*  3413 */                     $ret;
/*  3414 */                     $ret = Sk.misceval.callsimOrSuspend($lattr411, $binop412);
/*  3415 */                     $blk = 35; /* allowing case fallthrough */
/*  3416 */                 case 35:
/*  3417 */                     /* --- function return or resume suspension --- */
/*  3418 */                     if ($ret && $ret.$isSuspension) {
/*  3419 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 201, 16);
/*  3420 */                     }
/*  3421 */                     var $call413 = $ret;
/*  3422 */ 
/*  3423 */                     //
/*  3424 */                     // line 201:
/*  3425 */                     //                 test_nums.append(raw_num + mag)
/*  3426 */                     //                 ^
/*  3427 */                     //
/*  3428 */                     Sk.currLineNo = 201;
/*  3429 */                     Sk.currColNo = 16;
/*  3430 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3431 */                     $currLineNo = 201;
/*  3432 */                     $currColNo = 16;
/*  3433 */ 
/*  3434 */ 
/*  3435 */                     //
/*  3436 */                     // line 202:
/*  3437 */                     //                 test_nums.append(raw_num - mag)
/*  3438 */                     //                 ^
/*  3439 */                     //
/*  3440 */                     Sk.currLineNo = 202;
/*  3441 */                     Sk.currColNo = 16;
/*  3442 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3443 */                     $currLineNo = 202;
/*  3444 */                     $currColNo = 16;
/*  3445 */                     if (test_nums === undefined) {
/*  3446 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3447 */                     }
/*  3448 */                     $ret = Sk.abstr.gattr(test_nums, 'append', true);
/*  3449 */                     $blk = 36; /* allowing case fallthrough */
/*  3450 */                 case 36:
/*  3451 */                     /* --- function return or resume suspension --- */
/*  3452 */                     if ($ret && $ret.$isSuspension) {
/*  3453 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 202, 16);
/*  3454 */                     }
/*  3455 */                     var $lattr414 = $ret;
/*  3456 */                     if (raw_num === undefined) {
/*  3457 */                         throw new Sk.builtin.UnboundLocalError('local variable \'raw_num\' referenced before assignment');
/*  3458 */                     }
/*  3459 */                     if (mag === undefined) {
/*  3460 */                         throw new Sk.builtin.UnboundLocalError('local variable \'mag\' referenced before assignment');
/*  3461 */                     }
/*  3462 */                     var $binop415 = Sk.abstr.numberBinOp(raw_num, mag, 'Sub');
/*  3463 */                     $ret;
/*  3464 */                     $ret = Sk.misceval.callsimOrSuspend($lattr414, $binop415);
/*  3465 */                     $blk = 37; /* allowing case fallthrough */
/*  3466 */                 case 37:
/*  3467 */                     /* --- function return or resume suspension --- */
/*  3468 */                     if ($ret && $ret.$isSuspension) {
/*  3469 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 202, 16);
/*  3470 */                     }
/*  3471 */                     var $call416 = $ret;
/*  3472 */ 
/*  3473 */                     //
/*  3474 */                     // line 202:
/*  3475 */                     //                 test_nums.append(raw_num - mag)
/*  3476 */                     //                 ^
/*  3477 */                     //
/*  3478 */                     Sk.currLineNo = 202;
/*  3479 */                     Sk.currColNo = 16;
/*  3480 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3481 */                     $currLineNo = 202;
/*  3482 */                     $currColNo = 16;
/*  3483 */                     $blk = 27; /* jump */
/*  3484 */                     continue;
/*  3485 */                 case 28:
/*  3486 */                     /* --- for cleanup --- */
/*  3487 */                     $blk = 29; /* allowing case fallthrough */
/*  3488 */                 case 29:
/*  3489 */                     /* --- for end --- */
/*  3490 */ 
/*  3491 */                     //
/*  3492 */                     // line 204:
/*  3493 */                     //             if self.ast_name == "Compare":
/*  3494 */                     //             ^
/*  3495 */                     //
/*  3496 */                     Sk.currLineNo = 204;
/*  3497 */                     Sk.currColNo = 12;
/*  3498 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3499 */                     $currLineNo = 204;
/*  3500 */                     $currColNo = 12;
/*  3501 */                     if (self === undefined) {
/*  3502 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3503 */                     }
/*  3504 */                     $ret = Sk.abstr.gattr(self, 'ast_name', true);
/*  3505 */                     $blk = 40; /* allowing case fallthrough */
/*  3506 */                 case 40:
/*  3507 */                     /* --- function return or resume suspension --- */
/*  3508 */                     if ($ret && $ret.$isSuspension) {
/*  3509 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 204, 15);
/*  3510 */                     }
/*  3511 */                     var $lattr417 = $ret;
/*  3512 */                     var $compareres418 = null;
/*  3513 */                     var $str419 = new Sk.builtins['str']('Compare');
/*  3514 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr417, $str419, 'Eq', true));
/*  3515 */                     $blk = 42; /* allowing case fallthrough */
/*  3516 */                 case 42:
/*  3517 */                     /* --- function return or resume suspension --- */
/*  3518 */                     if ($ret && $ret.$isSuspension) {
/*  3519 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 204, 15);
/*  3520 */                     }
/*  3521 */                     $compareres418 = $ret;
/*  3522 */                     var $jfalse420 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3523 */                     if ($jfalse420) { /*test failed */
/*  3524 */                         $blk = 41;
/*  3525 */                         continue;
/*  3526 */                     }
/*  3527 */                     $blk = 41; /* allowing case fallthrough */
/*  3528 */                 case 41:
/*  3529 */                     /* --- done --- */
/*  3530 */                     var $jfalse421 = ($compareres418 === false || !Sk.misceval.isTrue($compareres418));
/*  3531 */                     if ($jfalse421) { /*test failed */
/*  3532 */                         $blk = 39;
/*  3533 */                         continue;
/*  3534 */                     }
/*  3535 */ 
/*  3536 */                     //
/*  3537 */                     // line 205:
/*  3538 */                     //                 std_res = eval_bool_comp(test_nums, self)
/*  3539 */                     //                 ^
/*  3540 */                     //
/*  3541 */                     Sk.currLineNo = 205;
/*  3542 */                     Sk.currColNo = 16;
/*  3543 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3544 */                     $currLineNo = 205;
/*  3545 */                     $currColNo = 16;
/*  3546 */                     if (test_nums === undefined) {
/*  3547 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3548 */                     }
/*  3549 */                     if (self === undefined) {
/*  3550 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3551 */                     }
/*  3552 */                     $ret;
/*  3553 */                     $ret = Sk.misceval.callsimOrSuspend($cell.eval_bool_comp, test_nums, self);
/*  3554 */                     $blk = 43; /* allowing case fallthrough */
/*  3555 */                 case 43:
/*  3556 */                     /* --- function return or resume suspension --- */
/*  3557 */                     if ($ret && $ret.$isSuspension) {
/*  3558 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 205, 26);
/*  3559 */                     }
/*  3560 */                     var $call422 = $ret;
/*  3561 */ 
/*  3562 */                     //
/*  3563 */                     // line 205:
/*  3564 */                     //                 std_res = eval_bool_comp(test_nums, self)
/*  3565 */                     //                           ^
/*  3566 */                     //
/*  3567 */                     Sk.currLineNo = 205;
/*  3568 */                     Sk.currColNo = 26;
/*  3569 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3570 */                     $currLineNo = 205;
/*  3571 */                     $currColNo = 26;
/*  3572 */                     std_res = $call422;
/*  3573 */                     $blk = 38; /* allowing case fallthrough */
/*  3574 */                 case 38:
/*  3575 */                     /* --- end of if --- */
/*  3576 */ 
/*  3577 */                     //
/*  3578 */                     // line 211:
/*  3579 */                     //             if ins_expr.ast_name == "Compare":
/*  3580 */                     //             ^
/*  3581 */                     //
/*  3582 */                     Sk.currLineNo = 211;
/*  3583 */                     Sk.currColNo = 12;
/*  3584 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3585 */                     $currLineNo = 211;
/*  3586 */                     $currColNo = 12;
/*  3587 */                     if (ins_expr === undefined) {
/*  3588 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ins_expr\' referenced before assignment');
/*  3589 */                     }
/*  3590 */                     $ret = Sk.abstr.gattr(ins_expr, 'ast_name', true);
/*  3591 */                     $blk = 52; /* allowing case fallthrough */
/*  3592 */                 case 52:
/*  3593 */                     /* --- function return or resume suspension --- */
/*  3594 */                     if ($ret && $ret.$isSuspension) {
/*  3595 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 211, 15);
/*  3596 */                     }
/*  3597 */                     var $lattr429 = $ret;
/*  3598 */                     var $compareres430 = null;
/*  3599 */                     var $str431 = new Sk.builtins['str']('Compare');
/*  3600 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr429, $str431, 'Eq', true));
/*  3601 */                     $blk = 54; /* allowing case fallthrough */
/*  3602 */                 case 54:
/*  3603 */                     /* --- function return or resume suspension --- */
/*  3604 */                     if ($ret && $ret.$isSuspension) {
/*  3605 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 211, 15);
/*  3606 */                     }
/*  3607 */                     $compareres430 = $ret;
/*  3608 */                     var $jfalse432 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3609 */                     if ($jfalse432) { /*test failed */
/*  3610 */                         $blk = 53;
/*  3611 */                         continue;
/*  3612 */                     }
/*  3613 */                     $blk = 53; /* allowing case fallthrough */
/*  3614 */                 case 53:
/*  3615 */                     /* --- done --- */
/*  3616 */                     var $jfalse433 = ($compareres430 === false || !Sk.misceval.isTrue($compareres430));
/*  3617 */                     if ($jfalse433) { /*test failed */
/*  3618 */                         $blk = 51;
/*  3619 */                         continue;
/*  3620 */                     }
/*  3621 */ 
/*  3622 */                     //
/*  3623 */                     // line 212:
/*  3624 */                     //                 ins_res = eval_bool_comp(test_nums, ins_expr)
/*  3625 */                     //                 ^
/*  3626 */                     //
/*  3627 */                     Sk.currLineNo = 212;
/*  3628 */                     Sk.currColNo = 16;
/*  3629 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3630 */                     $currLineNo = 212;
/*  3631 */                     $currColNo = 16;
/*  3632 */                     if (test_nums === undefined) {
/*  3633 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3634 */                     }
/*  3635 */                     if (ins_expr === undefined) {
/*  3636 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ins_expr\' referenced before assignment');
/*  3637 */                     }
/*  3638 */                     $ret;
/*  3639 */                     $ret = Sk.misceval.callsimOrSuspend($cell.eval_bool_comp, test_nums, ins_expr);
/*  3640 */                     $blk = 55; /* allowing case fallthrough */
/*  3641 */                 case 55:
/*  3642 */                     /* --- function return or resume suspension --- */
/*  3643 */                     if ($ret && $ret.$isSuspension) {
/*  3644 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 212, 26);
/*  3645 */                     }
/*  3646 */                     var $call434 = $ret;
/*  3647 */ 
/*  3648 */                     //
/*  3649 */                     // line 212:
/*  3650 */                     //                 ins_res = eval_bool_comp(test_nums, ins_expr)
/*  3651 */                     //                           ^
/*  3652 */                     //
/*  3653 */                     Sk.currLineNo = 212;
/*  3654 */                     Sk.currColNo = 26;
/*  3655 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3656 */                     $currLineNo = 212;
/*  3657 */                     $currColNo = 26;
/*  3658 */                     ins_res = $call434;
/*  3659 */                     $blk = 50; /* allowing case fallthrough */
/*  3660 */                 case 50:
/*  3661 */                     /* --- end of if --- */
/*  3662 */ 
/*  3663 */                     //
/*  3664 */                     // line 217:
/*  3665 */                     //             return ins_res == std_res
/*  3666 */                     //             ^
/*  3667 */                     //
/*  3668 */                     Sk.currLineNo = 217;
/*  3669 */                     Sk.currColNo = 12;
/*  3670 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3671 */                     $currLineNo = 217;
/*  3672 */                     $currColNo = 12;
/*  3673 */                     if (ins_res === undefined) {
/*  3674 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ins_res\' referenced before assignment');
/*  3675 */                     }
/*  3676 */                     var $compareres443 = null;
/*  3677 */                     if (std_res === undefined) {
/*  3678 */                         throw new Sk.builtin.UnboundLocalError('local variable \'std_res\' referenced before assignment');
/*  3679 */                     }
/*  3680 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(ins_res, std_res, 'Eq', true));
/*  3681 */                     $blk = 63; /* allowing case fallthrough */
/*  3682 */                 case 63:
/*  3683 */                     /* --- function return or resume suspension --- */
/*  3684 */                     if ($ret && $ret.$isSuspension) {
/*  3685 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 217, 19);
/*  3686 */                     }
/*  3687 */                     $compareres443 = $ret;
/*  3688 */                     var $jfalse444 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3689 */                     if ($jfalse444) { /*test failed */
/*  3690 */                         $blk = 62;
/*  3691 */                         continue;
/*  3692 */                     }
/*  3693 */                     $blk = 62; /* allowing case fallthrough */
/*  3694 */                 case 62:
/*  3695 */                     /* --- done --- */
/*  3696 */                     return $compareres443;
/*  3697 */                     $exc.pop();
/*  3698 */                     $blk = 3; /* jump */
/*  3699 */                     continue;
/*  3700 */                 case 39:
/*  3701 */                     /* --- next branch of if --- */
/*  3702 */ 
/*  3703 */                     //
/*  3704 */                     // line 206:
/*  3705 */                     //             elif self.ast_name == "BoolOp":
/*  3706 */                     //                  ^
/*  3707 */                     //
/*  3708 */                     Sk.currLineNo = 206;
/*  3709 */                     Sk.currColNo = 17;
/*  3710 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3711 */                     $currLineNo = 206;
/*  3712 */                     $currColNo = 17;
/*  3713 */                     if (self === undefined) {
/*  3714 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3715 */                     }
/*  3716 */                     $ret = Sk.abstr.gattr(self, 'ast_name', true);
/*  3717 */                     $blk = 46; /* allowing case fallthrough */
/*  3718 */                 case 46:
/*  3719 */                     /* --- function return or resume suspension --- */
/*  3720 */                     if ($ret && $ret.$isSuspension) {
/*  3721 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 206, 17);
/*  3722 */                     }
/*  3723 */                     var $lattr423 = $ret;
/*  3724 */                     var $compareres424 = null;
/*  3725 */                     var $str425 = new Sk.builtins['str']('BoolOp');
/*  3726 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr423, $str425, 'Eq', true));
/*  3727 */                     $blk = 48; /* allowing case fallthrough */
/*  3728 */                 case 48:
/*  3729 */                     /* --- function return or resume suspension --- */
/*  3730 */                     if ($ret && $ret.$isSuspension) {
/*  3731 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 206, 17);
/*  3732 */                     }
/*  3733 */                     $compareres424 = $ret;
/*  3734 */                     var $jfalse426 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3735 */                     if ($jfalse426) { /*test failed */
/*  3736 */                         $blk = 47;
/*  3737 */                         continue;
/*  3738 */                     }
/*  3739 */                     $blk = 47; /* allowing case fallthrough */
/*  3740 */                 case 47:
/*  3741 */                     /* --- done --- */
/*  3742 */                     var $jfalse427 = ($compareres424 === false || !Sk.misceval.isTrue($compareres424));
/*  3743 */                     if ($jfalse427) { /*test failed */
/*  3744 */                         $blk = 45;
/*  3745 */                         continue;
/*  3746 */                     }
/*  3747 */ 
/*  3748 */                     //
/*  3749 */                     // line 207:
/*  3750 */                     //                 std_res = eval_boolop(test_nums, self)
/*  3751 */                     //                 ^
/*  3752 */                     //
/*  3753 */                     Sk.currLineNo = 207;
/*  3754 */                     Sk.currColNo = 16;
/*  3755 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3756 */                     $currLineNo = 207;
/*  3757 */                     $currColNo = 16;
/*  3758 */                     if (test_nums === undefined) {
/*  3759 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3760 */                     }
/*  3761 */                     if (self === undefined) {
/*  3762 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  3763 */                     }
/*  3764 */                     $ret;
/*  3765 */                     $ret = Sk.misceval.callsimOrSuspend($cell.eval_boolop, test_nums, self);
/*  3766 */                     $blk = 49; /* allowing case fallthrough */
/*  3767 */                 case 49:
/*  3768 */                     /* --- function return or resume suspension --- */
/*  3769 */                     if ($ret && $ret.$isSuspension) {
/*  3770 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 207, 26);
/*  3771 */                     }
/*  3772 */                     var $call428 = $ret;
/*  3773 */ 
/*  3774 */                     //
/*  3775 */                     // line 207:
/*  3776 */                     //                 std_res = eval_boolop(test_nums, self)
/*  3777 */                     //                           ^
/*  3778 */                     //
/*  3779 */                     Sk.currLineNo = 207;
/*  3780 */                     Sk.currColNo = 26;
/*  3781 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3782 */                     $currLineNo = 207;
/*  3783 */                     $currColNo = 26;
/*  3784 */                     std_res = $call428;
/*  3785 */                     $blk = 44; /* allowing case fallthrough */
/*  3786 */                 case 44:
/*  3787 */                     /* --- end of if --- */
/*  3788 */                     $blk = 38; /* jump */
/*  3789 */                     continue;
/*  3790 */                 case 45:
/*  3791 */                     /* --- next branch of if --- */
/*  3792 */ 
/*  3793 */                     //
/*  3794 */                     // line 209:
/*  3795 */                     //                 return False
/*  3796 */                     //                 ^
/*  3797 */                     //
/*  3798 */                     Sk.currLineNo = 209;
/*  3799 */                     Sk.currColNo = 16;
/*  3800 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3801 */                     $currLineNo = 209;
/*  3802 */                     $currColNo = 16;
/*  3803 */                     return Sk.builtin.bool.false$;
/*  3804 */                     $blk = 44; /* jump */
/*  3805 */                     continue;
/*  3806 */                 case 51:
/*  3807 */                     /* --- next branch of if --- */
/*  3808 */ 
/*  3809 */                     //
/*  3810 */                     // line 213:
/*  3811 */                     //             elif ins_expr.ast_name == "BoolOp":
/*  3812 */                     //                  ^
/*  3813 */                     //
/*  3814 */                     Sk.currLineNo = 213;
/*  3815 */                     Sk.currColNo = 17;
/*  3816 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3817 */                     $currLineNo = 213;
/*  3818 */                     $currColNo = 17;
/*  3819 */                     if (ins_expr === undefined) {
/*  3820 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ins_expr\' referenced before assignment');
/*  3821 */                     }
/*  3822 */                     $ret = Sk.abstr.gattr(ins_expr, 'ast_name', true);
/*  3823 */                     $blk = 58; /* allowing case fallthrough */
/*  3824 */                 case 58:
/*  3825 */                     /* --- function return or resume suspension --- */
/*  3826 */                     if ($ret && $ret.$isSuspension) {
/*  3827 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 213, 17);
/*  3828 */                     }
/*  3829 */                     var $lattr435 = $ret;
/*  3830 */                     var $compareres436 = null;
/*  3831 */                     var $str437 = new Sk.builtins['str']('BoolOp');
/*  3832 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr435, $str437, 'Eq', true));
/*  3833 */                     $blk = 60; /* allowing case fallthrough */
/*  3834 */                 case 60:
/*  3835 */                     /* --- function return or resume suspension --- */
/*  3836 */                     if ($ret && $ret.$isSuspension) {
/*  3837 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 213, 17);
/*  3838 */                     }
/*  3839 */                     $compareres436 = $ret;
/*  3840 */                     var $jfalse438 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  3841 */                     if ($jfalse438) { /*test failed */
/*  3842 */                         $blk = 59;
/*  3843 */                         continue;
/*  3844 */                     }
/*  3845 */                     $blk = 59; /* allowing case fallthrough */
/*  3846 */                 case 59:
/*  3847 */                     /* --- done --- */
/*  3848 */                     var $jfalse439 = ($compareres436 === false || !Sk.misceval.isTrue($compareres436));
/*  3849 */                     if ($jfalse439) { /*test failed */
/*  3850 */                         $blk = 57;
/*  3851 */                         continue;
/*  3852 */                     }
/*  3853 */ 
/*  3854 */                     //
/*  3855 */                     // line 214:
/*  3856 */                     //                 ins_res = eval_boolop(test_nums, ins_expr)
/*  3857 */                     //                 ^
/*  3858 */                     //
/*  3859 */                     Sk.currLineNo = 214;
/*  3860 */                     Sk.currColNo = 16;
/*  3861 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3862 */                     $currLineNo = 214;
/*  3863 */                     $currColNo = 16;
/*  3864 */                     if (test_nums === undefined) {
/*  3865 */                         throw new Sk.builtin.UnboundLocalError('local variable \'test_nums\' referenced before assignment');
/*  3866 */                     }
/*  3867 */                     if (ins_expr === undefined) {
/*  3868 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ins_expr\' referenced before assignment');
/*  3869 */                     }
/*  3870 */                     $ret;
/*  3871 */                     $ret = Sk.misceval.callsimOrSuspend($cell.eval_boolop, test_nums, ins_expr);
/*  3872 */                     $blk = 61; /* allowing case fallthrough */
/*  3873 */                 case 61:
/*  3874 */                     /* --- function return or resume suspension --- */
/*  3875 */                     if ($ret && $ret.$isSuspension) {
/*  3876 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 214, 26);
/*  3877 */                     }
/*  3878 */                     var $call440 = $ret;
/*  3879 */ 
/*  3880 */                     //
/*  3881 */                     // line 214:
/*  3882 */                     //                 ins_res = eval_boolop(test_nums, ins_expr)
/*  3883 */                     //                           ^
/*  3884 */                     //
/*  3885 */                     Sk.currLineNo = 214;
/*  3886 */                     Sk.currColNo = 26;
/*  3887 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3888 */                     $currLineNo = 214;
/*  3889 */                     $currColNo = 26;
/*  3890 */                     ins_res = $call440;
/*  3891 */                     $blk = 56; /* allowing case fallthrough */
/*  3892 */                 case 56:
/*  3893 */                     /* --- end of if --- */
/*  3894 */                     $blk = 50; /* jump */
/*  3895 */                     continue;
/*  3896 */                 case 57:
/*  3897 */                     /* --- next branch of if --- */
/*  3898 */ 
/*  3899 */                     //
/*  3900 */                     // line 216:
/*  3901 */                     //                 raise TypeError
/*  3902 */                     //                 ^
/*  3903 */                     //
/*  3904 */                     Sk.currLineNo = 216;
/*  3905 */                     Sk.currColNo = 16;
/*  3906 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  3907 */                     $currLineNo = 216;
/*  3908 */                     $currColNo = 16;
/*  3909 */                     var $loadgbl441 = Sk.misceval.loadname('TypeError', $gbl);
/*  3910 */                     var $err442 = $loadgbl441;
/*  3911 */                     if ($err442 instanceof Sk.builtin.type) {
/*  3912 */                         throw Sk.misceval.callsim($err442);
/*  3913 */                     } else if (typeof($err442) === 'function') {
/*  3914 */                         throw $err442();
/*  3915 */                     } else {
/*  3916 */                         throw $err442;
/*  3917 */                     }
/*  3918 */                     $blk = 56; /* jump */
/*  3919 */                     continue;
/*  3920 */                 }
/*  3921 */             } catch (err) {
/*  3922 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  3923 */                     Sk.execStart = Date.now()
/*  3924 */                 }
/*  3925 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3926 */                     err = new Sk.builtin.ExternalError(err);
/*  3927 */                 }
/*  3928 */                 err.traceback.push({
/*  3929 */                     lineno: $currLineNo,
/*  3930 */                     colno: $currColNo,
/*  3931 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  3932 */                 });
/*  3933 */                 if ($exc.length > 0) {
/*  3934 */                     $err = err;
/*  3935 */                     Sk.err = $err;
/*  3936 */                     $blk = $exc.pop();
/*  3937 */                     continue;
/*  3938 */                 } else {
/*  3939 */                     throw err;
/*  3940 */                 }
/*  3941 */             }
/*  3942 */         }
/*  3943 */     });
/*  3944 */     var $scope232 = (function $eval_unop233$(unop_num, unop_node, $free) {
/*  3945 */         // has free
/*  3946 */         var op, operand; /* locals */
/*  3947 */         var op, op, operand, operand, operand, unop_node, unop_node, unop_node, unop_num, unop_num, $free, $lattr234, $unaryop237, $str238, $unaryop239, $str240, $loaddict241;
/*  3948 */         var $wakeFromSuspension = function() {
/*  3949 */             var susp = $scope232.$wakingSuspension;
/*  3950 */             delete $scope232.$wakingSuspension;
/*  3951 */             $blk = susp.$blk;
/*  3952 */             $loc = susp.$loc;
/*  3953 */             $gbl = susp.$gbl;
/*  3954 */             $exc = susp.$exc;
/*  3955 */             $err = susp.$err;
/*  3956 */             Sk.err = $err;
/*  3957 */             $postfinally = susp.$postfinally;
/*  3958 */             $currLineNo = susp.$lineno;
/*  3959 */             $currColNo = susp.$colno;
/*  3960 */             Sk.lastYield = Date.now();
/*  3961 */             op = susp.$tmps.op;
/*  3962 */             operand = susp.$tmps.operand;
/*  3963 */             unop_node = susp.$tmps.unop_node;
/*  3964 */             unop_num = susp.$tmps.unop_num;
/*  3965 */             $free = susp.$tmps.$free;
/*  3966 */             $lattr234 = susp.$tmps.$lattr234;
/*  3967 */             $unaryop237 = susp.$tmps.$unaryop237;
/*  3968 */             $str238 = susp.$tmps.$str238;
/*  3969 */             $unaryop239 = susp.$tmps.$unaryop239;
/*  3970 */             $str240 = susp.$tmps.$str240;
/*  3971 */             $loaddict241 = susp.$tmps.$loaddict241;
/*  3972 */             try {
/*  3973 */                 $ret = susp.child.resume();
/*  3974 */             } catch (err) {
/*  3975 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  3976 */                     Sk.execStart = Date.now()
/*  3977 */                 }
/*  3978 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  3979 */                     err = new Sk.builtin.ExternalError(err);
/*  3980 */                 }
/*  3981 */                 err.traceback.push({
/*  3982 */                     lineno: $currLineNo,
/*  3983 */                     colno: $currColNo,
/*  3984 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  3985 */                 });
/*  3986 */                 if ($exc.length > 0) {
/*  3987 */                     $err = err;
/*  3988 */                     Sk.err = $err;
/*  3989 */                     $blk = $exc.pop();
/*  3990 */                 } else {
/*  3991 */                     throw err;
/*  3992 */                 }
/*  3993 */             }
/*  3994 */         };
/*  3995 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  3996 */             var susp = new Sk.misceval.Suspension();
/*  3997 */             susp.child = $child;
/*  3998 */             susp.resume = function() {
/*  3999 */                 $scope232.$wakingSuspension = susp;
/*  4000 */                 return $scope232();
/*  4001 */             };
/*  4002 */             susp.data = susp.child.data;
/*  4003 */             susp.$blk = $blk;
/*  4004 */             susp.$loc = $loc;
/*  4005 */             susp.$gbl = $gbl;
/*  4006 */             susp.$exc = $exc;
/*  4007 */             susp.$err = $err;
/*  4008 */             susp.$postfinally = $postfinally;
/*  4009 */             susp.$filename = $filename;
/*  4010 */             susp.$lineno = $lineno;
/*  4011 */             susp.$colno = $colno;
/*  4012 */             susp.optional = susp.child.optional;
/*  4013 */             susp.$tmps = {
/*  4014 */                 "op": op,
/*  4015 */                 "operand": operand,
/*  4016 */                 "unop_node": unop_node,
/*  4017 */                 "unop_num": unop_num,
/*  4018 */                 "$free": $free,
/*  4019 */                 "$lattr234": $lattr234,
/*  4020 */                 "$unaryop237": $unaryop237,
/*  4021 */                 "$str238": $str238,
/*  4022 */                 "$unaryop239": $unaryop239,
/*  4023 */                 "$str240": $str240,
/*  4024 */                 "$loaddict241": $loaddict241
/*  4025 */             };
/*  4026 */             return susp;
/*  4027 */         };
/*  4028 */         var $blk = 0,
/*  4029 */             $exc = [],
/*  4030 */             $loc = {},
/*  4031 */             $gbl = this,
/*  4032 */             $err = undefined,
/*  4033 */             $ret = undefined,
/*  4034 */             $postfinally = undefined,
/*  4035 */             $currLineNo = undefined,
/*  4036 */             $currColNo = undefined;
/*  4037 */         Sk.err = $err;
/*  4038 */         if (typeof Sk.execStart === 'undefined') {
/*  4039 */             Sk.execStart = Date.now()
/*  4040 */         }
/*  4041 */         if (typeof Sk.lastYield === 'undefined') {
/*  4042 */             Sk.lastYield = Date.now()
/*  4043 */         }
/*  4044 */         if ($scope232.$wakingSuspension !== undefined) {
/*  4045 */             $wakeFromSuspension();
/*  4046 */         } else {
/*  4047 */             Sk.builtin.pyCheckArgs("eval_unop", arguments, 2, 2, false, true);
/*  4048 */         }
/*  4049 */         while (true) {
/*  4050 */             try {
/*  4051 */                 var $dateNow = Date.now();
/*  4052 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  4053 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4054 */                 }
/*  4055 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4056 */                     var $susp = $saveSuspension({
/*  4057 */                         data: {
/*  4058 */                             type: 'Sk.yield'
/*  4059 */                         },
/*  4060 */                         resume: function() {}
/*  4061 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  4062 */                     $susp.$blk = $blk;
/*  4063 */                     $susp.optional = true;
/*  4064 */                     return $susp;
/*  4065 */                 }
/*  4066 */                 switch ($blk) {
/*  4067 */                 case 0:
/*  4068 */                     /* --- codeobj entry --- */
/*  4069 */                     if (unop_num === undefined) {
/*  4070 */                         throw new Sk.builtin.UnboundLocalError('local variable \'unop_num\' referenced before assignment');
/*  4071 */                     }
/*  4072 */                     if (unop_node === undefined) {
/*  4073 */                         throw new Sk.builtin.UnboundLocalError('local variable \'unop_node\' referenced before assignment');
/*  4074 */                     }
/*  4075 */ 
/*  4076 */ 
/*  4077 */                     //
/*  4078 */                     // line 108:
/*  4079 */                     //             operand = eval_selector(unop_num, unop_node.operand)
/*  4080 */                     //             ^
/*  4081 */                     //
/*  4082 */                     Sk.currLineNo = 108;
/*  4083 */                     Sk.currColNo = 12;
/*  4084 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4085 */                     $currLineNo = 108;
/*  4086 */                     $currColNo = 12;
/*  4087 */                     if (unop_num === undefined) {
/*  4088 */                         throw new Sk.builtin.UnboundLocalError('local variable \'unop_num\' referenced before assignment');
/*  4089 */                     }
/*  4090 */                     if (unop_node === undefined) {
/*  4091 */                         throw new Sk.builtin.UnboundLocalError('local variable \'unop_node\' referenced before assignment');
/*  4092 */                     }
/*  4093 */                     $ret = Sk.abstr.gattr(unop_node, 'operand', true);
/*  4094 */                     $blk = 1; /* allowing case fallthrough */
/*  4095 */                 case 1:
/*  4096 */                     /* --- function return or resume suspension --- */
/*  4097 */                     if ($ret && $ret.$isSuspension) {
/*  4098 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 108, 46);
/*  4099 */                     }
/*  4100 */                     var $lattr234 = $ret;
/*  4101 */                     $ret;
/*  4102 */                     $ret = Sk.misceval.callsimOrSuspend($free.eval_selector, unop_num, $lattr234);
/*  4103 */                     $blk = 2; /* allowing case fallthrough */
/*  4104 */                 case 2:
/*  4105 */                     /* --- function return or resume suspension --- */
/*  4106 */                     if ($ret && $ret.$isSuspension) {
/*  4107 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 108, 22);
/*  4108 */                     }
/*  4109 */                     var $call235 = $ret;
/*  4110 */ 
/*  4111 */                     //
/*  4112 */                     // line 108:
/*  4113 */                     //             operand = eval_selector(unop_num, unop_node.operand)
/*  4114 */                     //                       ^
/*  4115 */                     //
/*  4116 */                     Sk.currLineNo = 108;
/*  4117 */                     Sk.currColNo = 22;
/*  4118 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4119 */                     $currLineNo = 108;
/*  4120 */                     $currColNo = 22;
/*  4121 */                     operand = $call235;
/*  4122 */ 
/*  4123 */                     //
/*  4124 */                     // line 109:
/*  4125 */                     //             op = unop_node.op_name
/*  4126 */                     //             ^
/*  4127 */                     //
/*  4128 */                     Sk.currLineNo = 109;
/*  4129 */                     Sk.currColNo = 12;
/*  4130 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4131 */                     $currLineNo = 109;
/*  4132 */                     $currColNo = 12;
/*  4133 */                     if (unop_node === undefined) {
/*  4134 */                         throw new Sk.builtin.UnboundLocalError('local variable \'unop_node\' referenced before assignment');
/*  4135 */                     }
/*  4136 */                     $ret = Sk.abstr.gattr(unop_node, 'op_name', true);
/*  4137 */                     $blk = 3; /* allowing case fallthrough */
/*  4138 */                 case 3:
/*  4139 */                     /* --- function return or resume suspension --- */
/*  4140 */                     if ($ret && $ret.$isSuspension) {
/*  4141 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 109, 17);
/*  4142 */                     }
/*  4143 */                     var $lattr236 = $ret;
/*  4144 */                     op = $lattr236;
/*  4145 */ 
/*  4146 */                     //
/*  4147 */                     // line 111:
/*  4148 */                     //             return {"USub": -operand,
/*  4149 */                     //             ^
/*  4150 */                     //
/*  4151 */                     Sk.currLineNo = 111;
/*  4152 */                     Sk.currColNo = 12;
/*  4153 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4154 */                     $currLineNo = 111;
/*  4155 */                     $currColNo = 12;
/*  4156 */                     if (operand === undefined) {
/*  4157 */                         throw new Sk.builtin.UnboundLocalError('local variable \'operand\' referenced before assignment');
/*  4158 */                     }
/*  4159 */                     var $unaryop237 = Sk.abstr.numberUnaryOp(operand, 'USub');
/*  4160 */                     var $str238 = new Sk.builtins['str']('USub');
/*  4161 */                     if (operand === undefined) {
/*  4162 */                         throw new Sk.builtin.UnboundLocalError('local variable \'operand\' referenced before assignment');
/*  4163 */                     }
/*  4164 */                     var $unaryop239 = Sk.abstr.numberUnaryOp(operand, 'Not');
/*  4165 */                     var $str240 = new Sk.builtins['str']('Not');
/*  4166 */                     var $loaddict241 = new Sk.builtins['dict']([$str238, $unaryop237, $str240, $unaryop239]);
/*  4167 */                     if (op === undefined) {
/*  4168 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op\' referenced before assignment');
/*  4169 */                     }
/*  4170 */                     $ret = Sk.abstr.objectGetItem($loaddict241, op, true);
/*  4171 */                     $blk = 4; /* allowing case fallthrough */
/*  4172 */                 case 4:
/*  4173 */                     /* --- function return or resume suspension --- */
/*  4174 */                     if ($ret && $ret.$isSuspension) {
/*  4175 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  4176 */                     }
/*  4177 */                     var $lsubscr242 = $ret;
/*  4178 */                     return $lsubscr242;
/*  4179 */                     return Sk.builtin.none.none$;
/*  4180 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4181 */                 }
/*  4182 */             } catch (err) {
/*  4183 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  4184 */                     Sk.execStart = Date.now()
/*  4185 */                 }
/*  4186 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4187 */                     err = new Sk.builtin.ExternalError(err);
/*  4188 */                 }
/*  4189 */                 err.traceback.push({
/*  4190 */                     lineno: $currLineNo,
/*  4191 */                     colno: $currColNo,
/*  4192 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  4193 */                 });
/*  4194 */                 if ($exc.length > 0) {
/*  4195 */                     $err = err;
/*  4196 */                     Sk.err = $err;
/*  4197 */                     $blk = $exc.pop();
/*  4198 */                     continue;
/*  4199 */                 } else {
/*  4200 */                     throw err;
/*  4201 */                 }
/*  4202 */             }
/*  4203 */         }
/*  4204 */     });
/*  4205 */     var $scope244 = (function $eval_binop245$(binop_num, binop_node, $free) {
/*  4206 */         // has free
/*  4207 */         var left, op, right; /* locals */
/*  4208 */         var binop_node, binop_node, binop_node, binop_node, binop_num, binop_num, binop_num, left, left, left, left, left, op, op, right, right, right, right, right, $free, $lattr246, $lattr248, $binop251, $str252, $binop253, $str254, $binop255, $str256, $binop257, $str258, $loaddict259;
/*  4209 */         var $wakeFromSuspension = function() {
/*  4210 */             var susp = $scope244.$wakingSuspension;
/*  4211 */             delete $scope244.$wakingSuspension;
/*  4212 */             $blk = susp.$blk;
/*  4213 */             $loc = susp.$loc;
/*  4214 */             $gbl = susp.$gbl;
/*  4215 */             $exc = susp.$exc;
/*  4216 */             $err = susp.$err;
/*  4217 */             Sk.err = $err;
/*  4218 */             $postfinally = susp.$postfinally;
/*  4219 */             $currLineNo = susp.$lineno;
/*  4220 */             $currColNo = susp.$colno;
/*  4221 */             Sk.lastYield = Date.now();
/*  4222 */             binop_node = susp.$tmps.binop_node;
/*  4223 */             binop_num = susp.$tmps.binop_num;
/*  4224 */             left = susp.$tmps.left;
/*  4225 */             op = susp.$tmps.op;
/*  4226 */             right = susp.$tmps.right;
/*  4227 */             $free = susp.$tmps.$free;
/*  4228 */             $lattr246 = susp.$tmps.$lattr246;
/*  4229 */             $lattr248 = susp.$tmps.$lattr248;
/*  4230 */             $binop251 = susp.$tmps.$binop251;
/*  4231 */             $str252 = susp.$tmps.$str252;
/*  4232 */             $binop253 = susp.$tmps.$binop253;
/*  4233 */             $str254 = susp.$tmps.$str254;
/*  4234 */             $binop255 = susp.$tmps.$binop255;
/*  4235 */             $str256 = susp.$tmps.$str256;
/*  4236 */             $binop257 = susp.$tmps.$binop257;
/*  4237 */             $str258 = susp.$tmps.$str258;
/*  4238 */             $loaddict259 = susp.$tmps.$loaddict259;
/*  4239 */             try {
/*  4240 */                 $ret = susp.child.resume();
/*  4241 */             } catch (err) {
/*  4242 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  4243 */                     Sk.execStart = Date.now()
/*  4244 */                 }
/*  4245 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4246 */                     err = new Sk.builtin.ExternalError(err);
/*  4247 */                 }
/*  4248 */                 err.traceback.push({
/*  4249 */                     lineno: $currLineNo,
/*  4250 */                     colno: $currColNo,
/*  4251 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  4252 */                 });
/*  4253 */                 if ($exc.length > 0) {
/*  4254 */                     $err = err;
/*  4255 */                     Sk.err = $err;
/*  4256 */                     $blk = $exc.pop();
/*  4257 */                 } else {
/*  4258 */                     throw err;
/*  4259 */                 }
/*  4260 */             }
/*  4261 */         };
/*  4262 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4263 */             var susp = new Sk.misceval.Suspension();
/*  4264 */             susp.child = $child;
/*  4265 */             susp.resume = function() {
/*  4266 */                 $scope244.$wakingSuspension = susp;
/*  4267 */                 return $scope244();
/*  4268 */             };
/*  4269 */             susp.data = susp.child.data;
/*  4270 */             susp.$blk = $blk;
/*  4271 */             susp.$loc = $loc;
/*  4272 */             susp.$gbl = $gbl;
/*  4273 */             susp.$exc = $exc;
/*  4274 */             susp.$err = $err;
/*  4275 */             susp.$postfinally = $postfinally;
/*  4276 */             susp.$filename = $filename;
/*  4277 */             susp.$lineno = $lineno;
/*  4278 */             susp.$colno = $colno;
/*  4279 */             susp.optional = susp.child.optional;
/*  4280 */             susp.$tmps = {
/*  4281 */                 "binop_node": binop_node,
/*  4282 */                 "binop_num": binop_num,
/*  4283 */                 "left": left,
/*  4284 */                 "op": op,
/*  4285 */                 "right": right,
/*  4286 */                 "$free": $free,
/*  4287 */                 "$lattr246": $lattr246,
/*  4288 */                 "$lattr248": $lattr248,
/*  4289 */                 "$binop251": $binop251,
/*  4290 */                 "$str252": $str252,
/*  4291 */                 "$binop253": $binop253,
/*  4292 */                 "$str254": $str254,
/*  4293 */                 "$binop255": $binop255,
/*  4294 */                 "$str256": $str256,
/*  4295 */                 "$binop257": $binop257,
/*  4296 */                 "$str258": $str258,
/*  4297 */                 "$loaddict259": $loaddict259
/*  4298 */             };
/*  4299 */             return susp;
/*  4300 */         };
/*  4301 */         var $blk = 0,
/*  4302 */             $exc = [],
/*  4303 */             $loc = {},
/*  4304 */             $gbl = this,
/*  4305 */             $err = undefined,
/*  4306 */             $ret = undefined,
/*  4307 */             $postfinally = undefined,
/*  4308 */             $currLineNo = undefined,
/*  4309 */             $currColNo = undefined;
/*  4310 */         Sk.err = $err;
/*  4311 */         if (typeof Sk.execStart === 'undefined') {
/*  4312 */             Sk.execStart = Date.now()
/*  4313 */         }
/*  4314 */         if (typeof Sk.lastYield === 'undefined') {
/*  4315 */             Sk.lastYield = Date.now()
/*  4316 */         }
/*  4317 */         if ($scope244.$wakingSuspension !== undefined) {
/*  4318 */             $wakeFromSuspension();
/*  4319 */         } else {
/*  4320 */             Sk.builtin.pyCheckArgs("eval_binop", arguments, 2, 2, false, true);
/*  4321 */         }
/*  4322 */         while (true) {
/*  4323 */             try {
/*  4324 */                 var $dateNow = Date.now();
/*  4325 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  4326 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4327 */                 }
/*  4328 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4329 */                     var $susp = $saveSuspension({
/*  4330 */                         data: {
/*  4331 */                             type: 'Sk.yield'
/*  4332 */                         },
/*  4333 */                         resume: function() {}
/*  4334 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  4335 */                     $susp.$blk = $blk;
/*  4336 */                     $susp.optional = true;
/*  4337 */                     return $susp;
/*  4338 */                 }
/*  4339 */                 switch ($blk) {
/*  4340 */                 case 0:
/*  4341 */                     /* --- codeobj entry --- */
/*  4342 */                     if (binop_num === undefined) {
/*  4343 */                         throw new Sk.builtin.UnboundLocalError('local variable \'binop_num\' referenced before assignment');
/*  4344 */                     }
/*  4345 */                     if (binop_node === undefined) {
/*  4346 */                         throw new Sk.builtin.UnboundLocalError('local variable \'binop_node\' referenced before assignment');
/*  4347 */                     }
/*  4348 */ 
/*  4349 */ 
/*  4350 */                     //
/*  4351 */                     // line 115:
/*  4352 */                     //             left = eval_selector(binop_num, binop_node.left)
/*  4353 */                     //             ^
/*  4354 */                     //
/*  4355 */                     Sk.currLineNo = 115;
/*  4356 */                     Sk.currColNo = 12;
/*  4357 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4358 */                     $currLineNo = 115;
/*  4359 */                     $currColNo = 12;
/*  4360 */                     if (binop_num === undefined) {
/*  4361 */                         throw new Sk.builtin.UnboundLocalError('local variable \'binop_num\' referenced before assignment');
/*  4362 */                     }
/*  4363 */                     if (binop_node === undefined) {
/*  4364 */                         throw new Sk.builtin.UnboundLocalError('local variable \'binop_node\' referenced before assignment');
/*  4365 */                     }
/*  4366 */                     $ret = Sk.abstr.gattr(binop_node, 'left', true);
/*  4367 */                     $blk = 1; /* allowing case fallthrough */
/*  4368 */                 case 1:
/*  4369 */                     /* --- function return or resume suspension --- */
/*  4370 */                     if ($ret && $ret.$isSuspension) {
/*  4371 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 115, 44);
/*  4372 */                     }
/*  4373 */                     var $lattr246 = $ret;
/*  4374 */                     $ret;
/*  4375 */                     $ret = Sk.misceval.callsimOrSuspend($free.eval_selector, binop_num, $lattr246);
/*  4376 */                     $blk = 2; /* allowing case fallthrough */
/*  4377 */                 case 2:
/*  4378 */                     /* --- function return or resume suspension --- */
/*  4379 */                     if ($ret && $ret.$isSuspension) {
/*  4380 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 115, 19);
/*  4381 */                     }
/*  4382 */                     var $call247 = $ret;
/*  4383 */ 
/*  4384 */                     //
/*  4385 */                     // line 115:
/*  4386 */                     //             left = eval_selector(binop_num, binop_node.left)
/*  4387 */                     //                    ^
/*  4388 */                     //
/*  4389 */                     Sk.currLineNo = 115;
/*  4390 */                     Sk.currColNo = 19;
/*  4391 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4392 */                     $currLineNo = 115;
/*  4393 */                     $currColNo = 19;
/*  4394 */                     left = $call247;
/*  4395 */ 
/*  4396 */                     //
/*  4397 */                     // line 116:
/*  4398 */                     //             right = eval_selector(binop_num, binop_node.right)
/*  4399 */                     //             ^
/*  4400 */                     //
/*  4401 */                     Sk.currLineNo = 116;
/*  4402 */                     Sk.currColNo = 12;
/*  4403 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4404 */                     $currLineNo = 116;
/*  4405 */                     $currColNo = 12;
/*  4406 */                     if (binop_num === undefined) {
/*  4407 */                         throw new Sk.builtin.UnboundLocalError('local variable \'binop_num\' referenced before assignment');
/*  4408 */                     }
/*  4409 */                     if (binop_node === undefined) {
/*  4410 */                         throw new Sk.builtin.UnboundLocalError('local variable \'binop_node\' referenced before assignment');
/*  4411 */                     }
/*  4412 */                     $ret = Sk.abstr.gattr(binop_node, 'right', true);
/*  4413 */                     $blk = 3; /* allowing case fallthrough */
/*  4414 */                 case 3:
/*  4415 */                     /* --- function return or resume suspension --- */
/*  4416 */                     if ($ret && $ret.$isSuspension) {
/*  4417 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 116, 45);
/*  4418 */                     }
/*  4419 */                     var $lattr248 = $ret;
/*  4420 */                     $ret;
/*  4421 */                     $ret = Sk.misceval.callsimOrSuspend($free.eval_selector, binop_num, $lattr248);
/*  4422 */                     $blk = 4; /* allowing case fallthrough */
/*  4423 */                 case 4:
/*  4424 */                     /* --- function return or resume suspension --- */
/*  4425 */                     if ($ret && $ret.$isSuspension) {
/*  4426 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 116, 20);
/*  4427 */                     }
/*  4428 */                     var $call249 = $ret;
/*  4429 */ 
/*  4430 */                     //
/*  4431 */                     // line 116:
/*  4432 */                     //             right = eval_selector(binop_num, binop_node.right)
/*  4433 */                     //                     ^
/*  4434 */                     //
/*  4435 */                     Sk.currLineNo = 116;
/*  4436 */                     Sk.currColNo = 20;
/*  4437 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4438 */                     $currLineNo = 116;
/*  4439 */                     $currColNo = 20;
/*  4440 */                     right = $call249;
/*  4441 */ 
/*  4442 */                     //
/*  4443 */                     // line 117:
/*  4444 */                     //             op = binop_node.op_name
/*  4445 */                     //             ^
/*  4446 */                     //
/*  4447 */                     Sk.currLineNo = 117;
/*  4448 */                     Sk.currColNo = 12;
/*  4449 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4450 */                     $currLineNo = 117;
/*  4451 */                     $currColNo = 12;
/*  4452 */                     if (binop_node === undefined) {
/*  4453 */                         throw new Sk.builtin.UnboundLocalError('local variable \'binop_node\' referenced before assignment');
/*  4454 */                     }
/*  4455 */                     $ret = Sk.abstr.gattr(binop_node, 'op_name', true);
/*  4456 */                     $blk = 5; /* allowing case fallthrough */
/*  4457 */                 case 5:
/*  4458 */                     /* --- function return or resume suspension --- */
/*  4459 */                     if ($ret && $ret.$isSuspension) {
/*  4460 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 117, 17);
/*  4461 */                     }
/*  4462 */                     var $lattr250 = $ret;
/*  4463 */                     op = $lattr250;
/*  4464 */ 
/*  4465 */                     //
/*  4466 */                     // line 119:
/*  4467 */                     //             return {
/*  4468 */                     //             ^
/*  4469 */                     //
/*  4470 */                     Sk.currLineNo = 119;
/*  4471 */                     Sk.currColNo = 12;
/*  4472 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4473 */                     $currLineNo = 119;
/*  4474 */                     $currColNo = 12;
/*  4475 */                     if (left === undefined) {
/*  4476 */                         throw new Sk.builtin.UnboundLocalError('local variable \'left\' referenced before assignment');
/*  4477 */                     }
/*  4478 */                     if (right === undefined) {
/*  4479 */                         throw new Sk.builtin.UnboundLocalError('local variable \'right\' referenced before assignment');
/*  4480 */                     }
/*  4481 */                     var $binop251 = Sk.abstr.numberBinOp(left, right, 'Add');
/*  4482 */                     var $str252 = new Sk.builtins['str']('Add');
/*  4483 */                     if (left === undefined) {
/*  4484 */                         throw new Sk.builtin.UnboundLocalError('local variable \'left\' referenced before assignment');
/*  4485 */                     }
/*  4486 */                     if (right === undefined) {
/*  4487 */                         throw new Sk.builtin.UnboundLocalError('local variable \'right\' referenced before assignment');
/*  4488 */                     }
/*  4489 */                     var $binop253 = Sk.abstr.numberBinOp(left, right, 'Sub');
/*  4490 */                     var $str254 = new Sk.builtins['str']('Sub');
/*  4491 */                     if (left === undefined) {
/*  4492 */                         throw new Sk.builtin.UnboundLocalError('local variable \'left\' referenced before assignment');
/*  4493 */                     }
/*  4494 */                     if (right === undefined) {
/*  4495 */                         throw new Sk.builtin.UnboundLocalError('local variable \'right\' referenced before assignment');
/*  4496 */                     }
/*  4497 */                     var $binop255 = Sk.abstr.numberBinOp(left, right, 'Mult');
/*  4498 */                     var $str256 = new Sk.builtins['str']('Mult');
/*  4499 */                     if (left === undefined) {
/*  4500 */                         throw new Sk.builtin.UnboundLocalError('local variable \'left\' referenced before assignment');
/*  4501 */                     }
/*  4502 */                     if (right === undefined) {
/*  4503 */                         throw new Sk.builtin.UnboundLocalError('local variable \'right\' referenced before assignment');
/*  4504 */                     }
/*  4505 */                     var $binop257 = Sk.abstr.numberBinOp(left, right, 'Div');
/*  4506 */                     var $str258 = new Sk.builtins['str']('Div');
/*  4507 */                     var $loaddict259 = new Sk.builtins['dict']([$str252, $binop251, $str254, $binop253, $str256, $binop255, $str258, $binop257]);
/*  4508 */                     if (op === undefined) {
/*  4509 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op\' referenced before assignment');
/*  4510 */                     }
/*  4511 */                     $ret = Sk.abstr.objectGetItem($loaddict259, op, true);
/*  4512 */                     $blk = 6; /* allowing case fallthrough */
/*  4513 */                 case 6:
/*  4514 */                     /* --- function return or resume suspension --- */
/*  4515 */                     if ($ret && $ret.$isSuspension) {
/*  4516 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  4517 */                     }
/*  4518 */                     var $lsubscr260 = $ret;
/*  4519 */                     return $lsubscr260;
/*  4520 */                     return Sk.builtin.none.none$;
/*  4521 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  4522 */                 }
/*  4523 */             } catch (err) {
/*  4524 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  4525 */                     Sk.execStart = Date.now()
/*  4526 */                 }
/*  4527 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4528 */                     err = new Sk.builtin.ExternalError(err);
/*  4529 */                 }
/*  4530 */                 err.traceback.push({
/*  4531 */                     lineno: $currLineNo,
/*  4532 */                     colno: $currColNo,
/*  4533 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  4534 */                 });
/*  4535 */                 if ($exc.length > 0) {
/*  4536 */                     $err = err;
/*  4537 */                     Sk.err = $err;
/*  4538 */                     $blk = $exc.pop();
/*  4539 */                     continue;
/*  4540 */                 } else {
/*  4541 */                     throw err;
/*  4542 */                 }
/*  4543 */             }
/*  4544 */         }
/*  4545 */     });
/*  4546 */     var $scope262 = (function $eval_selector263$(op_num, op_expr, $free) {
/*  4547 */         // has free
/*  4548 */         var op_expr, op_expr, op_expr, op_expr, op_expr, op_expr, op_expr, op_expr, op_expr, op_expr, op_expr, op_expr, op_num, op_num, op_num, op_num, $free, $res264, $res264, $lattr265, $compareres266, $str267, $loadgbl270, $loadgbl271, $elem272, $loadgbl273, $elem274, $loadtuple275, $lattr278, $compareres279, $str280, $lattr284, $compareres285, $str286, $lattr290, $compareres291, $str292;
/*  4549 */         var $wakeFromSuspension = function() {
/*  4550 */             var susp = $scope262.$wakingSuspension;
/*  4551 */             delete $scope262.$wakingSuspension;
/*  4552 */             $blk = susp.$blk;
/*  4553 */             $loc = susp.$loc;
/*  4554 */             $gbl = susp.$gbl;
/*  4555 */             $exc = susp.$exc;
/*  4556 */             $err = susp.$err;
/*  4557 */             Sk.err = $err;
/*  4558 */             $postfinally = susp.$postfinally;
/*  4559 */             $currLineNo = susp.$lineno;
/*  4560 */             $currColNo = susp.$colno;
/*  4561 */             Sk.lastYield = Date.now();
/*  4562 */             op_expr = susp.$tmps.op_expr;
/*  4563 */             op_num = susp.$tmps.op_num;
/*  4564 */             $free = susp.$tmps.$free;
/*  4565 */             $res264 = susp.$tmps.$res264;
/*  4566 */             $lattr265 = susp.$tmps.$lattr265;
/*  4567 */             $compareres266 = susp.$tmps.$compareres266;
/*  4568 */             $str267 = susp.$tmps.$str267;
/*  4569 */             $loadgbl270 = susp.$tmps.$loadgbl270;
/*  4570 */             $loadgbl271 = susp.$tmps.$loadgbl271;
/*  4571 */             $elem272 = susp.$tmps.$elem272;
/*  4572 */             $loadgbl273 = susp.$tmps.$loadgbl273;
/*  4573 */             $elem274 = susp.$tmps.$elem274;
/*  4574 */             $loadtuple275 = susp.$tmps.$loadtuple275;
/*  4575 */             $lattr278 = susp.$tmps.$lattr278;
/*  4576 */             $compareres279 = susp.$tmps.$compareres279;
/*  4577 */             $str280 = susp.$tmps.$str280;
/*  4578 */             $lattr284 = susp.$tmps.$lattr284;
/*  4579 */             $compareres285 = susp.$tmps.$compareres285;
/*  4580 */             $str286 = susp.$tmps.$str286;
/*  4581 */             $lattr290 = susp.$tmps.$lattr290;
/*  4582 */             $compareres291 = susp.$tmps.$compareres291;
/*  4583 */             $str292 = susp.$tmps.$str292;
/*  4584 */             try {
/*  4585 */                 $ret = susp.child.resume();
/*  4586 */             } catch (err) {
/*  4587 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  4588 */                     Sk.execStart = Date.now()
/*  4589 */                 }
/*  4590 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  4591 */                     err = new Sk.builtin.ExternalError(err);
/*  4592 */                 }
/*  4593 */                 err.traceback.push({
/*  4594 */                     lineno: $currLineNo,
/*  4595 */                     colno: $currColNo,
/*  4596 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  4597 */                 });
/*  4598 */                 if ($exc.length > 0) {
/*  4599 */                     $err = err;
/*  4600 */                     Sk.err = $err;
/*  4601 */                     $blk = $exc.pop();
/*  4602 */                 } else {
/*  4603 */                     throw err;
/*  4604 */                 }
/*  4605 */             }
/*  4606 */         };
/*  4607 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  4608 */             var susp = new Sk.misceval.Suspension();
/*  4609 */             susp.child = $child;
/*  4610 */             susp.resume = function() {
/*  4611 */                 $scope262.$wakingSuspension = susp;
/*  4612 */                 return $scope262();
/*  4613 */             };
/*  4614 */             susp.data = susp.child.data;
/*  4615 */             susp.$blk = $blk;
/*  4616 */             susp.$loc = $loc;
/*  4617 */             susp.$gbl = $gbl;
/*  4618 */             susp.$exc = $exc;
/*  4619 */             susp.$err = $err;
/*  4620 */             susp.$postfinally = $postfinally;
/*  4621 */             susp.$filename = $filename;
/*  4622 */             susp.$lineno = $lineno;
/*  4623 */             susp.$colno = $colno;
/*  4624 */             susp.optional = susp.child.optional;
/*  4625 */             susp.$tmps = {
/*  4626 */                 "op_expr": op_expr,
/*  4627 */                 "op_num": op_num,
/*  4628 */                 "$free": $free,
/*  4629 */                 "$res264": $res264,
/*  4630 */                 "$lattr265": $lattr265,
/*  4631 */                 "$compareres266": $compareres266,
/*  4632 */                 "$str267": $str267,
/*  4633 */                 "$loadgbl270": $loadgbl270,
/*  4634 */                 "$loadgbl271": $loadgbl271,
/*  4635 */                 "$elem272": $elem272,
/*  4636 */                 "$loadgbl273": $loadgbl273,
/*  4637 */                 "$elem274": $elem274,
/*  4638 */                 "$loadtuple275": $loadtuple275,
/*  4639 */                 "$lattr278": $lattr278,
/*  4640 */                 "$compareres279": $compareres279,
/*  4641 */                 "$str280": $str280,
/*  4642 */                 "$lattr284": $lattr284,
/*  4643 */                 "$compareres285": $compareres285,
/*  4644 */                 "$str286": $str286,
/*  4645 */                 "$lattr290": $lattr290,
/*  4646 */                 "$compareres291": $compareres291,
/*  4647 */                 "$str292": $str292
/*  4648 */             };
/*  4649 */             return susp;
/*  4650 */         };
/*  4651 */         var $blk = 0,
/*  4652 */             $exc = [],
/*  4653 */             $loc = {},
/*  4654 */             $gbl = this,
/*  4655 */             $err = undefined,
/*  4656 */             $ret = undefined,
/*  4657 */             $postfinally = undefined,
/*  4658 */             $currLineNo = undefined,
/*  4659 */             $currColNo = undefined;
/*  4660 */         Sk.err = $err;
/*  4661 */         if (typeof Sk.execStart === 'undefined') {
/*  4662 */             Sk.execStart = Date.now()
/*  4663 */         }
/*  4664 */         if (typeof Sk.lastYield === 'undefined') {
/*  4665 */             Sk.lastYield = Date.now()
/*  4666 */         }
/*  4667 */         if ($scope262.$wakingSuspension !== undefined) {
/*  4668 */             $wakeFromSuspension();
/*  4669 */         } else {
/*  4670 */             Sk.builtin.pyCheckArgs("eval_selector", arguments, 2, 2, false, true);
/*  4671 */         }
/*  4672 */         while (true) {
/*  4673 */             try {
/*  4674 */                 var $dateNow = Date.now();
/*  4675 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  4676 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  4677 */                 }
/*  4678 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  4679 */                     var $susp = $saveSuspension({
/*  4680 */                         data: {
/*  4681 */                             type: 'Sk.yield'
/*  4682 */                         },
/*  4683 */                         resume: function() {}
/*  4684 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  4685 */                     $susp.$blk = $blk;
/*  4686 */                     $susp.optional = true;
/*  4687 */                     return $susp;
/*  4688 */                 }
/*  4689 */                 switch ($blk) {
/*  4690 */                 case 0:
/*  4691 */                     /* --- codeobj entry --- */
/*  4692 */                     if (op_num === undefined) {
/*  4693 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_num\' referenced before assignment');
/*  4694 */                     }
/*  4695 */                     if (op_expr === undefined) {
/*  4696 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  4697 */                     }
/*  4698 */ 
/*  4699 */ 
/*  4700 */                     //
/*  4701 */                     // line 126:
/*  4702 */                     //             op_expr = op_num if op_expr.ast_name == "Name" else op_expr
/*  4703 */                     //             ^
/*  4704 */                     //
/*  4705 */                     Sk.currLineNo = 126;
/*  4706 */                     Sk.currColNo = 12;
/*  4707 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4708 */                     $currLineNo = 126;
/*  4709 */                     $currColNo = 12;
/*  4710 */                     var $res264 = null;
/*  4711 */                     if (op_expr === undefined) {
/*  4712 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  4713 */                     }
/*  4714 */                     $ret = Sk.abstr.gattr(op_expr, 'ast_name', true);
/*  4715 */                     $blk = 3; /* allowing case fallthrough */
/*  4716 */                 case 3:
/*  4717 */                     /* --- function return or resume suspension --- */
/*  4718 */                     if ($ret && $ret.$isSuspension) {
/*  4719 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 126, 32);
/*  4720 */                     }
/*  4721 */                     var $lattr265 = $ret;
/*  4722 */                     var $compareres266 = null;
/*  4723 */                     var $str267 = new Sk.builtins['str']('Name');
/*  4724 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr265, $str267, 'Eq', true));
/*  4725 */                     $blk = 5; /* allowing case fallthrough */
/*  4726 */                 case 5:
/*  4727 */                     /* --- function return or resume suspension --- */
/*  4728 */                     if ($ret && $ret.$isSuspension) {
/*  4729 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 126, 32);
/*  4730 */                     }
/*  4731 */                     $compareres266 = $ret;
/*  4732 */                     var $jfalse268 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4733 */                     if ($jfalse268) { /*test failed */
/*  4734 */                         $blk = 4;
/*  4735 */                         continue;
/*  4736 */                     }
/*  4737 */                     $blk = 4; /* allowing case fallthrough */
/*  4738 */                 case 4:
/*  4739 */                     /* --- done --- */
/*  4740 */                     var $jfalse269 = ($compareres266 === false || !Sk.misceval.isTrue($compareres266));
/*  4741 */                     if ($jfalse269) { /*test failed */
/*  4742 */                         $blk = 1;
/*  4743 */                         continue;
/*  4744 */                     }
/*  4745 */                     if (op_num === undefined) {
/*  4746 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_num\' referenced before assignment');
/*  4747 */                     }
/*  4748 */                     $res264 = op_num;
/*  4749 */                     $blk = 2; /* allowing case fallthrough */
/*  4750 */                 case 2:
/*  4751 */                     /* --- end of ifexp --- */
/*  4752 */                     op_expr = $res264;
/*  4753 */ 
/*  4754 */                     //
/*  4755 */                     // line 127:
/*  4756 */                     //             if isinstance(op_expr, (int, float)):
/*  4757 */                     //             ^
/*  4758 */                     //
/*  4759 */                     Sk.currLineNo = 127;
/*  4760 */                     Sk.currColNo = 12;
/*  4761 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4762 */                     $currLineNo = 127;
/*  4763 */                     $currColNo = 12;
/*  4764 */                     var $loadgbl270 = Sk.misceval.loadname('isinstance', $gbl);
/*  4765 */                     if (op_expr === undefined) {
/*  4766 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  4767 */                     }
/*  4768 */                     var $loadgbl271 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  4769 */                     var $elem272 = $loadgbl271;
/*  4770 */                     var $loadgbl273 = Sk.misceval.loadname('float_$rw$', $gbl);
/*  4771 */                     var $elem274 = $loadgbl273;
/*  4772 */                     var $loadtuple275 = new Sk.builtins['tuple']([$elem272, $elem274]);
/*  4773 */                     $ret;
/*  4774 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl270, op_expr, $loadtuple275);
/*  4775 */                     $blk = 7; /* allowing case fallthrough */
/*  4776 */                 case 7:
/*  4777 */                     /* --- function return or resume suspension --- */
/*  4778 */                     if ($ret && $ret.$isSuspension) {
/*  4779 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 127, 15);
/*  4780 */                     }
/*  4781 */                     var $call276 = $ret;
/*  4782 */ 
/*  4783 */                     //
/*  4784 */                     // line 127:
/*  4785 */                     //             if isinstance(op_expr, (int, float)):
/*  4786 */                     //                ^
/*  4787 */                     //
/*  4788 */                     Sk.currLineNo = 127;
/*  4789 */                     Sk.currColNo = 15;
/*  4790 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4791 */                     $currLineNo = 127;
/*  4792 */                     $currColNo = 15;
/*  4793 */                     var $jfalse277 = ($call276 === false || !Sk.misceval.isTrue($call276));
/*  4794 */                     if ($jfalse277) { /*test failed */
/*  4795 */                         $blk = 6;
/*  4796 */                         continue;
/*  4797 */                     }
/*  4798 */ 
/*  4799 */                     //
/*  4800 */                     // line 128:
/*  4801 */                     //                 return op_expr
/*  4802 */                     //                 ^
/*  4803 */                     //
/*  4804 */                     Sk.currLineNo = 128;
/*  4805 */                     Sk.currColNo = 16;
/*  4806 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4807 */                     $currLineNo = 128;
/*  4808 */                     $currColNo = 16;
/*  4809 */                     if (op_expr === undefined) {
/*  4810 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  4811 */                     }
/*  4812 */                     return op_expr;
/*  4813 */                     $blk = 6; /* allowing case fallthrough */
/*  4814 */                 case 6:
/*  4815 */                     /* --- end of if --- */
/*  4816 */ 
/*  4817 */                     //
/*  4818 */                     // line 129:
/*  4819 */                     //             if op_expr.ast_name == "BinOp":
/*  4820 */                     //             ^
/*  4821 */                     //
/*  4822 */                     Sk.currLineNo = 129;
/*  4823 */                     Sk.currColNo = 12;
/*  4824 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4825 */                     $currLineNo = 129;
/*  4826 */                     $currColNo = 12;
/*  4827 */                     if (op_expr === undefined) {
/*  4828 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  4829 */                     }
/*  4830 */                     $ret = Sk.abstr.gattr(op_expr, 'ast_name', true);
/*  4831 */                     $blk = 9; /* allowing case fallthrough */
/*  4832 */                 case 9:
/*  4833 */                     /* --- function return or resume suspension --- */
/*  4834 */                     if ($ret && $ret.$isSuspension) {
/*  4835 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 129, 15);
/*  4836 */                     }
/*  4837 */                     var $lattr278 = $ret;
/*  4838 */                     var $compareres279 = null;
/*  4839 */                     var $str280 = new Sk.builtins['str']('BinOp');
/*  4840 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr278, $str280, 'Eq', true));
/*  4841 */                     $blk = 11; /* allowing case fallthrough */
/*  4842 */                 case 11:
/*  4843 */                     /* --- function return or resume suspension --- */
/*  4844 */                     if ($ret && $ret.$isSuspension) {
/*  4845 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 129, 15);
/*  4846 */                     }
/*  4847 */                     $compareres279 = $ret;
/*  4848 */                     var $jfalse281 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4849 */                     if ($jfalse281) { /*test failed */
/*  4850 */                         $blk = 10;
/*  4851 */                         continue;
/*  4852 */                     }
/*  4853 */                     $blk = 10; /* allowing case fallthrough */
/*  4854 */                 case 10:
/*  4855 */                     /* --- done --- */
/*  4856 */                     var $jfalse282 = ($compareres279 === false || !Sk.misceval.isTrue($compareres279));
/*  4857 */                     if ($jfalse282) { /*test failed */
/*  4858 */                         $blk = 8;
/*  4859 */                         continue;
/*  4860 */                     }
/*  4861 */ 
/*  4862 */                     //
/*  4863 */                     // line 130:
/*  4864 */                     //                 return eval_binop(op_num, op_expr)
/*  4865 */                     //                 ^
/*  4866 */                     //
/*  4867 */                     Sk.currLineNo = 130;
/*  4868 */                     Sk.currColNo = 16;
/*  4869 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4870 */                     $currLineNo = 130;
/*  4871 */                     $currColNo = 16;
/*  4872 */                     if (op_num === undefined) {
/*  4873 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_num\' referenced before assignment');
/*  4874 */                     }
/*  4875 */                     if (op_expr === undefined) {
/*  4876 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  4877 */                     }
/*  4878 */                     $ret;
/*  4879 */                     $ret = Sk.misceval.callsimOrSuspend($free.eval_binop, op_num, op_expr);
/*  4880 */                     $blk = 12; /* allowing case fallthrough */
/*  4881 */                 case 12:
/*  4882 */                     /* --- function return or resume suspension --- */
/*  4883 */                     if ($ret && $ret.$isSuspension) {
/*  4884 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 130, 23);
/*  4885 */                     }
/*  4886 */                     var $call283 = $ret;
/*  4887 */ 
/*  4888 */                     //
/*  4889 */                     // line 130:
/*  4890 */                     //                 return eval_binop(op_num, op_expr)
/*  4891 */                     //                        ^
/*  4892 */                     //
/*  4893 */                     Sk.currLineNo = 130;
/*  4894 */                     Sk.currColNo = 23;
/*  4895 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4896 */                     $currLineNo = 130;
/*  4897 */                     $currColNo = 23;
/*  4898 */                     return $call283;
/*  4899 */                     $blk = 8; /* allowing case fallthrough */
/*  4900 */                 case 8:
/*  4901 */                     /* --- end of if --- */
/*  4902 */ 
/*  4903 */                     //
/*  4904 */                     // line 131:
/*  4905 */                     //             if op_expr.ast_name == "UnaryOp":
/*  4906 */                     //             ^
/*  4907 */                     //
/*  4908 */                     Sk.currLineNo = 131;
/*  4909 */                     Sk.currColNo = 12;
/*  4910 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4911 */                     $currLineNo = 131;
/*  4912 */                     $currColNo = 12;
/*  4913 */                     if (op_expr === undefined) {
/*  4914 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  4915 */                     }
/*  4916 */                     $ret = Sk.abstr.gattr(op_expr, 'ast_name', true);
/*  4917 */                     $blk = 14; /* allowing case fallthrough */
/*  4918 */                 case 14:
/*  4919 */                     /* --- function return or resume suspension --- */
/*  4920 */                     if ($ret && $ret.$isSuspension) {
/*  4921 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 131, 15);
/*  4922 */                     }
/*  4923 */                     var $lattr284 = $ret;
/*  4924 */                     var $compareres285 = null;
/*  4925 */                     var $str286 = new Sk.builtins['str']('UnaryOp');
/*  4926 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr284, $str286, 'Eq', true));
/*  4927 */                     $blk = 16; /* allowing case fallthrough */
/*  4928 */                 case 16:
/*  4929 */                     /* --- function return or resume suspension --- */
/*  4930 */                     if ($ret && $ret.$isSuspension) {
/*  4931 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 131, 15);
/*  4932 */                     }
/*  4933 */                     $compareres285 = $ret;
/*  4934 */                     var $jfalse287 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  4935 */                     if ($jfalse287) { /*test failed */
/*  4936 */                         $blk = 15;
/*  4937 */                         continue;
/*  4938 */                     }
/*  4939 */                     $blk = 15; /* allowing case fallthrough */
/*  4940 */                 case 15:
/*  4941 */                     /* --- done --- */
/*  4942 */                     var $jfalse288 = ($compareres285 === false || !Sk.misceval.isTrue($compareres285));
/*  4943 */                     if ($jfalse288) { /*test failed */
/*  4944 */                         $blk = 13;
/*  4945 */                         continue;
/*  4946 */                     }
/*  4947 */ 
/*  4948 */                     //
/*  4949 */                     // line 132:
/*  4950 */                     //                 return eval_unop(op_num, op_expr)
/*  4951 */                     //                 ^
/*  4952 */                     //
/*  4953 */                     Sk.currLineNo = 132;
/*  4954 */                     Sk.currColNo = 16;
/*  4955 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4956 */                     $currLineNo = 132;
/*  4957 */                     $currColNo = 16;
/*  4958 */                     if (op_num === undefined) {
/*  4959 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_num\' referenced before assignment');
/*  4960 */                     }
/*  4961 */                     if (op_expr === undefined) {
/*  4962 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  4963 */                     }
/*  4964 */                     $ret;
/*  4965 */                     $ret = Sk.misceval.callsimOrSuspend($free.eval_unop, op_num, op_expr);
/*  4966 */                     $blk = 17; /* allowing case fallthrough */
/*  4967 */                 case 17:
/*  4968 */                     /* --- function return or resume suspension --- */
/*  4969 */                     if ($ret && $ret.$isSuspension) {
/*  4970 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 132, 23);
/*  4971 */                     }
/*  4972 */                     var $call289 = $ret;
/*  4973 */ 
/*  4974 */                     //
/*  4975 */                     // line 132:
/*  4976 */                     //                 return eval_unop(op_num, op_expr)
/*  4977 */                     //                        ^
/*  4978 */                     //
/*  4979 */                     Sk.currLineNo = 132;
/*  4980 */                     Sk.currColNo = 23;
/*  4981 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4982 */                     $currLineNo = 132;
/*  4983 */                     $currColNo = 23;
/*  4984 */                     return $call289;
/*  4985 */                     $blk = 13; /* allowing case fallthrough */
/*  4986 */                 case 13:
/*  4987 */                     /* --- end of if --- */
/*  4988 */ 
/*  4989 */                     //
/*  4990 */                     // line 133:
/*  4991 */                     //             if op_expr.ast_name == "Num":
/*  4992 */                     //             ^
/*  4993 */                     //
/*  4994 */                     Sk.currLineNo = 133;
/*  4995 */                     Sk.currColNo = 12;
/*  4996 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  4997 */                     $currLineNo = 133;
/*  4998 */                     $currColNo = 12;
/*  4999 */                     if (op_expr === undefined) {
/*  5000 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  5001 */                     }
/*  5002 */                     $ret = Sk.abstr.gattr(op_expr, 'ast_name', true);
/*  5003 */                     $blk = 19; /* allowing case fallthrough */
/*  5004 */                 case 19:
/*  5005 */                     /* --- function return or resume suspension --- */
/*  5006 */                     if ($ret && $ret.$isSuspension) {
/*  5007 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 133, 15);
/*  5008 */                     }
/*  5009 */                     var $lattr290 = $ret;
/*  5010 */                     var $compareres291 = null;
/*  5011 */                     var $str292 = new Sk.builtins['str']('Num');
/*  5012 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr290, $str292, 'Eq', true));
/*  5013 */                     $blk = 21; /* allowing case fallthrough */
/*  5014 */                 case 21:
/*  5015 */                     /* --- function return or resume suspension --- */
/*  5016 */                     if ($ret && $ret.$isSuspension) {
/*  5017 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 133, 15);
/*  5018 */                     }
/*  5019 */                     $compareres291 = $ret;
/*  5020 */                     var $jfalse293 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5021 */                     if ($jfalse293) { /*test failed */
/*  5022 */                         $blk = 20;
/*  5023 */                         continue;
/*  5024 */                     }
/*  5025 */                     $blk = 20; /* allowing case fallthrough */
/*  5026 */                 case 20:
/*  5027 */                     /* --- done --- */
/*  5028 */                     var $jfalse294 = ($compareres291 === false || !Sk.misceval.isTrue($compareres291));
/*  5029 */                     if ($jfalse294) { /*test failed */
/*  5030 */                         $blk = 18;
/*  5031 */                         continue;
/*  5032 */                     }
/*  5033 */ 
/*  5034 */                     //
/*  5035 */                     // line 134:
/*  5036 */                     //                 return op_expr.n
/*  5037 */                     //                 ^
/*  5038 */                     //
/*  5039 */                     Sk.currLineNo = 134;
/*  5040 */                     Sk.currColNo = 16;
/*  5041 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5042 */                     $currLineNo = 134;
/*  5043 */                     $currColNo = 16;
/*  5044 */                     if (op_expr === undefined) {
/*  5045 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  5046 */                     }
/*  5047 */                     $ret = Sk.abstr.gattr(op_expr, 'n', true);
/*  5048 */                     $blk = 22; /* allowing case fallthrough */
/*  5049 */                 case 22:
/*  5050 */                     /* --- function return or resume suspension --- */
/*  5051 */                     if ($ret && $ret.$isSuspension) {
/*  5052 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 134, 23);
/*  5053 */                     }
/*  5054 */                     var $lattr295 = $ret;
/*  5055 */                     return $lattr295;
/*  5056 */                     $blk = 18; /* allowing case fallthrough */
/*  5057 */                 case 18:
/*  5058 */                     /* --- end of if --- */
/*  5059 */ 
/*  5060 */                     //
/*  5061 */                     // line 135:
/*  5062 */                     //             raise NotImplementedError
/*  5063 */                     //             ^
/*  5064 */                     //
/*  5065 */                     Sk.currLineNo = 135;
/*  5066 */                     Sk.currColNo = 12;
/*  5067 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5068 */                     $currLineNo = 135;
/*  5069 */                     $currColNo = 12;
/*  5070 */                     var $loadgbl296 = Sk.misceval.loadname('NotImplementedError', $gbl);
/*  5071 */                     var $err297 = $loadgbl296;
/*  5072 */                     if ($err297 instanceof Sk.builtin.type) {
/*  5073 */                         throw Sk.misceval.callsim($err297);
/*  5074 */                     } else if (typeof($err297) === 'function') {
/*  5075 */                         throw $err297();
/*  5076 */                     } else {
/*  5077 */                         throw $err297;
/*  5078 */                     }
/*  5079 */                     return Sk.builtin.none.none$;
/*  5080 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5081 */                 case 1:
/*  5082 */                     /* --- next of ifexp --- */
/*  5083 */                     if (op_expr === undefined) {
/*  5084 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op_expr\' referenced before assignment');
/*  5085 */                     }
/*  5086 */                     $res264 = op_expr;
/*  5087 */                     $blk = 2; /* jump */
/*  5088 */                     continue;
/*  5089 */                 }
/*  5090 */             } catch (err) {
/*  5091 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  5092 */                     Sk.execStart = Date.now()
/*  5093 */                 }
/*  5094 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5095 */                     err = new Sk.builtin.ExternalError(err);
/*  5096 */                 }
/*  5097 */                 err.traceback.push({
/*  5098 */                     lineno: $currLineNo,
/*  5099 */                     colno: $currColNo,
/*  5100 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  5101 */                 });
/*  5102 */                 if ($exc.length > 0) {
/*  5103 */                     $err = err;
/*  5104 */                     Sk.err = $err;
/*  5105 */                     $blk = $exc.pop();
/*  5106 */                     continue;
/*  5107 */                 } else {
/*  5108 */                     throw err;
/*  5109 */                 }
/*  5110 */             }
/*  5111 */         }
/*  5112 */     });
/*  5113 */     var $scope299 = (function $eval_bool_comp300$(num_list, comp_ast, $free) {
/*  5114 */         // has free
/*  5115 */         var comp, comp_p, comps, current, left, num_i, op, ops, res, result, results; /* locals */
/*  5116 */         var comp, comp, comp, comp_ast, comp_ast, comp_ast, comp_ast, comp_p, comp_p, comp_p, comp_p, comp_p, comp_p, comp_p, comps, comps, current, current, current, current, current, current, current, current, current, current, current, current, left, left, num_i, num_i, num_i, num_list, num_list, op, op, ops, ops, res, res, result, result, result, result, result, results, results, results, $free, $iter305, $iter305, $loadgbl307, $iter309, $loadgbl307, $call308, $iter309, $compareres314, $compareres314, $jfalse315, $str316, $compareres317, $compareres314, $jfalse315, $str316, $compareres317, $jfalse318, $str319, $compareres320, $compareres314, $jfalse315, $str316, $compareres317, $jfalse318, $str319, $compareres320, $jfalse321, $str322, $compareres323, $compareres314, $jfalse315, $str316, $compareres317, $jfalse318, $str319, $compareres320, $jfalse321, $str322, $compareres323, $jfalse324, $str325, $compareres326, $compareres314, $jfalse315, $str316, $compareres317, $jfalse318, $str319, $compareres320, $jfalse321, $str322, $compareres323, $jfalse324, $str325, $compareres326, $jfalse327, $str328, $compareres329, $compareres314, $jfalse315, $str316, $compareres317, $jfalse318, $str319, $compareres320, $jfalse321, $str322, $compareres323, $jfalse324, $str325, $compareres326, $jfalse327, $str328, $compareres329, $jfalse330, $str331, $loaddict332, $lattr339;
/*  5117 */         var $wakeFromSuspension = function() {
/*  5118 */             var susp = $scope299.$wakingSuspension;
/*  5119 */             delete $scope299.$wakingSuspension;
/*  5120 */             $blk = susp.$blk;
/*  5121 */             $loc = susp.$loc;
/*  5122 */             $gbl = susp.$gbl;
/*  5123 */             $exc = susp.$exc;
/*  5124 */             $err = susp.$err;
/*  5125 */             Sk.err = $err;
/*  5126 */             $postfinally = susp.$postfinally;
/*  5127 */             $currLineNo = susp.$lineno;
/*  5128 */             $currColNo = susp.$colno;
/*  5129 */             Sk.lastYield = Date.now();
/*  5130 */             comp = susp.$tmps.comp;
/*  5131 */             comp_ast = susp.$tmps.comp_ast;
/*  5132 */             comp_p = susp.$tmps.comp_p;
/*  5133 */             comps = susp.$tmps.comps;
/*  5134 */             current = susp.$tmps.current;
/*  5135 */             left = susp.$tmps.left;
/*  5136 */             num_i = susp.$tmps.num_i;
/*  5137 */             num_list = susp.$tmps.num_list;
/*  5138 */             op = susp.$tmps.op;
/*  5139 */             ops = susp.$tmps.ops;
/*  5140 */             res = susp.$tmps.res;
/*  5141 */             result = susp.$tmps.result;
/*  5142 */             results = susp.$tmps.results;
/*  5143 */             $free = susp.$tmps.$free;
/*  5144 */             $iter305 = susp.$tmps.$iter305;
/*  5145 */             $loadgbl307 = susp.$tmps.$loadgbl307;
/*  5146 */             $iter309 = susp.$tmps.$iter309;
/*  5147 */             $call308 = susp.$tmps.$call308;
/*  5148 */             $compareres314 = susp.$tmps.$compareres314;
/*  5149 */             $jfalse315 = susp.$tmps.$jfalse315;
/*  5150 */             $str316 = susp.$tmps.$str316;
/*  5151 */             $compareres317 = susp.$tmps.$compareres317;
/*  5152 */             $jfalse318 = susp.$tmps.$jfalse318;
/*  5153 */             $str319 = susp.$tmps.$str319;
/*  5154 */             $compareres320 = susp.$tmps.$compareres320;
/*  5155 */             $jfalse321 = susp.$tmps.$jfalse321;
/*  5156 */             $str322 = susp.$tmps.$str322;
/*  5157 */             $compareres323 = susp.$tmps.$compareres323;
/*  5158 */             $jfalse324 = susp.$tmps.$jfalse324;
/*  5159 */             $str325 = susp.$tmps.$str325;
/*  5160 */             $compareres326 = susp.$tmps.$compareres326;
/*  5161 */             $jfalse327 = susp.$tmps.$jfalse327;
/*  5162 */             $str328 = susp.$tmps.$str328;
/*  5163 */             $compareres329 = susp.$tmps.$compareres329;
/*  5164 */             $jfalse330 = susp.$tmps.$jfalse330;
/*  5165 */             $str331 = susp.$tmps.$str331;
/*  5166 */             $loaddict332 = susp.$tmps.$loaddict332;
/*  5167 */             $lattr339 = susp.$tmps.$lattr339;
/*  5168 */             try {
/*  5169 */                 $ret = susp.child.resume();
/*  5170 */             } catch (err) {
/*  5171 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  5172 */                     Sk.execStart = Date.now()
/*  5173 */                 }
/*  5174 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5175 */                     err = new Sk.builtin.ExternalError(err);
/*  5176 */                 }
/*  5177 */                 err.traceback.push({
/*  5178 */                     lineno: $currLineNo,
/*  5179 */                     colno: $currColNo,
/*  5180 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  5181 */                 });
/*  5182 */                 if ($exc.length > 0) {
/*  5183 */                     $err = err;
/*  5184 */                     Sk.err = $err;
/*  5185 */                     $blk = $exc.pop();
/*  5186 */                 } else {
/*  5187 */                     throw err;
/*  5188 */                 }
/*  5189 */             }
/*  5190 */         };
/*  5191 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  5192 */             var susp = new Sk.misceval.Suspension();
/*  5193 */             susp.child = $child;
/*  5194 */             susp.resume = function() {
/*  5195 */                 $scope299.$wakingSuspension = susp;
/*  5196 */                 return $scope299();
/*  5197 */             };
/*  5198 */             susp.data = susp.child.data;
/*  5199 */             susp.$blk = $blk;
/*  5200 */             susp.$loc = $loc;
/*  5201 */             susp.$gbl = $gbl;
/*  5202 */             susp.$exc = $exc;
/*  5203 */             susp.$err = $err;
/*  5204 */             susp.$postfinally = $postfinally;
/*  5205 */             susp.$filename = $filename;
/*  5206 */             susp.$lineno = $lineno;
/*  5207 */             susp.$colno = $colno;
/*  5208 */             susp.optional = susp.child.optional;
/*  5209 */             susp.$tmps = {
/*  5210 */                 "comp": comp,
/*  5211 */                 "comp_ast": comp_ast,
/*  5212 */                 "comp_p": comp_p,
/*  5213 */                 "comps": comps,
/*  5214 */                 "current": current,
/*  5215 */                 "left": left,
/*  5216 */                 "num_i": num_i,
/*  5217 */                 "num_list": num_list,
/*  5218 */                 "op": op,
/*  5219 */                 "ops": ops,
/*  5220 */                 "res": res,
/*  5221 */                 "result": result,
/*  5222 */                 "results": results,
/*  5223 */                 "$free": $free,
/*  5224 */                 "$iter305": $iter305,
/*  5225 */                 "$loadgbl307": $loadgbl307,
/*  5226 */                 "$iter309": $iter309,
/*  5227 */                 "$call308": $call308,
/*  5228 */                 "$compareres314": $compareres314,
/*  5229 */                 "$jfalse315": $jfalse315,
/*  5230 */                 "$str316": $str316,
/*  5231 */                 "$compareres317": $compareres317,
/*  5232 */                 "$jfalse318": $jfalse318,
/*  5233 */                 "$str319": $str319,
/*  5234 */                 "$compareres320": $compareres320,
/*  5235 */                 "$jfalse321": $jfalse321,
/*  5236 */                 "$str322": $str322,
/*  5237 */                 "$compareres323": $compareres323,
/*  5238 */                 "$jfalse324": $jfalse324,
/*  5239 */                 "$str325": $str325,
/*  5240 */                 "$compareres326": $compareres326,
/*  5241 */                 "$jfalse327": $jfalse327,
/*  5242 */                 "$str328": $str328,
/*  5243 */                 "$compareres329": $compareres329,
/*  5244 */                 "$jfalse330": $jfalse330,
/*  5245 */                 "$str331": $str331,
/*  5246 */                 "$loaddict332": $loaddict332,
/*  5247 */                 "$lattr339": $lattr339
/*  5248 */             };
/*  5249 */             return susp;
/*  5250 */         };
/*  5251 */         var $blk = 0,
/*  5252 */             $exc = [],
/*  5253 */             $loc = {},
/*  5254 */             $gbl = this,
/*  5255 */             $err = undefined,
/*  5256 */             $ret = undefined,
/*  5257 */             $postfinally = undefined,
/*  5258 */             $currLineNo = undefined,
/*  5259 */             $currColNo = undefined;
/*  5260 */         Sk.err = $err;
/*  5261 */         if (typeof Sk.execStart === 'undefined') {
/*  5262 */             Sk.execStart = Date.now()
/*  5263 */         }
/*  5264 */         if (typeof Sk.lastYield === 'undefined') {
/*  5265 */             Sk.lastYield = Date.now()
/*  5266 */         }
/*  5267 */         if ($scope299.$wakingSuspension !== undefined) {
/*  5268 */             $wakeFromSuspension();
/*  5269 */         } else {
/*  5270 */             Sk.builtin.pyCheckArgs("eval_bool_comp", arguments, 2, 2, false, true);
/*  5271 */         }
/*  5272 */         while (true) {
/*  5273 */             try {
/*  5274 */                 var $dateNow = Date.now();
/*  5275 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  5276 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  5277 */                 }
/*  5278 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  5279 */                     var $susp = $saveSuspension({
/*  5280 */                         data: {
/*  5281 */                             type: 'Sk.yield'
/*  5282 */                         },
/*  5283 */                         resume: function() {}
/*  5284 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  5285 */                     $susp.$blk = $blk;
/*  5286 */                     $susp.optional = true;
/*  5287 */                     return $susp;
/*  5288 */                 }
/*  5289 */                 switch ($blk) {
/*  5290 */                 case 0:
/*  5291 */                     /* --- codeobj entry --- */
/*  5292 */                     if (num_list === undefined) {
/*  5293 */                         throw new Sk.builtin.UnboundLocalError('local variable \'num_list\' referenced before assignment');
/*  5294 */                     }
/*  5295 */                     if (comp_ast === undefined) {
/*  5296 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_ast\' referenced before assignment');
/*  5297 */                     }
/*  5298 */ 
/*  5299 */ 
/*  5300 */                     //
/*  5301 */                     // line 138:
/*  5302 */                     //             ops = comp_ast.ops_names
/*  5303 */                     //             ^
/*  5304 */                     //
/*  5305 */                     Sk.currLineNo = 138;
/*  5306 */                     Sk.currColNo = 12;
/*  5307 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5308 */                     $currLineNo = 138;
/*  5309 */                     $currColNo = 12;
/*  5310 */                     if (comp_ast === undefined) {
/*  5311 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_ast\' referenced before assignment');
/*  5312 */                     }
/*  5313 */                     $ret = Sk.abstr.gattr(comp_ast, 'ops_names', true);
/*  5314 */                     $blk = 1; /* allowing case fallthrough */
/*  5315 */                 case 1:
/*  5316 */                     /* --- function return or resume suspension --- */
/*  5317 */                     if ($ret && $ret.$isSuspension) {
/*  5318 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 138, 18);
/*  5319 */                     }
/*  5320 */                     var $lattr301 = $ret;
/*  5321 */                     ops = $lattr301;
/*  5322 */ 
/*  5323 */                     //
/*  5324 */                     // line 139:
/*  5325 */                     //             comps = comp_ast.comparators
/*  5326 */                     //             ^
/*  5327 */                     //
/*  5328 */                     Sk.currLineNo = 139;
/*  5329 */                     Sk.currColNo = 12;
/*  5330 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5331 */                     $currLineNo = 139;
/*  5332 */                     $currColNo = 12;
/*  5333 */                     if (comp_ast === undefined) {
/*  5334 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_ast\' referenced before assignment');
/*  5335 */                     }
/*  5336 */                     $ret = Sk.abstr.gattr(comp_ast, 'comparators', true);
/*  5337 */                     $blk = 2; /* allowing case fallthrough */
/*  5338 */                 case 2:
/*  5339 */                     /* --- function return or resume suspension --- */
/*  5340 */                     if ($ret && $ret.$isSuspension) {
/*  5341 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 139, 20);
/*  5342 */                     }
/*  5343 */                     var $lattr302 = $ret;
/*  5344 */                     comps = $lattr302;
/*  5345 */ 
/*  5346 */                     //
/*  5347 */                     // line 140:
/*  5348 */                     //             results = []
/*  5349 */                     //             ^
/*  5350 */                     //
/*  5351 */                     Sk.currLineNo = 140;
/*  5352 */                     Sk.currColNo = 12;
/*  5353 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5354 */                     $currLineNo = 140;
/*  5355 */                     $currColNo = 12;
/*  5356 */                     var $loadlist303 = new Sk.builtins['list']([]);
/*  5357 */                     results = $loadlist303;
/*  5358 */ 
/*  5359 */                     //
/*  5360 */                     // line 141:
/*  5361 */                     //             current = comp_ast.left
/*  5362 */                     //             ^
/*  5363 */                     //
/*  5364 */                     Sk.currLineNo = 141;
/*  5365 */                     Sk.currColNo = 12;
/*  5366 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5367 */                     $currLineNo = 141;
/*  5368 */                     $currColNo = 12;
/*  5369 */                     if (comp_ast === undefined) {
/*  5370 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_ast\' referenced before assignment');
/*  5371 */                     }
/*  5372 */                     $ret = Sk.abstr.gattr(comp_ast, 'left', true);
/*  5373 */                     $blk = 3; /* allowing case fallthrough */
/*  5374 */                 case 3:
/*  5375 */                     /* --- function return or resume suspension --- */
/*  5376 */                     if ($ret && $ret.$isSuspension) {
/*  5377 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 141, 22);
/*  5378 */                     }
/*  5379 */                     var $lattr304 = $ret;
/*  5380 */                     current = $lattr304;
/*  5381 */ 
/*  5382 */                     //
/*  5383 */                     // line 142:
/*  5384 */                     //             left = current
/*  5385 */                     //             ^
/*  5386 */                     //
/*  5387 */                     Sk.currLineNo = 142;
/*  5388 */                     Sk.currColNo = 12;
/*  5389 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5390 */                     $currLineNo = 142;
/*  5391 */                     $currColNo = 12;
/*  5392 */                     if (current === undefined) {
/*  5393 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/*  5394 */                     }
/*  5395 */                     left = current;
/*  5396 */ 
/*  5397 */                     //
/*  5398 */                     // line 144:
/*  5399 */                     //             for num_i in num_list:
/*  5400 */                     //             ^
/*  5401 */                     //
/*  5402 */                     Sk.currLineNo = 144;
/*  5403 */                     Sk.currColNo = 12;
/*  5404 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5405 */                     $currLineNo = 144;
/*  5406 */                     $currColNo = 12;
/*  5407 */                     if (num_list === undefined) {
/*  5408 */                         throw new Sk.builtin.UnboundLocalError('local variable \'num_list\' referenced before assignment');
/*  5409 */                     }
/*  5410 */                     var $iter305 = Sk.abstr.iter(num_list);
/*  5411 */                     $blk = 4; /* allowing case fallthrough */
/*  5412 */                 case 4:
/*  5413 */                     /* --- for start --- */
/*  5414 */                     $ret = Sk.abstr.iternext($iter305, true);
/*  5415 */                     $blk = 7; /* allowing case fallthrough */
/*  5416 */                 case 7:
/*  5417 */                     /* --- function return or resume suspension --- */
/*  5418 */                     if ($ret && $ret.$isSuspension) {
/*  5419 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 144, 12);
/*  5420 */                     }
/*  5421 */                     var $next306 = $ret;
/*  5422 */                     if ($next306 === undefined) {
/*  5423 */                         $blk = 5;
/*  5424 */                         continue;
/*  5425 */                     }
/*  5426 */                     num_i = $next306;
/*  5427 */ 
/*  5428 */                     //
/*  5429 */                     // line 145:
/*  5430 */                     //                 result = True
/*  5431 */                     //                 ^
/*  5432 */                     //
/*  5433 */                     Sk.currLineNo = 145;
/*  5434 */                     Sk.currColNo = 16;
/*  5435 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5436 */                     $currLineNo = 145;
/*  5437 */                     $currColNo = 16;
/*  5438 */                     result = Sk.builtin.bool.true$;
/*  5439 */ 
/*  5440 */                     //
/*  5441 */                     // line 146:
/*  5442 */                     //                 for op, comp in zip(ops, comps):
/*  5443 */                     //                 ^
/*  5444 */                     //
/*  5445 */                     Sk.currLineNo = 146;
/*  5446 */                     Sk.currColNo = 16;
/*  5447 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5448 */                     $currLineNo = 146;
/*  5449 */                     $currColNo = 16;
/*  5450 */                     var $loadgbl307 = Sk.misceval.loadname('zip', $gbl);
/*  5451 */                     if (ops === undefined) {
/*  5452 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ops\' referenced before assignment');
/*  5453 */                     }
/*  5454 */                     if (comps === undefined) {
/*  5455 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comps\' referenced before assignment');
/*  5456 */                     }
/*  5457 */                     $ret;
/*  5458 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl307, ops, comps);
/*  5459 */                     $blk = 11; /* allowing case fallthrough */
/*  5460 */                 case 11:
/*  5461 */                     /* --- function return or resume suspension --- */
/*  5462 */                     if ($ret && $ret.$isSuspension) {
/*  5463 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 146, 32);
/*  5464 */                     }
/*  5465 */                     var $call308 = $ret;
/*  5466 */ 
/*  5467 */                     //
/*  5468 */                     // line 146:
/*  5469 */                     //                 for op, comp in zip(ops, comps):
/*  5470 */                     //                                 ^
/*  5471 */                     //
/*  5472 */                     Sk.currLineNo = 146;
/*  5473 */                     Sk.currColNo = 32;
/*  5474 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5475 */                     $currLineNo = 146;
/*  5476 */                     $currColNo = 32;
/*  5477 */                     var $iter309 = Sk.abstr.iter($call308);
/*  5478 */                     $blk = 8; /* allowing case fallthrough */
/*  5479 */                 case 8:
/*  5480 */                     /* --- for start --- */
/*  5481 */                     $ret = Sk.abstr.iternext($iter309, true);
/*  5482 */                     $blk = 12; /* allowing case fallthrough */
/*  5483 */                 case 12:
/*  5484 */                     /* --- function return or resume suspension --- */
/*  5485 */                     if ($ret && $ret.$isSuspension) {
/*  5486 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 146, 16);
/*  5487 */                     }
/*  5488 */                     var $next310 = $ret;
/*  5489 */                     if ($next310 === undefined) {
/*  5490 */                         $blk = 9;
/*  5491 */                         continue;
/*  5492 */                     }
/*  5493 */                     var $items311 = Sk.abstr.sequenceUnpack($next310, 2);
/*  5494 */                     op = $items311[0];
/*  5495 */                     comp = $items311[1];
/*  5496 */ 
/*  5497 */                     //
/*  5498 */                     // line 147:
/*  5499 */                     //                     current = eval_selector(num_i, current)
/*  5500 */                     //                     ^
/*  5501 */                     //
/*  5502 */                     Sk.currLineNo = 147;
/*  5503 */                     Sk.currColNo = 20;
/*  5504 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5505 */                     $currLineNo = 147;
/*  5506 */                     $currColNo = 20;
/*  5507 */                     if (num_i === undefined) {
/*  5508 */                         throw new Sk.builtin.UnboundLocalError('local variable \'num_i\' referenced before assignment');
/*  5509 */                     }
/*  5510 */                     if (current === undefined) {
/*  5511 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/*  5512 */                     }
/*  5513 */                     $ret;
/*  5514 */                     $ret = Sk.misceval.callsimOrSuspend($free.eval_selector, num_i, current);
/*  5515 */                     $blk = 13; /* allowing case fallthrough */
/*  5516 */                 case 13:
/*  5517 */                     /* --- function return or resume suspension --- */
/*  5518 */                     if ($ret && $ret.$isSuspension) {
/*  5519 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 147, 30);
/*  5520 */                     }
/*  5521 */                     var $call312 = $ret;
/*  5522 */ 
/*  5523 */                     //
/*  5524 */                     // line 147:
/*  5525 */                     //                     current = eval_selector(num_i, current)
/*  5526 */                     //                               ^
/*  5527 */                     //
/*  5528 */                     Sk.currLineNo = 147;
/*  5529 */                     Sk.currColNo = 30;
/*  5530 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5531 */                     $currLineNo = 147;
/*  5532 */                     $currColNo = 30;
/*  5533 */                     current = $call312;
/*  5534 */ 
/*  5535 */                     //
/*  5536 */                     // line 148:
/*  5537 */                     //                     comp_p = eval_selector(num_i, comp)
/*  5538 */                     //                     ^
/*  5539 */                     //
/*  5540 */                     Sk.currLineNo = 148;
/*  5541 */                     Sk.currColNo = 20;
/*  5542 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5543 */                     $currLineNo = 148;
/*  5544 */                     $currColNo = 20;
/*  5545 */                     if (num_i === undefined) {
/*  5546 */                         throw new Sk.builtin.UnboundLocalError('local variable \'num_i\' referenced before assignment');
/*  5547 */                     }
/*  5548 */                     if (comp === undefined) {
/*  5549 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp\' referenced before assignment');
/*  5550 */                     }
/*  5551 */                     $ret;
/*  5552 */                     $ret = Sk.misceval.callsimOrSuspend($free.eval_selector, num_i, comp);
/*  5553 */                     $blk = 14; /* allowing case fallthrough */
/*  5554 */                 case 14:
/*  5555 */                     /* --- function return or resume suspension --- */
/*  5556 */                     if ($ret && $ret.$isSuspension) {
/*  5557 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 148, 29);
/*  5558 */                     }
/*  5559 */                     var $call313 = $ret;
/*  5560 */ 
/*  5561 */                     //
/*  5562 */                     // line 148:
/*  5563 */                     //                     comp_p = eval_selector(num_i, comp)
/*  5564 */                     //                              ^
/*  5565 */                     //
/*  5566 */                     Sk.currLineNo = 148;
/*  5567 */                     Sk.currColNo = 29;
/*  5568 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5569 */                     $currLineNo = 148;
/*  5570 */                     $currColNo = 29;
/*  5571 */                     comp_p = $call313;
/*  5572 */ 
/*  5573 */                     //
/*  5574 */                     // line 150:
/*  5575 */                     //                     res = {
/*  5576 */                     //                     ^
/*  5577 */                     //
/*  5578 */                     Sk.currLineNo = 150;
/*  5579 */                     Sk.currColNo = 20;
/*  5580 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5581 */                     $currLineNo = 150;
/*  5582 */                     $currColNo = 20;
/*  5583 */                     if (current === undefined) {
/*  5584 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/*  5585 */                     }
/*  5586 */                     var $compareres314 = null;
/*  5587 */                     if (comp_p === undefined) {
/*  5588 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_p\' referenced before assignment');
/*  5589 */                     }
/*  5590 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(current, comp_p, 'Eq', true));
/*  5591 */                     $blk = 16; /* allowing case fallthrough */
/*  5592 */                 case 16:
/*  5593 */                     /* --- function return or resume suspension --- */
/*  5594 */                     if ($ret && $ret.$isSuspension) {
/*  5595 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 151, 30);
/*  5596 */                     }
/*  5597 */                     $compareres314 = $ret;
/*  5598 */                     var $jfalse315 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5599 */                     if ($jfalse315) { /*test failed */
/*  5600 */                         $blk = 15;
/*  5601 */                         continue;
/*  5602 */                     }
/*  5603 */                     $blk = 15; /* allowing case fallthrough */
/*  5604 */                 case 15:
/*  5605 */                     /* --- done --- */
/*  5606 */                     var $str316 = new Sk.builtins['str']('Eq');
/*  5607 */                     if (current === undefined) {
/*  5608 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/*  5609 */                     }
/*  5610 */                     var $compareres317 = null;
/*  5611 */                     if (comp_p === undefined) {
/*  5612 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_p\' referenced before assignment');
/*  5613 */                     }
/*  5614 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(current, comp_p, 'NotEq', true));
/*  5615 */                     $blk = 18; /* allowing case fallthrough */
/*  5616 */                 case 18:
/*  5617 */                     /* --- function return or resume suspension --- */
/*  5618 */                     if ($ret && $ret.$isSuspension) {
/*  5619 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 152, 33);
/*  5620 */                     }
/*  5621 */                     $compareres317 = $ret;
/*  5622 */                     var $jfalse318 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5623 */                     if ($jfalse318) { /*test failed */
/*  5624 */                         $blk = 17;
/*  5625 */                         continue;
/*  5626 */                     }
/*  5627 */                     $blk = 17; /* allowing case fallthrough */
/*  5628 */                 case 17:
/*  5629 */                     /* --- done --- */
/*  5630 */                     var $str319 = new Sk.builtins['str']('NotEq');
/*  5631 */                     if (current === undefined) {
/*  5632 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/*  5633 */                     }
/*  5634 */                     var $compareres320 = null;
/*  5635 */                     if (comp_p === undefined) {
/*  5636 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_p\' referenced before assignment');
/*  5637 */                     }
/*  5638 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(current, comp_p, 'Lt', true));
/*  5639 */                     $blk = 20; /* allowing case fallthrough */
/*  5640 */                 case 20:
/*  5641 */                     /* --- function return or resume suspension --- */
/*  5642 */                     if ($ret && $ret.$isSuspension) {
/*  5643 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 153, 30);
/*  5644 */                     }
/*  5645 */                     $compareres320 = $ret;
/*  5646 */                     var $jfalse321 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5647 */                     if ($jfalse321) { /*test failed */
/*  5648 */                         $blk = 19;
/*  5649 */                         continue;
/*  5650 */                     }
/*  5651 */                     $blk = 19; /* allowing case fallthrough */
/*  5652 */                 case 19:
/*  5653 */                     /* --- done --- */
/*  5654 */                     var $str322 = new Sk.builtins['str']('Lt');
/*  5655 */                     if (current === undefined) {
/*  5656 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/*  5657 */                     }
/*  5658 */                     var $compareres323 = null;
/*  5659 */                     if (comp_p === undefined) {
/*  5660 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_p\' referenced before assignment');
/*  5661 */                     }
/*  5662 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(current, comp_p, 'LtE', true));
/*  5663 */                     $blk = 22; /* allowing case fallthrough */
/*  5664 */                 case 22:
/*  5665 */                     /* --- function return or resume suspension --- */
/*  5666 */                     if ($ret && $ret.$isSuspension) {
/*  5667 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 154, 31);
/*  5668 */                     }
/*  5669 */                     $compareres323 = $ret;
/*  5670 */                     var $jfalse324 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5671 */                     if ($jfalse324) { /*test failed */
/*  5672 */                         $blk = 21;
/*  5673 */                         continue;
/*  5674 */                     }
/*  5675 */                     $blk = 21; /* allowing case fallthrough */
/*  5676 */                 case 21:
/*  5677 */                     /* --- done --- */
/*  5678 */                     var $str325 = new Sk.builtins['str']('LtE');
/*  5679 */                     if (current === undefined) {
/*  5680 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/*  5681 */                     }
/*  5682 */                     var $compareres326 = null;
/*  5683 */                     if (comp_p === undefined) {
/*  5684 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_p\' referenced before assignment');
/*  5685 */                     }
/*  5686 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(current, comp_p, 'Gt', true));
/*  5687 */                     $blk = 24; /* allowing case fallthrough */
/*  5688 */                 case 24:
/*  5689 */                     /* --- function return or resume suspension --- */
/*  5690 */                     if ($ret && $ret.$isSuspension) {
/*  5691 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 155, 30);
/*  5692 */                     }
/*  5693 */                     $compareres326 = $ret;
/*  5694 */                     var $jfalse327 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5695 */                     if ($jfalse327) { /*test failed */
/*  5696 */                         $blk = 23;
/*  5697 */                         continue;
/*  5698 */                     }
/*  5699 */                     $blk = 23; /* allowing case fallthrough */
/*  5700 */                 case 23:
/*  5701 */                     /* --- done --- */
/*  5702 */                     var $str328 = new Sk.builtins['str']('Gt');
/*  5703 */                     if (current === undefined) {
/*  5704 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/*  5705 */                     }
/*  5706 */                     var $compareres329 = null;
/*  5707 */                     if (comp_p === undefined) {
/*  5708 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp_p\' referenced before assignment');
/*  5709 */                     }
/*  5710 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(current, comp_p, 'GtE', true));
/*  5711 */                     $blk = 26; /* allowing case fallthrough */
/*  5712 */                 case 26:
/*  5713 */                     /* --- function return or resume suspension --- */
/*  5714 */                     if ($ret && $ret.$isSuspension) {
/*  5715 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 156, 31);
/*  5716 */                     }
/*  5717 */                     $compareres329 = $ret;
/*  5718 */                     var $jfalse330 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  5719 */                     if ($jfalse330) { /*test failed */
/*  5720 */                         $blk = 25;
/*  5721 */                         continue;
/*  5722 */                     }
/*  5723 */                     $blk = 25; /* allowing case fallthrough */
/*  5724 */                 case 25:
/*  5725 */                     /* --- done --- */
/*  5726 */                     var $str331 = new Sk.builtins['str']('GtE');
/*  5727 */                     var $loaddict332 = new Sk.builtins['dict']([$str316, $compareres314, $str319, $compareres317, $str322, $compareres320, $str325, $compareres323, $str328, $compareres326, $str331, $compareres329]);
/*  5728 */                     if (op === undefined) {
/*  5729 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op\' referenced before assignment');
/*  5730 */                     }
/*  5731 */                     $ret = Sk.abstr.objectGetItem($loaddict332, op, true);
/*  5732 */                     $blk = 27; /* allowing case fallthrough */
/*  5733 */                 case 27:
/*  5734 */                     /* --- function return or resume suspension --- */
/*  5735 */                     if ($ret && $ret.$isSuspension) {
/*  5736 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  5737 */                     }
/*  5738 */                     var $lsubscr333 = $ret;
/*  5739 */                     res = $lsubscr333;
/*  5740 */ 
/*  5741 */                     //
/*  5742 */                     // line 158:
/*  5743 */                     //                     current = comp
/*  5744 */                     //                     ^
/*  5745 */                     //
/*  5746 */                     Sk.currLineNo = 158;
/*  5747 */                     Sk.currColNo = 20;
/*  5748 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5749 */                     $currLineNo = 158;
/*  5750 */                     $currColNo = 20;
/*  5751 */                     if (comp === undefined) {
/*  5752 */                         throw new Sk.builtin.UnboundLocalError('local variable \'comp\' referenced before assignment');
/*  5753 */                     }
/*  5754 */                     current = comp;
/*  5755 */ 
/*  5756 */                     //
/*  5757 */                     // line 159:
/*  5758 */                     //                     result = result and res
/*  5759 */                     //                     ^
/*  5760 */                     //
/*  5761 */                     Sk.currLineNo = 159;
/*  5762 */                     Sk.currColNo = 20;
/*  5763 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5764 */                     $currLineNo = 159;
/*  5765 */                     $currColNo = 20;
/*  5766 */                     if (result === undefined) {
/*  5767 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*  5768 */                     }
/*  5769 */                     var $boolopsucc334 = result;
/*  5770 */                     $boolopsucc334 = result;
/*  5771 */                     var $jfalse335 = (result === false || !Sk.misceval.isTrue(result));
/*  5772 */                     if ($jfalse335) { /*test failed */
/*  5773 */                         $blk = 28;
/*  5774 */                         continue;
/*  5775 */                     }
/*  5776 */                     if (res === undefined) {
/*  5777 */                         throw new Sk.builtin.UnboundLocalError('local variable \'res\' referenced before assignment');
/*  5778 */                     }
/*  5779 */                     $boolopsucc334 = res;
/*  5780 */                     var $jfalse336 = (res === false || !Sk.misceval.isTrue(res));
/*  5781 */                     if ($jfalse336) { /*test failed */
/*  5782 */                         $blk = 28;
/*  5783 */                         continue;
/*  5784 */                     }
/*  5785 */                     $blk = 28; /* allowing case fallthrough */
/*  5786 */                 case 28:
/*  5787 */                     /* --- end of boolop --- */
/*  5788 */                     result = $boolopsucc334;
/*  5789 */ 
/*  5790 */                     //
/*  5791 */                     // line 160:
/*  5792 */                     //                     if not result:
/*  5793 */                     //                     ^
/*  5794 */                     //
/*  5795 */                     Sk.currLineNo = 160;
/*  5796 */                     Sk.currColNo = 20;
/*  5797 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5798 */                     $currLineNo = 160;
/*  5799 */                     $currColNo = 20;
/*  5800 */                     if (result === undefined) {
/*  5801 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*  5802 */                     }
/*  5803 */                     var $unaryop337 = Sk.abstr.numberUnaryOp(result, 'Not');
/*  5804 */                     var $jfalse338 = ($unaryop337 === false || !Sk.misceval.isTrue($unaryop337));
/*  5805 */                     if ($jfalse338) { /*test failed */
/*  5806 */                         $blk = 29;
/*  5807 */                         continue;
/*  5808 */                     }
/*  5809 */ 
/*  5810 */                     //
/*  5811 */                     // line 161:
/*  5812 */                     //                         break
/*  5813 */                     //                         ^
/*  5814 */                     //
/*  5815 */                     Sk.currLineNo = 161;
/*  5816 */                     Sk.currColNo = 24;
/*  5817 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5818 */                     $currLineNo = 161;
/*  5819 */                     $currColNo = 24;
/*  5820 */                     $blk = 10; /* allowing case fallthrough */
/*  5821 */                 case 10:
/*  5822 */                     /* --- for end --- */
/*  5823 */ 
/*  5824 */                     //
/*  5825 */                     // line 162:
/*  5826 */                     //                 results.append(result)
/*  5827 */                     //                 ^
/*  5828 */                     //
/*  5829 */                     Sk.currLineNo = 162;
/*  5830 */                     Sk.currColNo = 16;
/*  5831 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5832 */                     $currLineNo = 162;
/*  5833 */                     $currColNo = 16;
/*  5834 */                     if (results === undefined) {
/*  5835 */                         throw new Sk.builtin.UnboundLocalError('local variable \'results\' referenced before assignment');
/*  5836 */                     }
/*  5837 */                     $ret = Sk.abstr.gattr(results, 'append', true);
/*  5838 */                     $blk = 30; /* allowing case fallthrough */
/*  5839 */                 case 30:
/*  5840 */                     /* --- function return or resume suspension --- */
/*  5841 */                     if ($ret && $ret.$isSuspension) {
/*  5842 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 162, 16);
/*  5843 */                     }
/*  5844 */                     var $lattr339 = $ret;
/*  5845 */                     if (result === undefined) {
/*  5846 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result\' referenced before assignment');
/*  5847 */                     }
/*  5848 */                     $ret;
/*  5849 */                     $ret = Sk.misceval.callsimOrSuspend($lattr339, result);
/*  5850 */                     $blk = 31; /* allowing case fallthrough */
/*  5851 */                 case 31:
/*  5852 */                     /* --- function return or resume suspension --- */
/*  5853 */                     if ($ret && $ret.$isSuspension) {
/*  5854 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 162, 16);
/*  5855 */                     }
/*  5856 */                     var $call340 = $ret;
/*  5857 */ 
/*  5858 */                     //
/*  5859 */                     // line 162:
/*  5860 */                     //                 results.append(result)
/*  5861 */                     //                 ^
/*  5862 */                     //
/*  5863 */                     Sk.currLineNo = 162;
/*  5864 */                     Sk.currColNo = 16;
/*  5865 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5866 */                     $currLineNo = 162;
/*  5867 */                     $currColNo = 16;
/*  5868 */ 
/*  5869 */ 
/*  5870 */                     //
/*  5871 */                     // line 163:
/*  5872 */                     //                 current = left
/*  5873 */                     //                 ^
/*  5874 */                     //
/*  5875 */                     Sk.currLineNo = 163;
/*  5876 */                     Sk.currColNo = 16;
/*  5877 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5878 */                     $currLineNo = 163;
/*  5879 */                     $currColNo = 16;
/*  5880 */                     if (left === undefined) {
/*  5881 */                         throw new Sk.builtin.UnboundLocalError('local variable \'left\' referenced before assignment');
/*  5882 */                     }
/*  5883 */                     current = left;
/*  5884 */                     $blk = 4; /* jump */
/*  5885 */                     continue;
/*  5886 */                 case 5:
/*  5887 */                     /* --- for cleanup --- */
/*  5888 */                     $blk = 6; /* allowing case fallthrough */
/*  5889 */                 case 6:
/*  5890 */                     /* --- for end --- */
/*  5891 */ 
/*  5892 */                     //
/*  5893 */                     // line 164:
/*  5894 */                     //             return results
/*  5895 */                     //             ^
/*  5896 */                     //
/*  5897 */                     Sk.currLineNo = 164;
/*  5898 */                     Sk.currColNo = 12;
/*  5899 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  5900 */                     $currLineNo = 164;
/*  5901 */                     $currColNo = 12;
/*  5902 */                     if (results === undefined) {
/*  5903 */                         throw new Sk.builtin.UnboundLocalError('local variable \'results\' referenced before assignment');
/*  5904 */                     }
/*  5905 */                     return results;
/*  5906 */                     return Sk.builtin.none.none$;
/*  5907 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  5908 */                 case 9:
/*  5909 */                     /* --- for cleanup --- */
/*  5910 */                     $blk = 10; /* jump */
/*  5911 */                     continue;
/*  5912 */                 case 29:
/*  5913 */                     /* --- end of if --- */
/*  5914 */                     $blk = 8; /* jump */
/*  5915 */                     continue;
/*  5916 */                 }
/*  5917 */             } catch (err) {
/*  5918 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  5919 */                     Sk.execStart = Date.now()
/*  5920 */                 }
/*  5921 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5922 */                     err = new Sk.builtin.ExternalError(err);
/*  5923 */                 }
/*  5924 */                 err.traceback.push({
/*  5925 */                     lineno: $currLineNo,
/*  5926 */                     colno: $currColNo,
/*  5927 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  5928 */                 });
/*  5929 */                 if ($exc.length > 0) {
/*  5930 */                     $err = err;
/*  5931 */                     Sk.err = $err;
/*  5932 */                     $blk = $exc.pop();
/*  5933 */                     continue;
/*  5934 */                 } else {
/*  5935 */                     throw err;
/*  5936 */                 }
/*  5937 */             }
/*  5938 */         }
/*  5939 */     });
/*  5940 */     var $scope342 = (function $eval_boolop343$(num_list, boolop_ast, $free) {
/*  5941 */         // has free
/*  5942 */         var boolop, is_and, new_result, result1, result2, results, results_c, value, values; /* locals */
/*  5943 */         var boolop, boolop, boolop_ast, boolop_ast, boolop_ast, is_and, is_and, new_result, new_result, new_result, new_result, num_list, num_list, num_list, result1, result1, result1, result2, result2, result2, results, results, results, results, results_c, results_c, results_c, results_c, results_c, results_c, value, value, value, value, values, values, $free, $compareres346, $str347, $iter349, $iter349, $lattr351, $compareres352, $str353, $compareres358, $loadgbl362, $iter364, $loadgbl362, $call363, $iter364, $lattr368, $boolopsucc369, $jfalse370, $jfalse371, $lattr373, $boolopsucc374, $jtrue375, $jtrue376;
/*  5944 */         var $wakeFromSuspension = function() {
/*  5945 */             var susp = $scope342.$wakingSuspension;
/*  5946 */             delete $scope342.$wakingSuspension;
/*  5947 */             $blk = susp.$blk;
/*  5948 */             $loc = susp.$loc;
/*  5949 */             $gbl = susp.$gbl;
/*  5950 */             $exc = susp.$exc;
/*  5951 */             $err = susp.$err;
/*  5952 */             Sk.err = $err;
/*  5953 */             $postfinally = susp.$postfinally;
/*  5954 */             $currLineNo = susp.$lineno;
/*  5955 */             $currColNo = susp.$colno;
/*  5956 */             Sk.lastYield = Date.now();
/*  5957 */             boolop = susp.$tmps.boolop;
/*  5958 */             boolop_ast = susp.$tmps.boolop_ast;
/*  5959 */             is_and = susp.$tmps.is_and;
/*  5960 */             new_result = susp.$tmps.new_result;
/*  5961 */             num_list = susp.$tmps.num_list;
/*  5962 */             result1 = susp.$tmps.result1;
/*  5963 */             result2 = susp.$tmps.result2;
/*  5964 */             results = susp.$tmps.results;
/*  5965 */             results_c = susp.$tmps.results_c;
/*  5966 */             value = susp.$tmps.value;
/*  5967 */             values = susp.$tmps.values;
/*  5968 */             $free = susp.$tmps.$free;
/*  5969 */             $compareres346 = susp.$tmps.$compareres346;
/*  5970 */             $str347 = susp.$tmps.$str347;
/*  5971 */             $iter349 = susp.$tmps.$iter349;
/*  5972 */             $lattr351 = susp.$tmps.$lattr351;
/*  5973 */             $compareres352 = susp.$tmps.$compareres352;
/*  5974 */             $str353 = susp.$tmps.$str353;
/*  5975 */             $compareres358 = susp.$tmps.$compareres358;
/*  5976 */             $loadgbl362 = susp.$tmps.$loadgbl362;
/*  5977 */             $iter364 = susp.$tmps.$iter364;
/*  5978 */             $call363 = susp.$tmps.$call363;
/*  5979 */             $lattr368 = susp.$tmps.$lattr368;
/*  5980 */             $boolopsucc369 = susp.$tmps.$boolopsucc369;
/*  5981 */             $jfalse370 = susp.$tmps.$jfalse370;
/*  5982 */             $jfalse371 = susp.$tmps.$jfalse371;
/*  5983 */             $lattr373 = susp.$tmps.$lattr373;
/*  5984 */             $boolopsucc374 = susp.$tmps.$boolopsucc374;
/*  5985 */             $jtrue375 = susp.$tmps.$jtrue375;
/*  5986 */             $jtrue376 = susp.$tmps.$jtrue376;
/*  5987 */             try {
/*  5988 */                 $ret = susp.child.resume();
/*  5989 */             } catch (err) {
/*  5990 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  5991 */                     Sk.execStart = Date.now()
/*  5992 */                 }
/*  5993 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  5994 */                     err = new Sk.builtin.ExternalError(err);
/*  5995 */                 }
/*  5996 */                 err.traceback.push({
/*  5997 */                     lineno: $currLineNo,
/*  5998 */                     colno: $currColNo,
/*  5999 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  6000 */                 });
/*  6001 */                 if ($exc.length > 0) {
/*  6002 */                     $err = err;
/*  6003 */                     Sk.err = $err;
/*  6004 */                     $blk = $exc.pop();
/*  6005 */                 } else {
/*  6006 */                     throw err;
/*  6007 */                 }
/*  6008 */             }
/*  6009 */         };
/*  6010 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6011 */             var susp = new Sk.misceval.Suspension();
/*  6012 */             susp.child = $child;
/*  6013 */             susp.resume = function() {
/*  6014 */                 $scope342.$wakingSuspension = susp;
/*  6015 */                 return $scope342();
/*  6016 */             };
/*  6017 */             susp.data = susp.child.data;
/*  6018 */             susp.$blk = $blk;
/*  6019 */             susp.$loc = $loc;
/*  6020 */             susp.$gbl = $gbl;
/*  6021 */             susp.$exc = $exc;
/*  6022 */             susp.$err = $err;
/*  6023 */             susp.$postfinally = $postfinally;
/*  6024 */             susp.$filename = $filename;
/*  6025 */             susp.$lineno = $lineno;
/*  6026 */             susp.$colno = $colno;
/*  6027 */             susp.optional = susp.child.optional;
/*  6028 */             susp.$tmps = {
/*  6029 */                 "boolop": boolop,
/*  6030 */                 "boolop_ast": boolop_ast,
/*  6031 */                 "is_and": is_and,
/*  6032 */                 "new_result": new_result,
/*  6033 */                 "num_list": num_list,
/*  6034 */                 "result1": result1,
/*  6035 */                 "result2": result2,
/*  6036 */                 "results": results,
/*  6037 */                 "results_c": results_c,
/*  6038 */                 "value": value,
/*  6039 */                 "values": values,
/*  6040 */                 "$free": $free,
/*  6041 */                 "$compareres346": $compareres346,
/*  6042 */                 "$str347": $str347,
/*  6043 */                 "$iter349": $iter349,
/*  6044 */                 "$lattr351": $lattr351,
/*  6045 */                 "$compareres352": $compareres352,
/*  6046 */                 "$str353": $str353,
/*  6047 */                 "$compareres358": $compareres358,
/*  6048 */                 "$loadgbl362": $loadgbl362,
/*  6049 */                 "$iter364": $iter364,
/*  6050 */                 "$call363": $call363,
/*  6051 */                 "$lattr368": $lattr368,
/*  6052 */                 "$boolopsucc369": $boolopsucc369,
/*  6053 */                 "$jfalse370": $jfalse370,
/*  6054 */                 "$jfalse371": $jfalse371,
/*  6055 */                 "$lattr373": $lattr373,
/*  6056 */                 "$boolopsucc374": $boolopsucc374,
/*  6057 */                 "$jtrue375": $jtrue375,
/*  6058 */                 "$jtrue376": $jtrue376
/*  6059 */             };
/*  6060 */             return susp;
/*  6061 */         };
/*  6062 */         var $blk = 0,
/*  6063 */             $exc = [],
/*  6064 */             $loc = {},
/*  6065 */             $gbl = this,
/*  6066 */             $err = undefined,
/*  6067 */             $ret = undefined,
/*  6068 */             $postfinally = undefined,
/*  6069 */             $currLineNo = undefined,
/*  6070 */             $currColNo = undefined;
/*  6071 */         Sk.err = $err;
/*  6072 */         if (typeof Sk.execStart === 'undefined') {
/*  6073 */             Sk.execStart = Date.now()
/*  6074 */         }
/*  6075 */         if (typeof Sk.lastYield === 'undefined') {
/*  6076 */             Sk.lastYield = Date.now()
/*  6077 */         }
/*  6078 */         if ($scope342.$wakingSuspension !== undefined) {
/*  6079 */             $wakeFromSuspension();
/*  6080 */         } else {
/*  6081 */             Sk.builtin.pyCheckArgs("eval_boolop", arguments, 2, 2, false, true);
/*  6082 */         }
/*  6083 */         while (true) {
/*  6084 */             try {
/*  6085 */                 var $dateNow = Date.now();
/*  6086 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  6087 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  6088 */                 }
/*  6089 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  6090 */                     var $susp = $saveSuspension({
/*  6091 */                         data: {
/*  6092 */                             type: 'Sk.yield'
/*  6093 */                         },
/*  6094 */                         resume: function() {}
/*  6095 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  6096 */                     $susp.$blk = $blk;
/*  6097 */                     $susp.optional = true;
/*  6098 */                     return $susp;
/*  6099 */                 }
/*  6100 */                 switch ($blk) {
/*  6101 */                 case 0:
/*  6102 */                     /* --- codeobj entry --- */
/*  6103 */                     if (num_list === undefined) {
/*  6104 */                         throw new Sk.builtin.UnboundLocalError('local variable \'num_list\' referenced before assignment');
/*  6105 */                     }
/*  6106 */                     if (boolop_ast === undefined) {
/*  6107 */                         throw new Sk.builtin.UnboundLocalError('local variable \'boolop_ast\' referenced before assignment');
/*  6108 */                     }
/*  6109 */ 
/*  6110 */ 
/*  6111 */                     //
/*  6112 */                     // line 167:
/*  6113 */                     //             boolop = boolop_ast.op_name
/*  6114 */                     //             ^
/*  6115 */                     //
/*  6116 */                     Sk.currLineNo = 167;
/*  6117 */                     Sk.currColNo = 12;
/*  6118 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6119 */                     $currLineNo = 167;
/*  6120 */                     $currColNo = 12;
/*  6121 */                     if (boolop_ast === undefined) {
/*  6122 */                         throw new Sk.builtin.UnboundLocalError('local variable \'boolop_ast\' referenced before assignment');
/*  6123 */                     }
/*  6124 */                     $ret = Sk.abstr.gattr(boolop_ast, 'op_name', true);
/*  6125 */                     $blk = 1; /* allowing case fallthrough */
/*  6126 */                 case 1:
/*  6127 */                     /* --- function return or resume suspension --- */
/*  6128 */                     if ($ret && $ret.$isSuspension) {
/*  6129 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 167, 21);
/*  6130 */                     }
/*  6131 */                     var $lattr344 = $ret;
/*  6132 */                     boolop = $lattr344;
/*  6133 */ 
/*  6134 */                     //
/*  6135 */                     // line 168:
/*  6136 */                     //             values = boolop_ast.values
/*  6137 */                     //             ^
/*  6138 */                     //
/*  6139 */                     Sk.currLineNo = 168;
/*  6140 */                     Sk.currColNo = 12;
/*  6141 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6142 */                     $currLineNo = 168;
/*  6143 */                     $currColNo = 12;
/*  6144 */                     if (boolop_ast === undefined) {
/*  6145 */                         throw new Sk.builtin.UnboundLocalError('local variable \'boolop_ast\' referenced before assignment');
/*  6146 */                     }
/*  6147 */                     $ret = Sk.abstr.gattr(boolop_ast, 'values', true);
/*  6148 */                     $blk = 2; /* allowing case fallthrough */
/*  6149 */                 case 2:
/*  6150 */                     /* --- function return or resume suspension --- */
/*  6151 */                     if ($ret && $ret.$isSuspension) {
/*  6152 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 168, 21);
/*  6153 */                     }
/*  6154 */                     var $lattr345 = $ret;
/*  6155 */                     values = $lattr345;
/*  6156 */ 
/*  6157 */                     //
/*  6158 */                     // line 169:
/*  6159 */                     //             results_c = None
/*  6160 */                     //             ^
/*  6161 */                     //
/*  6162 */                     Sk.currLineNo = 169;
/*  6163 */                     Sk.currColNo = 12;
/*  6164 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6165 */                     $currLineNo = 169;
/*  6166 */                     $currColNo = 12;
/*  6167 */                     results_c = Sk.builtin.none.none$;
/*  6168 */ 
/*  6169 */                     //
/*  6170 */                     // line 170:
/*  6171 */                     //             is_and = boolop == "And"
/*  6172 */                     //             ^
/*  6173 */                     //
/*  6174 */                     Sk.currLineNo = 170;
/*  6175 */                     Sk.currColNo = 12;
/*  6176 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6177 */                     $currLineNo = 170;
/*  6178 */                     $currColNo = 12;
/*  6179 */                     if (boolop === undefined) {
/*  6180 */                         throw new Sk.builtin.UnboundLocalError('local variable \'boolop\' referenced before assignment');
/*  6181 */                     }
/*  6182 */                     var $compareres346 = null;
/*  6183 */                     var $str347 = new Sk.builtins['str']('And');
/*  6184 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(boolop, $str347, 'Eq', true));
/*  6185 */                     $blk = 4; /* allowing case fallthrough */
/*  6186 */                 case 4:
/*  6187 */                     /* --- function return or resume suspension --- */
/*  6188 */                     if ($ret && $ret.$isSuspension) {
/*  6189 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 170, 21);
/*  6190 */                     }
/*  6191 */                     $compareres346 = $ret;
/*  6192 */                     var $jfalse348 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6193 */                     if ($jfalse348) { /*test failed */
/*  6194 */                         $blk = 3;
/*  6195 */                         continue;
/*  6196 */                     }
/*  6197 */                     $blk = 3; /* allowing case fallthrough */
/*  6198 */                 case 3:
/*  6199 */                     /* --- done --- */
/*  6200 */                     is_and = $compareres346;
/*  6201 */ 
/*  6202 */                     //
/*  6203 */                     // line 171:
/*  6204 */                     //             for value in values:
/*  6205 */                     //             ^
/*  6206 */                     //
/*  6207 */                     Sk.currLineNo = 171;
/*  6208 */                     Sk.currColNo = 12;
/*  6209 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6210 */                     $currLineNo = 171;
/*  6211 */                     $currColNo = 12;
/*  6212 */                     if (values === undefined) {
/*  6213 */                         throw new Sk.builtin.UnboundLocalError('local variable \'values\' referenced before assignment');
/*  6214 */                     }
/*  6215 */                     var $iter349 = Sk.abstr.iter(values);
/*  6216 */                     $blk = 5; /* allowing case fallthrough */
/*  6217 */                 case 5:
/*  6218 */                     /* --- for start --- */
/*  6219 */                     $ret = Sk.abstr.iternext($iter349, true);
/*  6220 */                     $blk = 8; /* allowing case fallthrough */
/*  6221 */                 case 8:
/*  6222 */                     /* --- function return or resume suspension --- */
/*  6223 */                     if ($ret && $ret.$isSuspension) {
/*  6224 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 171, 12);
/*  6225 */                     }
/*  6226 */                     var $next350 = $ret;
/*  6227 */                     if ($next350 === undefined) {
/*  6228 */                         $blk = 6;
/*  6229 */                         continue;
/*  6230 */                     }
/*  6231 */                     value = $next350;
/*  6232 */ 
/*  6233 */                     //
/*  6234 */                     // line 172:
/*  6235 */                     //                 if value.ast_name == "Compare":
/*  6236 */                     //                 ^
/*  6237 */                     //
/*  6238 */                     Sk.currLineNo = 172;
/*  6239 */                     Sk.currColNo = 16;
/*  6240 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6241 */                     $currLineNo = 172;
/*  6242 */                     $currColNo = 16;
/*  6243 */                     if (value === undefined) {
/*  6244 */                         throw new Sk.builtin.UnboundLocalError('local variable \'value\' referenced before assignment');
/*  6245 */                     }
/*  6246 */                     $ret = Sk.abstr.gattr(value, 'ast_name', true);
/*  6247 */                     $blk = 11; /* allowing case fallthrough */
/*  6248 */                 case 11:
/*  6249 */                     /* --- function return or resume suspension --- */
/*  6250 */                     if ($ret && $ret.$isSuspension) {
/*  6251 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 172, 19);
/*  6252 */                     }
/*  6253 */                     var $lattr351 = $ret;
/*  6254 */                     var $compareres352 = null;
/*  6255 */                     var $str353 = new Sk.builtins['str']('Compare');
/*  6256 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr351, $str353, 'Eq', true));
/*  6257 */                     $blk = 13; /* allowing case fallthrough */
/*  6258 */                 case 13:
/*  6259 */                     /* --- function return or resume suspension --- */
/*  6260 */                     if ($ret && $ret.$isSuspension) {
/*  6261 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 172, 19);
/*  6262 */                     }
/*  6263 */                     $compareres352 = $ret;
/*  6264 */                     var $jfalse354 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6265 */                     if ($jfalse354) { /*test failed */
/*  6266 */                         $blk = 12;
/*  6267 */                         continue;
/*  6268 */                     }
/*  6269 */                     $blk = 12; /* allowing case fallthrough */
/*  6270 */                 case 12:
/*  6271 */                     /* --- done --- */
/*  6272 */                     var $jfalse355 = ($compareres352 === false || !Sk.misceval.isTrue($compareres352));
/*  6273 */                     if ($jfalse355) { /*test failed */
/*  6274 */                         $blk = 10;
/*  6275 */                         continue;
/*  6276 */                     }
/*  6277 */ 
/*  6278 */                     //
/*  6279 */                     // line 173:
/*  6280 */                     //                     results = eval_bool_comp(num_list, value)
/*  6281 */                     //                     ^
/*  6282 */                     //
/*  6283 */                     Sk.currLineNo = 173;
/*  6284 */                     Sk.currColNo = 20;
/*  6285 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6286 */                     $currLineNo = 173;
/*  6287 */                     $currColNo = 20;
/*  6288 */                     if (num_list === undefined) {
/*  6289 */                         throw new Sk.builtin.UnboundLocalError('local variable \'num_list\' referenced before assignment');
/*  6290 */                     }
/*  6291 */                     if (value === undefined) {
/*  6292 */                         throw new Sk.builtin.UnboundLocalError('local variable \'value\' referenced before assignment');
/*  6293 */                     }
/*  6294 */                     $ret;
/*  6295 */                     $ret = Sk.misceval.callsimOrSuspend($free.eval_bool_comp, num_list, value);
/*  6296 */                     $blk = 14; /* allowing case fallthrough */
/*  6297 */                 case 14:
/*  6298 */                     /* --- function return or resume suspension --- */
/*  6299 */                     if ($ret && $ret.$isSuspension) {
/*  6300 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 173, 30);
/*  6301 */                     }
/*  6302 */                     var $call356 = $ret;
/*  6303 */ 
/*  6304 */                     //
/*  6305 */                     // line 173:
/*  6306 */                     //                     results = eval_bool_comp(num_list, value)
/*  6307 */                     //                               ^
/*  6308 */                     //
/*  6309 */                     Sk.currLineNo = 173;
/*  6310 */                     Sk.currColNo = 30;
/*  6311 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6312 */                     $currLineNo = 173;
/*  6313 */                     $currColNo = 30;
/*  6314 */                     results = $call356;
/*  6315 */                     $blk = 9; /* allowing case fallthrough */
/*  6316 */                 case 9:
/*  6317 */                     /* --- end of if --- */
/*  6318 */ 
/*  6319 */                     //
/*  6320 */                     // line 176:
/*  6321 */                     //                 if results_c is None:
/*  6322 */                     //                 ^
/*  6323 */                     //
/*  6324 */                     Sk.currLineNo = 176;
/*  6325 */                     Sk.currColNo = 16;
/*  6326 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6327 */                     $currLineNo = 176;
/*  6328 */                     $currColNo = 16;
/*  6329 */                     if (results_c === undefined) {
/*  6330 */                         throw new Sk.builtin.UnboundLocalError('local variable \'results_c\' referenced before assignment');
/*  6331 */                     }
/*  6332 */                     var $compareres358 = null;
/*  6333 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(results_c, Sk.builtin.none.none$, 'Is', true));
/*  6334 */                     $blk = 19; /* allowing case fallthrough */
/*  6335 */                 case 19:
/*  6336 */                     /* --- function return or resume suspension --- */
/*  6337 */                     if ($ret && $ret.$isSuspension) {
/*  6338 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 176, 19);
/*  6339 */                     }
/*  6340 */                     $compareres358 = $ret;
/*  6341 */                     var $jfalse359 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  6342 */                     if ($jfalse359) { /*test failed */
/*  6343 */                         $blk = 18;
/*  6344 */                         continue;
/*  6345 */                     }
/*  6346 */                     $blk = 18; /* allowing case fallthrough */
/*  6347 */                 case 18:
/*  6348 */                     /* --- done --- */
/*  6349 */                     var $jfalse360 = ($compareres358 === false || !Sk.misceval.isTrue($compareres358));
/*  6350 */                     if ($jfalse360) { /*test failed */
/*  6351 */                         $blk = 17;
/*  6352 */                         continue;
/*  6353 */                     }
/*  6354 */ 
/*  6355 */                     //
/*  6356 */                     // line 177:
/*  6357 */                     //                     results_c = results
/*  6358 */                     //                     ^
/*  6359 */                     //
/*  6360 */                     Sk.currLineNo = 177;
/*  6361 */                     Sk.currColNo = 20;
/*  6362 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6363 */                     $currLineNo = 177;
/*  6364 */                     $currColNo = 20;
/*  6365 */                     if (results === undefined) {
/*  6366 */                         throw new Sk.builtin.UnboundLocalError('local variable \'results\' referenced before assignment');
/*  6367 */                     }
/*  6368 */                     results_c = results;
/*  6369 */                     $blk = 16; /* allowing case fallthrough */
/*  6370 */                 case 16:
/*  6371 */                     /* --- end of if --- */
/*  6372 */                     $blk = 5; /* jump */
/*  6373 */                     continue;
/*  6374 */                 case 6:
/*  6375 */                     /* --- for cleanup --- */
/*  6376 */                     $blk = 7; /* allowing case fallthrough */
/*  6377 */                 case 7:
/*  6378 */                     /* --- for end --- */
/*  6379 */ 
/*  6380 */                     //
/*  6381 */                     // line 186:
/*  6382 */                     //             return results_c
/*  6383 */                     //             ^
/*  6384 */                     //
/*  6385 */                     Sk.currLineNo = 186;
/*  6386 */                     Sk.currColNo = 12;
/*  6387 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6388 */                     $currLineNo = 186;
/*  6389 */                     $currColNo = 12;
/*  6390 */                     if (results_c === undefined) {
/*  6391 */                         throw new Sk.builtin.UnboundLocalError('local variable \'results_c\' referenced before assignment');
/*  6392 */                     }
/*  6393 */                     return results_c;
/*  6394 */                     return Sk.builtin.none.none$;
/*  6395 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  6396 */                 case 10:
/*  6397 */                     /* --- next branch of if --- */
/*  6398 */ 
/*  6399 */                     //
/*  6400 */                     // line 175:
/*  6401 */                     //                     results = eval_boolop(num_list, value)
/*  6402 */                     //                     ^
/*  6403 */                     //
/*  6404 */                     Sk.currLineNo = 175;
/*  6405 */                     Sk.currColNo = 20;
/*  6406 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6407 */                     $currLineNo = 175;
/*  6408 */                     $currColNo = 20;
/*  6409 */                     if (num_list === undefined) {
/*  6410 */                         throw new Sk.builtin.UnboundLocalError('local variable \'num_list\' referenced before assignment');
/*  6411 */                     }
/*  6412 */                     if (value === undefined) {
/*  6413 */                         throw new Sk.builtin.UnboundLocalError('local variable \'value\' referenced before assignment');
/*  6414 */                     }
/*  6415 */                     $ret;
/*  6416 */                     $ret = Sk.misceval.callsimOrSuspend($free.eval_boolop, num_list, value);
/*  6417 */                     $blk = 15; /* allowing case fallthrough */
/*  6418 */                 case 15:
/*  6419 */                     /* --- function return or resume suspension --- */
/*  6420 */                     if ($ret && $ret.$isSuspension) {
/*  6421 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 175, 30);
/*  6422 */                     }
/*  6423 */                     var $call357 = $ret;
/*  6424 */ 
/*  6425 */                     //
/*  6426 */                     // line 175:
/*  6427 */                     //                     results = eval_boolop(num_list, value)
/*  6428 */                     //                               ^
/*  6429 */                     //
/*  6430 */                     Sk.currLineNo = 175;
/*  6431 */                     Sk.currColNo = 30;
/*  6432 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6433 */                     $currLineNo = 175;
/*  6434 */                     $currColNo = 30;
/*  6435 */                     results = $call357;
/*  6436 */                     $blk = 9; /* jump */
/*  6437 */                     continue;
/*  6438 */                 case 17:
/*  6439 */                     /* --- next branch of if --- */
/*  6440 */ 
/*  6441 */                     //
/*  6442 */                     // line 179:
/*  6443 */                     //                     new_result = []
/*  6444 */                     //                     ^
/*  6445 */                     //
/*  6446 */                     Sk.currLineNo = 179;
/*  6447 */                     Sk.currColNo = 20;
/*  6448 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6449 */                     $currLineNo = 179;
/*  6450 */                     $currColNo = 20;
/*  6451 */                     var $loadlist361 = new Sk.builtins['list']([]);
/*  6452 */                     new_result = $loadlist361;
/*  6453 */ 
/*  6454 */                     //
/*  6455 */                     // line 180:
/*  6456 */                     //                     for result1, result2 in zip(results_c, results):
/*  6457 */                     //                     ^
/*  6458 */                     //
/*  6459 */                     Sk.currLineNo = 180;
/*  6460 */                     Sk.currColNo = 20;
/*  6461 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6462 */                     $currLineNo = 180;
/*  6463 */                     $currColNo = 20;
/*  6464 */                     var $loadgbl362 = Sk.misceval.loadname('zip', $gbl);
/*  6465 */                     if (results_c === undefined) {
/*  6466 */                         throw new Sk.builtin.UnboundLocalError('local variable \'results_c\' referenced before assignment');
/*  6467 */                     }
/*  6468 */                     if (results === undefined) {
/*  6469 */                         throw new Sk.builtin.UnboundLocalError('local variable \'results\' referenced before assignment');
/*  6470 */                     }
/*  6471 */                     $ret;
/*  6472 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl362, results_c, results);
/*  6473 */                     $blk = 23; /* allowing case fallthrough */
/*  6474 */                 case 23:
/*  6475 */                     /* --- function return or resume suspension --- */
/*  6476 */                     if ($ret && $ret.$isSuspension) {
/*  6477 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 180, 44);
/*  6478 */                     }
/*  6479 */                     var $call363 = $ret;
/*  6480 */ 
/*  6481 */                     //
/*  6482 */                     // line 180:
/*  6483 */                     //                     for result1, result2 in zip(results_c, results):
/*  6484 */                     //                                             ^
/*  6485 */                     //
/*  6486 */                     Sk.currLineNo = 180;
/*  6487 */                     Sk.currColNo = 44;
/*  6488 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6489 */                     $currLineNo = 180;
/*  6490 */                     $currColNo = 44;
/*  6491 */                     var $iter364 = Sk.abstr.iter($call363);
/*  6492 */                     $blk = 20; /* allowing case fallthrough */
/*  6493 */                 case 20:
/*  6494 */                     /* --- for start --- */
/*  6495 */                     $ret = Sk.abstr.iternext($iter364, true);
/*  6496 */                     $blk = 24; /* allowing case fallthrough */
/*  6497 */                 case 24:
/*  6498 */                     /* --- function return or resume suspension --- */
/*  6499 */                     if ($ret && $ret.$isSuspension) {
/*  6500 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 180, 20);
/*  6501 */                     }
/*  6502 */                     var $next365 = $ret;
/*  6503 */                     if ($next365 === undefined) {
/*  6504 */                         $blk = 21;
/*  6505 */                         continue;
/*  6506 */                     }
/*  6507 */                     var $items366 = Sk.abstr.sequenceUnpack($next365, 2);
/*  6508 */                     result1 = $items366[0];
/*  6509 */                     result2 = $items366[1];
/*  6510 */ 
/*  6511 */                     //
/*  6512 */                     // line 181:
/*  6513 */                     //                         if is_and:
/*  6514 */                     //                         ^
/*  6515 */                     //
/*  6516 */                     Sk.currLineNo = 181;
/*  6517 */                     Sk.currColNo = 24;
/*  6518 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6519 */                     $currLineNo = 181;
/*  6520 */                     $currColNo = 24;
/*  6521 */                     if (is_and === undefined) {
/*  6522 */                         throw new Sk.builtin.UnboundLocalError('local variable \'is_and\' referenced before assignment');
/*  6523 */                     }
/*  6524 */                     var $jfalse367 = (is_and === false || !Sk.misceval.isTrue(is_and));
/*  6525 */                     if ($jfalse367) { /*test failed */
/*  6526 */                         $blk = 26;
/*  6527 */                         continue;
/*  6528 */                     }
/*  6529 */ 
/*  6530 */                     //
/*  6531 */                     // line 182:
/*  6532 */                     //                             new_result.append(result1 and result2)
/*  6533 */                     //                             ^
/*  6534 */                     //
/*  6535 */                     Sk.currLineNo = 182;
/*  6536 */                     Sk.currColNo = 28;
/*  6537 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6538 */                     $currLineNo = 182;
/*  6539 */                     $currColNo = 28;
/*  6540 */                     if (new_result === undefined) {
/*  6541 */                         throw new Sk.builtin.UnboundLocalError('local variable \'new_result\' referenced before assignment');
/*  6542 */                     }
/*  6543 */                     $ret = Sk.abstr.gattr(new_result, 'append', true);
/*  6544 */                     $blk = 27; /* allowing case fallthrough */
/*  6545 */                 case 27:
/*  6546 */                     /* --- function return or resume suspension --- */
/*  6547 */                     if ($ret && $ret.$isSuspension) {
/*  6548 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 182, 28);
/*  6549 */                     }
/*  6550 */                     var $lattr368 = $ret;
/*  6551 */                     if (result1 === undefined) {
/*  6552 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result1\' referenced before assignment');
/*  6553 */                     }
/*  6554 */                     var $boolopsucc369 = result1;
/*  6555 */                     $boolopsucc369 = result1;
/*  6556 */                     var $jfalse370 = (result1 === false || !Sk.misceval.isTrue(result1));
/*  6557 */                     if ($jfalse370) { /*test failed */
/*  6558 */                         $blk = 28;
/*  6559 */                         continue;
/*  6560 */                     }
/*  6561 */                     if (result2 === undefined) {
/*  6562 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result2\' referenced before assignment');
/*  6563 */                     }
/*  6564 */                     $boolopsucc369 = result2;
/*  6565 */                     var $jfalse371 = (result2 === false || !Sk.misceval.isTrue(result2));
/*  6566 */                     if ($jfalse371) { /*test failed */
/*  6567 */                         $blk = 28;
/*  6568 */                         continue;
/*  6569 */                     }
/*  6570 */                     $blk = 28; /* allowing case fallthrough */
/*  6571 */                 case 28:
/*  6572 */                     /* --- end of boolop --- */
/*  6573 */                     $ret;
/*  6574 */                     $ret = Sk.misceval.callsimOrSuspend($lattr368, $boolopsucc369);
/*  6575 */                     $blk = 29; /* allowing case fallthrough */
/*  6576 */                 case 29:
/*  6577 */                     /* --- function return or resume suspension --- */
/*  6578 */                     if ($ret && $ret.$isSuspension) {
/*  6579 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 182, 28);
/*  6580 */                     }
/*  6581 */                     var $call372 = $ret;
/*  6582 */ 
/*  6583 */                     //
/*  6584 */                     // line 182:
/*  6585 */                     //                             new_result.append(result1 and result2)
/*  6586 */                     //                             ^
/*  6587 */                     //
/*  6588 */                     Sk.currLineNo = 182;
/*  6589 */                     Sk.currColNo = 28;
/*  6590 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6591 */                     $currLineNo = 182;
/*  6592 */                     $currColNo = 28;
/*  6593 */                     $blk = 25; /* allowing case fallthrough */
/*  6594 */                 case 25:
/*  6595 */                     /* --- end of if --- */
/*  6596 */                     $blk = 20; /* jump */
/*  6597 */                     continue;
/*  6598 */                 case 21:
/*  6599 */                     /* --- for cleanup --- */
/*  6600 */                     $blk = 22; /* allowing case fallthrough */
/*  6601 */                 case 22:
/*  6602 */                     /* --- for end --- */
/*  6603 */ 
/*  6604 */                     //
/*  6605 */                     // line 185:
/*  6606 */                     //                     results_c = new_result
/*  6607 */                     //                     ^
/*  6608 */                     //
/*  6609 */                     Sk.currLineNo = 185;
/*  6610 */                     Sk.currColNo = 20;
/*  6611 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6612 */                     $currLineNo = 185;
/*  6613 */                     $currColNo = 20;
/*  6614 */                     if (new_result === undefined) {
/*  6615 */                         throw new Sk.builtin.UnboundLocalError('local variable \'new_result\' referenced before assignment');
/*  6616 */                     }
/*  6617 */                     results_c = new_result;
/*  6618 */                     $blk = 16; /* jump */
/*  6619 */                     continue;
/*  6620 */                 case 26:
/*  6621 */                     /* --- next branch of if --- */
/*  6622 */ 
/*  6623 */                     //
/*  6624 */                     // line 184:
/*  6625 */                     //                             new_result.append(result1 or result2)
/*  6626 */                     //                             ^
/*  6627 */                     //
/*  6628 */                     Sk.currLineNo = 184;
/*  6629 */                     Sk.currColNo = 28;
/*  6630 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6631 */                     $currLineNo = 184;
/*  6632 */                     $currColNo = 28;
/*  6633 */                     if (new_result === undefined) {
/*  6634 */                         throw new Sk.builtin.UnboundLocalError('local variable \'new_result\' referenced before assignment');
/*  6635 */                     }
/*  6636 */                     $ret = Sk.abstr.gattr(new_result, 'append', true);
/*  6637 */                     $blk = 30; /* allowing case fallthrough */
/*  6638 */                 case 30:
/*  6639 */                     /* --- function return or resume suspension --- */
/*  6640 */                     if ($ret && $ret.$isSuspension) {
/*  6641 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 184, 28);
/*  6642 */                     }
/*  6643 */                     var $lattr373 = $ret;
/*  6644 */                     if (result1 === undefined) {
/*  6645 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result1\' referenced before assignment');
/*  6646 */                     }
/*  6647 */                     var $boolopsucc374 = result1;
/*  6648 */                     $boolopsucc374 = result1;
/*  6649 */                     var $jtrue375 = (result1 === true || Sk.misceval.isTrue(result1));
/*  6650 */                     if ($jtrue375) { /*test passed */
/*  6651 */                         $blk = 31;
/*  6652 */                         continue;
/*  6653 */                     }
/*  6654 */                     if (result2 === undefined) {
/*  6655 */                         throw new Sk.builtin.UnboundLocalError('local variable \'result2\' referenced before assignment');
/*  6656 */                     }
/*  6657 */                     $boolopsucc374 = result2;
/*  6658 */                     var $jtrue376 = (result2 === true || Sk.misceval.isTrue(result2));
/*  6659 */                     if ($jtrue376) { /*test passed */
/*  6660 */                         $blk = 31;
/*  6661 */                         continue;
/*  6662 */                     }
/*  6663 */                     $blk = 31; /* allowing case fallthrough */
/*  6664 */                 case 31:
/*  6665 */                     /* --- end of boolop --- */
/*  6666 */                     $ret;
/*  6667 */                     $ret = Sk.misceval.callsimOrSuspend($lattr373, $boolopsucc374);
/*  6668 */                     $blk = 32; /* allowing case fallthrough */
/*  6669 */                 case 32:
/*  6670 */                     /* --- function return or resume suspension --- */
/*  6671 */                     if ($ret && $ret.$isSuspension) {
/*  6672 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 184, 28);
/*  6673 */                     }
/*  6674 */                     var $call377 = $ret;
/*  6675 */ 
/*  6676 */                     //
/*  6677 */                     // line 184:
/*  6678 */                     //                             new_result.append(result1 or result2)
/*  6679 */                     //                             ^
/*  6680 */                     //
/*  6681 */                     Sk.currLineNo = 184;
/*  6682 */                     Sk.currColNo = 28;
/*  6683 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6684 */                     $currLineNo = 184;
/*  6685 */                     $currColNo = 28;
/*  6686 */                     $blk = 25; /* jump */
/*  6687 */                     continue;
/*  6688 */                 }
/*  6689 */             } catch (err) {
/*  6690 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  6691 */                     Sk.execStart = Date.now()
/*  6692 */                 }
/*  6693 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6694 */                     err = new Sk.builtin.ExternalError(err);
/*  6695 */                 }
/*  6696 */                 err.traceback.push({
/*  6697 */                     lineno: $currLineNo,
/*  6698 */                     colno: $currColNo,
/*  6699 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  6700 */                 });
/*  6701 */                 if ($exc.length > 0) {
/*  6702 */                     $err = err;
/*  6703 */                     Sk.err = $err;
/*  6704 */                     $blk = $exc.pop();
/*  6705 */                     continue;
/*  6706 */                 } else {
/*  6707 */                     throw err;
/*  6708 */                 }
/*  6709 */             }
/*  6710 */         }
/*  6711 */     });
/*  6712 */     var $scope449 = (function $get_next_tree450$(self) {
/*  6713 */         var node_counter, out_of_tree, visit_counter; /* locals */
/*  6714 */         var node_counter, node_counter, node_counter, node_counter, node_counter, node_counter, node_counter, out_of_tree, out_of_tree, self, self, self, self, self, visit_counter, visit_counter, $loadgbl459, $loadgbl459, $lattr460, $loadgbl462, $str463, $loadgbl462, $str463, $lattr464, $loadgbl466, $loadgbl466, $call467, $lattr468, $lattr468, $lattr469, $lattr471, $compareres472, $loadgbl473, $lattr471, $compareres472, $loadgbl473, $lattr474, $lattr471, $compareres472, $loadgbl473, $lattr474, $call475, $lattr478, $lattr478, $lattr479;
/*  6715 */         var $wakeFromSuspension = function() {
/*  6716 */             var susp = $scope449.$wakingSuspension;
/*  6717 */             delete $scope449.$wakingSuspension;
/*  6718 */             $blk = susp.$blk;
/*  6719 */             $loc = susp.$loc;
/*  6720 */             $gbl = susp.$gbl;
/*  6721 */             $exc = susp.$exc;
/*  6722 */             $err = susp.$err;
/*  6723 */             Sk.err = $err;
/*  6724 */             $postfinally = susp.$postfinally;
/*  6725 */             $currLineNo = susp.$lineno;
/*  6726 */             $currColNo = susp.$colno;
/*  6727 */             Sk.lastYield = Date.now();
/*  6728 */             node_counter = susp.$tmps.node_counter;
/*  6729 */             out_of_tree = susp.$tmps.out_of_tree;
/*  6730 */             self = susp.$tmps.self;
/*  6731 */             visit_counter = susp.$tmps.visit_counter;
/*  6732 */             $loadgbl459 = susp.$tmps.$loadgbl459;
/*  6733 */             $lattr460 = susp.$tmps.$lattr460;
/*  6734 */             $loadgbl462 = susp.$tmps.$loadgbl462;
/*  6735 */             $str463 = susp.$tmps.$str463;
/*  6736 */             $lattr464 = susp.$tmps.$lattr464;
/*  6737 */             $loadgbl466 = susp.$tmps.$loadgbl466;
/*  6738 */             $call467 = susp.$tmps.$call467;
/*  6739 */             $lattr468 = susp.$tmps.$lattr468;
/*  6740 */             $lattr469 = susp.$tmps.$lattr469;
/*  6741 */             $lattr471 = susp.$tmps.$lattr471;
/*  6742 */             $compareres472 = susp.$tmps.$compareres472;
/*  6743 */             $loadgbl473 = susp.$tmps.$loadgbl473;
/*  6744 */             $lattr474 = susp.$tmps.$lattr474;
/*  6745 */             $call475 = susp.$tmps.$call475;
/*  6746 */             $lattr478 = susp.$tmps.$lattr478;
/*  6747 */             $lattr479 = susp.$tmps.$lattr479;
/*  6748 */             try {
/*  6749 */                 $ret = susp.child.resume();
/*  6750 */             } catch (err) {
/*  6751 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  6752 */                     Sk.execStart = Date.now()
/*  6753 */                 }
/*  6754 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  6755 */                     err = new Sk.builtin.ExternalError(err);
/*  6756 */                 }
/*  6757 */                 err.traceback.push({
/*  6758 */                     lineno: $currLineNo,
/*  6759 */                     colno: $currColNo,
/*  6760 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  6761 */                 });
/*  6762 */                 if ($exc.length > 0) {
/*  6763 */                     $err = err;
/*  6764 */                     Sk.err = $err;
/*  6765 */                     $blk = $exc.pop();
/*  6766 */                 } else {
/*  6767 */                     throw err;
/*  6768 */                 }
/*  6769 */             }
/*  6770 */         };
/*  6771 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  6772 */             var susp = new Sk.misceval.Suspension();
/*  6773 */             susp.child = $child;
/*  6774 */             susp.resume = function() {
/*  6775 */                 $scope449.$wakingSuspension = susp;
/*  6776 */                 return $scope449();
/*  6777 */             };
/*  6778 */             susp.data = susp.child.data;
/*  6779 */             susp.$blk = $blk;
/*  6780 */             susp.$loc = $loc;
/*  6781 */             susp.$gbl = $gbl;
/*  6782 */             susp.$exc = $exc;
/*  6783 */             susp.$err = $err;
/*  6784 */             susp.$postfinally = $postfinally;
/*  6785 */             susp.$filename = $filename;
/*  6786 */             susp.$lineno = $lineno;
/*  6787 */             susp.$colno = $colno;
/*  6788 */             susp.optional = susp.child.optional;
/*  6789 */             susp.$tmps = {
/*  6790 */                 "node_counter": node_counter,
/*  6791 */                 "out_of_tree": out_of_tree,
/*  6792 */                 "self": self,
/*  6793 */                 "visit_counter": visit_counter,
/*  6794 */                 "$loadgbl459": $loadgbl459,
/*  6795 */                 "$lattr460": $lattr460,
/*  6796 */                 "$loadgbl462": $loadgbl462,
/*  6797 */                 "$str463": $str463,
/*  6798 */                 "$lattr464": $lattr464,
/*  6799 */                 "$loadgbl466": $loadgbl466,
/*  6800 */                 "$call467": $call467,
/*  6801 */                 "$lattr468": $lattr468,
/*  6802 */                 "$lattr469": $lattr469,
/*  6803 */                 "$lattr471": $lattr471,
/*  6804 */                 "$compareres472": $compareres472,
/*  6805 */                 "$loadgbl473": $loadgbl473,
/*  6806 */                 "$lattr474": $lattr474,
/*  6807 */                 "$call475": $call475,
/*  6808 */                 "$lattr478": $lattr478,
/*  6809 */                 "$lattr479": $lattr479
/*  6810 */             };
/*  6811 */             return susp;
/*  6812 */         };
/*  6813 */         var $blk = 0,
/*  6814 */             $exc = [],
/*  6815 */             $loc = {},
/*  6816 */             $gbl = this,
/*  6817 */             $err = undefined,
/*  6818 */             $ret = undefined,
/*  6819 */             $postfinally = undefined,
/*  6820 */             $currLineNo = undefined,
/*  6821 */             $currColNo = undefined;
/*  6822 */         Sk.err = $err;
/*  6823 */         if (typeof Sk.execStart === 'undefined') {
/*  6824 */             Sk.execStart = Date.now()
/*  6825 */         }
/*  6826 */         if (typeof Sk.lastYield === 'undefined') {
/*  6827 */             Sk.lastYield = Date.now()
/*  6828 */         }
/*  6829 */         if ($scope449.$wakingSuspension !== undefined) {
/*  6830 */             $wakeFromSuspension();
/*  6831 */         } else {
/*  6832 */             Sk.builtin.pyCheckArgs("get_next_tree", arguments, 1, 1, false, false);
/*  6833 */         }
/*  6834 */         while (true) {
/*  6835 */             try {
/*  6836 */                 var $dateNow = Date.now();
/*  6837 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  6838 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  6839 */                 }
/*  6840 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  6841 */                     var $susp = $saveSuspension({
/*  6842 */                         data: {
/*  6843 */                             type: 'Sk.yield'
/*  6844 */                         },
/*  6845 */                         resume: function() {}
/*  6846 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  6847 */                     $susp.$blk = $blk;
/*  6848 */                     $susp.optional = true;
/*  6849 */                     return $susp;
/*  6850 */                 }
/*  6851 */                 switch ($blk) {
/*  6852 */                 case 0:
/*  6853 */                     /* --- codeobj entry --- */
/*  6854 */                     if (self === undefined) {
/*  6855 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6856 */                     }
/*  6857 */ 
/*  6858 */ 
/*  6859 */                     //
/*  6860 */                     // line 222:
/*  6861 */                     //         """Gets the next tree in the AST
/*  6862 */                     //         ^
/*  6863 */                     //
/*  6864 */                     Sk.currLineNo = 222;
/*  6865 */                     Sk.currColNo = 8;
/*  6866 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6867 */                     $currLineNo = 222;
/*  6868 */                     $currColNo = 8;
/*  6869 */                     var $str451 = new Sk.builtins['str']('Gets the next tree in the AST\n        This method gets the next AST node that is of equal or higher level than self. Returns None if the end of the\n        tree is reached\n        TODO: Create a get sibling method.\n\n        Returns:\n            cait_node: The next tree in the AST\n\n        ');
/*  6870 */ 
/*  6871 */                     //
/*  6872 */                     // line 233:
/*  6873 */                     //         def visit_counter(self, node):
/*  6874 */                     //         ^
/*  6875 */                     //
/*  6876 */                     Sk.currLineNo = 233;
/*  6877 */                     Sk.currColNo = 8;
/*  6878 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6879 */                     $currLineNo = 233;
/*  6880 */                     $currColNo = 8;
/*  6881 */                     $scope452.co_name = new Sk.builtins['str']('visit_counter');
/*  6882 */                     $scope452.co_varnames = ['self', 'node'];
/*  6883 */                     var $funcobj458 = new Sk.builtins['function']($scope452, $gbl);
/*  6884 */                     visit_counter = $funcobj458;
/*  6885 */ 
/*  6886 */                     //
/*  6887 */                     // line 237:
/*  6888 */                     //         node_counter = ast.NodeVisitor()
/*  6889 */                     //         ^
/*  6890 */                     //
/*  6891 */                     Sk.currLineNo = 237;
/*  6892 */                     Sk.currColNo = 8;
/*  6893 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6894 */                     $currLineNo = 237;
/*  6895 */                     $currColNo = 8;
/*  6896 */                     var $loadgbl459 = Sk.misceval.loadname('ast', $gbl);
/*  6897 */                     $ret = Sk.abstr.gattr($loadgbl459, 'NodeVisitor', true);
/*  6898 */                     $blk = 1; /* allowing case fallthrough */
/*  6899 */                 case 1:
/*  6900 */                     /* --- function return or resume suspension --- */
/*  6901 */                     if ($ret && $ret.$isSuspension) {
/*  6902 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 237, 23);
/*  6903 */                     }
/*  6904 */                     var $lattr460 = $ret;
/*  6905 */                     $ret;
/*  6906 */                     $ret = Sk.misceval.callsimOrSuspend($lattr460);
/*  6907 */                     $blk = 2; /* allowing case fallthrough */
/*  6908 */                 case 2:
/*  6909 */                     /* --- function return or resume suspension --- */
/*  6910 */                     if ($ret && $ret.$isSuspension) {
/*  6911 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 237, 23);
/*  6912 */                     }
/*  6913 */                     var $call461 = $ret;
/*  6914 */ 
/*  6915 */                     //
/*  6916 */                     // line 237:
/*  6917 */                     //         node_counter = ast.NodeVisitor()
/*  6918 */                     //                        ^
/*  6919 */                     //
/*  6920 */                     Sk.currLineNo = 237;
/*  6921 */                     Sk.currColNo = 23;
/*  6922 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6923 */                     $currLineNo = 237;
/*  6924 */                     $currColNo = 23;
/*  6925 */                     node_counter = $call461;
/*  6926 */ 
/*  6927 */                     //
/*  6928 */                     // line 238:
/*  6929 */                     //         setattr(node_counter, 'counter', self.tree_id)
/*  6930 */                     //         ^
/*  6931 */                     //
/*  6932 */                     Sk.currLineNo = 238;
/*  6933 */                     Sk.currColNo = 8;
/*  6934 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6935 */                     $currLineNo = 238;
/*  6936 */                     $currColNo = 8;
/*  6937 */                     var $loadgbl462 = Sk.misceval.loadname('setattr', $gbl);
/*  6938 */                     if (node_counter === undefined) {
/*  6939 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_counter\' referenced before assignment');
/*  6940 */                     }
/*  6941 */                     var $str463 = new Sk.builtins['str']('counter');
/*  6942 */                     if (self === undefined) {
/*  6943 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  6944 */                     }
/*  6945 */                     $ret = Sk.abstr.gattr(self, 'tree_id', true);
/*  6946 */                     $blk = 3; /* allowing case fallthrough */
/*  6947 */                 case 3:
/*  6948 */                     /* --- function return or resume suspension --- */
/*  6949 */                     if ($ret && $ret.$isSuspension) {
/*  6950 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 238, 41);
/*  6951 */                     }
/*  6952 */                     var $lattr464 = $ret;
/*  6953 */                     $ret;
/*  6954 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl462, node_counter, $str463, $lattr464);
/*  6955 */                     $blk = 4; /* allowing case fallthrough */
/*  6956 */                 case 4:
/*  6957 */                     /* --- function return or resume suspension --- */
/*  6958 */                     if ($ret && $ret.$isSuspension) {
/*  6959 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 238, 8);
/*  6960 */                     }
/*  6961 */                     var $call465 = $ret;
/*  6962 */ 
/*  6963 */                     //
/*  6964 */                     // line 238:
/*  6965 */                     //         setattr(node_counter, 'counter', self.tree_id)
/*  6966 */                     //         ^
/*  6967 */                     //
/*  6968 */                     Sk.currLineNo = 238;
/*  6969 */                     Sk.currColNo = 8;
/*  6970 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6971 */                     $currLineNo = 238;
/*  6972 */                     $currColNo = 8;
/*  6973 */ 
/*  6974 */ 
/*  6975 */                     //
/*  6976 */                     // line 239:
/*  6977 */                     //         node_counter.visit = MethodType(visit_counter, node_counter)
/*  6978 */                     //         ^
/*  6979 */                     //
/*  6980 */                     Sk.currLineNo = 239;
/*  6981 */                     Sk.currColNo = 8;
/*  6982 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  6983 */                     $currLineNo = 239;
/*  6984 */                     $currColNo = 8;
/*  6985 */                     var $loadgbl466 = Sk.misceval.loadname('MethodType', $gbl);
/*  6986 */                     if (visit_counter === undefined) {
/*  6987 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visit_counter\' referenced before assignment');
/*  6988 */                     }
/*  6989 */                     if (node_counter === undefined) {
/*  6990 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_counter\' referenced before assignment');
/*  6991 */                     }
/*  6992 */                     $ret;
/*  6993 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl466, visit_counter, node_counter);
/*  6994 */                     $blk = 5; /* allowing case fallthrough */
/*  6995 */                 case 5:
/*  6996 */                     /* --- function return or resume suspension --- */
/*  6997 */                     if ($ret && $ret.$isSuspension) {
/*  6998 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 239, 29);
/*  6999 */                     }
/*  7000 */                     var $call467 = $ret;
/*  7001 */ 
/*  7002 */                     //
/*  7003 */                     // line 239:
/*  7004 */                     //         node_counter.visit = MethodType(visit_counter, node_counter)
/*  7005 */                     //                              ^
/*  7006 */                     //
/*  7007 */                     Sk.currLineNo = 239;
/*  7008 */                     Sk.currColNo = 29;
/*  7009 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7010 */                     $currLineNo = 239;
/*  7011 */                     $currColNo = 29;
/*  7012 */                     if (node_counter === undefined) {
/*  7013 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_counter\' referenced before assignment');
/*  7014 */                     }
/*  7015 */                     $ret = Sk.abstr.sattr(node_counter, 'visit', $call467, true);
/*  7016 */                     $blk = 6; /* allowing case fallthrough */
/*  7017 */                 case 6:
/*  7018 */                     /* --- function return or resume suspension --- */
/*  7019 */                     if ($ret && $ret.$isSuspension) {
/*  7020 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 239, 8);
/*  7021 */                     }
/*  7022 */ 
/*  7023 */                     //
/*  7024 */                     // line 242:
/*  7025 */                     //         node_counter.visit(self.astNode)
/*  7026 */                     //         ^
/*  7027 */                     //
/*  7028 */                     Sk.currLineNo = 242;
/*  7029 */                     Sk.currColNo = 8;
/*  7030 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7031 */                     $currLineNo = 242;
/*  7032 */                     $currColNo = 8;
/*  7033 */                     if (node_counter === undefined) {
/*  7034 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_counter\' referenced before assignment');
/*  7035 */                     }
/*  7036 */                     $ret = Sk.abstr.gattr(node_counter, 'visit', true);
/*  7037 */                     $blk = 7; /* allowing case fallthrough */
/*  7038 */                 case 7:
/*  7039 */                     /* --- function return or resume suspension --- */
/*  7040 */                     if ($ret && $ret.$isSuspension) {
/*  7041 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 242, 8);
/*  7042 */                     }
/*  7043 */                     var $lattr468 = $ret;
/*  7044 */                     if (self === undefined) {
/*  7045 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7046 */                     }
/*  7047 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/*  7048 */                     $blk = 8; /* allowing case fallthrough */
/*  7049 */                 case 8:
/*  7050 */                     /* --- function return or resume suspension --- */
/*  7051 */                     if ($ret && $ret.$isSuspension) {
/*  7052 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 242, 27);
/*  7053 */                     }
/*  7054 */                     var $lattr469 = $ret;
/*  7055 */                     $ret;
/*  7056 */                     $ret = Sk.misceval.callsimOrSuspend($lattr468, $lattr469);
/*  7057 */                     $blk = 9; /* allowing case fallthrough */
/*  7058 */                 case 9:
/*  7059 */                     /* --- function return or resume suspension --- */
/*  7060 */                     if ($ret && $ret.$isSuspension) {
/*  7061 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 242, 8);
/*  7062 */                     }
/*  7063 */                     var $call470 = $ret;
/*  7064 */ 
/*  7065 */                     //
/*  7066 */                     // line 242:
/*  7067 */                     //         node_counter.visit(self.astNode)
/*  7068 */                     //         ^
/*  7069 */                     //
/*  7070 */                     Sk.currLineNo = 242;
/*  7071 */                     Sk.currColNo = 8;
/*  7072 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7073 */                     $currLineNo = 242;
/*  7074 */                     $currColNo = 8;
/*  7075 */ 
/*  7076 */ 
/*  7077 */                     //
/*  7078 */                     // line 243:
/*  7079 */                     //         out_of_tree = node_counter.counter >= len(self.linear_tree)  # check if out of bounds
/*  7080 */                     //         ^
/*  7081 */                     //
/*  7082 */                     Sk.currLineNo = 243;
/*  7083 */                     Sk.currColNo = 8;
/*  7084 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7085 */                     $currLineNo = 243;
/*  7086 */                     $currColNo = 8;
/*  7087 */                     if (node_counter === undefined) {
/*  7088 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_counter\' referenced before assignment');
/*  7089 */                     }
/*  7090 */                     $ret = Sk.abstr.gattr(node_counter, 'counter', true);
/*  7091 */                     $blk = 10; /* allowing case fallthrough */
/*  7092 */                 case 10:
/*  7093 */                     /* --- function return or resume suspension --- */
/*  7094 */                     if ($ret && $ret.$isSuspension) {
/*  7095 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 243, 22);
/*  7096 */                     }
/*  7097 */                     var $lattr471 = $ret;
/*  7098 */                     var $compareres472 = null;
/*  7099 */                     var $loadgbl473 = Sk.misceval.loadname('len', $gbl);
/*  7100 */                     if (self === undefined) {
/*  7101 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7102 */                     }
/*  7103 */                     $ret = Sk.abstr.gattr(self, 'linear_tree', true);
/*  7104 */                     $blk = 12; /* allowing case fallthrough */
/*  7105 */                 case 12:
/*  7106 */                     /* --- function return or resume suspension --- */
/*  7107 */                     if ($ret && $ret.$isSuspension) {
/*  7108 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 243, 50);
/*  7109 */                     }
/*  7110 */                     var $lattr474 = $ret;
/*  7111 */                     $ret;
/*  7112 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl473, $lattr474);
/*  7113 */                     $blk = 13; /* allowing case fallthrough */
/*  7114 */                 case 13:
/*  7115 */                     /* --- function return or resume suspension --- */
/*  7116 */                     if ($ret && $ret.$isSuspension) {
/*  7117 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 243, 46);
/*  7118 */                     }
/*  7119 */                     var $call475 = $ret;
/*  7120 */ 
/*  7121 */                     //
/*  7122 */                     // line 243:
/*  7123 */                     //         out_of_tree = node_counter.counter >= len(self.linear_tree)  # check if out of bounds
/*  7124 */                     //                                               ^
/*  7125 */                     //
/*  7126 */                     Sk.currLineNo = 243;
/*  7127 */                     Sk.currColNo = 46;
/*  7128 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7129 */                     $currLineNo = 243;
/*  7130 */                     $currColNo = 46;
/*  7131 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr471, $call475, 'GtE', true));
/*  7132 */                     $blk = 14; /* allowing case fallthrough */
/*  7133 */                 case 14:
/*  7134 */                     /* --- function return or resume suspension --- */
/*  7135 */                     if ($ret && $ret.$isSuspension) {
/*  7136 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 243, 22);
/*  7137 */                     }
/*  7138 */                     $compareres472 = $ret;
/*  7139 */                     var $jfalse476 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  7140 */                     if ($jfalse476) { /*test failed */
/*  7141 */                         $blk = 11;
/*  7142 */                         continue;
/*  7143 */                     }
/*  7144 */                     $blk = 11; /* allowing case fallthrough */
/*  7145 */                 case 11:
/*  7146 */                     /* --- done --- */
/*  7147 */                     out_of_tree = $compareres472;
/*  7148 */ 
/*  7149 */                     //
/*  7150 */                     // line 245:
/*  7151 */                     //         if out_of_tree:
/*  7152 */                     //         ^
/*  7153 */                     //
/*  7154 */                     Sk.currLineNo = 245;
/*  7155 */                     Sk.currColNo = 8;
/*  7156 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7157 */                     $currLineNo = 245;
/*  7158 */                     $currColNo = 8;
/*  7159 */                     if (out_of_tree === undefined) {
/*  7160 */                         throw new Sk.builtin.UnboundLocalError('local variable \'out_of_tree\' referenced before assignment');
/*  7161 */                     }
/*  7162 */                     var $jfalse477 = (out_of_tree === false || !Sk.misceval.isTrue(out_of_tree));
/*  7163 */                     if ($jfalse477) { /*test failed */
/*  7164 */                         $blk = 15;
/*  7165 */                         continue;
/*  7166 */                     }
/*  7167 */ 
/*  7168 */                     //
/*  7169 */                     // line 246:
/*  7170 */                     //             return None
/*  7171 */                     //             ^
/*  7172 */                     //
/*  7173 */                     Sk.currLineNo = 246;
/*  7174 */                     Sk.currColNo = 12;
/*  7175 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7176 */                     $currLineNo = 246;
/*  7177 */                     $currColNo = 12;
/*  7178 */                     return Sk.builtin.none.none$;
/*  7179 */                     $blk = 15; /* allowing case fallthrough */
/*  7180 */                 case 15:
/*  7181 */                     /* --- end of if --- */
/*  7182 */ 
/*  7183 */                     //
/*  7184 */                     // line 247:
/*  7185 */                     //         return self.linear_tree[node_counter.counter]
/*  7186 */                     //         ^
/*  7187 */                     //
/*  7188 */                     Sk.currLineNo = 247;
/*  7189 */                     Sk.currColNo = 8;
/*  7190 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7191 */                     $currLineNo = 247;
/*  7192 */                     $currColNo = 8;
/*  7193 */                     if (self === undefined) {
/*  7194 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7195 */                     }
/*  7196 */                     $ret = Sk.abstr.gattr(self, 'linear_tree', true);
/*  7197 */                     $blk = 16; /* allowing case fallthrough */
/*  7198 */                 case 16:
/*  7199 */                     /* --- function return or resume suspension --- */
/*  7200 */                     if ($ret && $ret.$isSuspension) {
/*  7201 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 247, 15);
/*  7202 */                     }
/*  7203 */                     var $lattr478 = $ret;
/*  7204 */                     if (node_counter === undefined) {
/*  7205 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_counter\' referenced before assignment');
/*  7206 */                     }
/*  7207 */                     $ret = Sk.abstr.gattr(node_counter, 'counter', true);
/*  7208 */                     $blk = 17; /* allowing case fallthrough */
/*  7209 */                 case 17:
/*  7210 */                     /* --- function return or resume suspension --- */
/*  7211 */                     if ($ret && $ret.$isSuspension) {
/*  7212 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 247, 32);
/*  7213 */                     }
/*  7214 */                     var $lattr479 = $ret;
/*  7215 */                     $ret = Sk.abstr.objectGetItem($lattr478, $lattr479, true);
/*  7216 */                     $blk = 18; /* allowing case fallthrough */
/*  7217 */                 case 18:
/*  7218 */                     /* --- function return or resume suspension --- */
/*  7219 */                     if ($ret && $ret.$isSuspension) {
/*  7220 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  7221 */                     }
/*  7222 */                     var $lsubscr480 = $ret;
/*  7223 */                     return $lsubscr480;
/*  7224 */                     return Sk.builtin.none.none$;
/*  7225 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7226 */                 }
/*  7227 */             } catch (err) {
/*  7228 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  7229 */                     Sk.execStart = Date.now()
/*  7230 */                 }
/*  7231 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7232 */                     err = new Sk.builtin.ExternalError(err);
/*  7233 */                 }
/*  7234 */                 err.traceback.push({
/*  7235 */                     lineno: $currLineNo,
/*  7236 */                     colno: $currColNo,
/*  7237 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  7238 */                 });
/*  7239 */                 if ($exc.length > 0) {
/*  7240 */                     $err = err;
/*  7241 */                     Sk.err = $err;
/*  7242 */                     $blk = $exc.pop();
/*  7243 */                     continue;
/*  7244 */                 } else {
/*  7245 */                     throw err;
/*  7246 */                 }
/*  7247 */             }
/*  7248 */         }
/*  7249 */     });
/*  7250 */     var $scope452 = (function $visit_counter453$(self, node) {
/*  7251 */         var node, node, self, self, self, $lattr454, $inplbinopattr455, $lattr456;
/*  7252 */         var $wakeFromSuspension = function() {
/*  7253 */             var susp = $scope452.$wakingSuspension;
/*  7254 */             delete $scope452.$wakingSuspension;
/*  7255 */             $blk = susp.$blk;
/*  7256 */             $loc = susp.$loc;
/*  7257 */             $gbl = susp.$gbl;
/*  7258 */             $exc = susp.$exc;
/*  7259 */             $err = susp.$err;
/*  7260 */             Sk.err = $err;
/*  7261 */             $postfinally = susp.$postfinally;
/*  7262 */             $currLineNo = susp.$lineno;
/*  7263 */             $currColNo = susp.$colno;
/*  7264 */             Sk.lastYield = Date.now();
/*  7265 */             node = susp.$tmps.node;
/*  7266 */             self = susp.$tmps.self;
/*  7267 */             $lattr454 = susp.$tmps.$lattr454;
/*  7268 */             $inplbinopattr455 = susp.$tmps.$inplbinopattr455;
/*  7269 */             $lattr456 = susp.$tmps.$lattr456;
/*  7270 */             try {
/*  7271 */                 $ret = susp.child.resume();
/*  7272 */             } catch (err) {
/*  7273 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  7274 */                     Sk.execStart = Date.now()
/*  7275 */                 }
/*  7276 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7277 */                     err = new Sk.builtin.ExternalError(err);
/*  7278 */                 }
/*  7279 */                 err.traceback.push({
/*  7280 */                     lineno: $currLineNo,
/*  7281 */                     colno: $currColNo,
/*  7282 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  7283 */                 });
/*  7284 */                 if ($exc.length > 0) {
/*  7285 */                     $err = err;
/*  7286 */                     Sk.err = $err;
/*  7287 */                     $blk = $exc.pop();
/*  7288 */                 } else {
/*  7289 */                     throw err;
/*  7290 */                 }
/*  7291 */             }
/*  7292 */         };
/*  7293 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7294 */             var susp = new Sk.misceval.Suspension();
/*  7295 */             susp.child = $child;
/*  7296 */             susp.resume = function() {
/*  7297 */                 $scope452.$wakingSuspension = susp;
/*  7298 */                 return $scope452();
/*  7299 */             };
/*  7300 */             susp.data = susp.child.data;
/*  7301 */             susp.$blk = $blk;
/*  7302 */             susp.$loc = $loc;
/*  7303 */             susp.$gbl = $gbl;
/*  7304 */             susp.$exc = $exc;
/*  7305 */             susp.$err = $err;
/*  7306 */             susp.$postfinally = $postfinally;
/*  7307 */             susp.$filename = $filename;
/*  7308 */             susp.$lineno = $lineno;
/*  7309 */             susp.$colno = $colno;
/*  7310 */             susp.optional = susp.child.optional;
/*  7311 */             susp.$tmps = {
/*  7312 */                 "node": node,
/*  7313 */                 "self": self,
/*  7314 */                 "$lattr454": $lattr454,
/*  7315 */                 "$inplbinopattr455": $inplbinopattr455,
/*  7316 */                 "$lattr456": $lattr456
/*  7317 */             };
/*  7318 */             return susp;
/*  7319 */         };
/*  7320 */         var $blk = 0,
/*  7321 */             $exc = [],
/*  7322 */             $loc = {},
/*  7323 */             $gbl = this,
/*  7324 */             $err = undefined,
/*  7325 */             $ret = undefined,
/*  7326 */             $postfinally = undefined,
/*  7327 */             $currLineNo = undefined,
/*  7328 */             $currColNo = undefined;
/*  7329 */         Sk.err = $err;
/*  7330 */         if (typeof Sk.execStart === 'undefined') {
/*  7331 */             Sk.execStart = Date.now()
/*  7332 */         }
/*  7333 */         if (typeof Sk.lastYield === 'undefined') {
/*  7334 */             Sk.lastYield = Date.now()
/*  7335 */         }
/*  7336 */         if ($scope452.$wakingSuspension !== undefined) {
/*  7337 */             $wakeFromSuspension();
/*  7338 */         } else {
/*  7339 */             Sk.builtin.pyCheckArgs("visit_counter", arguments, 2, 2, false, false);
/*  7340 */         }
/*  7341 */         while (true) {
/*  7342 */             try {
/*  7343 */                 var $dateNow = Date.now();
/*  7344 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  7345 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  7346 */                 }
/*  7347 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  7348 */                     var $susp = $saveSuspension({
/*  7349 */                         data: {
/*  7350 */                             type: 'Sk.yield'
/*  7351 */                         },
/*  7352 */                         resume: function() {}
/*  7353 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  7354 */                     $susp.$blk = $blk;
/*  7355 */                     $susp.optional = true;
/*  7356 */                     return $susp;
/*  7357 */                 }
/*  7358 */                 switch ($blk) {
/*  7359 */                 case 0:
/*  7360 */                     /* --- codeobj entry --- */
/*  7361 */                     if (self === undefined) {
/*  7362 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7363 */                     }
/*  7364 */                     if (node === undefined) {
/*  7365 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  7366 */                     }
/*  7367 */ 
/*  7368 */ 
/*  7369 */                     //
/*  7370 */                     // line 234:
/*  7371 */                     //             self.counter += 1
/*  7372 */                     //             ^
/*  7373 */                     //
/*  7374 */                     Sk.currLineNo = 234;
/*  7375 */                     Sk.currColNo = 12;
/*  7376 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7377 */                     $currLineNo = 234;
/*  7378 */                     $currColNo = 12;
/*  7379 */                     if (self === undefined) {
/*  7380 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7381 */                     }
/*  7382 */                     $ret = Sk.abstr.gattr(self, 'counter', true);
/*  7383 */                     $blk = 1; /* allowing case fallthrough */
/*  7384 */                 case 1:
/*  7385 */                     /* --- function return or resume suspension --- */
/*  7386 */                     if ($ret && $ret.$isSuspension) {
/*  7387 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 234, 12);
/*  7388 */                     }
/*  7389 */                     var $lattr454 = $ret;
/*  7390 */                     var $inplbinopattr455 = Sk.abstr.numberInplaceBinOp($lattr454, new Sk.builtin.int_(1), 'Add');
/*  7391 */                     $ret = undefined;
/*  7392 */                     if ($inplbinopattr455 !== undefined) {
/*  7393 */                         $ret = Sk.abstr.sattr(self, 'counter', $inplbinopattr455, true);
/*  7394 */                     }
/*  7395 */                     $blk = 2; /* allowing case fallthrough */
/*  7396 */                 case 2:
/*  7397 */                     /* --- function return or resume suspension --- */
/*  7398 */                     if ($ret && $ret.$isSuspension) {
/*  7399 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 234, 12);
/*  7400 */                     }
/*  7401 */ 
/*  7402 */                     //
/*  7403 */                     // line 235:
/*  7404 */                     //             self.generic_visit(node)
/*  7405 */                     //             ^
/*  7406 */                     //
/*  7407 */                     Sk.currLineNo = 235;
/*  7408 */                     Sk.currColNo = 12;
/*  7409 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7410 */                     $currLineNo = 235;
/*  7411 */                     $currColNo = 12;
/*  7412 */                     if (self === undefined) {
/*  7413 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7414 */                     }
/*  7415 */                     $ret = Sk.abstr.gattr(self, 'generic_visit', true);
/*  7416 */                     $blk = 3; /* allowing case fallthrough */
/*  7417 */                 case 3:
/*  7418 */                     /* --- function return or resume suspension --- */
/*  7419 */                     if ($ret && $ret.$isSuspension) {
/*  7420 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 235, 12);
/*  7421 */                     }
/*  7422 */                     var $lattr456 = $ret;
/*  7423 */                     if (node === undefined) {
/*  7424 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  7425 */                     }
/*  7426 */                     $ret;
/*  7427 */                     $ret = Sk.misceval.callsimOrSuspend($lattr456, node);
/*  7428 */                     $blk = 4; /* allowing case fallthrough */
/*  7429 */                 case 4:
/*  7430 */                     /* --- function return or resume suspension --- */
/*  7431 */                     if ($ret && $ret.$isSuspension) {
/*  7432 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 235, 12);
/*  7433 */                     }
/*  7434 */                     var $call457 = $ret;
/*  7435 */ 
/*  7436 */                     //
/*  7437 */                     // line 235:
/*  7438 */                     //             self.generic_visit(node)
/*  7439 */                     //             ^
/*  7440 */                     //
/*  7441 */                     Sk.currLineNo = 235;
/*  7442 */                     Sk.currColNo = 12;
/*  7443 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7444 */                     $currLineNo = 235;
/*  7445 */                     $currColNo = 12;
/*  7446 */                     return Sk.builtin.none.none$;
/*  7447 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7448 */                 }
/*  7449 */             } catch (err) {
/*  7450 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  7451 */                     Sk.execStart = Date.now()
/*  7452 */                 }
/*  7453 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7454 */                     err = new Sk.builtin.ExternalError(err);
/*  7455 */                 }
/*  7456 */                 err.traceback.push({
/*  7457 */                     lineno: $currLineNo,
/*  7458 */                     colno: $currColNo,
/*  7459 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  7460 */                 });
/*  7461 */                 if ($exc.length > 0) {
/*  7462 */                     $err = err;
/*  7463 */                     Sk.err = $err;
/*  7464 */                     $blk = $exc.pop();
/*  7465 */                     continue;
/*  7466 */                 } else {
/*  7467 */                     throw err;
/*  7468 */                 }
/*  7469 */             }
/*  7470 */         }
/*  7471 */     });
/*  7472 */     var $scope482 = (function $get_child483$(self, node) {
/*  7473 */         var child; /* locals */
/*  7474 */         var child, child, child, node, node, node, node, node, self, self, self, $loadgbl485, $loadgbl486, $loadgbl485, $loadgbl486, $lattr487, $iter491, $lattr490, $iter491, $lattr493, $compareres494, $loadgbl497, $loadgbl498, $lattr501;
/*  7475 */         var $wakeFromSuspension = function() {
/*  7476 */             var susp = $scope482.$wakingSuspension;
/*  7477 */             delete $scope482.$wakingSuspension;
/*  7478 */             $blk = susp.$blk;
/*  7479 */             $loc = susp.$loc;
/*  7480 */             $gbl = susp.$gbl;
/*  7481 */             $exc = susp.$exc;
/*  7482 */             $err = susp.$err;
/*  7483 */             Sk.err = $err;
/*  7484 */             $postfinally = susp.$postfinally;
/*  7485 */             $currLineNo = susp.$lineno;
/*  7486 */             $currColNo = susp.$colno;
/*  7487 */             Sk.lastYield = Date.now();
/*  7488 */             child = susp.$tmps.child;
/*  7489 */             node = susp.$tmps.node;
/*  7490 */             self = susp.$tmps.self;
/*  7491 */             $loadgbl485 = susp.$tmps.$loadgbl485;
/*  7492 */             $loadgbl486 = susp.$tmps.$loadgbl486;
/*  7493 */             $lattr487 = susp.$tmps.$lattr487;
/*  7494 */             $iter491 = susp.$tmps.$iter491;
/*  7495 */             $lattr490 = susp.$tmps.$lattr490;
/*  7496 */             $lattr493 = susp.$tmps.$lattr493;
/*  7497 */             $compareres494 = susp.$tmps.$compareres494;
/*  7498 */             $loadgbl497 = susp.$tmps.$loadgbl497;
/*  7499 */             $loadgbl498 = susp.$tmps.$loadgbl498;
/*  7500 */             $lattr501 = susp.$tmps.$lattr501;
/*  7501 */             try {
/*  7502 */                 $ret = susp.child.resume();
/*  7503 */             } catch (err) {
/*  7504 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  7505 */                     Sk.execStart = Date.now()
/*  7506 */                 }
/*  7507 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7508 */                     err = new Sk.builtin.ExternalError(err);
/*  7509 */                 }
/*  7510 */                 err.traceback.push({
/*  7511 */                     lineno: $currLineNo,
/*  7512 */                     colno: $currColNo,
/*  7513 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  7514 */                 });
/*  7515 */                 if ($exc.length > 0) {
/*  7516 */                     $err = err;
/*  7517 */                     Sk.err = $err;
/*  7518 */                     $blk = $exc.pop();
/*  7519 */                 } else {
/*  7520 */                     throw err;
/*  7521 */                 }
/*  7522 */             }
/*  7523 */         };
/*  7524 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7525 */             var susp = new Sk.misceval.Suspension();
/*  7526 */             susp.child = $child;
/*  7527 */             susp.resume = function() {
/*  7528 */                 $scope482.$wakingSuspension = susp;
/*  7529 */                 return $scope482();
/*  7530 */             };
/*  7531 */             susp.data = susp.child.data;
/*  7532 */             susp.$blk = $blk;
/*  7533 */             susp.$loc = $loc;
/*  7534 */             susp.$gbl = $gbl;
/*  7535 */             susp.$exc = $exc;
/*  7536 */             susp.$err = $err;
/*  7537 */             susp.$postfinally = $postfinally;
/*  7538 */             susp.$filename = $filename;
/*  7539 */             susp.$lineno = $lineno;
/*  7540 */             susp.$colno = $colno;
/*  7541 */             susp.optional = susp.child.optional;
/*  7542 */             susp.$tmps = {
/*  7543 */                 "child": child,
/*  7544 */                 "node": node,
/*  7545 */                 "self": self,
/*  7546 */                 "$loadgbl485": $loadgbl485,
/*  7547 */                 "$loadgbl486": $loadgbl486,
/*  7548 */                 "$lattr487": $lattr487,
/*  7549 */                 "$iter491": $iter491,
/*  7550 */                 "$lattr490": $lattr490,
/*  7551 */                 "$lattr493": $lattr493,
/*  7552 */                 "$compareres494": $compareres494,
/*  7553 */                 "$loadgbl497": $loadgbl497,
/*  7554 */                 "$loadgbl498": $loadgbl498,
/*  7555 */                 "$lattr501": $lattr501
/*  7556 */             };
/*  7557 */             return susp;
/*  7558 */         };
/*  7559 */         var $blk = 0,
/*  7560 */             $exc = [],
/*  7561 */             $loc = {},
/*  7562 */             $gbl = this,
/*  7563 */             $err = undefined,
/*  7564 */             $ret = undefined,
/*  7565 */             $postfinally = undefined,
/*  7566 */             $currLineNo = undefined,
/*  7567 */             $currColNo = undefined;
/*  7568 */         Sk.err = $err;
/*  7569 */         if (typeof Sk.execStart === 'undefined') {
/*  7570 */             Sk.execStart = Date.now()
/*  7571 */         }
/*  7572 */         if (typeof Sk.lastYield === 'undefined') {
/*  7573 */             Sk.lastYield = Date.now()
/*  7574 */         }
/*  7575 */         if ($scope482.$wakingSuspension !== undefined) {
/*  7576 */             $wakeFromSuspension();
/*  7577 */         } else {
/*  7578 */             Sk.builtin.pyCheckArgs("get_child", arguments, 2, 2, false, false);
/*  7579 */         }
/*  7580 */         while (true) {
/*  7581 */             try {
/*  7582 */                 var $dateNow = Date.now();
/*  7583 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  7584 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  7585 */                 }
/*  7586 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  7587 */                     var $susp = $saveSuspension({
/*  7588 */                         data: {
/*  7589 */                             type: 'Sk.yield'
/*  7590 */                         },
/*  7591 */                         resume: function() {}
/*  7592 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  7593 */                     $susp.$blk = $blk;
/*  7594 */                     $susp.optional = true;
/*  7595 */                     return $susp;
/*  7596 */                 }
/*  7597 */                 switch ($blk) {
/*  7598 */                 case 0:
/*  7599 */                     /* --- codeobj entry --- */
/*  7600 */                     if (self === undefined) {
/*  7601 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7602 */                     }
/*  7603 */                     if (node === undefined) {
/*  7604 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  7605 */                     }
/*  7606 */ 
/*  7607 */ 
/*  7608 */                     //
/*  7609 */                     // line 250:
/*  7610 */                     //         """
/*  7611 */                     //         ^
/*  7612 */                     //
/*  7613 */                     Sk.currLineNo = 250;
/*  7614 */                     Sk.currColNo = 8;
/*  7615 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7616 */                     $currLineNo = 250;
/*  7617 */                     $currColNo = 8;
/*  7618 */                     var $str484 = new Sk.builtins['str']('\n\n        Args:\n            node: a non-CaitNode ast node\n\n        Returns:\n            cait_node: the corresponding cait_node to the child\n        ');
/*  7619 */ 
/*  7620 */                     //
/*  7621 */                     // line 258:
/*  7622 */                     //         if isinstance(node, ast.AST):
/*  7623 */                     //         ^
/*  7624 */                     //
/*  7625 */                     Sk.currLineNo = 258;
/*  7626 */                     Sk.currColNo = 8;
/*  7627 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7628 */                     $currLineNo = 258;
/*  7629 */                     $currColNo = 8;
/*  7630 */                     var $loadgbl485 = Sk.misceval.loadname('isinstance', $gbl);
/*  7631 */                     if (node === undefined) {
/*  7632 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  7633 */                     }
/*  7634 */                     var $loadgbl486 = Sk.misceval.loadname('ast', $gbl);
/*  7635 */                     $ret = Sk.abstr.gattr($loadgbl486, 'AST', true);
/*  7636 */                     $blk = 3; /* allowing case fallthrough */
/*  7637 */                 case 3:
/*  7638 */                     /* --- function return or resume suspension --- */
/*  7639 */                     if ($ret && $ret.$isSuspension) {
/*  7640 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 258, 28);
/*  7641 */                     }
/*  7642 */                     var $lattr487 = $ret;
/*  7643 */                     $ret;
/*  7644 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl485, node, $lattr487);
/*  7645 */                     $blk = 4; /* allowing case fallthrough */
/*  7646 */                 case 4:
/*  7647 */                     /* --- function return or resume suspension --- */
/*  7648 */                     if ($ret && $ret.$isSuspension) {
/*  7649 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 258, 11);
/*  7650 */                     }
/*  7651 */                     var $call488 = $ret;
/*  7652 */ 
/*  7653 */                     //
/*  7654 */                     // line 258:
/*  7655 */                     //         if isinstance(node, ast.AST):
/*  7656 */                     //            ^
/*  7657 */                     //
/*  7658 */                     Sk.currLineNo = 258;
/*  7659 */                     Sk.currColNo = 11;
/*  7660 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7661 */                     $currLineNo = 258;
/*  7662 */                     $currColNo = 11;
/*  7663 */                     var $jfalse489 = ($call488 === false || !Sk.misceval.isTrue($call488));
/*  7664 */                     if ($jfalse489) { /*test failed */
/*  7665 */                         $blk = 2;
/*  7666 */                         continue;
/*  7667 */                     }
/*  7668 */ 
/*  7669 */                     //
/*  7670 */                     // line 259:
/*  7671 */                     //             for child in self.children:
/*  7672 */                     //             ^
/*  7673 */                     //
/*  7674 */                     Sk.currLineNo = 259;
/*  7675 */                     Sk.currColNo = 12;
/*  7676 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7677 */                     $currLineNo = 259;
/*  7678 */                     $currColNo = 12;
/*  7679 */                     if (self === undefined) {
/*  7680 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7681 */                     }
/*  7682 */                     $ret = Sk.abstr.gattr(self, 'children', true);
/*  7683 */                     $blk = 8; /* allowing case fallthrough */
/*  7684 */                 case 8:
/*  7685 */                     /* --- function return or resume suspension --- */
/*  7686 */                     if ($ret && $ret.$isSuspension) {
/*  7687 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 259, 25);
/*  7688 */                     }
/*  7689 */                     var $lattr490 = $ret;
/*  7690 */                     var $iter491 = Sk.abstr.iter($lattr490);
/*  7691 */                     $blk = 5; /* allowing case fallthrough */
/*  7692 */                 case 5:
/*  7693 */                     /* --- for start --- */
/*  7694 */                     $ret = Sk.abstr.iternext($iter491, true);
/*  7695 */                     $blk = 9; /* allowing case fallthrough */
/*  7696 */                 case 9:
/*  7697 */                     /* --- function return or resume suspension --- */
/*  7698 */                     if ($ret && $ret.$isSuspension) {
/*  7699 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 259, 12);
/*  7700 */                     }
/*  7701 */                     var $next492 = $ret;
/*  7702 */                     if ($next492 === undefined) {
/*  7703 */                         $blk = 6;
/*  7704 */                         continue;
/*  7705 */                     }
/*  7706 */                     child = $next492;
/*  7707 */ 
/*  7708 */                     //
/*  7709 */                     // line 260:
/*  7710 */                     //                 if child.astNode == node:
/*  7711 */                     //                 ^
/*  7712 */                     //
/*  7713 */                     Sk.currLineNo = 260;
/*  7714 */                     Sk.currColNo = 16;
/*  7715 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7716 */                     $currLineNo = 260;
/*  7717 */                     $currColNo = 16;
/*  7718 */                     if (child === undefined) {
/*  7719 */                         throw new Sk.builtin.UnboundLocalError('local variable \'child\' referenced before assignment');
/*  7720 */                     }
/*  7721 */                     $ret = Sk.abstr.gattr(child, 'astNode', true);
/*  7722 */                     $blk = 11; /* allowing case fallthrough */
/*  7723 */                 case 11:
/*  7724 */                     /* --- function return or resume suspension --- */
/*  7725 */                     if ($ret && $ret.$isSuspension) {
/*  7726 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 260, 19);
/*  7727 */                     }
/*  7728 */                     var $lattr493 = $ret;
/*  7729 */                     var $compareres494 = null;
/*  7730 */                     if (node === undefined) {
/*  7731 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  7732 */                     }
/*  7733 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr493, node, 'Eq', true));
/*  7734 */                     $blk = 13; /* allowing case fallthrough */
/*  7735 */                 case 13:
/*  7736 */                     /* --- function return or resume suspension --- */
/*  7737 */                     if ($ret && $ret.$isSuspension) {
/*  7738 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 260, 19);
/*  7739 */                     }
/*  7740 */                     $compareres494 = $ret;
/*  7741 */                     var $jfalse495 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  7742 */                     if ($jfalse495) { /*test failed */
/*  7743 */                         $blk = 12;
/*  7744 */                         continue;
/*  7745 */                     }
/*  7746 */                     $blk = 12; /* allowing case fallthrough */
/*  7747 */                 case 12:
/*  7748 */                     /* --- done --- */
/*  7749 */                     var $jfalse496 = ($compareres494 === false || !Sk.misceval.isTrue($compareres494));
/*  7750 */                     if ($jfalse496) { /*test failed */
/*  7751 */                         $blk = 10;
/*  7752 */                         continue;
/*  7753 */                     }
/*  7754 */ 
/*  7755 */                     //
/*  7756 */                     // line 261:
/*  7757 */                     //                     return child
/*  7758 */                     //                     ^
/*  7759 */                     //
/*  7760 */                     Sk.currLineNo = 261;
/*  7761 */                     Sk.currColNo = 20;
/*  7762 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7763 */                     $currLineNo = 261;
/*  7764 */                     $currColNo = 20;
/*  7765 */                     if (child === undefined) {
/*  7766 */                         throw new Sk.builtin.UnboundLocalError('local variable \'child\' referenced before assignment');
/*  7767 */                     }
/*  7768 */                     return child;
/*  7769 */                     $blk = 10; /* allowing case fallthrough */
/*  7770 */                 case 10:
/*  7771 */                     /* --- end of if --- */
/*  7772 */                     $blk = 5; /* jump */
/*  7773 */                     continue;
/*  7774 */                 case 1:
/*  7775 */                     /* --- end of if --- */
/*  7776 */ 
/*  7777 */                     //
/*  7778 */                     // line 264:
/*  7779 */                     //         return None
/*  7780 */                     //         ^
/*  7781 */                     //
/*  7782 */                     Sk.currLineNo = 264;
/*  7783 */                     Sk.currColNo = 8;
/*  7784 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7785 */                     $currLineNo = 264;
/*  7786 */                     $currColNo = 8;
/*  7787 */                     return Sk.builtin.none.none$;
/*  7788 */                     return Sk.builtin.none.none$;
/*  7789 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  7790 */                 case 2:
/*  7791 */                     /* --- next branch of if --- */
/*  7792 */ 
/*  7793 */                     //
/*  7794 */                     // line 262:
/*  7795 */                     //         elif isinstance(node, int):
/*  7796 */                     //              ^
/*  7797 */                     //
/*  7798 */                     Sk.currLineNo = 262;
/*  7799 */                     Sk.currColNo = 13;
/*  7800 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7801 */                     $currLineNo = 262;
/*  7802 */                     $currColNo = 13;
/*  7803 */                     var $loadgbl497 = Sk.misceval.loadname('isinstance', $gbl);
/*  7804 */                     if (node === undefined) {
/*  7805 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  7806 */                     }
/*  7807 */                     var $loadgbl498 = Sk.misceval.loadname('int_$rw$', $gbl);
/*  7808 */                     $ret;
/*  7809 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl497, node, $loadgbl498);
/*  7810 */                     $blk = 15; /* allowing case fallthrough */
/*  7811 */                 case 15:
/*  7812 */                     /* --- function return or resume suspension --- */
/*  7813 */                     if ($ret && $ret.$isSuspension) {
/*  7814 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 262, 13);
/*  7815 */                     }
/*  7816 */                     var $call499 = $ret;
/*  7817 */ 
/*  7818 */                     //
/*  7819 */                     // line 262:
/*  7820 */                     //         elif isinstance(node, int):
/*  7821 */                     //              ^
/*  7822 */                     //
/*  7823 */                     Sk.currLineNo = 262;
/*  7824 */                     Sk.currColNo = 13;
/*  7825 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7826 */                     $currLineNo = 262;
/*  7827 */                     $currColNo = 13;
/*  7828 */                     var $jfalse500 = ($call499 === false || !Sk.misceval.isTrue($call499));
/*  7829 */                     if ($jfalse500) { /*test failed */
/*  7830 */                         $blk = 14;
/*  7831 */                         continue;
/*  7832 */                     }
/*  7833 */ 
/*  7834 */                     //
/*  7835 */                     // line 263:
/*  7836 */                     //             return self.children(node)
/*  7837 */                     //             ^
/*  7838 */                     //
/*  7839 */                     Sk.currLineNo = 263;
/*  7840 */                     Sk.currColNo = 12;
/*  7841 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7842 */                     $currLineNo = 263;
/*  7843 */                     $currColNo = 12;
/*  7844 */                     if (self === undefined) {
/*  7845 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  7846 */                     }
/*  7847 */                     $ret = Sk.abstr.gattr(self, 'children', true);
/*  7848 */                     $blk = 16; /* allowing case fallthrough */
/*  7849 */                 case 16:
/*  7850 */                     /* --- function return or resume suspension --- */
/*  7851 */                     if ($ret && $ret.$isSuspension) {
/*  7852 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 263, 19);
/*  7853 */                     }
/*  7854 */                     var $lattr501 = $ret;
/*  7855 */                     if (node === undefined) {
/*  7856 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  7857 */                     }
/*  7858 */                     $ret;
/*  7859 */                     $ret = Sk.misceval.callsimOrSuspend($lattr501, node);
/*  7860 */                     $blk = 17; /* allowing case fallthrough */
/*  7861 */                 case 17:
/*  7862 */                     /* --- function return or resume suspension --- */
/*  7863 */                     if ($ret && $ret.$isSuspension) {
/*  7864 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 263, 19);
/*  7865 */                     }
/*  7866 */                     var $call502 = $ret;
/*  7867 */ 
/*  7868 */                     //
/*  7869 */                     // line 263:
/*  7870 */                     //             return self.children(node)
/*  7871 */                     //                    ^
/*  7872 */                     //
/*  7873 */                     Sk.currLineNo = 263;
/*  7874 */                     Sk.currColNo = 19;
/*  7875 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  7876 */                     $currLineNo = 263;
/*  7877 */                     $currColNo = 19;
/*  7878 */                     return $call502;
/*  7879 */                     $blk = 14; /* allowing case fallthrough */
/*  7880 */                 case 14:
/*  7881 */                     /* --- end of if --- */
/*  7882 */                     $blk = 1; /* jump */
/*  7883 */                     continue;
/*  7884 */                 case 6:
/*  7885 */                     /* --- for cleanup --- */
/*  7886 */                     $blk = 7; /* allowing case fallthrough */
/*  7887 */                 case 7:
/*  7888 */                     /* --- for end --- */
/*  7889 */                     $blk = 1; /* jump */
/*  7890 */                     continue;
/*  7891 */                 }
/*  7892 */             } catch (err) {
/*  7893 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  7894 */                     Sk.execStart = Date.now()
/*  7895 */                 }
/*  7896 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7897 */                     err = new Sk.builtin.ExternalError(err);
/*  7898 */                 }
/*  7899 */                 err.traceback.push({
/*  7900 */                     lineno: $currLineNo,
/*  7901 */                     colno: $currColNo,
/*  7902 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  7903 */                 });
/*  7904 */                 if ($exc.length > 0) {
/*  7905 */                     $err = err;
/*  7906 */                     Sk.err = $err;
/*  7907 */                     $blk = $exc.pop();
/*  7908 */                     continue;
/*  7909 */                 } else {
/*  7910 */                     throw err;
/*  7911 */                 }
/*  7912 */             }
/*  7913 */         }
/*  7914 */     });
/*  7915 */     var $scope505 = (function $get_ast_name506$(node) {
/*  7916 */         var node, node, $loadgbl507, $loadgbl507, $call508;
/*  7917 */         var $wakeFromSuspension = function() {
/*  7918 */             var susp = $scope505.$wakingSuspension;
/*  7919 */             delete $scope505.$wakingSuspension;
/*  7920 */             $blk = susp.$blk;
/*  7921 */             $loc = susp.$loc;
/*  7922 */             $gbl = susp.$gbl;
/*  7923 */             $exc = susp.$exc;
/*  7924 */             $err = susp.$err;
/*  7925 */             Sk.err = $err;
/*  7926 */             $postfinally = susp.$postfinally;
/*  7927 */             $currLineNo = susp.$lineno;
/*  7928 */             $currColNo = susp.$colno;
/*  7929 */             Sk.lastYield = Date.now();
/*  7930 */             node = susp.$tmps.node;
/*  7931 */             $loadgbl507 = susp.$tmps.$loadgbl507;
/*  7932 */             $call508 = susp.$tmps.$call508;
/*  7933 */             try {
/*  7934 */                 $ret = susp.child.resume();
/*  7935 */             } catch (err) {
/*  7936 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  7937 */                     Sk.execStart = Date.now()
/*  7938 */                 }
/*  7939 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  7940 */                     err = new Sk.builtin.ExternalError(err);
/*  7941 */                 }
/*  7942 */                 err.traceback.push({
/*  7943 */                     lineno: $currLineNo,
/*  7944 */                     colno: $currColNo,
/*  7945 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  7946 */                 });
/*  7947 */                 if ($exc.length > 0) {
/*  7948 */                     $err = err;
/*  7949 */                     Sk.err = $err;
/*  7950 */                     $blk = $exc.pop();
/*  7951 */                 } else {
/*  7952 */                     throw err;
/*  7953 */                 }
/*  7954 */             }
/*  7955 */         };
/*  7956 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  7957 */             var susp = new Sk.misceval.Suspension();
/*  7958 */             susp.child = $child;
/*  7959 */             susp.resume = function() {
/*  7960 */                 $scope505.$wakingSuspension = susp;
/*  7961 */                 return $scope505();
/*  7962 */             };
/*  7963 */             susp.data = susp.child.data;
/*  7964 */             susp.$blk = $blk;
/*  7965 */             susp.$loc = $loc;
/*  7966 */             susp.$gbl = $gbl;
/*  7967 */             susp.$exc = $exc;
/*  7968 */             susp.$err = $err;
/*  7969 */             susp.$postfinally = $postfinally;
/*  7970 */             susp.$filename = $filename;
/*  7971 */             susp.$lineno = $lineno;
/*  7972 */             susp.$colno = $colno;
/*  7973 */             susp.optional = susp.child.optional;
/*  7974 */             susp.$tmps = {
/*  7975 */                 "node": node,
/*  7976 */                 "$loadgbl507": $loadgbl507,
/*  7977 */                 "$call508": $call508
/*  7978 */             };
/*  7979 */             return susp;
/*  7980 */         };
/*  7981 */         var $blk = 0,
/*  7982 */             $exc = [],
/*  7983 */             $loc = {},
/*  7984 */             $gbl = this,
/*  7985 */             $err = undefined,
/*  7986 */             $ret = undefined,
/*  7987 */             $postfinally = undefined,
/*  7988 */             $currLineNo = undefined,
/*  7989 */             $currColNo = undefined;
/*  7990 */         Sk.err = $err;
/*  7991 */         if (typeof Sk.execStart === 'undefined') {
/*  7992 */             Sk.execStart = Date.now()
/*  7993 */         }
/*  7994 */         if (typeof Sk.lastYield === 'undefined') {
/*  7995 */             Sk.lastYield = Date.now()
/*  7996 */         }
/*  7997 */         if ($scope505.$wakingSuspension !== undefined) {
/*  7998 */             $wakeFromSuspension();
/*  7999 */         } else {
/*  8000 */             Sk.builtin.pyCheckArgs("get_ast_name", arguments, 1, 1, false, false);
/*  8001 */         }
/*  8002 */         while (true) {
/*  8003 */             try {
/*  8004 */                 var $dateNow = Date.now();
/*  8005 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  8006 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  8007 */                 }
/*  8008 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  8009 */                     var $susp = $saveSuspension({
/*  8010 */                         data: {
/*  8011 */                             type: 'Sk.yield'
/*  8012 */                         },
/*  8013 */                         resume: function() {}
/*  8014 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  8015 */                     $susp.$blk = $blk;
/*  8016 */                     $susp.optional = true;
/*  8017 */                     return $susp;
/*  8018 */                 }
/*  8019 */                 switch ($blk) {
/*  8020 */                 case 0:
/*  8021 */                     /* --- codeobj entry --- */
/*  8022 */                     if (node === undefined) {
/*  8023 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  8024 */                     }
/*  8025 */ 
/*  8026 */ 
/*  8027 */                     //
/*  8028 */                     // line 268:
/*  8029 */                     //         return type(node).__name__
/*  8030 */                     //         ^
/*  8031 */                     //
/*  8032 */                     Sk.currLineNo = 268;
/*  8033 */                     Sk.currColNo = 8;
/*  8034 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8035 */                     $currLineNo = 268;
/*  8036 */                     $currColNo = 8;
/*  8037 */                     var $loadgbl507 = Sk.misceval.loadname('type', $gbl);
/*  8038 */                     if (node === undefined) {
/*  8039 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  8040 */                     }
/*  8041 */                     $ret;
/*  8042 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl507, node);
/*  8043 */                     $blk = 1; /* allowing case fallthrough */
/*  8044 */                 case 1:
/*  8045 */                     /* --- function return or resume suspension --- */
/*  8046 */                     if ($ret && $ret.$isSuspension) {
/*  8047 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 268, 15);
/*  8048 */                     }
/*  8049 */                     var $call508 = $ret;
/*  8050 */ 
/*  8051 */                     //
/*  8052 */                     // line 268:
/*  8053 */                     //         return type(node).__name__
/*  8054 */                     //                ^
/*  8055 */                     //
/*  8056 */                     Sk.currLineNo = 268;
/*  8057 */                     Sk.currColNo = 15;
/*  8058 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8059 */                     $currLineNo = 268;
/*  8060 */                     $currColNo = 15;
/*  8061 */                     $ret = Sk.abstr.gattr($call508, '__name__', true);
/*  8062 */                     $blk = 2; /* allowing case fallthrough */
/*  8063 */                 case 2:
/*  8064 */                     /* --- function return or resume suspension --- */
/*  8065 */                     if ($ret && $ret.$isSuspension) {
/*  8066 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 268, 15);
/*  8067 */                     }
/*  8068 */                     var $lattr509 = $ret;
/*  8069 */                     return $lattr509;
/*  8070 */                     return Sk.builtin.none.none$;
/*  8071 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8072 */                 }
/*  8073 */             } catch (err) {
/*  8074 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  8075 */                     Sk.execStart = Date.now()
/*  8076 */                 }
/*  8077 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8078 */                     err = new Sk.builtin.ExternalError(err);
/*  8079 */                 }
/*  8080 */                 err.traceback.push({
/*  8081 */                     lineno: $currLineNo,
/*  8082 */                     colno: $currColNo,
/*  8083 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  8084 */                 });
/*  8085 */                 if ($exc.length > 0) {
/*  8086 */                     $err = err;
/*  8087 */                     Sk.err = $err;
/*  8088 */                     $blk = $exc.pop();
/*  8089 */                     continue;
/*  8090 */                 } else {
/*  8091 */                     throw err;
/*  8092 */                 }
/*  8093 */             }
/*  8094 */         }
/*  8095 */     });
/*  8096 */     var $scope511 = (function $get_clashing_attr512$(self, key) {
/*  8097 */         var key, key, self, self, $compareres513, $str514, $lattr517;
/*  8098 */         var $wakeFromSuspension = function() {
/*  8099 */             var susp = $scope511.$wakingSuspension;
/*  8100 */             delete $scope511.$wakingSuspension;
/*  8101 */             $blk = susp.$blk;
/*  8102 */             $loc = susp.$loc;
/*  8103 */             $gbl = susp.$gbl;
/*  8104 */             $exc = susp.$exc;
/*  8105 */             $err = susp.$err;
/*  8106 */             Sk.err = $err;
/*  8107 */             $postfinally = susp.$postfinally;
/*  8108 */             $currLineNo = susp.$lineno;
/*  8109 */             $currColNo = susp.$colno;
/*  8110 */             Sk.lastYield = Date.now();
/*  8111 */             key = susp.$tmps.key;
/*  8112 */             self = susp.$tmps.self;
/*  8113 */             $compareres513 = susp.$tmps.$compareres513;
/*  8114 */             $str514 = susp.$tmps.$str514;
/*  8115 */             $lattr517 = susp.$tmps.$lattr517;
/*  8116 */             try {
/*  8117 */                 $ret = susp.child.resume();
/*  8118 */             } catch (err) {
/*  8119 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  8120 */                     Sk.execStart = Date.now()
/*  8121 */                 }
/*  8122 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8123 */                     err = new Sk.builtin.ExternalError(err);
/*  8124 */                 }
/*  8125 */                 err.traceback.push({
/*  8126 */                     lineno: $currLineNo,
/*  8127 */                     colno: $currColNo,
/*  8128 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  8129 */                 });
/*  8130 */                 if ($exc.length > 0) {
/*  8131 */                     $err = err;
/*  8132 */                     Sk.err = $err;
/*  8133 */                     $blk = $exc.pop();
/*  8134 */                 } else {
/*  8135 */                     throw err;
/*  8136 */                 }
/*  8137 */             }
/*  8138 */         };
/*  8139 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8140 */             var susp = new Sk.misceval.Suspension();
/*  8141 */             susp.child = $child;
/*  8142 */             susp.resume = function() {
/*  8143 */                 $scope511.$wakingSuspension = susp;
/*  8144 */                 return $scope511();
/*  8145 */             };
/*  8146 */             susp.data = susp.child.data;
/*  8147 */             susp.$blk = $blk;
/*  8148 */             susp.$loc = $loc;
/*  8149 */             susp.$gbl = $gbl;
/*  8150 */             susp.$exc = $exc;
/*  8151 */             susp.$err = $err;
/*  8152 */             susp.$postfinally = $postfinally;
/*  8153 */             susp.$filename = $filename;
/*  8154 */             susp.$lineno = $lineno;
/*  8155 */             susp.$colno = $colno;
/*  8156 */             susp.optional = susp.child.optional;
/*  8157 */             susp.$tmps = {
/*  8158 */                 "key": key,
/*  8159 */                 "self": self,
/*  8160 */                 "$compareres513": $compareres513,
/*  8161 */                 "$str514": $str514,
/*  8162 */                 "$lattr517": $lattr517
/*  8163 */             };
/*  8164 */             return susp;
/*  8165 */         };
/*  8166 */         var $blk = 0,
/*  8167 */             $exc = [],
/*  8168 */             $loc = {},
/*  8169 */             $gbl = this,
/*  8170 */             $err = undefined,
/*  8171 */             $ret = undefined,
/*  8172 */             $postfinally = undefined,
/*  8173 */             $currLineNo = undefined,
/*  8174 */             $currColNo = undefined;
/*  8175 */         Sk.err = $err;
/*  8176 */         if (typeof Sk.execStart === 'undefined') {
/*  8177 */             Sk.execStart = Date.now()
/*  8178 */         }
/*  8179 */         if (typeof Sk.lastYield === 'undefined') {
/*  8180 */             Sk.lastYield = Date.now()
/*  8181 */         }
/*  8182 */         if ($scope511.$wakingSuspension !== undefined) {
/*  8183 */             $wakeFromSuspension();
/*  8184 */         } else {
/*  8185 */             Sk.builtin.pyCheckArgs("get_clashing_attr", arguments, 2, 2, false, false);
/*  8186 */         }
/*  8187 */         while (true) {
/*  8188 */             try {
/*  8189 */                 var $dateNow = Date.now();
/*  8190 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  8191 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  8192 */                 }
/*  8193 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  8194 */                     var $susp = $saveSuspension({
/*  8195 */                         data: {
/*  8196 */                             type: 'Sk.yield'
/*  8197 */                         },
/*  8198 */                         resume: function() {}
/*  8199 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  8200 */                     $susp.$blk = $blk;
/*  8201 */                     $susp.optional = true;
/*  8202 */                     return $susp;
/*  8203 */                 }
/*  8204 */                 switch ($blk) {
/*  8205 */                 case 0:
/*  8206 */                     /* --- codeobj entry --- */
/*  8207 */                     if (self === undefined) {
/*  8208 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8209 */                     }
/*  8210 */                     if (key === undefined) {
/*  8211 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  8212 */                     }
/*  8213 */ 
/*  8214 */ 
/*  8215 */                     //
/*  8216 */                     // line 271:
/*  8217 */                     //         if key == "value":
/*  8218 */                     //         ^
/*  8219 */                     //
/*  8220 */                     Sk.currLineNo = 271;
/*  8221 */                     Sk.currColNo = 8;
/*  8222 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8223 */                     $currLineNo = 271;
/*  8224 */                     $currColNo = 8;
/*  8225 */                     if (key === undefined) {
/*  8226 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  8227 */                     }
/*  8228 */                     var $compareres513 = null;
/*  8229 */                     var $str514 = new Sk.builtins['str']('value');
/*  8230 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(key, $str514, 'Eq', true));
/*  8231 */                     $blk = 3; /* allowing case fallthrough */
/*  8232 */                 case 3:
/*  8233 */                     /* --- function return or resume suspension --- */
/*  8234 */                     if ($ret && $ret.$isSuspension) {
/*  8235 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 271, 11);
/*  8236 */                     }
/*  8237 */                     $compareres513 = $ret;
/*  8238 */                     var $jfalse515 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8239 */                     if ($jfalse515) { /*test failed */
/*  8240 */                         $blk = 2;
/*  8241 */                         continue;
/*  8242 */                     }
/*  8243 */                     $blk = 2; /* allowing case fallthrough */
/*  8244 */                 case 2:
/*  8245 */                     /* --- done --- */
/*  8246 */                     var $jfalse516 = ($compareres513 === false || !Sk.misceval.isTrue($compareres513));
/*  8247 */                     if ($jfalse516) { /*test failed */
/*  8248 */                         $blk = 1;
/*  8249 */                         continue;
/*  8250 */                     }
/*  8251 */ 
/*  8252 */                     //
/*  8253 */                     // line 272:
/*  8254 */                     //             return self.get_value()
/*  8255 */                     //             ^
/*  8256 */                     //
/*  8257 */                     Sk.currLineNo = 272;
/*  8258 */                     Sk.currColNo = 12;
/*  8259 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8260 */                     $currLineNo = 272;
/*  8261 */                     $currColNo = 12;
/*  8262 */                     if (self === undefined) {
/*  8263 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8264 */                     }
/*  8265 */                     $ret = Sk.abstr.gattr(self, 'get_value', true);
/*  8266 */                     $blk = 4; /* allowing case fallthrough */
/*  8267 */                 case 4:
/*  8268 */                     /* --- function return or resume suspension --- */
/*  8269 */                     if ($ret && $ret.$isSuspension) {
/*  8270 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 272, 19);
/*  8271 */                     }
/*  8272 */                     var $lattr517 = $ret;
/*  8273 */                     $ret;
/*  8274 */                     $ret = Sk.misceval.callsimOrSuspend($lattr517);
/*  8275 */                     $blk = 5; /* allowing case fallthrough */
/*  8276 */                 case 5:
/*  8277 */                     /* --- function return or resume suspension --- */
/*  8278 */                     if ($ret && $ret.$isSuspension) {
/*  8279 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 272, 19);
/*  8280 */                     }
/*  8281 */                     var $call518 = $ret;
/*  8282 */ 
/*  8283 */                     //
/*  8284 */                     // line 272:
/*  8285 */                     //             return self.get_value()
/*  8286 */                     //                    ^
/*  8287 */                     //
/*  8288 */                     Sk.currLineNo = 272;
/*  8289 */                     Sk.currColNo = 19;
/*  8290 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8291 */                     $currLineNo = 272;
/*  8292 */                     $currColNo = 19;
/*  8293 */                     return $call518;
/*  8294 */                     $blk = 1; /* allowing case fallthrough */
/*  8295 */                 case 1:
/*  8296 */                     /* --- end of if --- */
/*  8297 */                     return Sk.builtin.none.none$;
/*  8298 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  8299 */                 }
/*  8300 */             } catch (err) {
/*  8301 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  8302 */                     Sk.execStart = Date.now()
/*  8303 */                 }
/*  8304 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8305 */                     err = new Sk.builtin.ExternalError(err);
/*  8306 */                 }
/*  8307 */                 err.traceback.push({
/*  8308 */                     lineno: $currLineNo,
/*  8309 */                     colno: $currColNo,
/*  8310 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  8311 */                 });
/*  8312 */                 if ($exc.length > 0) {
/*  8313 */                     $err = err;
/*  8314 */                     Sk.err = $err;
/*  8315 */                     $blk = $exc.pop();
/*  8316 */                     continue;
/*  8317 */                 } else {
/*  8318 */                     throw err;
/*  8319 */                 }
/*  8320 */             }
/*  8321 */         }
/*  8322 */     });
/*  8323 */     var $scope520 = (function $__getattr__521$(self, item) {
/*  8324 */         var easy_array, f, field, key, node, node_name, op, str_ops_list; /* locals */
/*  8325 */         var easy_array, easy_array, easy_array, f, f, field, field, field, field, field, field, field, field, field, field, field, field, field, field, item, item, item, item, item, item, item, item, item, item, item, key, key, key, key, key, key, key, key, key, key, key, key, key, node, node, node_name, node_name, node_name, node_name, op, op, self, self, self, self, self, self, self, self, str_ops_list, str_ops_list, str_ops_list, $loadgbl523, $loadgbl523, $lattr524, $loadgbl523, $lattr524, $lattr525, $compareres527, $str528, $compareres527, $str528, $jfalse529, $boolopsucc530, $jfalse531, $compareres532, $str533, $compareres538, $loadgbl539, $slice542, $compareres544, $loadgbl545, $slice548, $compareres551, $str552, $lattr555, $compareres557, $str558, $compareres561, $str562, $lattr565, $compareres567, $str568, $loadgbl572, $loadgbl572, $lattr573, $lattr576, $lattr576, $lattr577, $compareres582, $str583, $compareres582, $str583, $jfalse584, $boolopsucc585, $jfalse586, $compareres587, $compareres591, $str592, $lsubscr595, $compareres597, $str598, $compareres597, $str598, $jfalse599, $boolopsucc600, $jfalse601, $loadgbl602, $loadgbl603, $iter608, $iter608, $lattr610, $lattr610, $lattr611, $compareres613, $loadgbl614, $loadgbl617, $loadgbl617, $call618, $compareres620, $loadgbl621, $iter625, $iter625, $lattr627, $loadgbl628, $lattr627, $loadgbl628, $call629, $lattr627, $loadgbl628, $call629, $lattr630, $loadgbl632, $loadgbl633, $loadgbl632, $loadgbl633, $lattr634, $loadgbl638, $loadgbl639, $_compr642, $iter643, $_compr642, $iter643, $next644, $lattr649;
/*  8326 */         var $wakeFromSuspension = function() {
/*  8327 */             var susp = $scope520.$wakingSuspension;
/*  8328 */             delete $scope520.$wakingSuspension;
/*  8329 */             $blk = susp.$blk;
/*  8330 */             $loc = susp.$loc;
/*  8331 */             $gbl = susp.$gbl;
/*  8332 */             $exc = susp.$exc;
/*  8333 */             $err = susp.$err;
/*  8334 */             Sk.err = $err;
/*  8335 */             $postfinally = susp.$postfinally;
/*  8336 */             $currLineNo = susp.$lineno;
/*  8337 */             $currColNo = susp.$colno;
/*  8338 */             Sk.lastYield = Date.now();
/*  8339 */             easy_array = susp.$tmps.easy_array;
/*  8340 */             f = susp.$tmps.f;
/*  8341 */             field = susp.$tmps.field;
/*  8342 */             item = susp.$tmps.item;
/*  8343 */             key = susp.$tmps.key;
/*  8344 */             node = susp.$tmps.node;
/*  8345 */             node_name = susp.$tmps.node_name;
/*  8346 */             op = susp.$tmps.op;
/*  8347 */             self = susp.$tmps.self;
/*  8348 */             str_ops_list = susp.$tmps.str_ops_list;
/*  8349 */             $loadgbl523 = susp.$tmps.$loadgbl523;
/*  8350 */             $lattr524 = susp.$tmps.$lattr524;
/*  8351 */             $lattr525 = susp.$tmps.$lattr525;
/*  8352 */             $compareres527 = susp.$tmps.$compareres527;
/*  8353 */             $str528 = susp.$tmps.$str528;
/*  8354 */             $jfalse529 = susp.$tmps.$jfalse529;
/*  8355 */             $boolopsucc530 = susp.$tmps.$boolopsucc530;
/*  8356 */             $jfalse531 = susp.$tmps.$jfalse531;
/*  8357 */             $compareres532 = susp.$tmps.$compareres532;
/*  8358 */             $str533 = susp.$tmps.$str533;
/*  8359 */             $compareres538 = susp.$tmps.$compareres538;
/*  8360 */             $loadgbl539 = susp.$tmps.$loadgbl539;
/*  8361 */             $slice542 = susp.$tmps.$slice542;
/*  8362 */             $compareres544 = susp.$tmps.$compareres544;
/*  8363 */             $loadgbl545 = susp.$tmps.$loadgbl545;
/*  8364 */             $slice548 = susp.$tmps.$slice548;
/*  8365 */             $compareres551 = susp.$tmps.$compareres551;
/*  8366 */             $str552 = susp.$tmps.$str552;
/*  8367 */             $lattr555 = susp.$tmps.$lattr555;
/*  8368 */             $compareres557 = susp.$tmps.$compareres557;
/*  8369 */             $str558 = susp.$tmps.$str558;
/*  8370 */             $compareres561 = susp.$tmps.$compareres561;
/*  8371 */             $str562 = susp.$tmps.$str562;
/*  8372 */             $lattr565 = susp.$tmps.$lattr565;
/*  8373 */             $compareres567 = susp.$tmps.$compareres567;
/*  8374 */             $str568 = susp.$tmps.$str568;
/*  8375 */             $loadgbl572 = susp.$tmps.$loadgbl572;
/*  8376 */             $lattr573 = susp.$tmps.$lattr573;
/*  8377 */             $lattr576 = susp.$tmps.$lattr576;
/*  8378 */             $lattr577 = susp.$tmps.$lattr577;
/*  8379 */             $compareres582 = susp.$tmps.$compareres582;
/*  8380 */             $str583 = susp.$tmps.$str583;
/*  8381 */             $jfalse584 = susp.$tmps.$jfalse584;
/*  8382 */             $boolopsucc585 = susp.$tmps.$boolopsucc585;
/*  8383 */             $jfalse586 = susp.$tmps.$jfalse586;
/*  8384 */             $compareres587 = susp.$tmps.$compareres587;
/*  8385 */             $compareres591 = susp.$tmps.$compareres591;
/*  8386 */             $str592 = susp.$tmps.$str592;
/*  8387 */             $lsubscr595 = susp.$tmps.$lsubscr595;
/*  8388 */             $compareres597 = susp.$tmps.$compareres597;
/*  8389 */             $str598 = susp.$tmps.$str598;
/*  8390 */             $jfalse599 = susp.$tmps.$jfalse599;
/*  8391 */             $boolopsucc600 = susp.$tmps.$boolopsucc600;
/*  8392 */             $jfalse601 = susp.$tmps.$jfalse601;
/*  8393 */             $loadgbl602 = susp.$tmps.$loadgbl602;
/*  8394 */             $loadgbl603 = susp.$tmps.$loadgbl603;
/*  8395 */             $iter608 = susp.$tmps.$iter608;
/*  8396 */             $lattr610 = susp.$tmps.$lattr610;
/*  8397 */             $lattr611 = susp.$tmps.$lattr611;
/*  8398 */             $compareres613 = susp.$tmps.$compareres613;
/*  8399 */             $loadgbl614 = susp.$tmps.$loadgbl614;
/*  8400 */             $loadgbl617 = susp.$tmps.$loadgbl617;
/*  8401 */             $call618 = susp.$tmps.$call618;
/*  8402 */             $compareres620 = susp.$tmps.$compareres620;
/*  8403 */             $loadgbl621 = susp.$tmps.$loadgbl621;
/*  8404 */             $iter625 = susp.$tmps.$iter625;
/*  8405 */             $lattr627 = susp.$tmps.$lattr627;
/*  8406 */             $loadgbl628 = susp.$tmps.$loadgbl628;
/*  8407 */             $call629 = susp.$tmps.$call629;
/*  8408 */             $lattr630 = susp.$tmps.$lattr630;
/*  8409 */             $loadgbl632 = susp.$tmps.$loadgbl632;
/*  8410 */             $loadgbl633 = susp.$tmps.$loadgbl633;
/*  8411 */             $lattr634 = susp.$tmps.$lattr634;
/*  8412 */             $loadgbl638 = susp.$tmps.$loadgbl638;
/*  8413 */             $loadgbl639 = susp.$tmps.$loadgbl639;
/*  8414 */             $_compr642 = susp.$tmps.$_compr642;
/*  8415 */             $iter643 = susp.$tmps.$iter643;
/*  8416 */             $next644 = susp.$tmps.$next644;
/*  8417 */             $lattr649 = susp.$tmps.$lattr649;
/*  8418 */             try {
/*  8419 */                 $ret = susp.child.resume();
/*  8420 */             } catch (err) {
/*  8421 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/*  8422 */                     Sk.execStart = Date.now()
/*  8423 */                 }
/*  8424 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  8425 */                     err = new Sk.builtin.ExternalError(err);
/*  8426 */                 }
/*  8427 */                 err.traceback.push({
/*  8428 */                     lineno: $currLineNo,
/*  8429 */                     colno: $currColNo,
/*  8430 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/*  8431 */                 });
/*  8432 */                 if ($exc.length > 0) {
/*  8433 */                     $err = err;
/*  8434 */                     Sk.err = $err;
/*  8435 */                     $blk = $exc.pop();
/*  8436 */                 } else {
/*  8437 */                     throw err;
/*  8438 */                 }
/*  8439 */             }
/*  8440 */         };
/*  8441 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  8442 */             var susp = new Sk.misceval.Suspension();
/*  8443 */             susp.child = $child;
/*  8444 */             susp.resume = function() {
/*  8445 */                 $scope520.$wakingSuspension = susp;
/*  8446 */                 return $scope520();
/*  8447 */             };
/*  8448 */             susp.data = susp.child.data;
/*  8449 */             susp.$blk = $blk;
/*  8450 */             susp.$loc = $loc;
/*  8451 */             susp.$gbl = $gbl;
/*  8452 */             susp.$exc = $exc;
/*  8453 */             susp.$err = $err;
/*  8454 */             susp.$postfinally = $postfinally;
/*  8455 */             susp.$filename = $filename;
/*  8456 */             susp.$lineno = $lineno;
/*  8457 */             susp.$colno = $colno;
/*  8458 */             susp.optional = susp.child.optional;
/*  8459 */             susp.$tmps = {
/*  8460 */                 "easy_array": easy_array,
/*  8461 */                 "f": f,
/*  8462 */                 "field": field,
/*  8463 */                 "item": item,
/*  8464 */                 "key": key,
/*  8465 */                 "node": node,
/*  8466 */                 "node_name": node_name,
/*  8467 */                 "op": op,
/*  8468 */                 "self": self,
/*  8469 */                 "str_ops_list": str_ops_list,
/*  8470 */                 "$loadgbl523": $loadgbl523,
/*  8471 */                 "$lattr524": $lattr524,
/*  8472 */                 "$lattr525": $lattr525,
/*  8473 */                 "$compareres527": $compareres527,
/*  8474 */                 "$str528": $str528,
/*  8475 */                 "$jfalse529": $jfalse529,
/*  8476 */                 "$boolopsucc530": $boolopsucc530,
/*  8477 */                 "$jfalse531": $jfalse531,
/*  8478 */                 "$compareres532": $compareres532,
/*  8479 */                 "$str533": $str533,
/*  8480 */                 "$compareres538": $compareres538,
/*  8481 */                 "$loadgbl539": $loadgbl539,
/*  8482 */                 "$slice542": $slice542,
/*  8483 */                 "$compareres544": $compareres544,
/*  8484 */                 "$loadgbl545": $loadgbl545,
/*  8485 */                 "$slice548": $slice548,
/*  8486 */                 "$compareres551": $compareres551,
/*  8487 */                 "$str552": $str552,
/*  8488 */                 "$lattr555": $lattr555,
/*  8489 */                 "$compareres557": $compareres557,
/*  8490 */                 "$str558": $str558,
/*  8491 */                 "$compareres561": $compareres561,
/*  8492 */                 "$str562": $str562,
/*  8493 */                 "$lattr565": $lattr565,
/*  8494 */                 "$compareres567": $compareres567,
/*  8495 */                 "$str568": $str568,
/*  8496 */                 "$loadgbl572": $loadgbl572,
/*  8497 */                 "$lattr573": $lattr573,
/*  8498 */                 "$lattr576": $lattr576,
/*  8499 */                 "$lattr577": $lattr577,
/*  8500 */                 "$compareres582": $compareres582,
/*  8501 */                 "$str583": $str583,
/*  8502 */                 "$jfalse584": $jfalse584,
/*  8503 */                 "$boolopsucc585": $boolopsucc585,
/*  8504 */                 "$jfalse586": $jfalse586,
/*  8505 */                 "$compareres587": $compareres587,
/*  8506 */                 "$compareres591": $compareres591,
/*  8507 */                 "$str592": $str592,
/*  8508 */                 "$lsubscr595": $lsubscr595,
/*  8509 */                 "$compareres597": $compareres597,
/*  8510 */                 "$str598": $str598,
/*  8511 */                 "$jfalse599": $jfalse599,
/*  8512 */                 "$boolopsucc600": $boolopsucc600,
/*  8513 */                 "$jfalse601": $jfalse601,
/*  8514 */                 "$loadgbl602": $loadgbl602,
/*  8515 */                 "$loadgbl603": $loadgbl603,
/*  8516 */                 "$iter608": $iter608,
/*  8517 */                 "$lattr610": $lattr610,
/*  8518 */                 "$lattr611": $lattr611,
/*  8519 */                 "$compareres613": $compareres613,
/*  8520 */                 "$loadgbl614": $loadgbl614,
/*  8521 */                 "$loadgbl617": $loadgbl617,
/*  8522 */                 "$call618": $call618,
/*  8523 */                 "$compareres620": $compareres620,
/*  8524 */                 "$loadgbl621": $loadgbl621,
/*  8525 */                 "$iter625": $iter625,
/*  8526 */                 "$lattr627": $lattr627,
/*  8527 */                 "$loadgbl628": $loadgbl628,
/*  8528 */                 "$call629": $call629,
/*  8529 */                 "$lattr630": $lattr630,
/*  8530 */                 "$loadgbl632": $loadgbl632,
/*  8531 */                 "$loadgbl633": $loadgbl633,
/*  8532 */                 "$lattr634": $lattr634,
/*  8533 */                 "$loadgbl638": $loadgbl638,
/*  8534 */                 "$loadgbl639": $loadgbl639,
/*  8535 */                 "$_compr642": $_compr642,
/*  8536 */                 "$iter643": $iter643,
/*  8537 */                 "$next644": $next644,
/*  8538 */                 "$lattr649": $lattr649
/*  8539 */             };
/*  8540 */             return susp;
/*  8541 */         };
/*  8542 */         var $blk = 0,
/*  8543 */             $exc = [],
/*  8544 */             $loc = {},
/*  8545 */             $gbl = this,
/*  8546 */             $err = undefined,
/*  8547 */             $ret = undefined,
/*  8548 */             $postfinally = undefined,
/*  8549 */             $currLineNo = undefined,
/*  8550 */             $currColNo = undefined;
/*  8551 */         Sk.err = $err;
/*  8552 */         if (typeof Sk.execStart === 'undefined') {
/*  8553 */             Sk.execStart = Date.now()
/*  8554 */         }
/*  8555 */         if (typeof Sk.lastYield === 'undefined') {
/*  8556 */             Sk.lastYield = Date.now()
/*  8557 */         }
/*  8558 */         if ($scope520.$wakingSuspension !== undefined) {
/*  8559 */             $wakeFromSuspension();
/*  8560 */         } else {
/*  8561 */             Sk.builtin.pyCheckArgs("__getattr__", arguments, 2, 2, false, false);
/*  8562 */         }
/*  8563 */         while (true) {
/*  8564 */             try {
/*  8565 */                 var $dateNow = Date.now();
/*  8566 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/*  8567 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  8568 */                 }
/*  8569 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  8570 */                     var $susp = $saveSuspension({
/*  8571 */                         data: {
/*  8572 */                             type: 'Sk.yield'
/*  8573 */                         },
/*  8574 */                         resume: function() {}
/*  8575 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  8576 */                     $susp.$blk = $blk;
/*  8577 */                     $susp.optional = true;
/*  8578 */                     return $susp;
/*  8579 */                 }
/*  8580 */                 switch ($blk) {
/*  8581 */                 case 0:
/*  8582 */                     /* --- codeobj entry --- */
/*  8583 */                     if (self === undefined) {
/*  8584 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8585 */                     }
/*  8586 */                     if (item === undefined) {
/*  8587 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  8588 */                     }
/*  8589 */ 
/*  8590 */ 
/*  8591 */                     //
/*  8592 */                     // line 275:
/*  8593 */                     //         key = item
/*  8594 */                     //         ^
/*  8595 */                     //
/*  8596 */                     Sk.currLineNo = 275;
/*  8597 */                     Sk.currColNo = 8;
/*  8598 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8599 */                     $currLineNo = 275;
/*  8600 */                     $currColNo = 8;
/*  8601 */                     if (item === undefined) {
/*  8602 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  8603 */                     }
/*  8604 */                     key = item;
/*  8605 */ 
/*  8606 */                     //
/*  8607 */                     // line 276:
/*  8608 */                     //         """
/*  8609 */                     //         ^
/*  8610 */                     //
/*  8611 */                     Sk.currLineNo = 276;
/*  8612 */                     Sk.currColNo = 8;
/*  8613 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8614 */                     $currLineNo = 276;
/*  8615 */                     $currColNo = 8;
/*  8616 */                     var $str522 = new Sk.builtins['str']('\n        Non-ast node attributes based on ast_node attributes\n        ');
/*  8617 */ 
/*  8618 */                     //
/*  8619 */                     // line 279:
/*  8620 */                     //         node_name = CaitNode.get_ast_name(self.astNode)
/*  8621 */                     //         ^
/*  8622 */                     //
/*  8623 */                     Sk.currLineNo = 279;
/*  8624 */                     Sk.currColNo = 8;
/*  8625 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8626 */                     $currLineNo = 279;
/*  8627 */                     $currColNo = 8;
/*  8628 */                     var $loadgbl523 = Sk.misceval.loadname('CaitNode', $gbl);
/*  8629 */                     $ret = Sk.abstr.gattr($loadgbl523, 'get_ast_name', true);
/*  8630 */                     $blk = 1; /* allowing case fallthrough */
/*  8631 */                 case 1:
/*  8632 */                     /* --- function return or resume suspension --- */
/*  8633 */                     if ($ret && $ret.$isSuspension) {
/*  8634 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 279, 20);
/*  8635 */                     }
/*  8636 */                     var $lattr524 = $ret;
/*  8637 */                     if (self === undefined) {
/*  8638 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8639 */                     }
/*  8640 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/*  8641 */                     $blk = 2; /* allowing case fallthrough */
/*  8642 */                 case 2:
/*  8643 */                     /* --- function return or resume suspension --- */
/*  8644 */                     if ($ret && $ret.$isSuspension) {
/*  8645 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 279, 42);
/*  8646 */                     }
/*  8647 */                     var $lattr525 = $ret;
/*  8648 */                     $ret;
/*  8649 */                     $ret = Sk.misceval.callsimOrSuspend($lattr524, $lattr525);
/*  8650 */                     $blk = 3; /* allowing case fallthrough */
/*  8651 */                 case 3:
/*  8652 */                     /* --- function return or resume suspension --- */
/*  8653 */                     if ($ret && $ret.$isSuspension) {
/*  8654 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 279, 20);
/*  8655 */                     }
/*  8656 */                     var $call526 = $ret;
/*  8657 */ 
/*  8658 */                     //
/*  8659 */                     // line 279:
/*  8660 */                     //         node_name = CaitNode.get_ast_name(self.astNode)
/*  8661 */                     //                     ^
/*  8662 */                     //
/*  8663 */                     Sk.currLineNo = 279;
/*  8664 */                     Sk.currColNo = 20;
/*  8665 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8666 */                     $currLineNo = 279;
/*  8667 */                     $currColNo = 20;
/*  8668 */                     node_name = $call526;
/*  8669 */ 
/*  8670 */                     //
/*  8671 */                     // line 280:
/*  8672 */                     //         if node_name == "Assign" and key == "target":
/*  8673 */                     //         ^
/*  8674 */                     //
/*  8675 */                     Sk.currLineNo = 280;
/*  8676 */                     Sk.currColNo = 8;
/*  8677 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8678 */                     $currLineNo = 280;
/*  8679 */                     $currColNo = 8;
/*  8680 */                     if (node_name === undefined) {
/*  8681 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_name\' referenced before assignment');
/*  8682 */                     }
/*  8683 */                     var $compareres527 = null;
/*  8684 */                     var $str528 = new Sk.builtins['str']('Assign');
/*  8685 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(node_name, $str528, 'Eq', true));
/*  8686 */                     $blk = 7; /* allowing case fallthrough */
/*  8687 */                 case 7:
/*  8688 */                     /* --- function return or resume suspension --- */
/*  8689 */                     if ($ret && $ret.$isSuspension) {
/*  8690 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 280, 11);
/*  8691 */                     }
/*  8692 */                     $compareres527 = $ret;
/*  8693 */                     var $jfalse529 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8694 */                     if ($jfalse529) { /*test failed */
/*  8695 */                         $blk = 6;
/*  8696 */                         continue;
/*  8697 */                     }
/*  8698 */                     $blk = 6; /* allowing case fallthrough */
/*  8699 */                 case 6:
/*  8700 */                     /* --- done --- */
/*  8701 */                     var $boolopsucc530 = $compareres527;
/*  8702 */                     $boolopsucc530 = $compareres527;
/*  8703 */                     var $jfalse531 = ($compareres527 === false || !Sk.misceval.isTrue($compareres527));
/*  8704 */                     if ($jfalse531) { /*test failed */
/*  8705 */                         $blk = 5;
/*  8706 */                         continue;
/*  8707 */                     }
/*  8708 */                     if (key === undefined) {
/*  8709 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  8710 */                     }
/*  8711 */                     var $compareres532 = null;
/*  8712 */                     var $str533 = new Sk.builtins['str']('target');
/*  8713 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(key, $str533, 'Eq', true));
/*  8714 */                     $blk = 9; /* allowing case fallthrough */
/*  8715 */                 case 9:
/*  8716 */                     /* --- function return or resume suspension --- */
/*  8717 */                     if ($ret && $ret.$isSuspension) {
/*  8718 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 280, 37);
/*  8719 */                     }
/*  8720 */                     $compareres532 = $ret;
/*  8721 */                     var $jfalse534 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8722 */                     if ($jfalse534) { /*test failed */
/*  8723 */                         $blk = 8;
/*  8724 */                         continue;
/*  8725 */                     }
/*  8726 */                     $blk = 8; /* allowing case fallthrough */
/*  8727 */                 case 8:
/*  8728 */                     /* --- done --- */
/*  8729 */                     $boolopsucc530 = $compareres532;
/*  8730 */                     var $jfalse535 = ($compareres532 === false || !Sk.misceval.isTrue($compareres532));
/*  8731 */                     if ($jfalse535) { /*test failed */
/*  8732 */                         $blk = 5;
/*  8733 */                         continue;
/*  8734 */                     }
/*  8735 */                     $blk = 5; /* allowing case fallthrough */
/*  8736 */                 case 5:
/*  8737 */                     /* --- end of boolop --- */
/*  8738 */                     var $jfalse536 = ($boolopsucc530 === false || !Sk.misceval.isTrue($boolopsucc530));
/*  8739 */                     if ($jfalse536) { /*test failed */
/*  8740 */                         $blk = 4;
/*  8741 */                         continue;
/*  8742 */                     }
/*  8743 */ 
/*  8744 */                     //
/*  8745 */                     // line 281:
/*  8746 */                     //             key = "targets"
/*  8747 */                     //             ^
/*  8748 */                     //
/*  8749 */                     Sk.currLineNo = 281;
/*  8750 */                     Sk.currColNo = 12;
/*  8751 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8752 */                     $currLineNo = 281;
/*  8753 */                     $currColNo = 12;
/*  8754 */                     var $str537 = new Sk.builtins['str']('targets');
/*  8755 */                     key = $str537;
/*  8756 */                     $blk = 4; /* allowing case fallthrough */
/*  8757 */                 case 4:
/*  8758 */                     /* --- end of if --- */
/*  8759 */ 
/*  8760 */                     //
/*  8761 */                     // line 282:
/*  8762 */                     //         if item in AST_SINGLE_FUNCTIONS:
/*  8763 */                     //         ^
/*  8764 */                     //
/*  8765 */                     Sk.currLineNo = 282;
/*  8766 */                     Sk.currColNo = 8;
/*  8767 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8768 */                     $currLineNo = 282;
/*  8769 */                     $currColNo = 8;
/*  8770 */                     if (item === undefined) {
/*  8771 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  8772 */                     }
/*  8773 */                     var $compareres538 = null;
/*  8774 */                     var $loadgbl539 = Sk.misceval.loadname('AST_SINGLE_FUNCTIONS', $gbl);
/*  8775 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(item, $loadgbl539, 'In', true));
/*  8776 */                     $blk = 12; /* allowing case fallthrough */
/*  8777 */                 case 12:
/*  8778 */                     /* --- function return or resume suspension --- */
/*  8779 */                     if ($ret && $ret.$isSuspension) {
/*  8780 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 282, 11);
/*  8781 */                     }
/*  8782 */                     $compareres538 = $ret;
/*  8783 */                     var $jfalse540 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8784 */                     if ($jfalse540) { /*test failed */
/*  8785 */                         $blk = 11;
/*  8786 */                         continue;
/*  8787 */                     }
/*  8788 */                     $blk = 11; /* allowing case fallthrough */
/*  8789 */                 case 11:
/*  8790 */                     /* --- done --- */
/*  8791 */                     var $jfalse541 = ($compareres538 === false || !Sk.misceval.isTrue($compareres538));
/*  8792 */                     if ($jfalse541) { /*test failed */
/*  8793 */                         $blk = 10;
/*  8794 */                         continue;
/*  8795 */                     }
/*  8796 */ 
/*  8797 */                     //
/*  8798 */                     // line 283:
/*  8799 */                     //             key = item[:-5]  # strip suffix '_name'
/*  8800 */                     //             ^
/*  8801 */                     //
/*  8802 */                     Sk.currLineNo = 283;
/*  8803 */                     Sk.currColNo = 12;
/*  8804 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8805 */                     $currLineNo = 283;
/*  8806 */                     $currColNo = 12;
/*  8807 */                     if (item === undefined) {
/*  8808 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  8809 */                     }
/*  8810 */                     var $slice542 = new Sk.builtins['slice'](new Sk.builtin.int_(0), new Sk.builtin.int_(-5), Sk.builtin.none.none$);
/*  8811 */                     $ret = Sk.abstr.objectGetItem(item, $slice542, true);
/*  8812 */                     $blk = 13; /* allowing case fallthrough */
/*  8813 */                 case 13:
/*  8814 */                     /* --- function return or resume suspension --- */
/*  8815 */                     if ($ret && $ret.$isSuspension) {
/*  8816 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  8817 */                     }
/*  8818 */                     var $lsubscr543 = $ret;
/*  8819 */                     key = $lsubscr543;
/*  8820 */                     $blk = 10; /* allowing case fallthrough */
/*  8821 */                 case 10:
/*  8822 */                     /* --- end of if --- */
/*  8823 */ 
/*  8824 */                     //
/*  8825 */                     // line 284:
/*  8826 */                     //         if item in AST_ARRAYS_OF_FUNCTIONS:
/*  8827 */                     //         ^
/*  8828 */                     //
/*  8829 */                     Sk.currLineNo = 284;
/*  8830 */                     Sk.currColNo = 8;
/*  8831 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8832 */                     $currLineNo = 284;
/*  8833 */                     $currColNo = 8;
/*  8834 */                     if (item === undefined) {
/*  8835 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  8836 */                     }
/*  8837 */                     var $compareres544 = null;
/*  8838 */                     var $loadgbl545 = Sk.misceval.loadname('AST_ARRAYS_OF_FUNCTIONS', $gbl);
/*  8839 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(item, $loadgbl545, 'In', true));
/*  8840 */                     $blk = 16; /* allowing case fallthrough */
/*  8841 */                 case 16:
/*  8842 */                     /* --- function return or resume suspension --- */
/*  8843 */                     if ($ret && $ret.$isSuspension) {
/*  8844 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 284, 11);
/*  8845 */                     }
/*  8846 */                     $compareres544 = $ret;
/*  8847 */                     var $jfalse546 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8848 */                     if ($jfalse546) { /*test failed */
/*  8849 */                         $blk = 15;
/*  8850 */                         continue;
/*  8851 */                     }
/*  8852 */                     $blk = 15; /* allowing case fallthrough */
/*  8853 */                 case 15:
/*  8854 */                     /* --- done --- */
/*  8855 */                     var $jfalse547 = ($compareres544 === false || !Sk.misceval.isTrue($compareres544));
/*  8856 */                     if ($jfalse547) { /*test failed */
/*  8857 */                         $blk = 14;
/*  8858 */                         continue;
/*  8859 */                     }
/*  8860 */ 
/*  8861 */                     //
/*  8862 */                     // line 285:
/*  8863 */                     //             key = item[:-6]  # strip suffix '_names'
/*  8864 */                     //             ^
/*  8865 */                     //
/*  8866 */                     Sk.currLineNo = 285;
/*  8867 */                     Sk.currColNo = 12;
/*  8868 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8869 */                     $currLineNo = 285;
/*  8870 */                     $currColNo = 12;
/*  8871 */                     if (item === undefined) {
/*  8872 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  8873 */                     }
/*  8874 */                     var $slice548 = new Sk.builtins['slice'](new Sk.builtin.int_(0), new Sk.builtin.int_(-6), Sk.builtin.none.none$);
/*  8875 */                     $ret = Sk.abstr.objectGetItem(item, $slice548, true);
/*  8876 */                     $blk = 17; /* allowing case fallthrough */
/*  8877 */                 case 17:
/*  8878 */                     /* --- function return or resume suspension --- */
/*  8879 */                     if ($ret && $ret.$isSuspension) {
/*  8880 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  8881 */                     }
/*  8882 */                     var $lsubscr549 = $ret;
/*  8883 */                     key = $lsubscr549;
/*  8884 */                     $blk = 14; /* allowing case fallthrough */
/*  8885 */                 case 14:
/*  8886 */                     /* --- end of if --- */
/*  8887 */ 
/*  8888 */                     //
/*  8889 */                     // line 287:
/*  8890 */                     //         """
/*  8891 */                     //         ^
/*  8892 */                     //
/*  8893 */                     Sk.currLineNo = 287;
/*  8894 */                     Sk.currColNo = 8;
/*  8895 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8896 */                     $currLineNo = 287;
/*  8897 */                     $currColNo = 8;
/*  8898 */                     var $str550 = new Sk.builtins['str']('\n        Non-ast node attributes\n        ');
/*  8899 */ 
/*  8900 */                     //
/*  8901 */                     // line 290:
/*  8902 */                     //         if key == 'next_tree':
/*  8903 */                     //         ^
/*  8904 */                     //
/*  8905 */                     Sk.currLineNo = 290;
/*  8906 */                     Sk.currColNo = 8;
/*  8907 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8908 */                     $currLineNo = 290;
/*  8909 */                     $currColNo = 8;
/*  8910 */                     if (key === undefined) {
/*  8911 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  8912 */                     }
/*  8913 */                     var $compareres551 = null;
/*  8914 */                     var $str552 = new Sk.builtins['str']('next_tree');
/*  8915 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(key, $str552, 'Eq', true));
/*  8916 */                     $blk = 20; /* allowing case fallthrough */
/*  8917 */                 case 20:
/*  8918 */                     /* --- function return or resume suspension --- */
/*  8919 */                     if ($ret && $ret.$isSuspension) {
/*  8920 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 290, 11);
/*  8921 */                     }
/*  8922 */                     $compareres551 = $ret;
/*  8923 */                     var $jfalse553 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  8924 */                     if ($jfalse553) { /*test failed */
/*  8925 */                         $blk = 19;
/*  8926 */                         continue;
/*  8927 */                     }
/*  8928 */                     $blk = 19; /* allowing case fallthrough */
/*  8929 */                 case 19:
/*  8930 */                     /* --- done --- */
/*  8931 */                     var $jfalse554 = ($compareres551 === false || !Sk.misceval.isTrue($compareres551));
/*  8932 */                     if ($jfalse554) { /*test failed */
/*  8933 */                         $blk = 18;
/*  8934 */                         continue;
/*  8935 */                     }
/*  8936 */ 
/*  8937 */                     //
/*  8938 */                     // line 291:
/*  8939 */                     //             return self.get_next_tree()
/*  8940 */                     //             ^
/*  8941 */                     //
/*  8942 */                     Sk.currLineNo = 291;
/*  8943 */                     Sk.currColNo = 12;
/*  8944 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8945 */                     $currLineNo = 291;
/*  8946 */                     $currColNo = 12;
/*  8947 */                     if (self === undefined) {
/*  8948 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  8949 */                     }
/*  8950 */                     $ret = Sk.abstr.gattr(self, 'get_next_tree', true);
/*  8951 */                     $blk = 21; /* allowing case fallthrough */
/*  8952 */                 case 21:
/*  8953 */                     /* --- function return or resume suspension --- */
/*  8954 */                     if ($ret && $ret.$isSuspension) {
/*  8955 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 291, 19);
/*  8956 */                     }
/*  8957 */                     var $lattr555 = $ret;
/*  8958 */                     $ret;
/*  8959 */                     $ret = Sk.misceval.callsimOrSuspend($lattr555);
/*  8960 */                     $blk = 22; /* allowing case fallthrough */
/*  8961 */                 case 22:
/*  8962 */                     /* --- function return or resume suspension --- */
/*  8963 */                     if ($ret && $ret.$isSuspension) {
/*  8964 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 291, 19);
/*  8965 */                     }
/*  8966 */                     var $call556 = $ret;
/*  8967 */ 
/*  8968 */                     //
/*  8969 */                     // line 291:
/*  8970 */                     //             return self.get_next_tree()
/*  8971 */                     //                    ^
/*  8972 */                     //
/*  8973 */                     Sk.currLineNo = 291;
/*  8974 */                     Sk.currColNo = 19;
/*  8975 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8976 */                     $currLineNo = 291;
/*  8977 */                     $currColNo = 19;
/*  8978 */                     return $call556;
/*  8979 */                     $blk = 18; /* allowing case fallthrough */
/*  8980 */                 case 18:
/*  8981 */                     /* --- end of if --- */
/*  8982 */ 
/*  8983 */                     //
/*  8984 */                     // line 292:
/*  8985 */                     //         if key == 'ast_name':
/*  8986 */                     //         ^
/*  8987 */                     //
/*  8988 */                     Sk.currLineNo = 292;
/*  8989 */                     Sk.currColNo = 8;
/*  8990 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  8991 */                     $currLineNo = 292;
/*  8992 */                     $currColNo = 8;
/*  8993 */                     if (key === undefined) {
/*  8994 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  8995 */                     }
/*  8996 */                     var $compareres557 = null;
/*  8997 */                     var $str558 = new Sk.builtins['str']('ast_name');
/*  8998 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(key, $str558, 'Eq', true));
/*  8999 */                     $blk = 26; /* allowing case fallthrough */
/*  9000 */                 case 26:
/*  9001 */                     /* --- function return or resume suspension --- */
/*  9002 */                     if ($ret && $ret.$isSuspension) {
/*  9003 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 292, 11);
/*  9004 */                     }
/*  9005 */                     $compareres557 = $ret;
/*  9006 */                     var $jfalse559 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9007 */                     if ($jfalse559) { /*test failed */
/*  9008 */                         $blk = 25;
/*  9009 */                         continue;
/*  9010 */                     }
/*  9011 */                     $blk = 25; /* allowing case fallthrough */
/*  9012 */                 case 25:
/*  9013 */                     /* --- done --- */
/*  9014 */                     var $jfalse560 = ($compareres557 === false || !Sk.misceval.isTrue($compareres557));
/*  9015 */                     if ($jfalse560) { /*test failed */
/*  9016 */                         $blk = 24;
/*  9017 */                         continue;
/*  9018 */                     }
/*  9019 */ 
/*  9020 */                     //
/*  9021 */                     // line 293:
/*  9022 */                     //             return node_name
/*  9023 */                     //             ^
/*  9024 */                     //
/*  9025 */                     Sk.currLineNo = 293;
/*  9026 */                     Sk.currColNo = 12;
/*  9027 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9028 */                     $currLineNo = 293;
/*  9029 */                     $currColNo = 12;
/*  9030 */                     if (node_name === undefined) {
/*  9031 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_name\' referenced before assignment');
/*  9032 */                     }
/*  9033 */                     return node_name;
/*  9034 */                     $blk = 23; /* allowing case fallthrough */
/*  9035 */                 case 23:
/*  9036 */                     /* --- end of if --- */
/*  9037 */                     return Sk.builtin.none.none$;
/*  9038 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9039 */                 case 24:
/*  9040 */                     /* --- next branch of if --- */
/*  9041 */ 
/*  9042 */                     //
/*  9043 */                     // line 294:
/*  9044 */                     //         elif key == '_name':
/*  9045 */                     //              ^
/*  9046 */                     //
/*  9047 */                     Sk.currLineNo = 294;
/*  9048 */                     Sk.currColNo = 13;
/*  9049 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9050 */                     $currLineNo = 294;
/*  9051 */                     $currColNo = 13;
/*  9052 */                     if (key === undefined) {
/*  9053 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  9054 */                     }
/*  9055 */                     var $compareres561 = null;
/*  9056 */                     var $str562 = new Sk.builtins['str']('_name');
/*  9057 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(key, $str562, 'Eq', true));
/*  9058 */                     $blk = 30; /* allowing case fallthrough */
/*  9059 */                 case 30:
/*  9060 */                     /* --- function return or resume suspension --- */
/*  9061 */                     if ($ret && $ret.$isSuspension) {
/*  9062 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 294, 13);
/*  9063 */                     }
/*  9064 */                     $compareres561 = $ret;
/*  9065 */                     var $jfalse563 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9066 */                     if ($jfalse563) { /*test failed */
/*  9067 */                         $blk = 29;
/*  9068 */                         continue;
/*  9069 */                     }
/*  9070 */                     $blk = 29; /* allowing case fallthrough */
/*  9071 */                 case 29:
/*  9072 */                     /* --- done --- */
/*  9073 */                     var $jfalse564 = ($compareres561 === false || !Sk.misceval.isTrue($compareres561));
/*  9074 */                     if ($jfalse564) { /*test failed */
/*  9075 */                         $blk = 28;
/*  9076 */                         continue;
/*  9077 */                     }
/*  9078 */ 
/*  9079 */                     //
/*  9080 */                     // line 295:
/*  9081 */                     //             return self.astNode.name
/*  9082 */                     //             ^
/*  9083 */                     //
/*  9084 */                     Sk.currLineNo = 295;
/*  9085 */                     Sk.currColNo = 12;
/*  9086 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9087 */                     $currLineNo = 295;
/*  9088 */                     $currColNo = 12;
/*  9089 */                     if (self === undefined) {
/*  9090 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9091 */                     }
/*  9092 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/*  9093 */                     $blk = 31; /* allowing case fallthrough */
/*  9094 */                 case 31:
/*  9095 */                     /* --- function return or resume suspension --- */
/*  9096 */                     if ($ret && $ret.$isSuspension) {
/*  9097 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 295, 19);
/*  9098 */                     }
/*  9099 */                     var $lattr565 = $ret;
/*  9100 */                     $ret = Sk.abstr.gattr($lattr565, 'name', true);
/*  9101 */                     $blk = 32; /* allowing case fallthrough */
/*  9102 */                 case 32:
/*  9103 */                     /* --- function return or resume suspension --- */
/*  9104 */                     if ($ret && $ret.$isSuspension) {
/*  9105 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 295, 19);
/*  9106 */                     }
/*  9107 */                     var $lattr566 = $ret;
/*  9108 */                     return $lattr566;
/*  9109 */                     $blk = 27; /* allowing case fallthrough */
/*  9110 */                 case 27:
/*  9111 */                     /* --- end of if --- */
/*  9112 */                     $blk = 23; /* jump */
/*  9113 */                     continue;
/*  9114 */                 case 28:
/*  9115 */                     /* --- next branch of if --- */
/*  9116 */ 
/*  9117 */                     //
/*  9118 */                     // line 296:
/*  9119 */                     //         elif key == 'ast_node':
/*  9120 */                     //              ^
/*  9121 */                     //
/*  9122 */                     Sk.currLineNo = 296;
/*  9123 */                     Sk.currColNo = 13;
/*  9124 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9125 */                     $currLineNo = 296;
/*  9126 */                     $currColNo = 13;
/*  9127 */                     if (key === undefined) {
/*  9128 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  9129 */                     }
/*  9130 */                     var $compareres567 = null;
/*  9131 */                     var $str568 = new Sk.builtins['str']('ast_node');
/*  9132 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(key, $str568, 'Eq', true));
/*  9133 */                     $blk = 36; /* allowing case fallthrough */
/*  9134 */                 case 36:
/*  9135 */                     /* --- function return or resume suspension --- */
/*  9136 */                     if ($ret && $ret.$isSuspension) {
/*  9137 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 296, 13);
/*  9138 */                     }
/*  9139 */                     $compareres567 = $ret;
/*  9140 */                     var $jfalse569 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9141 */                     if ($jfalse569) { /*test failed */
/*  9142 */                         $blk = 35;
/*  9143 */                         continue;
/*  9144 */                     }
/*  9145 */                     $blk = 35; /* allowing case fallthrough */
/*  9146 */                 case 35:
/*  9147 */                     /* --- done --- */
/*  9148 */                     var $jfalse570 = ($compareres567 === false || !Sk.misceval.isTrue($compareres567));
/*  9149 */                     if ($jfalse570) { /*test failed */
/*  9150 */                         $blk = 34;
/*  9151 */                         continue;
/*  9152 */                     }
/*  9153 */ 
/*  9154 */                     //
/*  9155 */                     // line 297:
/*  9156 */                     //             return self.astNode
/*  9157 */                     //             ^
/*  9158 */                     //
/*  9159 */                     Sk.currLineNo = 297;
/*  9160 */                     Sk.currColNo = 12;
/*  9161 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9162 */                     $currLineNo = 297;
/*  9163 */                     $currColNo = 12;
/*  9164 */                     if (self === undefined) {
/*  9165 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9166 */                     }
/*  9167 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/*  9168 */                     $blk = 37; /* allowing case fallthrough */
/*  9169 */                 case 37:
/*  9170 */                     /* --- function return or resume suspension --- */
/*  9171 */                     if ($ret && $ret.$isSuspension) {
/*  9172 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 297, 19);
/*  9173 */                     }
/*  9174 */                     var $lattr571 = $ret;
/*  9175 */                     return $lattr571;
/*  9176 */                     $blk = 33; /* allowing case fallthrough */
/*  9177 */                 case 33:
/*  9178 */                     /* --- end of if --- */
/*  9179 */                     $blk = 27; /* jump */
/*  9180 */                     continue;
/*  9181 */                 case 34:
/*  9182 */                     /* --- next branch of if --- */
/*  9183 */ 
/*  9184 */                     //
/*  9185 */                     // line 299:
/*  9186 */                     //             if hasattr(self.astNode, key):
/*  9187 */                     //             ^
/*  9188 */                     //
/*  9189 */                     Sk.currLineNo = 299;
/*  9190 */                     Sk.currColNo = 12;
/*  9191 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9192 */                     $currLineNo = 299;
/*  9193 */                     $currColNo = 12;
/*  9194 */                     var $loadgbl572 = Sk.misceval.loadname('hasattr', $gbl);
/*  9195 */                     if (self === undefined) {
/*  9196 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9197 */                     }
/*  9198 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/*  9199 */                     $blk = 40; /* allowing case fallthrough */
/*  9200 */                 case 40:
/*  9201 */                     /* --- function return or resume suspension --- */
/*  9202 */                     if ($ret && $ret.$isSuspension) {
/*  9203 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 299, 23);
/*  9204 */                     }
/*  9205 */                     var $lattr573 = $ret;
/*  9206 */                     if (key === undefined) {
/*  9207 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  9208 */                     }
/*  9209 */                     $ret;
/*  9210 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl572, $lattr573, key);
/*  9211 */                     $blk = 41; /* allowing case fallthrough */
/*  9212 */                 case 41:
/*  9213 */                     /* --- function return or resume suspension --- */
/*  9214 */                     if ($ret && $ret.$isSuspension) {
/*  9215 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 299, 15);
/*  9216 */                     }
/*  9217 */                     var $call574 = $ret;
/*  9218 */ 
/*  9219 */                     //
/*  9220 */                     // line 299:
/*  9221 */                     //             if hasattr(self.astNode, key):
/*  9222 */                     //                ^
/*  9223 */                     //
/*  9224 */                     Sk.currLineNo = 299;
/*  9225 */                     Sk.currColNo = 15;
/*  9226 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9227 */                     $currLineNo = 299;
/*  9228 */                     $currColNo = 15;
/*  9229 */                     var $jfalse575 = ($call574 === false || !Sk.misceval.isTrue($call574));
/*  9230 */                     if ($jfalse575) { /*test failed */
/*  9231 */                         $blk = 39;
/*  9232 */                         continue;
/*  9233 */                     }
/*  9234 */ 
/*  9235 */                     //
/*  9236 */                     // line 301:
/*  9237 */                     //                 try:
/*  9238 */                     //                 ^
/*  9239 */                     //
/*  9240 */                     Sk.currLineNo = 301;
/*  9241 */                     Sk.currColNo = 16;
/*  9242 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9243 */                     $currLineNo = 301;
/*  9244 */                     $currColNo = 16;
/*  9245 */                     $exc.push(42);
/*  9246 */ 
/*  9247 */                     //
/*  9248 */                     // line 302:
/*  9249 */                     //                     field = self.astNode.__getattribute__(key)
/*  9250 */                     //                     ^
/*  9251 */                     //
/*  9252 */                     Sk.currLineNo = 302;
/*  9253 */                     Sk.currColNo = 20;
/*  9254 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9255 */                     $currLineNo = 302;
/*  9256 */                     $currColNo = 20;
/*  9257 */                     if (self === undefined) {
/*  9258 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9259 */                     }
/*  9260 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/*  9261 */                     $blk = 46; /* allowing case fallthrough */
/*  9262 */                 case 46:
/*  9263 */                     /* --- function return or resume suspension --- */
/*  9264 */                     if ($ret && $ret.$isSuspension) {
/*  9265 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 302, 28);
/*  9266 */                     }
/*  9267 */                     var $lattr576 = $ret;
/*  9268 */                     $ret = Sk.abstr.gattr($lattr576, '__getattribute__', true);
/*  9269 */                     $blk = 47; /* allowing case fallthrough */
/*  9270 */                 case 47:
/*  9271 */                     /* --- function return or resume suspension --- */
/*  9272 */                     if ($ret && $ret.$isSuspension) {
/*  9273 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 302, 28);
/*  9274 */                     }
/*  9275 */                     var $lattr577 = $ret;
/*  9276 */                     if (key === undefined) {
/*  9277 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  9278 */                     }
/*  9279 */                     $ret;
/*  9280 */                     $ret = Sk.misceval.callsimOrSuspend($lattr577, key);
/*  9281 */                     $blk = 48; /* allowing case fallthrough */
/*  9282 */                 case 48:
/*  9283 */                     /* --- function return or resume suspension --- */
/*  9284 */                     if ($ret && $ret.$isSuspension) {
/*  9285 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 302, 28);
/*  9286 */                     }
/*  9287 */                     var $call578 = $ret;
/*  9288 */ 
/*  9289 */                     //
/*  9290 */                     // line 302:
/*  9291 */                     //                     field = self.astNode.__getattribute__(key)
/*  9292 */                     //                             ^
/*  9293 */                     //
/*  9294 */                     Sk.currLineNo = 302;
/*  9295 */                     Sk.currColNo = 28;
/*  9296 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9297 */                     $currLineNo = 302;
/*  9298 */                     $currColNo = 28;
/*  9299 */                     field = $call578;
/*  9300 */                     $exc.pop();
/*  9301 */                     $blk = 44; /* allowing case fallthrough */
/*  9302 */                 case 44:
/*  9303 */                     /* --- orelse --- */
/*  9304 */                     $blk = 45; /* allowing case fallthrough */
/*  9305 */                 case 45:
/*  9306 */                     /* --- end --- */
/*  9307 */ 
/*  9308 */                     //
/*  9309 */                     // line 305:
/*  9310 */                     //                 if node_name == "Assign" and item != key:
/*  9311 */                     //                 ^
/*  9312 */                     //
/*  9313 */                     Sk.currLineNo = 305;
/*  9314 */                     Sk.currColNo = 16;
/*  9315 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9316 */                     $currLineNo = 305;
/*  9317 */                     $currColNo = 16;
/*  9318 */                     if (node_name === undefined) {
/*  9319 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_name\' referenced before assignment');
/*  9320 */                     }
/*  9321 */                     var $compareres582 = null;
/*  9322 */                     var $str583 = new Sk.builtins['str']('Assign');
/*  9323 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(node_name, $str583, 'Eq', true));
/*  9324 */                     $blk = 53; /* allowing case fallthrough */
/*  9325 */                 case 53:
/*  9326 */                     /* --- function return or resume suspension --- */
/*  9327 */                     if ($ret && $ret.$isSuspension) {
/*  9328 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 305, 19);
/*  9329 */                     }
/*  9330 */                     $compareres582 = $ret;
/*  9331 */                     var $jfalse584 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9332 */                     if ($jfalse584) { /*test failed */
/*  9333 */                         $blk = 52;
/*  9334 */                         continue;
/*  9335 */                     }
/*  9336 */                     $blk = 52; /* allowing case fallthrough */
/*  9337 */                 case 52:
/*  9338 */                     /* --- done --- */
/*  9339 */                     var $boolopsucc585 = $compareres582;
/*  9340 */                     $boolopsucc585 = $compareres582;
/*  9341 */                     var $jfalse586 = ($compareres582 === false || !Sk.misceval.isTrue($compareres582));
/*  9342 */                     if ($jfalse586) { /*test failed */
/*  9343 */                         $blk = 51;
/*  9344 */                         continue;
/*  9345 */                     }
/*  9346 */                     if (item === undefined) {
/*  9347 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  9348 */                     }
/*  9349 */                     var $compareres587 = null;
/*  9350 */                     if (key === undefined) {
/*  9351 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  9352 */                     }
/*  9353 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(item, key, 'NotEq', true));
/*  9354 */                     $blk = 55; /* allowing case fallthrough */
/*  9355 */                 case 55:
/*  9356 */                     /* --- function return or resume suspension --- */
/*  9357 */                     if ($ret && $ret.$isSuspension) {
/*  9358 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 305, 45);
/*  9359 */                     }
/*  9360 */                     $compareres587 = $ret;
/*  9361 */                     var $jfalse588 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9362 */                     if ($jfalse588) { /*test failed */
/*  9363 */                         $blk = 54;
/*  9364 */                         continue;
/*  9365 */                     }
/*  9366 */                     $blk = 54; /* allowing case fallthrough */
/*  9367 */                 case 54:
/*  9368 */                     /* --- done --- */
/*  9369 */                     $boolopsucc585 = $compareres587;
/*  9370 */                     var $jfalse589 = ($compareres587 === false || !Sk.misceval.isTrue($compareres587));
/*  9371 */                     if ($jfalse589) { /*test failed */
/*  9372 */                         $blk = 51;
/*  9373 */                         continue;
/*  9374 */                     }
/*  9375 */                     $blk = 51; /* allowing case fallthrough */
/*  9376 */                 case 51:
/*  9377 */                     /* --- end of boolop --- */
/*  9378 */                     var $jfalse590 = ($boolopsucc585 === false || !Sk.misceval.isTrue($boolopsucc585));
/*  9379 */                     if ($jfalse590) { /*test failed */
/*  9380 */                         $blk = 50;
/*  9381 */                         continue;
/*  9382 */                     }
/*  9383 */ 
/*  9384 */                     //
/*  9385 */                     // line 306:
/*  9386 */                     //                     if item == "target":
/*  9387 */                     //                     ^
/*  9388 */                     //
/*  9389 */                     Sk.currLineNo = 306;
/*  9390 */                     Sk.currColNo = 20;
/*  9391 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9392 */                     $currLineNo = 306;
/*  9393 */                     $currColNo = 20;
/*  9394 */                     if (item === undefined) {
/*  9395 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  9396 */                     }
/*  9397 */                     var $compareres591 = null;
/*  9398 */                     var $str592 = new Sk.builtins['str']('target');
/*  9399 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(item, $str592, 'Eq', true));
/*  9400 */                     $blk = 59; /* allowing case fallthrough */
/*  9401 */                 case 59:
/*  9402 */                     /* --- function return or resume suspension --- */
/*  9403 */                     if ($ret && $ret.$isSuspension) {
/*  9404 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 306, 23);
/*  9405 */                     }
/*  9406 */                     $compareres591 = $ret;
/*  9407 */                     var $jfalse593 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9408 */                     if ($jfalse593) { /*test failed */
/*  9409 */                         $blk = 58;
/*  9410 */                         continue;
/*  9411 */                     }
/*  9412 */                     $blk = 58; /* allowing case fallthrough */
/*  9413 */                 case 58:
/*  9414 */                     /* --- done --- */
/*  9415 */                     var $jfalse594 = ($compareres591 === false || !Sk.misceval.isTrue($compareres591));
/*  9416 */                     if ($jfalse594) { /*test failed */
/*  9417 */                         $blk = 57;
/*  9418 */                         continue;
/*  9419 */                     }
/*  9420 */ 
/*  9421 */                     //
/*  9422 */                     // line 307:
/*  9423 */                     //                         return field[0].cait_node  # Get's the relevant ast node
/*  9424 */                     //                         ^
/*  9425 */                     //
/*  9426 */                     Sk.currLineNo = 307;
/*  9427 */                     Sk.currColNo = 24;
/*  9428 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9429 */                     $currLineNo = 307;
/*  9430 */                     $currColNo = 24;
/*  9431 */                     if (field === undefined) {
/*  9432 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/*  9433 */                     }
/*  9434 */                     $ret = Sk.abstr.objectGetItem(field, new Sk.builtin.int_(0), true);
/*  9435 */                     $blk = 60; /* allowing case fallthrough */
/*  9436 */                 case 60:
/*  9437 */                     /* --- function return or resume suspension --- */
/*  9438 */                     if ($ret && $ret.$isSuspension) {
/*  9439 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/*  9440 */                     }
/*  9441 */                     var $lsubscr595 = $ret;
/*  9442 */                     $ret = Sk.abstr.gattr($lsubscr595, 'cait_node', true);
/*  9443 */                     $blk = 61; /* allowing case fallthrough */
/*  9444 */                 case 61:
/*  9445 */                     /* --- function return or resume suspension --- */
/*  9446 */                     if ($ret && $ret.$isSuspension) {
/*  9447 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 307, 31);
/*  9448 */                     }
/*  9449 */                     var $lattr596 = $ret;
/*  9450 */                     return $lattr596;
/*  9451 */                     $blk = 56; /* allowing case fallthrough */
/*  9452 */                 case 56:
/*  9453 */                     /* --- end of if --- */
/*  9454 */                     $blk = 49; /* allowing case fallthrough */
/*  9455 */                 case 49:
/*  9456 */                     /* --- end of if --- */
/*  9457 */                     $blk = 38; /* allowing case fallthrough */
/*  9458 */                 case 38:
/*  9459 */                     /* --- end of if --- */
/*  9460 */                     $blk = 33; /* jump */
/*  9461 */                     continue;
/*  9462 */                 case 39:
/*  9463 */                     /* --- next branch of if --- */
/*  9464 */ 
/*  9465 */                     //
/*  9466 */                     // line 334:
/*  9467 */                     //                 return self.get_clashing_attr(key)
/*  9468 */                     //                 ^
/*  9469 */                     //
/*  9470 */                     Sk.currLineNo = 334;
/*  9471 */                     Sk.currColNo = 16;
/*  9472 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9473 */                     $currLineNo = 334;
/*  9474 */                     $currColNo = 16;
/*  9475 */                     if (self === undefined) {
/*  9476 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  9477 */                     }
/*  9478 */                     $ret = Sk.abstr.gattr(self, 'get_clashing_attr', true);
/*  9479 */                     $blk = 110; /* allowing case fallthrough */
/*  9480 */                 case 110:
/*  9481 */                     /* --- function return or resume suspension --- */
/*  9482 */                     if ($ret && $ret.$isSuspension) {
/*  9483 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 334, 23);
/*  9484 */                     }
/*  9485 */                     var $lattr649 = $ret;
/*  9486 */                     if (key === undefined) {
/*  9487 */                         throw new Sk.builtin.UnboundLocalError('local variable \'key\' referenced before assignment');
/*  9488 */                     }
/*  9489 */                     $ret;
/*  9490 */                     $ret = Sk.misceval.callsimOrSuspend($lattr649, key);
/*  9491 */                     $blk = 111; /* allowing case fallthrough */
/*  9492 */                 case 111:
/*  9493 */                     /* --- function return or resume suspension --- */
/*  9494 */                     if ($ret && $ret.$isSuspension) {
/*  9495 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 334, 23);
/*  9496 */                     }
/*  9497 */                     var $call650 = $ret;
/*  9498 */ 
/*  9499 */                     //
/*  9500 */                     // line 334:
/*  9501 */                     //                 return self.get_clashing_attr(key)
/*  9502 */                     //                        ^
/*  9503 */                     //
/*  9504 */                     Sk.currLineNo = 334;
/*  9505 */                     Sk.currColNo = 23;
/*  9506 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9507 */                     $currLineNo = 334;
/*  9508 */                     $currColNo = 23;
/*  9509 */                     return $call650;
/*  9510 */                     $blk = 38; /* jump */
/*  9511 */                     continue;
/*  9512 */                 case 42:
/*  9513 */                     /* --- except_0_ --- */
/*  9514 */                     var $loadgbl579 = Sk.misceval.loadname('Exception', $gbl);
/*  9515 */                     var $instance580 = Sk.misceval.isTrue(Sk.builtin.isinstance($err, $loadgbl579));
/*  9516 */                     var $jfalse581 = ($instance580 === false || !Sk.misceval.isTrue($instance580));
/*  9517 */                     if ($jfalse581) { /*test failed */
/*  9518 */                         $blk = 43;
/*  9519 */                         continue;
/*  9520 */                     }
/*  9521 */ 
/*  9522 */                     //
/*  9523 */                     // line 304:
/*  9524 */                     //                     field = None
/*  9525 */                     //                     ^
/*  9526 */                     //
/*  9527 */                     Sk.currLineNo = 304;
/*  9528 */                     Sk.currColNo = 20;
/*  9529 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9530 */                     $currLineNo = 304;
/*  9531 */                     $currColNo = 20;
/*  9532 */                     field = Sk.builtin.none.none$;
/*  9533 */                     $blk = 45; /* jump */
/*  9534 */                     continue;
/*  9535 */                 case 43:
/*  9536 */                     /* --- unhandled --- */
/*  9537 */                     throw $err;
/*  9538 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  9539 */                 case 50:
/*  9540 */                     /* --- next branch of if --- */
/*  9541 */ 
/*  9542 */                     //
/*  9543 */                     // line 315:
/*  9544 */                     //                 elif item in AST_SINGLE_FUNCTIONS:
/*  9545 */                     //                      ^
/*  9546 */                     //
/*  9547 */                     Sk.currLineNo = 315;
/*  9548 */                     Sk.currColNo = 21;
/*  9549 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9550 */                     $currLineNo = 315;
/*  9551 */                     $currColNo = 21;
/*  9552 */                     if (item === undefined) {
/*  9553 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  9554 */                     }
/*  9555 */                     var $compareres613 = null;
/*  9556 */                     var $loadgbl614 = Sk.misceval.loadname('AST_SINGLE_FUNCTIONS', $gbl);
/*  9557 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(item, $loadgbl614, 'In', true));
/*  9558 */                     $blk = 78; /* allowing case fallthrough */
/*  9559 */                 case 78:
/*  9560 */                     /* --- function return or resume suspension --- */
/*  9561 */                     if ($ret && $ret.$isSuspension) {
/*  9562 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 315, 21);
/*  9563 */                     }
/*  9564 */                     $compareres613 = $ret;
/*  9565 */                     var $jfalse615 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9566 */                     if ($jfalse615) { /*test failed */
/*  9567 */                         $blk = 77;
/*  9568 */                         continue;
/*  9569 */                     }
/*  9570 */                     $blk = 77; /* allowing case fallthrough */
/*  9571 */                 case 77:
/*  9572 */                     /* --- done --- */
/*  9573 */                     var $jfalse616 = ($compareres613 === false || !Sk.misceval.isTrue($compareres613));
/*  9574 */                     if ($jfalse616) { /*test failed */
/*  9575 */                         $blk = 76;
/*  9576 */                         continue;
/*  9577 */                     }
/*  9578 */ 
/*  9579 */                     //
/*  9580 */                     // line 316:
/*  9581 */                     //                     return type(field).__name__
/*  9582 */                     //                     ^
/*  9583 */                     //
/*  9584 */                     Sk.currLineNo = 316;
/*  9585 */                     Sk.currColNo = 20;
/*  9586 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9587 */                     $currLineNo = 316;
/*  9588 */                     $currColNo = 20;
/*  9589 */                     var $loadgbl617 = Sk.misceval.loadname('type', $gbl);
/*  9590 */                     if (field === undefined) {
/*  9591 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/*  9592 */                     }
/*  9593 */                     $ret;
/*  9594 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl617, field);
/*  9595 */                     $blk = 79; /* allowing case fallthrough */
/*  9596 */                 case 79:
/*  9597 */                     /* --- function return or resume suspension --- */
/*  9598 */                     if ($ret && $ret.$isSuspension) {
/*  9599 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 316, 27);
/*  9600 */                     }
/*  9601 */                     var $call618 = $ret;
/*  9602 */ 
/*  9603 */                     //
/*  9604 */                     // line 316:
/*  9605 */                     //                     return type(field).__name__
/*  9606 */                     //                            ^
/*  9607 */                     //
/*  9608 */                     Sk.currLineNo = 316;
/*  9609 */                     Sk.currColNo = 27;
/*  9610 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9611 */                     $currLineNo = 316;
/*  9612 */                     $currColNo = 27;
/*  9613 */                     $ret = Sk.abstr.gattr($call618, '__name__', true);
/*  9614 */                     $blk = 80; /* allowing case fallthrough */
/*  9615 */                 case 80:
/*  9616 */                     /* --- function return or resume suspension --- */
/*  9617 */                     if ($ret && $ret.$isSuspension) {
/*  9618 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 316, 27);
/*  9619 */                     }
/*  9620 */                     var $lattr619 = $ret;
/*  9621 */                     return $lattr619;
/*  9622 */                     $blk = 75; /* allowing case fallthrough */
/*  9623 */                 case 75:
/*  9624 */                     /* --- end of if --- */
/*  9625 */                     $blk = 49; /* jump */
/*  9626 */                     continue;
/*  9627 */                 case 57:
/*  9628 */                     /* --- next branch of if --- */
/*  9629 */ 
/*  9630 */                     //
/*  9631 */                     // line 308:
/*  9632 */                     //                     elif item == "targets" and isinstance(field, list):
/*  9633 */                     //                          ^
/*  9634 */                     //
/*  9635 */                     Sk.currLineNo = 308;
/*  9636 */                     Sk.currColNo = 25;
/*  9637 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9638 */                     $currLineNo = 308;
/*  9639 */                     $currColNo = 25;
/*  9640 */                     if (item === undefined) {
/*  9641 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  9642 */                     }
/*  9643 */                     var $compareres597 = null;
/*  9644 */                     var $str598 = new Sk.builtins['str']('targets');
/*  9645 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(item, $str598, 'Eq', true));
/*  9646 */                     $blk = 66; /* allowing case fallthrough */
/*  9647 */                 case 66:
/*  9648 */                     /* --- function return or resume suspension --- */
/*  9649 */                     if ($ret && $ret.$isSuspension) {
/*  9650 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 308, 25);
/*  9651 */                     }
/*  9652 */                     $compareres597 = $ret;
/*  9653 */                     var $jfalse599 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9654 */                     if ($jfalse599) { /*test failed */
/*  9655 */                         $blk = 65;
/*  9656 */                         continue;
/*  9657 */                     }
/*  9658 */                     $blk = 65; /* allowing case fallthrough */
/*  9659 */                 case 65:
/*  9660 */                     /* --- done --- */
/*  9661 */                     var $boolopsucc600 = $compareres597;
/*  9662 */                     $boolopsucc600 = $compareres597;
/*  9663 */                     var $jfalse601 = ($compareres597 === false || !Sk.misceval.isTrue($compareres597));
/*  9664 */                     if ($jfalse601) { /*test failed */
/*  9665 */                         $blk = 64;
/*  9666 */                         continue;
/*  9667 */                     }
/*  9668 */                     var $loadgbl602 = Sk.misceval.loadname('isinstance', $gbl);
/*  9669 */                     if (field === undefined) {
/*  9670 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/*  9671 */                     }
/*  9672 */                     var $loadgbl603 = Sk.misceval.loadname('list', $gbl);
/*  9673 */                     $ret;
/*  9674 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl602, field, $loadgbl603);
/*  9675 */                     $blk = 67; /* allowing case fallthrough */
/*  9676 */                 case 67:
/*  9677 */                     /* --- function return or resume suspension --- */
/*  9678 */                     if ($ret && $ret.$isSuspension) {
/*  9679 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 308, 47);
/*  9680 */                     }
/*  9681 */                     var $call604 = $ret;
/*  9682 */ 
/*  9683 */                     //
/*  9684 */                     // line 308:
/*  9685 */                     //                     elif item == "targets" and isinstance(field, list):
/*  9686 */                     //                                                ^
/*  9687 */                     //
/*  9688 */                     Sk.currLineNo = 308;
/*  9689 */                     Sk.currColNo = 47;
/*  9690 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9691 */                     $currLineNo = 308;
/*  9692 */                     $currColNo = 47;
/*  9693 */                     $boolopsucc600 = $call604;
/*  9694 */                     var $jfalse605 = ($call604 === false || !Sk.misceval.isTrue($call604));
/*  9695 */                     if ($jfalse605) { /*test failed */
/*  9696 */                         $blk = 64;
/*  9697 */                         continue;
/*  9698 */                     }
/*  9699 */                     $blk = 64; /* allowing case fallthrough */
/*  9700 */                 case 64:
/*  9701 */                     /* --- end of boolop --- */
/*  9702 */                     var $jfalse606 = ($boolopsucc600 === false || !Sk.misceval.isTrue($boolopsucc600));
/*  9703 */                     if ($jfalse606) { /*test failed */
/*  9704 */                         $blk = 63;
/*  9705 */                         continue;
/*  9706 */                     }
/*  9707 */ 
/*  9708 */                     //
/*  9709 */                     // line 309:
/*  9710 */                     //                         easy_array = []
/*  9711 */                     //                         ^
/*  9712 */                     //
/*  9713 */                     Sk.currLineNo = 309;
/*  9714 */                     Sk.currColNo = 24;
/*  9715 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9716 */                     $currLineNo = 309;
/*  9717 */                     $currColNo = 24;
/*  9718 */                     var $loadlist607 = new Sk.builtins['list']([]);
/*  9719 */                     easy_array = $loadlist607;
/*  9720 */ 
/*  9721 */                     //
/*  9722 */                     // line 310:
/*  9723 */                     //                         for node in field:
/*  9724 */                     //                         ^
/*  9725 */                     //
/*  9726 */                     Sk.currLineNo = 310;
/*  9727 */                     Sk.currColNo = 24;
/*  9728 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9729 */                     $currLineNo = 310;
/*  9730 */                     $currColNo = 24;
/*  9731 */                     if (field === undefined) {
/*  9732 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/*  9733 */                     }
/*  9734 */                     var $iter608 = Sk.abstr.iter(field);
/*  9735 */                     $blk = 68; /* allowing case fallthrough */
/*  9736 */                 case 68:
/*  9737 */                     /* --- for start --- */
/*  9738 */                     $ret = Sk.abstr.iternext($iter608, true);
/*  9739 */                     $blk = 71; /* allowing case fallthrough */
/*  9740 */                 case 71:
/*  9741 */                     /* --- function return or resume suspension --- */
/*  9742 */                     if ($ret && $ret.$isSuspension) {
/*  9743 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 310, 24);
/*  9744 */                     }
/*  9745 */                     var $next609 = $ret;
/*  9746 */                     if ($next609 === undefined) {
/*  9747 */                         $blk = 69;
/*  9748 */                         continue;
/*  9749 */                     }
/*  9750 */                     node = $next609;
/*  9751 */ 
/*  9752 */                     //
/*  9753 */                     // line 311:
/*  9754 */                     //                             easy_array.append(node.cait_node)
/*  9755 */                     //                             ^
/*  9756 */                     //
/*  9757 */                     Sk.currLineNo = 311;
/*  9758 */                     Sk.currColNo = 28;
/*  9759 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9760 */                     $currLineNo = 311;
/*  9761 */                     $currColNo = 28;
/*  9762 */                     if (easy_array === undefined) {
/*  9763 */                         throw new Sk.builtin.UnboundLocalError('local variable \'easy_array\' referenced before assignment');
/*  9764 */                     }
/*  9765 */                     $ret = Sk.abstr.gattr(easy_array, 'append', true);
/*  9766 */                     $blk = 72; /* allowing case fallthrough */
/*  9767 */                 case 72:
/*  9768 */                     /* --- function return or resume suspension --- */
/*  9769 */                     if ($ret && $ret.$isSuspension) {
/*  9770 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 311, 28);
/*  9771 */                     }
/*  9772 */                     var $lattr610 = $ret;
/*  9773 */                     if (node === undefined) {
/*  9774 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/*  9775 */                     }
/*  9776 */                     $ret = Sk.abstr.gattr(node, 'cait_node', true);
/*  9777 */                     $blk = 73; /* allowing case fallthrough */
/*  9778 */                 case 73:
/*  9779 */                     /* --- function return or resume suspension --- */
/*  9780 */                     if ($ret && $ret.$isSuspension) {
/*  9781 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 311, 46);
/*  9782 */                     }
/*  9783 */                     var $lattr611 = $ret;
/*  9784 */                     $ret;
/*  9785 */                     $ret = Sk.misceval.callsimOrSuspend($lattr610, $lattr611);
/*  9786 */                     $blk = 74; /* allowing case fallthrough */
/*  9787 */                 case 74:
/*  9788 */                     /* --- function return or resume suspension --- */
/*  9789 */                     if ($ret && $ret.$isSuspension) {
/*  9790 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 311, 28);
/*  9791 */                     }
/*  9792 */                     var $call612 = $ret;
/*  9793 */ 
/*  9794 */                     //
/*  9795 */                     // line 311:
/*  9796 */                     //                             easy_array.append(node.cait_node)
/*  9797 */                     //                             ^
/*  9798 */                     //
/*  9799 */                     Sk.currLineNo = 311;
/*  9800 */                     Sk.currColNo = 28;
/*  9801 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9802 */                     $currLineNo = 311;
/*  9803 */                     $currColNo = 28;
/*  9804 */                     $blk = 68; /* jump */
/*  9805 */                     continue;
/*  9806 */                 case 62:
/*  9807 */                     /* --- end of if --- */
/*  9808 */                     $blk = 56; /* jump */
/*  9809 */                     continue;
/*  9810 */                 case 63:
/*  9811 */                     /* --- next branch of if --- */
/*  9812 */ 
/*  9813 */                     //
/*  9814 */                     // line 314:
/*  9815 */                     //                         return field
/*  9816 */                     //                         ^
/*  9817 */                     //
/*  9818 */                     Sk.currLineNo = 314;
/*  9819 */                     Sk.currColNo = 24;
/*  9820 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9821 */                     $currLineNo = 314;
/*  9822 */                     $currColNo = 24;
/*  9823 */                     if (field === undefined) {
/*  9824 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/*  9825 */                     }
/*  9826 */                     return field;
/*  9827 */                     $blk = 62; /* jump */
/*  9828 */                     continue;
/*  9829 */                 case 69:
/*  9830 */                     /* --- for cleanup --- */
/*  9831 */                     $blk = 70; /* allowing case fallthrough */
/*  9832 */                 case 70:
/*  9833 */                     /* --- for end --- */
/*  9834 */ 
/*  9835 */                     //
/*  9836 */                     // line 312:
/*  9837 */                     //                         return easy_array
/*  9838 */                     //                         ^
/*  9839 */                     //
/*  9840 */                     Sk.currLineNo = 312;
/*  9841 */                     Sk.currColNo = 24;
/*  9842 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9843 */                     $currLineNo = 312;
/*  9844 */                     $currColNo = 24;
/*  9845 */                     if (easy_array === undefined) {
/*  9846 */                         throw new Sk.builtin.UnboundLocalError('local variable \'easy_array\' referenced before assignment');
/*  9847 */                     }
/*  9848 */                     return easy_array;
/*  9849 */                     $blk = 62; /* jump */
/*  9850 */                     continue;
/*  9851 */                 case 76:
/*  9852 */                     /* --- next branch of if --- */
/*  9853 */ 
/*  9854 */                     //
/*  9855 */                     // line 317:
/*  9856 */                     //                 elif item in AST_ARRAYS_OF_FUNCTIONS:
/*  9857 */                     //                      ^
/*  9858 */                     //
/*  9859 */                     Sk.currLineNo = 317;
/*  9860 */                     Sk.currColNo = 21;
/*  9861 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9862 */                     $currLineNo = 317;
/*  9863 */                     $currColNo = 21;
/*  9864 */                     if (item === undefined) {
/*  9865 */                         throw new Sk.builtin.UnboundLocalError('local variable \'item\' referenced before assignment');
/*  9866 */                     }
/*  9867 */                     var $compareres620 = null;
/*  9868 */                     var $loadgbl621 = Sk.misceval.loadname('AST_ARRAYS_OF_FUNCTIONS', $gbl);
/*  9869 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(item, $loadgbl621, 'In', true));
/*  9870 */                     $blk = 84; /* allowing case fallthrough */
/*  9871 */                 case 84:
/*  9872 */                     /* --- function return or resume suspension --- */
/*  9873 */                     if ($ret && $ret.$isSuspension) {
/*  9874 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 317, 21);
/*  9875 */                     }
/*  9876 */                     $compareres620 = $ret;
/*  9877 */                     var $jfalse622 = ($ret === false || !Sk.misceval.isTrue($ret));
/*  9878 */                     if ($jfalse622) { /*test failed */
/*  9879 */                         $blk = 83;
/*  9880 */                         continue;
/*  9881 */                     }
/*  9882 */                     $blk = 83; /* allowing case fallthrough */
/*  9883 */                 case 83:
/*  9884 */                     /* --- done --- */
/*  9885 */                     var $jfalse623 = ($compareres620 === false || !Sk.misceval.isTrue($compareres620));
/*  9886 */                     if ($jfalse623) { /*test failed */
/*  9887 */                         $blk = 82;
/*  9888 */                         continue;
/*  9889 */                     }
/*  9890 */ 
/*  9891 */                     //
/*  9892 */                     // line 318:
/*  9893 */                     //                     str_ops_list = []
/*  9894 */                     //                     ^
/*  9895 */                     //
/*  9896 */                     Sk.currLineNo = 318;
/*  9897 */                     Sk.currColNo = 20;
/*  9898 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9899 */                     $currLineNo = 318;
/*  9900 */                     $currColNo = 20;
/*  9901 */                     var $loadlist624 = new Sk.builtins['list']([]);
/*  9902 */                     str_ops_list = $loadlist624;
/*  9903 */ 
/*  9904 */                     //
/*  9905 */                     // line 319:
/*  9906 */                     //                     for op in field:
/*  9907 */                     //                     ^
/*  9908 */                     //
/*  9909 */                     Sk.currLineNo = 319;
/*  9910 */                     Sk.currColNo = 20;
/*  9911 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9912 */                     $currLineNo = 319;
/*  9913 */                     $currColNo = 20;
/*  9914 */                     if (field === undefined) {
/*  9915 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/*  9916 */                     }
/*  9917 */                     var $iter625 = Sk.abstr.iter(field);
/*  9918 */                     $blk = 85; /* allowing case fallthrough */
/*  9919 */                 case 85:
/*  9920 */                     /* --- for start --- */
/*  9921 */                     $ret = Sk.abstr.iternext($iter625, true);
/*  9922 */                     $blk = 88; /* allowing case fallthrough */
/*  9923 */                 case 88:
/*  9924 */                     /* --- function return or resume suspension --- */
/*  9925 */                     if ($ret && $ret.$isSuspension) {
/*  9926 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 319, 20);
/*  9927 */                     }
/*  9928 */                     var $next626 = $ret;
/*  9929 */                     if ($next626 === undefined) {
/*  9930 */                         $blk = 86;
/*  9931 */                         continue;
/*  9932 */                     }
/*  9933 */                     op = $next626;
/*  9934 */ 
/*  9935 */                     //
/*  9936 */                     // line 320:
/*  9937 */                     //                         str_ops_list.append(type(op).__name__)
/*  9938 */                     //                         ^
/*  9939 */                     //
/*  9940 */                     Sk.currLineNo = 320;
/*  9941 */                     Sk.currColNo = 24;
/*  9942 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9943 */                     $currLineNo = 320;
/*  9944 */                     $currColNo = 24;
/*  9945 */                     if (str_ops_list === undefined) {
/*  9946 */                         throw new Sk.builtin.UnboundLocalError('local variable \'str_ops_list\' referenced before assignment');
/*  9947 */                     }
/*  9948 */                     $ret = Sk.abstr.gattr(str_ops_list, 'append', true);
/*  9949 */                     $blk = 89; /* allowing case fallthrough */
/*  9950 */                 case 89:
/*  9951 */                     /* --- function return or resume suspension --- */
/*  9952 */                     if ($ret && $ret.$isSuspension) {
/*  9953 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 320, 24);
/*  9954 */                     }
/*  9955 */                     var $lattr627 = $ret;
/*  9956 */                     var $loadgbl628 = Sk.misceval.loadname('type', $gbl);
/*  9957 */                     if (op === undefined) {
/*  9958 */                         throw new Sk.builtin.UnboundLocalError('local variable \'op\' referenced before assignment');
/*  9959 */                     }
/*  9960 */                     $ret;
/*  9961 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl628, op);
/*  9962 */                     $blk = 90; /* allowing case fallthrough */
/*  9963 */                 case 90:
/*  9964 */                     /* --- function return or resume suspension --- */
/*  9965 */                     if ($ret && $ret.$isSuspension) {
/*  9966 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 320, 44);
/*  9967 */                     }
/*  9968 */                     var $call629 = $ret;
/*  9969 */ 
/*  9970 */                     //
/*  9971 */                     // line 320:
/*  9972 */                     //                         str_ops_list.append(type(op).__name__)
/*  9973 */                     //                                             ^
/*  9974 */                     //
/*  9975 */                     Sk.currLineNo = 320;
/*  9976 */                     Sk.currColNo = 44;
/*  9977 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/*  9978 */                     $currLineNo = 320;
/*  9979 */                     $currColNo = 44;
/*  9980 */                     $ret = Sk.abstr.gattr($call629, '__name__', true);
/*  9981 */                     $blk = 91; /* allowing case fallthrough */
/*  9982 */                 case 91:
/*  9983 */                     /* --- function return or resume suspension --- */
/*  9984 */                     if ($ret && $ret.$isSuspension) {
/*  9985 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 320, 44);
/*  9986 */                     }
/*  9987 */                     var $lattr630 = $ret;
/*  9988 */                     $ret;
/*  9989 */                     $ret = Sk.misceval.callsimOrSuspend($lattr627, $lattr630);
/*  9990 */                     $blk = 92; /* allowing case fallthrough */
/*  9991 */                 case 92:
/*  9992 */                     /* --- function return or resume suspension --- */
/*  9993 */                     if ($ret && $ret.$isSuspension) {
/*  9994 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 320, 24);
/*  9995 */                     }
/*  9996 */                     var $call631 = $ret;
/*  9997 */ 
/*  9998 */                     //
/*  9999 */                     // line 320:
/* 10000 */                     //                         str_ops_list.append(type(op).__name__)
/* 10001 */                     //                         ^
/* 10002 */                     //
/* 10003 */                     Sk.currLineNo = 320;
/* 10004 */                     Sk.currColNo = 24;
/* 10005 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10006 */                     $currLineNo = 320;
/* 10007 */                     $currColNo = 24;
/* 10008 */ 
/* 10009 */ 
/* 10010 */                     //
/* 10011 */                     // line 321:
/* 10012 */                     //                         return str_ops_list
/* 10013 */                     //                         ^
/* 10014 */                     //
/* 10015 */                     Sk.currLineNo = 321;
/* 10016 */                     Sk.currColNo = 24;
/* 10017 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10018 */                     $currLineNo = 321;
/* 10019 */                     $currColNo = 24;
/* 10020 */                     if (str_ops_list === undefined) {
/* 10021 */                         throw new Sk.builtin.UnboundLocalError('local variable \'str_ops_list\' referenced before assignment');
/* 10022 */                     }
/* 10023 */                     return str_ops_list;
/* 10024 */                     $blk = 85; /* jump */
/* 10025 */                     continue;
/* 10026 */                 case 81:
/* 10027 */                     /* --- end of if --- */
/* 10028 */                     $blk = 75; /* jump */
/* 10029 */                     continue;
/* 10030 */                 case 82:
/* 10031 */                     /* --- next branch of if --- */
/* 10032 */ 
/* 10033 */                     //
/* 10034 */                     // line 322:
/* 10035 */                     //                 elif isinstance(field, ast.AST):
/* 10036 */                     //                      ^
/* 10037 */                     //
/* 10038 */                     Sk.currLineNo = 322;
/* 10039 */                     Sk.currColNo = 21;
/* 10040 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10041 */                     $currLineNo = 322;
/* 10042 */                     $currColNo = 21;
/* 10043 */                     var $loadgbl632 = Sk.misceval.loadname('isinstance', $gbl);
/* 10044 */                     if (field === undefined) {
/* 10045 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/* 10046 */                     }
/* 10047 */                     var $loadgbl633 = Sk.misceval.loadname('ast', $gbl);
/* 10048 */                     $ret = Sk.abstr.gattr($loadgbl633, 'AST', true);
/* 10049 */                     $blk = 95; /* allowing case fallthrough */
/* 10050 */                 case 95:
/* 10051 */                     /* --- function return or resume suspension --- */
/* 10052 */                     if ($ret && $ret.$isSuspension) {
/* 10053 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 322, 39);
/* 10054 */                     }
/* 10055 */                     var $lattr634 = $ret;
/* 10056 */                     $ret;
/* 10057 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl632, field, $lattr634);
/* 10058 */                     $blk = 96; /* allowing case fallthrough */
/* 10059 */                 case 96:
/* 10060 */                     /* --- function return or resume suspension --- */
/* 10061 */                     if ($ret && $ret.$isSuspension) {
/* 10062 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 322, 21);
/* 10063 */                     }
/* 10064 */                     var $call635 = $ret;
/* 10065 */ 
/* 10066 */                     //
/* 10067 */                     // line 322:
/* 10068 */                     //                 elif isinstance(field, ast.AST):
/* 10069 */                     //                      ^
/* 10070 */                     //
/* 10071 */                     Sk.currLineNo = 322;
/* 10072 */                     Sk.currColNo = 21;
/* 10073 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10074 */                     $currLineNo = 322;
/* 10075 */                     $currColNo = 21;
/* 10076 */                     var $jfalse636 = ($call635 === false || !Sk.misceval.isTrue($call635));
/* 10077 */                     if ($jfalse636) { /*test failed */
/* 10078 */                         $blk = 94;
/* 10079 */                         continue;
/* 10080 */                     }
/* 10081 */ 
/* 10082 */                     //
/* 10083 */                     // line 323:
/* 10084 */                     //                     return field.cait_node
/* 10085 */                     //                     ^
/* 10086 */                     //
/* 10087 */                     Sk.currLineNo = 323;
/* 10088 */                     Sk.currColNo = 20;
/* 10089 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10090 */                     $currLineNo = 323;
/* 10091 */                     $currColNo = 20;
/* 10092 */                     if (field === undefined) {
/* 10093 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/* 10094 */                     }
/* 10095 */                     $ret = Sk.abstr.gattr(field, 'cait_node', true);
/* 10096 */                     $blk = 97; /* allowing case fallthrough */
/* 10097 */                 case 97:
/* 10098 */                     /* --- function return or resume suspension --- */
/* 10099 */                     if ($ret && $ret.$isSuspension) {
/* 10100 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 323, 27);
/* 10101 */                     }
/* 10102 */                     var $lattr637 = $ret;
/* 10103 */                     return $lattr637;
/* 10104 */                     $blk = 93; /* allowing case fallthrough */
/* 10105 */                 case 93:
/* 10106 */                     /* --- end of if --- */
/* 10107 */                     $blk = 81; /* jump */
/* 10108 */                     continue;
/* 10109 */                 case 86:
/* 10110 */                     /* --- for cleanup --- */
/* 10111 */                     $blk = 87; /* allowing case fallthrough */
/* 10112 */                 case 87:
/* 10113 */                     /* --- for end --- */
/* 10114 */                     $blk = 81; /* jump */
/* 10115 */                     continue;
/* 10116 */                 case 94:
/* 10117 */                     /* --- next branch of if --- */
/* 10118 */ 
/* 10119 */                     //
/* 10120 */                     // line 324:
/* 10121 */                     //                 elif isinstance(field, list):
/* 10122 */                     //                      ^
/* 10123 */                     //
/* 10124 */                     Sk.currLineNo = 324;
/* 10125 */                     Sk.currColNo = 21;
/* 10126 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10127 */                     $currLineNo = 324;
/* 10128 */                     $currColNo = 21;
/* 10129 */                     var $loadgbl638 = Sk.misceval.loadname('isinstance', $gbl);
/* 10130 */                     if (field === undefined) {
/* 10131 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/* 10132 */                     }
/* 10133 */                     var $loadgbl639 = Sk.misceval.loadname('list', $gbl);
/* 10134 */                     $ret;
/* 10135 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl638, field, $loadgbl639);
/* 10136 */                     $blk = 100; /* allowing case fallthrough */
/* 10137 */                 case 100:
/* 10138 */                     /* --- function return or resume suspension --- */
/* 10139 */                     if ($ret && $ret.$isSuspension) {
/* 10140 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 324, 21);
/* 10141 */                     }
/* 10142 */                     var $call640 = $ret;
/* 10143 */ 
/* 10144 */                     //
/* 10145 */                     // line 324:
/* 10146 */                     //                 elif isinstance(field, list):
/* 10147 */                     //                      ^
/* 10148 */                     //
/* 10149 */                     Sk.currLineNo = 324;
/* 10150 */                     Sk.currColNo = 21;
/* 10151 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10152 */                     $currLineNo = 324;
/* 10153 */                     $currColNo = 21;
/* 10154 */                     var $jfalse641 = ($call640 === false || !Sk.misceval.isTrue($call640));
/* 10155 */                     if ($jfalse641) { /*test failed */
/* 10156 */                         $blk = 99;
/* 10157 */                         continue;
/* 10158 */                     }
/* 10159 */ 
/* 10160 */                     //
/* 10161 */                     // line 325:
/* 10162 */                     //                     try:
/* 10163 */                     //                     ^
/* 10164 */                     //
/* 10165 */                     Sk.currLineNo = 325;
/* 10166 */                     Sk.currColNo = 20;
/* 10167 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10168 */                     $currLineNo = 325;
/* 10169 */                     $currColNo = 20;
/* 10170 */                     $exc.push(101);
/* 10171 */ 
/* 10172 */                     //
/* 10173 */                     // line 326:
/* 10174 */                     //                         return [f.cait_node for f in field]
/* 10175 */                     //                         ^
/* 10176 */                     //
/* 10177 */                     Sk.currLineNo = 326;
/* 10178 */                     Sk.currColNo = 24;
/* 10179 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10180 */                     $currLineNo = 326;
/* 10181 */                     $currColNo = 24;
/* 10182 */                     var $_compr642 = new Sk.builtins['list']([]);
/* 10183 */                     if (field === undefined) {
/* 10184 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/* 10185 */                     }
/* 10186 */                     var $iter643 = Sk.abstr.iter(field);
/* 10187 */                     $blk = 105; /* allowing case fallthrough */
/* 10188 */                 case 105:
/* 10189 */                     /* --- list comp start --- */
/* 10190 */                     $ret = Sk.abstr.iternext($iter643, true);
/* 10191 */                     $blk = 108; /* allowing case fallthrough */
/* 10192 */                 case 108:
/* 10193 */                     /* --- function return or resume suspension --- */
/* 10194 */                     if ($ret && $ret.$isSuspension) {
/* 10195 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 326, 32);
/* 10196 */                     }
/* 10197 */                     var $next644 = $ret;
/* 10198 */                     if ($next644 === undefined) {
/* 10199 */                         $blk = 107;
/* 10200 */                         continue;
/* 10201 */                     }
/* 10202 */                     f = $next644;
/* 10203 */                     if (f === undefined) {
/* 10204 */                         throw new Sk.builtin.UnboundLocalError('local variable \'f\' referenced before assignment');
/* 10205 */                     }
/* 10206 */                     $ret = Sk.abstr.gattr(f, 'cait_node', true);
/* 10207 */                     $blk = 109; /* allowing case fallthrough */
/* 10208 */                 case 109:
/* 10209 */                     /* --- function return or resume suspension --- */
/* 10210 */                     if ($ret && $ret.$isSuspension) {
/* 10211 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 326, 32);
/* 10212 */                     }
/* 10213 */                     var $lattr645 = $ret;
/* 10214 */                     $_compr642.v.push($lattr645);
/* 10215 */                     $blk = 106; /* allowing case fallthrough */
/* 10216 */                 case 106:
/* 10217 */                     /* --- list comp skip --- */
/* 10218 */                     $blk = 105; /* jump */
/* 10219 */                     continue;
/* 10220 */                 case 98:
/* 10221 */                     /* --- end of if --- */
/* 10222 */                     $blk = 93; /* jump */
/* 10223 */                     continue;
/* 10224 */                 case 99:
/* 10225 */                     /* --- next branch of if --- */
/* 10226 */ 
/* 10227 */                     //
/* 10228 */                     // line 332:
/* 10229 */                     //                     return field
/* 10230 */                     //                     ^
/* 10231 */                     //
/* 10232 */                     Sk.currLineNo = 332;
/* 10233 */                     Sk.currColNo = 20;
/* 10234 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10235 */                     $currLineNo = 332;
/* 10236 */                     $currColNo = 20;
/* 10237 */                     if (field === undefined) {
/* 10238 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/* 10239 */                     }
/* 10240 */                     return field;
/* 10241 */                     $blk = 98; /* jump */
/* 10242 */                     continue;
/* 10243 */                 case 101:
/* 10244 */                     /* --- except_0_ --- */
/* 10245 */                     var $loadgbl646 = Sk.misceval.loadname('AttributeError', $gbl);
/* 10246 */                     var $instance647 = Sk.misceval.isTrue(Sk.builtin.isinstance($err, $loadgbl646));
/* 10247 */                     var $jfalse648 = ($instance647 === false || !Sk.misceval.isTrue($instance647));
/* 10248 */                     if ($jfalse648) { /*test failed */
/* 10249 */                         $blk = 102;
/* 10250 */                         continue;
/* 10251 */                     }
/* 10252 */ 
/* 10253 */                     //
/* 10254 */                     // line 330:
/* 10255 */                     //                         return field
/* 10256 */                     //                         ^
/* 10257 */                     //
/* 10258 */                     Sk.currLineNo = 330;
/* 10259 */                     Sk.currColNo = 24;
/* 10260 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10261 */                     $currLineNo = 330;
/* 10262 */                     $currColNo = 24;
/* 10263 */                     if (field === undefined) {
/* 10264 */                         throw new Sk.builtin.UnboundLocalError('local variable \'field\' referenced before assignment');
/* 10265 */                     }
/* 10266 */                     return field;
/* 10267 */                     $blk = 104; /* allowing case fallthrough */
/* 10268 */                 case 104:
/* 10269 */                     /* --- end --- */
/* 10270 */                     $blk = 98; /* jump */
/* 10271 */                     continue;
/* 10272 */                 case 102:
/* 10273 */                     /* --- unhandled --- */
/* 10274 */                     throw $err;
/* 10275 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10276 */                 case 103:
/* 10277 */                     /* --- orelse --- */
/* 10278 */                     $blk = 104; /* jump */
/* 10279 */                     continue;
/* 10280 */                 case 107:
/* 10281 */                     /* --- list comp anchor --- */
/* 10282 */                     return $_compr642;
/* 10283 */                     $exc.pop();
/* 10284 */                     $blk = 103; /* jump */
/* 10285 */                     continue;
/* 10286 */                 }
/* 10287 */             } catch (err) {
/* 10288 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 10289 */                     Sk.execStart = Date.now()
/* 10290 */                 }
/* 10291 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10292 */                     err = new Sk.builtin.ExternalError(err);
/* 10293 */                 }
/* 10294 */                 err.traceback.push({
/* 10295 */                     lineno: $currLineNo,
/* 10296 */                     colno: $currColNo,
/* 10297 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 10298 */                 });
/* 10299 */                 if ($exc.length > 0) {
/* 10300 */                     $err = err;
/* 10301 */                     Sk.err = $err;
/* 10302 */                     $blk = $exc.pop();
/* 10303 */                     continue;
/* 10304 */                 } else {
/* 10305 */                     throw err;
/* 10306 */                 }
/* 10307 */             }
/* 10308 */         }
/* 10309 */     });
/* 10310 */     var $scope652 = (function $find_matches653$(self, pattern, is_mod) {
/* 10311 */         var is_node, matcher, stm; /* locals */
/* 10312 */         var is_mod, is_mod, is_mod, is_node, is_node, is_node, matcher, matcher, matcher, pattern, pattern, pattern, pattern, pattern, self, self, self, stm, stm, $loadgbl658, $loadgbl659, $loadgbl661, $loadgbl662, $loadgbl670, $str671, $loadgbl670, $str671, $lattr672, $loadgbl673, $loadgbl670, $str671, $lattr672, $loadgbl673, $call674, $loadgbl670, $str671, $lattr672, $loadgbl673, $call674, $call675, $lattr677, $lattr677, $lattr678, $unaryop680, $boolopsucc681, $jfalse682, $unaryop683, $jfalse684, $boolopsucc685, $jfalse686, $loadgbl687, $unaryop680, $boolopsucc681, $jfalse682, $unaryop683, $jfalse684, $boolopsucc685, $jfalse686, $loadgbl687, $lattr688, $unaryop680, $boolopsucc681, $jfalse682, $unaryop683, $jfalse684, $boolopsucc685, $jfalse686, $loadgbl687, $lattr688, $lattr689, $unaryop680, $boolopsucc681, $jfalse682, $unaryop683, $jfalse684, $boolopsucc685, $jfalse686, $loadgbl687, $lattr688, $lattr689, $call690, $compareres691, $loadgbl695, $str696, $lattr698;
/* 10313 */         var $wakeFromSuspension = function() {
/* 10314 */             var susp = $scope652.$wakingSuspension;
/* 10315 */             delete $scope652.$wakingSuspension;
/* 10316 */             $blk = susp.$blk;
/* 10317 */             $loc = susp.$loc;
/* 10318 */             $gbl = susp.$gbl;
/* 10319 */             $exc = susp.$exc;
/* 10320 */             $err = susp.$err;
/* 10321 */             Sk.err = $err;
/* 10322 */             $postfinally = susp.$postfinally;
/* 10323 */             $currLineNo = susp.$lineno;
/* 10324 */             $currColNo = susp.$colno;
/* 10325 */             Sk.lastYield = Date.now();
/* 10326 */             is_mod = susp.$tmps.is_mod;
/* 10327 */             is_node = susp.$tmps.is_node;
/* 10328 */             matcher = susp.$tmps.matcher;
/* 10329 */             pattern = susp.$tmps.pattern;
/* 10330 */             self = susp.$tmps.self;
/* 10331 */             stm = susp.$tmps.stm;
/* 10332 */             $loadgbl658 = susp.$tmps.$loadgbl658;
/* 10333 */             $loadgbl659 = susp.$tmps.$loadgbl659;
/* 10334 */             $loadgbl661 = susp.$tmps.$loadgbl661;
/* 10335 */             $loadgbl662 = susp.$tmps.$loadgbl662;
/* 10336 */             $loadgbl670 = susp.$tmps.$loadgbl670;
/* 10337 */             $str671 = susp.$tmps.$str671;
/* 10338 */             $lattr672 = susp.$tmps.$lattr672;
/* 10339 */             $loadgbl673 = susp.$tmps.$loadgbl673;
/* 10340 */             $call674 = susp.$tmps.$call674;
/* 10341 */             $call675 = susp.$tmps.$call675;
/* 10342 */             $lattr677 = susp.$tmps.$lattr677;
/* 10343 */             $lattr678 = susp.$tmps.$lattr678;
/* 10344 */             $unaryop680 = susp.$tmps.$unaryop680;
/* 10345 */             $boolopsucc681 = susp.$tmps.$boolopsucc681;
/* 10346 */             $jfalse682 = susp.$tmps.$jfalse682;
/* 10347 */             $unaryop683 = susp.$tmps.$unaryop683;
/* 10348 */             $jfalse684 = susp.$tmps.$jfalse684;
/* 10349 */             $boolopsucc685 = susp.$tmps.$boolopsucc685;
/* 10350 */             $jfalse686 = susp.$tmps.$jfalse686;
/* 10351 */             $loadgbl687 = susp.$tmps.$loadgbl687;
/* 10352 */             $lattr688 = susp.$tmps.$lattr688;
/* 10353 */             $lattr689 = susp.$tmps.$lattr689;
/* 10354 */             $call690 = susp.$tmps.$call690;
/* 10355 */             $compareres691 = susp.$tmps.$compareres691;
/* 10356 */             $loadgbl695 = susp.$tmps.$loadgbl695;
/* 10357 */             $str696 = susp.$tmps.$str696;
/* 10358 */             $lattr698 = susp.$tmps.$lattr698;
/* 10359 */             try {
/* 10360 */                 $ret = susp.child.resume();
/* 10361 */             } catch (err) {
/* 10362 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 10363 */                     Sk.execStart = Date.now()
/* 10364 */                 }
/* 10365 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10366 */                     err = new Sk.builtin.ExternalError(err);
/* 10367 */                 }
/* 10368 */                 err.traceback.push({
/* 10369 */                     lineno: $currLineNo,
/* 10370 */                     colno: $currColNo,
/* 10371 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 10372 */                 });
/* 10373 */                 if ($exc.length > 0) {
/* 10374 */                     $err = err;
/* 10375 */                     Sk.err = $err;
/* 10376 */                     $blk = $exc.pop();
/* 10377 */                 } else {
/* 10378 */                     throw err;
/* 10379 */                 }
/* 10380 */             }
/* 10381 */         };
/* 10382 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 10383 */             var susp = new Sk.misceval.Suspension();
/* 10384 */             susp.child = $child;
/* 10385 */             susp.resume = function() {
/* 10386 */                 $scope652.$wakingSuspension = susp;
/* 10387 */                 return $scope652();
/* 10388 */             };
/* 10389 */             susp.data = susp.child.data;
/* 10390 */             susp.$blk = $blk;
/* 10391 */             susp.$loc = $loc;
/* 10392 */             susp.$gbl = $gbl;
/* 10393 */             susp.$exc = $exc;
/* 10394 */             susp.$err = $err;
/* 10395 */             susp.$postfinally = $postfinally;
/* 10396 */             susp.$filename = $filename;
/* 10397 */             susp.$lineno = $lineno;
/* 10398 */             susp.$colno = $colno;
/* 10399 */             susp.optional = susp.child.optional;
/* 10400 */             susp.$tmps = {
/* 10401 */                 "is_mod": is_mod,
/* 10402 */                 "is_node": is_node,
/* 10403 */                 "matcher": matcher,
/* 10404 */                 "pattern": pattern,
/* 10405 */                 "self": self,
/* 10406 */                 "stm": stm,
/* 10407 */                 "$loadgbl658": $loadgbl658,
/* 10408 */                 "$loadgbl659": $loadgbl659,
/* 10409 */                 "$loadgbl661": $loadgbl661,
/* 10410 */                 "$loadgbl662": $loadgbl662,
/* 10411 */                 "$loadgbl670": $loadgbl670,
/* 10412 */                 "$str671": $str671,
/* 10413 */                 "$lattr672": $lattr672,
/* 10414 */                 "$loadgbl673": $loadgbl673,
/* 10415 */                 "$call674": $call674,
/* 10416 */                 "$call675": $call675,
/* 10417 */                 "$lattr677": $lattr677,
/* 10418 */                 "$lattr678": $lattr678,
/* 10419 */                 "$unaryop680": $unaryop680,
/* 10420 */                 "$boolopsucc681": $boolopsucc681,
/* 10421 */                 "$jfalse682": $jfalse682,
/* 10422 */                 "$unaryop683": $unaryop683,
/* 10423 */                 "$jfalse684": $jfalse684,
/* 10424 */                 "$boolopsucc685": $boolopsucc685,
/* 10425 */                 "$jfalse686": $jfalse686,
/* 10426 */                 "$loadgbl687": $loadgbl687,
/* 10427 */                 "$lattr688": $lattr688,
/* 10428 */                 "$lattr689": $lattr689,
/* 10429 */                 "$call690": $call690,
/* 10430 */                 "$compareres691": $compareres691,
/* 10431 */                 "$loadgbl695": $loadgbl695,
/* 10432 */                 "$str696": $str696,
/* 10433 */                 "$lattr698": $lattr698
/* 10434 */             };
/* 10435 */             return susp;
/* 10436 */         };
/* 10437 */         var $blk = 0,
/* 10438 */             $exc = [],
/* 10439 */             $loc = {},
/* 10440 */             $gbl = this,
/* 10441 */             $err = undefined,
/* 10442 */             $ret = undefined,
/* 10443 */             $postfinally = undefined,
/* 10444 */             $currLineNo = undefined,
/* 10445 */             $currColNo = undefined;
/* 10446 */         Sk.err = $err;
/* 10447 */         if (typeof Sk.execStart === 'undefined') {
/* 10448 */             Sk.execStart = Date.now()
/* 10449 */         }
/* 10450 */         if (typeof Sk.lastYield === 'undefined') {
/* 10451 */             Sk.lastYield = Date.now()
/* 10452 */         }
/* 10453 */         if ($scope652.$wakingSuspension !== undefined) {
/* 10454 */             $wakeFromSuspension();
/* 10455 */         } else {
/* 10456 */             if (is_mod === undefined) is_mod = $scope652.$defaults[0];
/* 10457 */             Sk.builtin.pyCheckArgs("find_matches", arguments, 2, 3, false, false);
/* 10458 */         }
/* 10459 */         while (true) {
/* 10460 */             try {
/* 10461 */                 var $dateNow = Date.now();
/* 10462 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 10463 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 10464 */                 }
/* 10465 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 10466 */                     var $susp = $saveSuspension({
/* 10467 */                         data: {
/* 10468 */                             type: 'Sk.yield'
/* 10469 */                         },
/* 10470 */                         resume: function() {}
/* 10471 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 10472 */                     $susp.$blk = $blk;
/* 10473 */                     $susp.optional = true;
/* 10474 */                     return $susp;
/* 10475 */                 }
/* 10476 */                 switch ($blk) {
/* 10477 */                 case 0:
/* 10478 */                     /* --- codeobj entry --- */
/* 10479 */                     if (self === undefined) {
/* 10480 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10481 */                     }
/* 10482 */                     if (pattern === undefined) {
/* 10483 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pattern\' referenced before assignment');
/* 10484 */                     }
/* 10485 */                     if (is_mod === undefined) {
/* 10486 */                         throw new Sk.builtin.UnboundLocalError('local variable \'is_mod\' referenced before assignment');
/* 10487 */                     }
/* 10488 */                     if (is_mod === undefined) {
/* 10489 */                         throw new Sk.builtin.UnboundLocalError('local variable \'is_mod\' referenced before assignment');
/* 10490 */                     }
/* 10491 */ 
/* 10492 */ 
/* 10493 */                     //
/* 10494 */                     // line 337:
/* 10495 */                     //         """
/* 10496 */                     //         ^
/* 10497 */                     //
/* 10498 */                     Sk.currLineNo = 337;
/* 10499 */                     Sk.currColNo = 8;
/* 10500 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10501 */                     $currLineNo = 337;
/* 10502 */                     $currColNo = 8;
/* 10503 */                     var $str654 = new Sk.builtins['str']('\n        Retrieves any patterns that match against this CaitNode. Expected to be\n        used for subpattern matching.\n        ');
/* 10504 */ 
/* 10505 */                     //
/* 10506 */                     // line 342:
/* 10507 */                     //         import pedal.cait.stretchy_tree_matching as stm
/* 10508 */                     //         ^
/* 10509 */                     //
/* 10510 */                     Sk.currLineNo = 342;
/* 10511 */                     Sk.currColNo = 8;
/* 10512 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10513 */                     $currLineNo = 342;
/* 10514 */                     $currColNo = 8;
/* 10515 */                     $ret = Sk.builtin.__import__('pedal.cait.stretchy_tree_matching', $gbl, $loc, []);
/* 10516 */                     $blk = 1; /* allowing case fallthrough */
/* 10517 */                 case 1:
/* 10518 */                     /* --- function return or resume suspension --- */
/* 10519 */                     if ($ret && $ret.$isSuspension) {
/* 10520 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 342, 8);
/* 10521 */                     }
/* 10522 */                     var $module655 = $ret;
/* 10523 */                     var $lattr656 = Sk.abstr.gattr($module655, 'cait');
/* 10524 */                     var $lattr657 = Sk.abstr.gattr($lattr656, 'stretchy_tree_matching');
/* 10525 */                     stm = $lattr657;
/* 10526 */ 
/* 10527 */                     //
/* 10528 */                     // line 343:
/* 10529 */                     //         is_node = isinstance(pattern, CaitNode)
/* 10530 */                     //         ^
/* 10531 */                     //
/* 10532 */                     Sk.currLineNo = 343;
/* 10533 */                     Sk.currColNo = 8;
/* 10534 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10535 */                     $currLineNo = 343;
/* 10536 */                     $currColNo = 8;
/* 10537 */                     var $loadgbl658 = Sk.misceval.loadname('isinstance', $gbl);
/* 10538 */                     if (pattern === undefined) {
/* 10539 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pattern\' referenced before assignment');
/* 10540 */                     }
/* 10541 */                     var $loadgbl659 = Sk.misceval.loadname('CaitNode', $gbl);
/* 10542 */                     $ret;
/* 10543 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl658, pattern, $loadgbl659);
/* 10544 */                     $blk = 2; /* allowing case fallthrough */
/* 10545 */                 case 2:
/* 10546 */                     /* --- function return or resume suspension --- */
/* 10547 */                     if ($ret && $ret.$isSuspension) {
/* 10548 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 343, 18);
/* 10549 */                     }
/* 10550 */                     var $call660 = $ret;
/* 10551 */ 
/* 10552 */                     //
/* 10553 */                     // line 343:
/* 10554 */                     //         is_node = isinstance(pattern, CaitNode)
/* 10555 */                     //                   ^
/* 10556 */                     //
/* 10557 */                     Sk.currLineNo = 343;
/* 10558 */                     Sk.currColNo = 18;
/* 10559 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10560 */                     $currLineNo = 343;
/* 10561 */                     $currColNo = 18;
/* 10562 */                     is_node = $call660;
/* 10563 */ 
/* 10564 */                     //
/* 10565 */                     // line 344:
/* 10566 */                     //         if not isinstance(pattern, str) and not is_node:
/* 10567 */                     //         ^
/* 10568 */                     //
/* 10569 */                     Sk.currLineNo = 344;
/* 10570 */                     Sk.currColNo = 8;
/* 10571 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10572 */                     $currLineNo = 344;
/* 10573 */                     $currColNo = 8;
/* 10574 */                     var $loadgbl661 = Sk.misceval.loadname('isinstance', $gbl);
/* 10575 */                     if (pattern === undefined) {
/* 10576 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pattern\' referenced before assignment');
/* 10577 */                     }
/* 10578 */                     var $loadgbl662 = Sk.misceval.loadname('str', $gbl);
/* 10579 */                     $ret;
/* 10580 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl661, pattern, $loadgbl662);
/* 10581 */                     $blk = 5; /* allowing case fallthrough */
/* 10582 */                 case 5:
/* 10583 */                     /* --- function return or resume suspension --- */
/* 10584 */                     if ($ret && $ret.$isSuspension) {
/* 10585 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 344, 15);
/* 10586 */                     }
/* 10587 */                     var $call663 = $ret;
/* 10588 */ 
/* 10589 */                     //
/* 10590 */                     // line 344:
/* 10591 */                     //         if not isinstance(pattern, str) and not is_node:
/* 10592 */                     //                ^
/* 10593 */                     //
/* 10594 */                     Sk.currLineNo = 344;
/* 10595 */                     Sk.currColNo = 15;
/* 10596 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10597 */                     $currLineNo = 344;
/* 10598 */                     $currColNo = 15;
/* 10599 */                     var $unaryop664 = Sk.abstr.numberUnaryOp($call663, 'Not');
/* 10600 */                     var $boolopsucc665 = $unaryop664;
/* 10601 */                     $boolopsucc665 = $unaryop664;
/* 10602 */                     var $jfalse666 = ($unaryop664 === false || !Sk.misceval.isTrue($unaryop664));
/* 10603 */                     if ($jfalse666) { /*test failed */
/* 10604 */                         $blk = 4;
/* 10605 */                         continue;
/* 10606 */                     }
/* 10607 */                     if (is_node === undefined) {
/* 10608 */                         throw new Sk.builtin.UnboundLocalError('local variable \'is_node\' referenced before assignment');
/* 10609 */                     }
/* 10610 */                     var $unaryop667 = Sk.abstr.numberUnaryOp(is_node, 'Not');
/* 10611 */                     $boolopsucc665 = $unaryop667;
/* 10612 */                     var $jfalse668 = ($unaryop667 === false || !Sk.misceval.isTrue($unaryop667));
/* 10613 */                     if ($jfalse668) { /*test failed */
/* 10614 */                         $blk = 4;
/* 10615 */                         continue;
/* 10616 */                     }
/* 10617 */                     $blk = 4; /* allowing case fallthrough */
/* 10618 */                 case 4:
/* 10619 */                     /* --- end of boolop --- */
/* 10620 */                     var $jfalse669 = ($boolopsucc665 === false || !Sk.misceval.isTrue($boolopsucc665));
/* 10621 */                     if ($jfalse669) { /*test failed */
/* 10622 */                         $blk = 3;
/* 10623 */                         continue;
/* 10624 */                     }
/* 10625 */ 
/* 10626 */                     //
/* 10627 */                     // line 345:
/* 10628 */                     //             raise TypeError("pattern expected str or CaitNode, found {0}".format(type(pattern)))
/* 10629 */                     //             ^
/* 10630 */                     //
/* 10631 */                     Sk.currLineNo = 345;
/* 10632 */                     Sk.currColNo = 12;
/* 10633 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10634 */                     $currLineNo = 345;
/* 10635 */                     $currColNo = 12;
/* 10636 */                     var $loadgbl670 = Sk.misceval.loadname('TypeError', $gbl);
/* 10637 */                     var $str671 = new Sk.builtins['str']('pattern expected str or CaitNode, found {0}');
/* 10638 */                     $ret = Sk.abstr.gattr($str671, 'format', true);
/* 10639 */                     $blk = 6; /* allowing case fallthrough */
/* 10640 */                 case 6:
/* 10641 */                     /* --- function return or resume suspension --- */
/* 10642 */                     if ($ret && $ret.$isSuspension) {
/* 10643 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 345, 28);
/* 10644 */                     }
/* 10645 */                     var $lattr672 = $ret;
/* 10646 */                     var $loadgbl673 = Sk.misceval.loadname('type', $gbl);
/* 10647 */                     if (pattern === undefined) {
/* 10648 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pattern\' referenced before assignment');
/* 10649 */                     }
/* 10650 */                     $ret;
/* 10651 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl673, pattern);
/* 10652 */                     $blk = 7; /* allowing case fallthrough */
/* 10653 */                 case 7:
/* 10654 */                     /* --- function return or resume suspension --- */
/* 10655 */                     if ($ret && $ret.$isSuspension) {
/* 10656 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 345, 81);
/* 10657 */                     }
/* 10658 */                     var $call674 = $ret;
/* 10659 */ 
/* 10660 */                     //
/* 10661 */                     // line 345:
/* 10662 */                     //             raise TypeError("pattern expected str or CaitNode, found {0}".format(type(pattern)))
/* 10663 */                     //                                                                                  ^
/* 10664 */                     //
/* 10665 */                     Sk.currLineNo = 345;
/* 10666 */                     Sk.currColNo = 81;
/* 10667 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10668 */                     $currLineNo = 345;
/* 10669 */                     $currColNo = 81;
/* 10670 */                     $ret;
/* 10671 */                     $ret = Sk.misceval.callsimOrSuspend($lattr672, $call674);
/* 10672 */                     $blk = 8; /* allowing case fallthrough */
/* 10673 */                 case 8:
/* 10674 */                     /* --- function return or resume suspension --- */
/* 10675 */                     if ($ret && $ret.$isSuspension) {
/* 10676 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 345, 28);
/* 10677 */                     }
/* 10678 */                     var $call675 = $ret;
/* 10679 */ 
/* 10680 */                     //
/* 10681 */                     // line 345:
/* 10682 */                     //             raise TypeError("pattern expected str or CaitNode, found {0}".format(type(pattern)))
/* 10683 */                     //                             ^
/* 10684 */                     //
/* 10685 */                     Sk.currLineNo = 345;
/* 10686 */                     Sk.currColNo = 28;
/* 10687 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10688 */                     $currLineNo = 345;
/* 10689 */                     $currColNo = 28;
/* 10690 */                     $ret;
/* 10691 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl670, $call675);
/* 10692 */                     $blk = 9; /* allowing case fallthrough */
/* 10693 */                 case 9:
/* 10694 */                     /* --- function return or resume suspension --- */
/* 10695 */                     if ($ret && $ret.$isSuspension) {
/* 10696 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 345, 18);
/* 10697 */                     }
/* 10698 */                     var $call676 = $ret;
/* 10699 */ 
/* 10700 */                     //
/* 10701 */                     // line 345:
/* 10702 */                     //             raise TypeError("pattern expected str or CaitNode, found {0}".format(type(pattern)))
/* 10703 */                     //                   ^
/* 10704 */                     //
/* 10705 */                     Sk.currLineNo = 345;
/* 10706 */                     Sk.currColNo = 18;
/* 10707 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10708 */                     $currLineNo = 345;
/* 10709 */                     $currColNo = 18;
/* 10710 */                     throw $call676;
/* 10711 */                     $blk = 3; /* allowing case fallthrough */
/* 10712 */                 case 3:
/* 10713 */                     /* --- end of if --- */
/* 10714 */ 
/* 10715 */                     //
/* 10716 */                     // line 346:
/* 10717 */                     //         matcher = stm.StretchyTreeMatcher(pattern, report=self.report)
/* 10718 */                     //         ^
/* 10719 */                     //
/* 10720 */                     Sk.currLineNo = 346;
/* 10721 */                     Sk.currColNo = 8;
/* 10722 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10723 */                     $currLineNo = 346;
/* 10724 */                     $currColNo = 8;
/* 10725 */                     if (stm === undefined) {
/* 10726 */                         throw new Sk.builtin.UnboundLocalError('local variable \'stm\' referenced before assignment');
/* 10727 */                     }
/* 10728 */                     $ret = Sk.abstr.gattr(stm, 'StretchyTreeMatcher', true);
/* 10729 */                     $blk = 10; /* allowing case fallthrough */
/* 10730 */                 case 10:
/* 10731 */                     /* --- function return or resume suspension --- */
/* 10732 */                     if ($ret && $ret.$isSuspension) {
/* 10733 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 346, 18);
/* 10734 */                     }
/* 10735 */                     var $lattr677 = $ret;
/* 10736 */                     if (pattern === undefined) {
/* 10737 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pattern\' referenced before assignment');
/* 10738 */                     }
/* 10739 */                     if (self === undefined) {
/* 10740 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10741 */                     }
/* 10742 */                     $ret = Sk.abstr.gattr(self, 'report', true);
/* 10743 */                     $blk = 11; /* allowing case fallthrough */
/* 10744 */                 case 11:
/* 10745 */                     /* --- function return or resume suspension --- */
/* 10746 */                     if ($ret && $ret.$isSuspension) {
/* 10747 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 346, 58);
/* 10748 */                     }
/* 10749 */                     var $lattr678 = $ret;
/* 10750 */                     $ret;
/* 10751 */                     $ret = Sk.misceval.callOrSuspend($lattr677, undefined, undefined, ['report', $lattr678], pattern);
/* 10752 */                     $blk = 12; /* allowing case fallthrough */
/* 10753 */                 case 12:
/* 10754 */                     /* --- function return or resume suspension --- */
/* 10755 */                     if ($ret && $ret.$isSuspension) {
/* 10756 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 346, 18);
/* 10757 */                     }
/* 10758 */                     var $call679 = $ret;
/* 10759 */ 
/* 10760 */                     //
/* 10761 */                     // line 346:
/* 10762 */                     //         matcher = stm.StretchyTreeMatcher(pattern, report=self.report)
/* 10763 */                     //                   ^
/* 10764 */                     //
/* 10765 */                     Sk.currLineNo = 346;
/* 10766 */                     Sk.currColNo = 18;
/* 10767 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10768 */                     $currLineNo = 346;
/* 10769 */                     $currColNo = 18;
/* 10770 */                     matcher = $call679;
/* 10771 */ 
/* 10772 */                     //
/* 10773 */                     // line 347:
/* 10774 */                     //         if (not is_node and not is_mod) and len(matcher.root_node.children) != 1:
/* 10775 */                     //         ^
/* 10776 */                     //
/* 10777 */                     Sk.currLineNo = 347;
/* 10778 */                     Sk.currColNo = 8;
/* 10779 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10780 */                     $currLineNo = 347;
/* 10781 */                     $currColNo = 8;
/* 10782 */                     if (is_node === undefined) {
/* 10783 */                         throw new Sk.builtin.UnboundLocalError('local variable \'is_node\' referenced before assignment');
/* 10784 */                     }
/* 10785 */                     var $unaryop680 = Sk.abstr.numberUnaryOp(is_node, 'Not');
/* 10786 */                     var $boolopsucc681 = $unaryop680;
/* 10787 */                     $boolopsucc681 = $unaryop680;
/* 10788 */                     var $jfalse682 = ($unaryop680 === false || !Sk.misceval.isTrue($unaryop680));
/* 10789 */                     if ($jfalse682) { /*test failed */
/* 10790 */                         $blk = 15;
/* 10791 */                         continue;
/* 10792 */                     }
/* 10793 */                     if (is_mod === undefined) {
/* 10794 */                         throw new Sk.builtin.UnboundLocalError('local variable \'is_mod\' referenced before assignment');
/* 10795 */                     }
/* 10796 */                     var $unaryop683 = Sk.abstr.numberUnaryOp(is_mod, 'Not');
/* 10797 */                     $boolopsucc681 = $unaryop683;
/* 10798 */                     var $jfalse684 = ($unaryop683 === false || !Sk.misceval.isTrue($unaryop683));
/* 10799 */                     if ($jfalse684) { /*test failed */
/* 10800 */                         $blk = 15;
/* 10801 */                         continue;
/* 10802 */                     }
/* 10803 */                     $blk = 15; /* allowing case fallthrough */
/* 10804 */                 case 15:
/* 10805 */                     /* --- end of boolop --- */
/* 10806 */                     var $boolopsucc685 = $boolopsucc681;
/* 10807 */                     $boolopsucc685 = $boolopsucc681;
/* 10808 */                     var $jfalse686 = ($boolopsucc681 === false || !Sk.misceval.isTrue($boolopsucc681));
/* 10809 */                     if ($jfalse686) { /*test failed */
/* 10810 */                         $blk = 14;
/* 10811 */                         continue;
/* 10812 */                     }
/* 10813 */                     var $loadgbl687 = Sk.misceval.loadname('len', $gbl);
/* 10814 */                     if (matcher === undefined) {
/* 10815 */                         throw new Sk.builtin.UnboundLocalError('local variable \'matcher\' referenced before assignment');
/* 10816 */                     }
/* 10817 */                     $ret = Sk.abstr.gattr(matcher, 'root_node', true);
/* 10818 */                     $blk = 16; /* allowing case fallthrough */
/* 10819 */                 case 16:
/* 10820 */                     /* --- function return or resume suspension --- */
/* 10821 */                     if ($ret && $ret.$isSuspension) {
/* 10822 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 347, 48);
/* 10823 */                     }
/* 10824 */                     var $lattr688 = $ret;
/* 10825 */                     $ret = Sk.abstr.gattr($lattr688, 'children', true);
/* 10826 */                     $blk = 17; /* allowing case fallthrough */
/* 10827 */                 case 17:
/* 10828 */                     /* --- function return or resume suspension --- */
/* 10829 */                     if ($ret && $ret.$isSuspension) {
/* 10830 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 347, 48);
/* 10831 */                     }
/* 10832 */                     var $lattr689 = $ret;
/* 10833 */                     $ret;
/* 10834 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl687, $lattr689);
/* 10835 */                     $blk = 18; /* allowing case fallthrough */
/* 10836 */                 case 18:
/* 10837 */                     /* --- function return or resume suspension --- */
/* 10838 */                     if ($ret && $ret.$isSuspension) {
/* 10839 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 347, 44);
/* 10840 */                     }
/* 10841 */                     var $call690 = $ret;
/* 10842 */ 
/* 10843 */                     //
/* 10844 */                     // line 347:
/* 10845 */                     //         if (not is_node and not is_mod) and len(matcher.root_node.children) != 1:
/* 10846 */                     //                                             ^
/* 10847 */                     //
/* 10848 */                     Sk.currLineNo = 347;
/* 10849 */                     Sk.currColNo = 44;
/* 10850 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10851 */                     $currLineNo = 347;
/* 10852 */                     $currColNo = 44;
/* 10853 */                     var $compareres691 = null;
/* 10854 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call690, new Sk.builtin.int_(1), 'NotEq', true));
/* 10855 */                     $blk = 20; /* allowing case fallthrough */
/* 10856 */                 case 20:
/* 10857 */                     /* --- function return or resume suspension --- */
/* 10858 */                     if ($ret && $ret.$isSuspension) {
/* 10859 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 347, 44);
/* 10860 */                     }
/* 10861 */                     $compareres691 = $ret;
/* 10862 */                     var $jfalse692 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 10863 */                     if ($jfalse692) { /*test failed */
/* 10864 */                         $blk = 19;
/* 10865 */                         continue;
/* 10866 */                     }
/* 10867 */                     $blk = 19; /* allowing case fallthrough */
/* 10868 */                 case 19:
/* 10869 */                     /* --- done --- */
/* 10870 */                     $boolopsucc685 = $compareres691;
/* 10871 */                     var $jfalse693 = ($compareres691 === false || !Sk.misceval.isTrue($compareres691));
/* 10872 */                     if ($jfalse693) { /*test failed */
/* 10873 */                         $blk = 14;
/* 10874 */                         continue;
/* 10875 */                     }
/* 10876 */                     $blk = 14; /* allowing case fallthrough */
/* 10877 */                 case 14:
/* 10878 */                     /* --- end of boolop --- */
/* 10879 */                     var $jfalse694 = ($boolopsucc685 === false || !Sk.misceval.isTrue($boolopsucc685));
/* 10880 */                     if ($jfalse694) { /*test failed */
/* 10881 */                         $blk = 13;
/* 10882 */                         continue;
/* 10883 */                     }
/* 10884 */ 
/* 10885 */                     //
/* 10886 */                     // line 348:
/* 10887 */                     //             raise ValueError("pattern does not evaluate to a singular statement")
/* 10888 */                     //             ^
/* 10889 */                     //
/* 10890 */                     Sk.currLineNo = 348;
/* 10891 */                     Sk.currColNo = 12;
/* 10892 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10893 */                     $currLineNo = 348;
/* 10894 */                     $currColNo = 12;
/* 10895 */                     var $loadgbl695 = Sk.misceval.loadname('ValueError', $gbl);
/* 10896 */                     var $str696 = new Sk.builtins['str']('pattern does not evaluate to a singular statement');
/* 10897 */                     $ret;
/* 10898 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl695, $str696);
/* 10899 */                     $blk = 21; /* allowing case fallthrough */
/* 10900 */                 case 21:
/* 10901 */                     /* --- function return or resume suspension --- */
/* 10902 */                     if ($ret && $ret.$isSuspension) {
/* 10903 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 348, 18);
/* 10904 */                     }
/* 10905 */                     var $call697 = $ret;
/* 10906 */ 
/* 10907 */                     //
/* 10908 */                     // line 348:
/* 10909 */                     //             raise ValueError("pattern does not evaluate to a singular statement")
/* 10910 */                     //                   ^
/* 10911 */                     //
/* 10912 */                     Sk.currLineNo = 348;
/* 10913 */                     Sk.currColNo = 18;
/* 10914 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10915 */                     $currLineNo = 348;
/* 10916 */                     $currColNo = 18;
/* 10917 */                     throw $call697;
/* 10918 */                     $blk = 13; /* allowing case fallthrough */
/* 10919 */                 case 13:
/* 10920 */                     /* --- end of if --- */
/* 10921 */ 
/* 10922 */                     //
/* 10923 */                     // line 349:
/* 10924 */                     //         return matcher.find_matches(self, check_meta=False)
/* 10925 */                     //         ^
/* 10926 */                     //
/* 10927 */                     Sk.currLineNo = 349;
/* 10928 */                     Sk.currColNo = 8;
/* 10929 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10930 */                     $currLineNo = 349;
/* 10931 */                     $currColNo = 8;
/* 10932 */                     if (matcher === undefined) {
/* 10933 */                         throw new Sk.builtin.UnboundLocalError('local variable \'matcher\' referenced before assignment');
/* 10934 */                     }
/* 10935 */                     $ret = Sk.abstr.gattr(matcher, 'find_matches', true);
/* 10936 */                     $blk = 22; /* allowing case fallthrough */
/* 10937 */                 case 22:
/* 10938 */                     /* --- function return or resume suspension --- */
/* 10939 */                     if ($ret && $ret.$isSuspension) {
/* 10940 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 349, 15);
/* 10941 */                     }
/* 10942 */                     var $lattr698 = $ret;
/* 10943 */                     if (self === undefined) {
/* 10944 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 10945 */                     }
/* 10946 */                     $ret;
/* 10947 */                     $ret = Sk.misceval.callOrSuspend($lattr698, undefined, undefined, ['check_meta', Sk.builtin.bool.false$], self);
/* 10948 */                     $blk = 23; /* allowing case fallthrough */
/* 10949 */                 case 23:
/* 10950 */                     /* --- function return or resume suspension --- */
/* 10951 */                     if ($ret && $ret.$isSuspension) {
/* 10952 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 349, 15);
/* 10953 */                     }
/* 10954 */                     var $call699 = $ret;
/* 10955 */ 
/* 10956 */                     //
/* 10957 */                     // line 349:
/* 10958 */                     //         return matcher.find_matches(self, check_meta=False)
/* 10959 */                     //                ^
/* 10960 */                     //
/* 10961 */                     Sk.currLineNo = 349;
/* 10962 */                     Sk.currColNo = 15;
/* 10963 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 10964 */                     $currLineNo = 349;
/* 10965 */                     $currColNo = 15;
/* 10966 */                     return $call699;
/* 10967 */                     return Sk.builtin.none.none$;
/* 10968 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 10969 */                 }
/* 10970 */             } catch (err) {
/* 10971 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 10972 */                     Sk.execStart = Date.now()
/* 10973 */                 }
/* 10974 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 10975 */                     err = new Sk.builtin.ExternalError(err);
/* 10976 */                 }
/* 10977 */                 err.traceback.push({
/* 10978 */                     lineno: $currLineNo,
/* 10979 */                     colno: $currColNo,
/* 10980 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 10981 */                 });
/* 10982 */                 if ($exc.length > 0) {
/* 10983 */                     $err = err;
/* 10984 */                     Sk.err = $err;
/* 10985 */                     $blk = $exc.pop();
/* 10986 */                     continue;
/* 10987 */                 } else {
/* 10988 */                     throw err;
/* 10989 */                 }
/* 10990 */             }
/* 10991 */         }
/* 10992 */     });
/* 10993 */     var $scope701 = (function $find_match702$(self, pattern, is_mod) {
/* 10994 */         var matches; /* locals */
/* 10995 */         var is_mod, is_mod, is_mod, matches, matches, matches, pattern, pattern, self, self, $lattr703, $loadgbl705, $loadgbl705, $call706, $compareres707;
/* 10996 */         var $wakeFromSuspension = function() {
/* 10997 */             var susp = $scope701.$wakingSuspension;
/* 10998 */             delete $scope701.$wakingSuspension;
/* 10999 */             $blk = susp.$blk;
/* 11000 */             $loc = susp.$loc;
/* 11001 */             $gbl = susp.$gbl;
/* 11002 */             $exc = susp.$exc;
/* 11003 */             $err = susp.$err;
/* 11004 */             Sk.err = $err;
/* 11005 */             $postfinally = susp.$postfinally;
/* 11006 */             $currLineNo = susp.$lineno;
/* 11007 */             $currColNo = susp.$colno;
/* 11008 */             Sk.lastYield = Date.now();
/* 11009 */             is_mod = susp.$tmps.is_mod;
/* 11010 */             matches = susp.$tmps.matches;
/* 11011 */             pattern = susp.$tmps.pattern;
/* 11012 */             self = susp.$tmps.self;
/* 11013 */             $lattr703 = susp.$tmps.$lattr703;
/* 11014 */             $loadgbl705 = susp.$tmps.$loadgbl705;
/* 11015 */             $call706 = susp.$tmps.$call706;
/* 11016 */             $compareres707 = susp.$tmps.$compareres707;
/* 11017 */             try {
/* 11018 */                 $ret = susp.child.resume();
/* 11019 */             } catch (err) {
/* 11020 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 11021 */                     Sk.execStart = Date.now()
/* 11022 */                 }
/* 11023 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11024 */                     err = new Sk.builtin.ExternalError(err);
/* 11025 */                 }
/* 11026 */                 err.traceback.push({
/* 11027 */                     lineno: $currLineNo,
/* 11028 */                     colno: $currColNo,
/* 11029 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 11030 */                 });
/* 11031 */                 if ($exc.length > 0) {
/* 11032 */                     $err = err;
/* 11033 */                     Sk.err = $err;
/* 11034 */                     $blk = $exc.pop();
/* 11035 */                 } else {
/* 11036 */                     throw err;
/* 11037 */                 }
/* 11038 */             }
/* 11039 */         };
/* 11040 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 11041 */             var susp = new Sk.misceval.Suspension();
/* 11042 */             susp.child = $child;
/* 11043 */             susp.resume = function() {
/* 11044 */                 $scope701.$wakingSuspension = susp;
/* 11045 */                 return $scope701();
/* 11046 */             };
/* 11047 */             susp.data = susp.child.data;
/* 11048 */             susp.$blk = $blk;
/* 11049 */             susp.$loc = $loc;
/* 11050 */             susp.$gbl = $gbl;
/* 11051 */             susp.$exc = $exc;
/* 11052 */             susp.$err = $err;
/* 11053 */             susp.$postfinally = $postfinally;
/* 11054 */             susp.$filename = $filename;
/* 11055 */             susp.$lineno = $lineno;
/* 11056 */             susp.$colno = $colno;
/* 11057 */             susp.optional = susp.child.optional;
/* 11058 */             susp.$tmps = {
/* 11059 */                 "is_mod": is_mod,
/* 11060 */                 "matches": matches,
/* 11061 */                 "pattern": pattern,
/* 11062 */                 "self": self,
/* 11063 */                 "$lattr703": $lattr703,
/* 11064 */                 "$loadgbl705": $loadgbl705,
/* 11065 */                 "$call706": $call706,
/* 11066 */                 "$compareres707": $compareres707
/* 11067 */             };
/* 11068 */             return susp;
/* 11069 */         };
/* 11070 */         var $blk = 0,
/* 11071 */             $exc = [],
/* 11072 */             $loc = {},
/* 11073 */             $gbl = this,
/* 11074 */             $err = undefined,
/* 11075 */             $ret = undefined,
/* 11076 */             $postfinally = undefined,
/* 11077 */             $currLineNo = undefined,
/* 11078 */             $currColNo = undefined;
/* 11079 */         Sk.err = $err;
/* 11080 */         if (typeof Sk.execStart === 'undefined') {
/* 11081 */             Sk.execStart = Date.now()
/* 11082 */         }
/* 11083 */         if (typeof Sk.lastYield === 'undefined') {
/* 11084 */             Sk.lastYield = Date.now()
/* 11085 */         }
/* 11086 */         if ($scope701.$wakingSuspension !== undefined) {
/* 11087 */             $wakeFromSuspension();
/* 11088 */         } else {
/* 11089 */             if (is_mod === undefined) is_mod = $scope701.$defaults[0];
/* 11090 */             Sk.builtin.pyCheckArgs("find_match", arguments, 2, 3, false, false);
/* 11091 */         }
/* 11092 */         while (true) {
/* 11093 */             try {
/* 11094 */                 var $dateNow = Date.now();
/* 11095 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 11096 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 11097 */                 }
/* 11098 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 11099 */                     var $susp = $saveSuspension({
/* 11100 */                         data: {
/* 11101 */                             type: 'Sk.yield'
/* 11102 */                         },
/* 11103 */                         resume: function() {}
/* 11104 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 11105 */                     $susp.$blk = $blk;
/* 11106 */                     $susp.optional = true;
/* 11107 */                     return $susp;
/* 11108 */                 }
/* 11109 */                 switch ($blk) {
/* 11110 */                 case 0:
/* 11111 */                     /* --- codeobj entry --- */
/* 11112 */                     if (self === undefined) {
/* 11113 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11114 */                     }
/* 11115 */                     if (pattern === undefined) {
/* 11116 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pattern\' referenced before assignment');
/* 11117 */                     }
/* 11118 */                     if (is_mod === undefined) {
/* 11119 */                         throw new Sk.builtin.UnboundLocalError('local variable \'is_mod\' referenced before assignment');
/* 11120 */                     }
/* 11121 */                     if (is_mod === undefined) {
/* 11122 */                         throw new Sk.builtin.UnboundLocalError('local variable \'is_mod\' referenced before assignment');
/* 11123 */                     }
/* 11124 */ 
/* 11125 */ 
/* 11126 */                     //
/* 11127 */                     // line 352:
/* 11128 */                     //         matches = self.find_matches(pattern, is_mod)
/* 11129 */                     //         ^
/* 11130 */                     //
/* 11131 */                     Sk.currLineNo = 352;
/* 11132 */                     Sk.currColNo = 8;
/* 11133 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11134 */                     $currLineNo = 352;
/* 11135 */                     $currColNo = 8;
/* 11136 */                     if (self === undefined) {
/* 11137 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11138 */                     }
/* 11139 */                     $ret = Sk.abstr.gattr(self, 'find_matches', true);
/* 11140 */                     $blk = 1; /* allowing case fallthrough */
/* 11141 */                 case 1:
/* 11142 */                     /* --- function return or resume suspension --- */
/* 11143 */                     if ($ret && $ret.$isSuspension) {
/* 11144 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 352, 18);
/* 11145 */                     }
/* 11146 */                     var $lattr703 = $ret;
/* 11147 */                     if (pattern === undefined) {
/* 11148 */                         throw new Sk.builtin.UnboundLocalError('local variable \'pattern\' referenced before assignment');
/* 11149 */                     }
/* 11150 */                     if (is_mod === undefined) {
/* 11151 */                         throw new Sk.builtin.UnboundLocalError('local variable \'is_mod\' referenced before assignment');
/* 11152 */                     }
/* 11153 */                     $ret;
/* 11154 */                     $ret = Sk.misceval.callsimOrSuspend($lattr703, pattern, is_mod);
/* 11155 */                     $blk = 2; /* allowing case fallthrough */
/* 11156 */                 case 2:
/* 11157 */                     /* --- function return or resume suspension --- */
/* 11158 */                     if ($ret && $ret.$isSuspension) {
/* 11159 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 352, 18);
/* 11160 */                     }
/* 11161 */                     var $call704 = $ret;
/* 11162 */ 
/* 11163 */                     //
/* 11164 */                     // line 352:
/* 11165 */                     //         matches = self.find_matches(pattern, is_mod)
/* 11166 */                     //                   ^
/* 11167 */                     //
/* 11168 */                     Sk.currLineNo = 352;
/* 11169 */                     Sk.currColNo = 18;
/* 11170 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11171 */                     $currLineNo = 352;
/* 11172 */                     $currColNo = 18;
/* 11173 */                     matches = $call704;
/* 11174 */ 
/* 11175 */                     //
/* 11176 */                     // line 353:
/* 11177 */                     //         if len(matches) != 0:
/* 11178 */                     //         ^
/* 11179 */                     //
/* 11180 */                     Sk.currLineNo = 353;
/* 11181 */                     Sk.currColNo = 8;
/* 11182 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11183 */                     $currLineNo = 353;
/* 11184 */                     $currColNo = 8;
/* 11185 */                     var $loadgbl705 = Sk.misceval.loadname('len', $gbl);
/* 11186 */                     if (matches === undefined) {
/* 11187 */                         throw new Sk.builtin.UnboundLocalError('local variable \'matches\' referenced before assignment');
/* 11188 */                     }
/* 11189 */                     $ret;
/* 11190 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl705, matches);
/* 11191 */                     $blk = 4; /* allowing case fallthrough */
/* 11192 */                 case 4:
/* 11193 */                     /* --- function return or resume suspension --- */
/* 11194 */                     if ($ret && $ret.$isSuspension) {
/* 11195 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 353, 11);
/* 11196 */                     }
/* 11197 */                     var $call706 = $ret;
/* 11198 */ 
/* 11199 */                     //
/* 11200 */                     // line 353:
/* 11201 */                     //         if len(matches) != 0:
/* 11202 */                     //            ^
/* 11203 */                     //
/* 11204 */                     Sk.currLineNo = 353;
/* 11205 */                     Sk.currColNo = 11;
/* 11206 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11207 */                     $currLineNo = 353;
/* 11208 */                     $currColNo = 11;
/* 11209 */                     var $compareres707 = null;
/* 11210 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call706, new Sk.builtin.int_(0), 'NotEq', true));
/* 11211 */                     $blk = 6; /* allowing case fallthrough */
/* 11212 */                 case 6:
/* 11213 */                     /* --- function return or resume suspension --- */
/* 11214 */                     if ($ret && $ret.$isSuspension) {
/* 11215 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 353, 11);
/* 11216 */                     }
/* 11217 */                     $compareres707 = $ret;
/* 11218 */                     var $jfalse708 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 11219 */                     if ($jfalse708) { /*test failed */
/* 11220 */                         $blk = 5;
/* 11221 */                         continue;
/* 11222 */                     }
/* 11223 */                     $blk = 5; /* allowing case fallthrough */
/* 11224 */                 case 5:
/* 11225 */                     /* --- done --- */
/* 11226 */                     var $jfalse709 = ($compareres707 === false || !Sk.misceval.isTrue($compareres707));
/* 11227 */                     if ($jfalse709) { /*test failed */
/* 11228 */                         $blk = 3;
/* 11229 */                         continue;
/* 11230 */                     }
/* 11231 */ 
/* 11232 */                     //
/* 11233 */                     // line 354:
/* 11234 */                     //             return matches[0]
/* 11235 */                     //             ^
/* 11236 */                     //
/* 11237 */                     Sk.currLineNo = 354;
/* 11238 */                     Sk.currColNo = 12;
/* 11239 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11240 */                     $currLineNo = 354;
/* 11241 */                     $currColNo = 12;
/* 11242 */                     if (matches === undefined) {
/* 11243 */                         throw new Sk.builtin.UnboundLocalError('local variable \'matches\' referenced before assignment');
/* 11244 */                     }
/* 11245 */                     $ret = Sk.abstr.objectGetItem(matches, new Sk.builtin.int_(0), true);
/* 11246 */                     $blk = 7; /* allowing case fallthrough */
/* 11247 */                 case 7:
/* 11248 */                     /* --- function return or resume suspension --- */
/* 11249 */                     if ($ret && $ret.$isSuspension) {
/* 11250 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 11251 */                     }
/* 11252 */                     var $lsubscr710 = $ret;
/* 11253 */                     return $lsubscr710;
/* 11254 */                     $blk = 3; /* allowing case fallthrough */
/* 11255 */                 case 3:
/* 11256 */                     /* --- end of if --- */
/* 11257 */ 
/* 11258 */                     //
/* 11259 */                     // line 355:
/* 11260 */                     //         return None
/* 11261 */                     //         ^
/* 11262 */                     //
/* 11263 */                     Sk.currLineNo = 355;
/* 11264 */                     Sk.currColNo = 8;
/* 11265 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11266 */                     $currLineNo = 355;
/* 11267 */                     $currColNo = 8;
/* 11268 */                     return Sk.builtin.none.none$;
/* 11269 */                     return Sk.builtin.none.none$;
/* 11270 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 11271 */                 }
/* 11272 */             } catch (err) {
/* 11273 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 11274 */                     Sk.execStart = Date.now()
/* 11275 */                 }
/* 11276 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11277 */                     err = new Sk.builtin.ExternalError(err);
/* 11278 */                 }
/* 11279 */                 err.traceback.push({
/* 11280 */                     lineno: $currLineNo,
/* 11281 */                     colno: $currColNo,
/* 11282 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 11283 */                 });
/* 11284 */                 if ($exc.length > 0) {
/* 11285 */                     $err = err;
/* 11286 */                     Sk.err = $err;
/* 11287 */                     $blk = $exc.pop();
/* 11288 */                     continue;
/* 11289 */                 } else {
/* 11290 */                     throw err;
/* 11291 */                 }
/* 11292 */             }
/* 11293 */         }
/* 11294 */     });
/* 11295 */     var $scope712 = (function $find_all713$(self, node_type) {
/* 11296 */         var func_name, func_ref, items, main_visit, visitor; /* locals */
/* 11297 */         var func_name, func_name, func_ref, func_ref, items, items, main_visit, main_visit, node_type, node_type, self, self, visitor, visitor, visitor, visitor, visitor, visitor, $loadgbl716, $loadgbl716, $lattr717, $loadgbl719, $str720, $loadgbl733, $loadgbl734, $loadgbl733, $loadgbl734, $call735, $lattr737, $lattr737, $lattr738;
/* 11298 */         var $wakeFromSuspension = function() {
/* 11299 */             var susp = $scope712.$wakingSuspension;
/* 11300 */             delete $scope712.$wakingSuspension;
/* 11301 */             $blk = susp.$blk;
/* 11302 */             $loc = susp.$loc;
/* 11303 */             $gbl = susp.$gbl;
/* 11304 */             $exc = susp.$exc;
/* 11305 */             $err = susp.$err;
/* 11306 */             Sk.err = $err;
/* 11307 */             $postfinally = susp.$postfinally;
/* 11308 */             $currLineNo = susp.$lineno;
/* 11309 */             $currColNo = susp.$colno;
/* 11310 */             Sk.lastYield = Date.now();
/* 11311 */             func_name = susp.$tmps.func_name;
/* 11312 */             func_ref = susp.$tmps.func_ref;
/* 11313 */             items = susp.$tmps.items;
/* 11314 */             main_visit = susp.$tmps.main_visit;
/* 11315 */             node_type = susp.$tmps.node_type;
/* 11316 */             self = susp.$tmps.self;
/* 11317 */             visitor = susp.$tmps.visitor;
/* 11318 */             $loadgbl716 = susp.$tmps.$loadgbl716;
/* 11319 */             $lattr717 = susp.$tmps.$lattr717;
/* 11320 */             $loadgbl719 = susp.$tmps.$loadgbl719;
/* 11321 */             $str720 = susp.$tmps.$str720;
/* 11322 */             $loadgbl733 = susp.$tmps.$loadgbl733;
/* 11323 */             $loadgbl734 = susp.$tmps.$loadgbl734;
/* 11324 */             $call735 = susp.$tmps.$call735;
/* 11325 */             $lattr737 = susp.$tmps.$lattr737;
/* 11326 */             $lattr738 = susp.$tmps.$lattr738;
/* 11327 */             try {
/* 11328 */                 $ret = susp.child.resume();
/* 11329 */             } catch (err) {
/* 11330 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 11331 */                     Sk.execStart = Date.now()
/* 11332 */                 }
/* 11333 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11334 */                     err = new Sk.builtin.ExternalError(err);
/* 11335 */                 }
/* 11336 */                 err.traceback.push({
/* 11337 */                     lineno: $currLineNo,
/* 11338 */                     colno: $currColNo,
/* 11339 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 11340 */                 });
/* 11341 */                 if ($exc.length > 0) {
/* 11342 */                     $err = err;
/* 11343 */                     Sk.err = $err;
/* 11344 */                     $blk = $exc.pop();
/* 11345 */                 } else {
/* 11346 */                     throw err;
/* 11347 */                 }
/* 11348 */             }
/* 11349 */         };
/* 11350 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 11351 */             var susp = new Sk.misceval.Suspension();
/* 11352 */             susp.child = $child;
/* 11353 */             susp.resume = function() {
/* 11354 */                 $scope712.$wakingSuspension = susp;
/* 11355 */                 return $scope712();
/* 11356 */             };
/* 11357 */             susp.data = susp.child.data;
/* 11358 */             susp.$blk = $blk;
/* 11359 */             susp.$loc = $loc;
/* 11360 */             susp.$gbl = $gbl;
/* 11361 */             susp.$exc = $exc;
/* 11362 */             susp.$err = $err;
/* 11363 */             susp.$postfinally = $postfinally;
/* 11364 */             susp.$filename = $filename;
/* 11365 */             susp.$lineno = $lineno;
/* 11366 */             susp.$colno = $colno;
/* 11367 */             susp.optional = susp.child.optional;
/* 11368 */             susp.$tmps = {
/* 11369 */                 "func_name": func_name,
/* 11370 */                 "func_ref": func_ref,
/* 11371 */                 "items": items,
/* 11372 */                 "main_visit": main_visit,
/* 11373 */                 "node_type": node_type,
/* 11374 */                 "self": self,
/* 11375 */                 "visitor": visitor,
/* 11376 */                 "$loadgbl716": $loadgbl716,
/* 11377 */                 "$lattr717": $lattr717,
/* 11378 */                 "$loadgbl719": $loadgbl719,
/* 11379 */                 "$str720": $str720,
/* 11380 */                 "$loadgbl733": $loadgbl733,
/* 11381 */                 "$loadgbl734": $loadgbl734,
/* 11382 */                 "$call735": $call735,
/* 11383 */                 "$lattr737": $lattr737,
/* 11384 */                 "$lattr738": $lattr738
/* 11385 */             };
/* 11386 */             return susp;
/* 11387 */         };
/* 11388 */         var $blk = 0,
/* 11389 */             $exc = [],
/* 11390 */             $loc = {},
/* 11391 */             $gbl = this,
/* 11392 */             $err = undefined,
/* 11393 */             $ret = undefined,
/* 11394 */             $postfinally = undefined,
/* 11395 */             $currLineNo = undefined,
/* 11396 */             $currColNo = undefined;
/* 11397 */         Sk.err = $err;
/* 11398 */         if (typeof Sk.execStart === 'undefined') {
/* 11399 */             Sk.execStart = Date.now()
/* 11400 */         }
/* 11401 */         if (typeof Sk.lastYield === 'undefined') {
/* 11402 */             Sk.lastYield = Date.now()
/* 11403 */         }
/* 11404 */         if ($scope712.$wakingSuspension !== undefined) {
/* 11405 */             $wakeFromSuspension();
/* 11406 */         } else {
/* 11407 */             Sk.builtin.pyCheckArgs("find_all", arguments, 2, 2, false, false);
/* 11408 */         }
/* 11409 */         while (true) {
/* 11410 */             try {
/* 11411 */                 var $dateNow = Date.now();
/* 11412 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 11413 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 11414 */                 }
/* 11415 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 11416 */                     var $susp = $saveSuspension({
/* 11417 */                         data: {
/* 11418 */                             type: 'Sk.yield'
/* 11419 */                         },
/* 11420 */                         resume: function() {}
/* 11421 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 11422 */                     $susp.$blk = $blk;
/* 11423 */                     $susp.optional = true;
/* 11424 */                     return $susp;
/* 11425 */                 }
/* 11426 */                 switch ($blk) {
/* 11427 */                 case 0:
/* 11428 */                     /* --- codeobj entry --- */
/* 11429 */                     if (self === undefined) {
/* 11430 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11431 */                     }
/* 11432 */                     if (node_type === undefined) {
/* 11433 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_type\' referenced before assignment');
/* 11434 */                     }
/* 11435 */ 
/* 11436 */ 
/* 11437 */                     //
/* 11438 */                     // line 358:
/* 11439 */                     //         """Finds all nodes defined by string node_type
/* 11440 */                     //         ^
/* 11441 */                     //
/* 11442 */                     Sk.currLineNo = 358;
/* 11443 */                     Sk.currColNo = 8;
/* 11444 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11445 */                     $currLineNo = 358;
/* 11446 */                     $currColNo = 8;
/* 11447 */                     var $str714 = new Sk.builtins['str']('Finds all nodes defined by string node_type\n\n        Args:\n            node_type: the string representing the "type" of node to look for\n\n        Returns:\n            a list of Ast Nodes (cait_nodes) of self that are of the specified type (including self if self\n                    meets that criteria)\n        ');
/* 11448 */ 
/* 11449 */                     //
/* 11450 */                     // line 367:
/* 11451 */                     //         items = []
/* 11452 */                     //         ^
/* 11453 */                     //
/* 11454 */                     Sk.currLineNo = 367;
/* 11455 */                     Sk.currColNo = 8;
/* 11456 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11457 */                     $currLineNo = 367;
/* 11458 */                     $currColNo = 8;
/* 11459 */                     var $loadlist715 = new Sk.builtins['list']([]);
/* 11460 */                     items = $loadlist715;
/* 11461 */ 
/* 11462 */                     //
/* 11463 */                     // line 368:
/* 11464 */                     //         visitor = ast.NodeVisitor()
/* 11465 */                     //         ^
/* 11466 */                     //
/* 11467 */                     Sk.currLineNo = 368;
/* 11468 */                     Sk.currColNo = 8;
/* 11469 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11470 */                     $currLineNo = 368;
/* 11471 */                     $currColNo = 8;
/* 11472 */                     var $loadgbl716 = Sk.misceval.loadname('ast', $gbl);
/* 11473 */                     $ret = Sk.abstr.gattr($loadgbl716, 'NodeVisitor', true);
/* 11474 */                     $blk = 1; /* allowing case fallthrough */
/* 11475 */                 case 1:
/* 11476 */                     /* --- function return or resume suspension --- */
/* 11477 */                     if ($ret && $ret.$isSuspension) {
/* 11478 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 368, 18);
/* 11479 */                     }
/* 11480 */                     var $lattr717 = $ret;
/* 11481 */                     $ret;
/* 11482 */                     $ret = Sk.misceval.callsimOrSuspend($lattr717);
/* 11483 */                     $blk = 2; /* allowing case fallthrough */
/* 11484 */                 case 2:
/* 11485 */                     /* --- function return or resume suspension --- */
/* 11486 */                     if ($ret && $ret.$isSuspension) {
/* 11487 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 368, 18);
/* 11488 */                     }
/* 11489 */                     var $call718 = $ret;
/* 11490 */ 
/* 11491 */                     //
/* 11492 */                     // line 368:
/* 11493 */                     //         visitor = ast.NodeVisitor()
/* 11494 */                     //                   ^
/* 11495 */                     //
/* 11496 */                     Sk.currLineNo = 368;
/* 11497 */                     Sk.currColNo = 18;
/* 11498 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11499 */                     $currLineNo = 368;
/* 11500 */                     $currColNo = 18;
/* 11501 */                     visitor = $call718;
/* 11502 */ 
/* 11503 */                     //
/* 11504 */                     // line 370:
/* 11505 */                     //         setattr(visitor, "items", items)
/* 11506 */                     //         ^
/* 11507 */                     //
/* 11508 */                     Sk.currLineNo = 370;
/* 11509 */                     Sk.currColNo = 8;
/* 11510 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11511 */                     $currLineNo = 370;
/* 11512 */                     $currColNo = 8;
/* 11513 */                     var $loadgbl719 = Sk.misceval.loadname('setattr', $gbl);
/* 11514 */                     if (visitor === undefined) {
/* 11515 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 11516 */                     }
/* 11517 */                     var $str720 = new Sk.builtins['str']('items');
/* 11518 */                     if (items === undefined) {
/* 11519 */                         throw new Sk.builtin.UnboundLocalError('local variable \'items\' referenced before assignment');
/* 11520 */                     }
/* 11521 */                     $ret;
/* 11522 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl719, visitor, $str720, items);
/* 11523 */                     $blk = 3; /* allowing case fallthrough */
/* 11524 */                 case 3:
/* 11525 */                     /* --- function return or resume suspension --- */
/* 11526 */                     if ($ret && $ret.$isSuspension) {
/* 11527 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 370, 8);
/* 11528 */                     }
/* 11529 */                     var $call721 = $ret;
/* 11530 */ 
/* 11531 */                     //
/* 11532 */                     // line 370:
/* 11533 */                     //         setattr(visitor, "items", items)
/* 11534 */                     //         ^
/* 11535 */                     //
/* 11536 */                     Sk.currLineNo = 370;
/* 11537 */                     Sk.currColNo = 8;
/* 11538 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11539 */                     $currLineNo = 370;
/* 11540 */                     $currColNo = 8;
/* 11541 */ 
/* 11542 */ 
/* 11543 */                     //
/* 11544 */                     // line 371:
/* 11545 */                     //         func_name = 'visit_' + node_type
/* 11546 */                     //         ^
/* 11547 */                     //
/* 11548 */                     Sk.currLineNo = 371;
/* 11549 */                     Sk.currColNo = 8;
/* 11550 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11551 */                     $currLineNo = 371;
/* 11552 */                     $currColNo = 8;
/* 11553 */                     var $str722 = new Sk.builtins['str']('visit_');
/* 11554 */                     if (node_type === undefined) {
/* 11555 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node_type\' referenced before assignment');
/* 11556 */                     }
/* 11557 */                     var $binop723 = Sk.abstr.numberBinOp($str722, node_type, 'Add');
/* 11558 */                     func_name = $binop723;
/* 11559 */ 
/* 11560 */                     //
/* 11561 */                     // line 373:
/* 11562 */                     //         def main_visit(self, node):
/* 11563 */                     //         ^
/* 11564 */                     //
/* 11565 */                     Sk.currLineNo = 373;
/* 11566 */                     Sk.currColNo = 8;
/* 11567 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11568 */                     $currLineNo = 373;
/* 11569 */                     $currColNo = 8;
/* 11570 */                     $scope724.co_name = new Sk.builtins['str']('main_visit');
/* 11571 */                     $scope724.co_varnames = ['self', 'node'];
/* 11572 */                     var $funcobj732 = new Sk.builtins['function']($scope724, $gbl);
/* 11573 */                     main_visit = $funcobj732;
/* 11574 */ 
/* 11575 */                     //
/* 11576 */                     // line 377:
/* 11577 */                     //         func_ref = main_visit
/* 11578 */                     //         ^
/* 11579 */                     //
/* 11580 */                     Sk.currLineNo = 377;
/* 11581 */                     Sk.currColNo = 8;
/* 11582 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11583 */                     $currLineNo = 377;
/* 11584 */                     $currColNo = 8;
/* 11585 */                     if (main_visit === undefined) {
/* 11586 */                         throw new Sk.builtin.UnboundLocalError('local variable \'main_visit\' referenced before assignment');
/* 11587 */                     }
/* 11588 */                     func_ref = main_visit;
/* 11589 */ 
/* 11590 */                     //
/* 11591 */                     // line 378:
/* 11592 */                     //         setattr(visitor, func_name, MethodType(func_ref, visitor))
/* 11593 */                     //         ^
/* 11594 */                     //
/* 11595 */                     Sk.currLineNo = 378;
/* 11596 */                     Sk.currColNo = 8;
/* 11597 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11598 */                     $currLineNo = 378;
/* 11599 */                     $currColNo = 8;
/* 11600 */                     var $loadgbl733 = Sk.misceval.loadname('setattr', $gbl);
/* 11601 */                     if (visitor === undefined) {
/* 11602 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 11603 */                     }
/* 11604 */                     if (func_name === undefined) {
/* 11605 */                         throw new Sk.builtin.UnboundLocalError('local variable \'func_name\' referenced before assignment');
/* 11606 */                     }
/* 11607 */                     var $loadgbl734 = Sk.misceval.loadname('MethodType', $gbl);
/* 11608 */                     if (func_ref === undefined) {
/* 11609 */                         throw new Sk.builtin.UnboundLocalError('local variable \'func_ref\' referenced before assignment');
/* 11610 */                     }
/* 11611 */                     if (visitor === undefined) {
/* 11612 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 11613 */                     }
/* 11614 */                     $ret;
/* 11615 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl734, func_ref, visitor);
/* 11616 */                     $blk = 4; /* allowing case fallthrough */
/* 11617 */                 case 4:
/* 11618 */                     /* --- function return or resume suspension --- */
/* 11619 */                     if ($ret && $ret.$isSuspension) {
/* 11620 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 378, 36);
/* 11621 */                     }
/* 11622 */                     var $call735 = $ret;
/* 11623 */ 
/* 11624 */                     //
/* 11625 */                     // line 378:
/* 11626 */                     //         setattr(visitor, func_name, MethodType(func_ref, visitor))
/* 11627 */                     //                                     ^
/* 11628 */                     //
/* 11629 */                     Sk.currLineNo = 378;
/* 11630 */                     Sk.currColNo = 36;
/* 11631 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11632 */                     $currLineNo = 378;
/* 11633 */                     $currColNo = 36;
/* 11634 */                     $ret;
/* 11635 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl733, visitor, func_name, $call735);
/* 11636 */                     $blk = 5; /* allowing case fallthrough */
/* 11637 */                 case 5:
/* 11638 */                     /* --- function return or resume suspension --- */
/* 11639 */                     if ($ret && $ret.$isSuspension) {
/* 11640 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 378, 8);
/* 11641 */                     }
/* 11642 */                     var $call736 = $ret;
/* 11643 */ 
/* 11644 */                     //
/* 11645 */                     // line 378:
/* 11646 */                     //         setattr(visitor, func_name, MethodType(func_ref, visitor))
/* 11647 */                     //         ^
/* 11648 */                     //
/* 11649 */                     Sk.currLineNo = 378;
/* 11650 */                     Sk.currColNo = 8;
/* 11651 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11652 */                     $currLineNo = 378;
/* 11653 */                     $currColNo = 8;
/* 11654 */ 
/* 11655 */ 
/* 11656 */                     //
/* 11657 */                     // line 379:
/* 11658 */                     //         visitor.visit(self.astNode)
/* 11659 */                     //         ^
/* 11660 */                     //
/* 11661 */                     Sk.currLineNo = 379;
/* 11662 */                     Sk.currColNo = 8;
/* 11663 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11664 */                     $currLineNo = 379;
/* 11665 */                     $currColNo = 8;
/* 11666 */                     if (visitor === undefined) {
/* 11667 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 11668 */                     }
/* 11669 */                     $ret = Sk.abstr.gattr(visitor, 'visit', true);
/* 11670 */                     $blk = 6; /* allowing case fallthrough */
/* 11671 */                 case 6:
/* 11672 */                     /* --- function return or resume suspension --- */
/* 11673 */                     if ($ret && $ret.$isSuspension) {
/* 11674 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 379, 8);
/* 11675 */                     }
/* 11676 */                     var $lattr737 = $ret;
/* 11677 */                     if (self === undefined) {
/* 11678 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11679 */                     }
/* 11680 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/* 11681 */                     $blk = 7; /* allowing case fallthrough */
/* 11682 */                 case 7:
/* 11683 */                     /* --- function return or resume suspension --- */
/* 11684 */                     if ($ret && $ret.$isSuspension) {
/* 11685 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 379, 22);
/* 11686 */                     }
/* 11687 */                     var $lattr738 = $ret;
/* 11688 */                     $ret;
/* 11689 */                     $ret = Sk.misceval.callsimOrSuspend($lattr737, $lattr738);
/* 11690 */                     $blk = 8; /* allowing case fallthrough */
/* 11691 */                 case 8:
/* 11692 */                     /* --- function return or resume suspension --- */
/* 11693 */                     if ($ret && $ret.$isSuspension) {
/* 11694 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 379, 8);
/* 11695 */                     }
/* 11696 */                     var $call739 = $ret;
/* 11697 */ 
/* 11698 */                     //
/* 11699 */                     // line 379:
/* 11700 */                     //         visitor.visit(self.astNode)
/* 11701 */                     //         ^
/* 11702 */                     //
/* 11703 */                     Sk.currLineNo = 379;
/* 11704 */                     Sk.currColNo = 8;
/* 11705 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11706 */                     $currLineNo = 379;
/* 11707 */                     $currColNo = 8;
/* 11708 */ 
/* 11709 */ 
/* 11710 */                     //
/* 11711 */                     // line 380:
/* 11712 */                     //         return visitor.items
/* 11713 */                     //         ^
/* 11714 */                     //
/* 11715 */                     Sk.currLineNo = 380;
/* 11716 */                     Sk.currColNo = 8;
/* 11717 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11718 */                     $currLineNo = 380;
/* 11719 */                     $currColNo = 8;
/* 11720 */                     if (visitor === undefined) {
/* 11721 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 11722 */                     }
/* 11723 */                     $ret = Sk.abstr.gattr(visitor, 'items', true);
/* 11724 */                     $blk = 9; /* allowing case fallthrough */
/* 11725 */                 case 9:
/* 11726 */                     /* --- function return or resume suspension --- */
/* 11727 */                     if ($ret && $ret.$isSuspension) {
/* 11728 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 380, 15);
/* 11729 */                     }
/* 11730 */                     var $lattr740 = $ret;
/* 11731 */                     return $lattr740;
/* 11732 */                     return Sk.builtin.none.none$;
/* 11733 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 11734 */                 }
/* 11735 */             } catch (err) {
/* 11736 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 11737 */                     Sk.execStart = Date.now()
/* 11738 */                 }
/* 11739 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11740 */                     err = new Sk.builtin.ExternalError(err);
/* 11741 */                 }
/* 11742 */                 err.traceback.push({
/* 11743 */                     lineno: $currLineNo,
/* 11744 */                     colno: $currColNo,
/* 11745 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 11746 */                 });
/* 11747 */                 if ($exc.length > 0) {
/* 11748 */                     $err = err;
/* 11749 */                     Sk.err = $err;
/* 11750 */                     $blk = $exc.pop();
/* 11751 */                     continue;
/* 11752 */                 } else {
/* 11753 */                     throw err;
/* 11754 */                 }
/* 11755 */             }
/* 11756 */         }
/* 11757 */     });
/* 11758 */     var $scope724 = (function $main_visit725$(self, node) {
/* 11759 */         var node, node, node, self, self, self, $lattr726, $lattr726, $lattr727, $lattr726, $lattr727, $lattr728, $lattr730;
/* 11760 */         var $wakeFromSuspension = function() {
/* 11761 */             var susp = $scope724.$wakingSuspension;
/* 11762 */             delete $scope724.$wakingSuspension;
/* 11763 */             $blk = susp.$blk;
/* 11764 */             $loc = susp.$loc;
/* 11765 */             $gbl = susp.$gbl;
/* 11766 */             $exc = susp.$exc;
/* 11767 */             $err = susp.$err;
/* 11768 */             Sk.err = $err;
/* 11769 */             $postfinally = susp.$postfinally;
/* 11770 */             $currLineNo = susp.$lineno;
/* 11771 */             $currColNo = susp.$colno;
/* 11772 */             Sk.lastYield = Date.now();
/* 11773 */             node = susp.$tmps.node;
/* 11774 */             self = susp.$tmps.self;
/* 11775 */             $lattr726 = susp.$tmps.$lattr726;
/* 11776 */             $lattr727 = susp.$tmps.$lattr727;
/* 11777 */             $lattr728 = susp.$tmps.$lattr728;
/* 11778 */             $lattr730 = susp.$tmps.$lattr730;
/* 11779 */             try {
/* 11780 */                 $ret = susp.child.resume();
/* 11781 */             } catch (err) {
/* 11782 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 11783 */                     Sk.execStart = Date.now()
/* 11784 */                 }
/* 11785 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11786 */                     err = new Sk.builtin.ExternalError(err);
/* 11787 */                 }
/* 11788 */                 err.traceback.push({
/* 11789 */                     lineno: $currLineNo,
/* 11790 */                     colno: $currColNo,
/* 11791 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 11792 */                 });
/* 11793 */                 if ($exc.length > 0) {
/* 11794 */                     $err = err;
/* 11795 */                     Sk.err = $err;
/* 11796 */                     $blk = $exc.pop();
/* 11797 */                 } else {
/* 11798 */                     throw err;
/* 11799 */                 }
/* 11800 */             }
/* 11801 */         };
/* 11802 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 11803 */             var susp = new Sk.misceval.Suspension();
/* 11804 */             susp.child = $child;
/* 11805 */             susp.resume = function() {
/* 11806 */                 $scope724.$wakingSuspension = susp;
/* 11807 */                 return $scope724();
/* 11808 */             };
/* 11809 */             susp.data = susp.child.data;
/* 11810 */             susp.$blk = $blk;
/* 11811 */             susp.$loc = $loc;
/* 11812 */             susp.$gbl = $gbl;
/* 11813 */             susp.$exc = $exc;
/* 11814 */             susp.$err = $err;
/* 11815 */             susp.$postfinally = $postfinally;
/* 11816 */             susp.$filename = $filename;
/* 11817 */             susp.$lineno = $lineno;
/* 11818 */             susp.$colno = $colno;
/* 11819 */             susp.optional = susp.child.optional;
/* 11820 */             susp.$tmps = {
/* 11821 */                 "node": node,
/* 11822 */                 "self": self,
/* 11823 */                 "$lattr726": $lattr726,
/* 11824 */                 "$lattr727": $lattr727,
/* 11825 */                 "$lattr728": $lattr728,
/* 11826 */                 "$lattr730": $lattr730
/* 11827 */             };
/* 11828 */             return susp;
/* 11829 */         };
/* 11830 */         var $blk = 0,
/* 11831 */             $exc = [],
/* 11832 */             $loc = {},
/* 11833 */             $gbl = this,
/* 11834 */             $err = undefined,
/* 11835 */             $ret = undefined,
/* 11836 */             $postfinally = undefined,
/* 11837 */             $currLineNo = undefined,
/* 11838 */             $currColNo = undefined;
/* 11839 */         Sk.err = $err;
/* 11840 */         if (typeof Sk.execStart === 'undefined') {
/* 11841 */             Sk.execStart = Date.now()
/* 11842 */         }
/* 11843 */         if (typeof Sk.lastYield === 'undefined') {
/* 11844 */             Sk.lastYield = Date.now()
/* 11845 */         }
/* 11846 */         if ($scope724.$wakingSuspension !== undefined) {
/* 11847 */             $wakeFromSuspension();
/* 11848 */         } else {
/* 11849 */             Sk.builtin.pyCheckArgs("main_visit", arguments, 2, 2, false, false);
/* 11850 */         }
/* 11851 */         while (true) {
/* 11852 */             try {
/* 11853 */                 var $dateNow = Date.now();
/* 11854 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 11855 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 11856 */                 }
/* 11857 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 11858 */                     var $susp = $saveSuspension({
/* 11859 */                         data: {
/* 11860 */                             type: 'Sk.yield'
/* 11861 */                         },
/* 11862 */                         resume: function() {}
/* 11863 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 11864 */                     $susp.$blk = $blk;
/* 11865 */                     $susp.optional = true;
/* 11866 */                     return $susp;
/* 11867 */                 }
/* 11868 */                 switch ($blk) {
/* 11869 */                 case 0:
/* 11870 */                     /* --- codeobj entry --- */
/* 11871 */                     if (self === undefined) {
/* 11872 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11873 */                     }
/* 11874 */                     if (node === undefined) {
/* 11875 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/* 11876 */                     }
/* 11877 */ 
/* 11878 */ 
/* 11879 */                     //
/* 11880 */                     // line 374:
/* 11881 */                     //             self.items.append(node.cait_node)
/* 11882 */                     //             ^
/* 11883 */                     //
/* 11884 */                     Sk.currLineNo = 374;
/* 11885 */                     Sk.currColNo = 12;
/* 11886 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11887 */                     $currLineNo = 374;
/* 11888 */                     $currColNo = 12;
/* 11889 */                     if (self === undefined) {
/* 11890 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11891 */                     }
/* 11892 */                     $ret = Sk.abstr.gattr(self, 'items', true);
/* 11893 */                     $blk = 1; /* allowing case fallthrough */
/* 11894 */                 case 1:
/* 11895 */                     /* --- function return or resume suspension --- */
/* 11896 */                     if ($ret && $ret.$isSuspension) {
/* 11897 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 374, 12);
/* 11898 */                     }
/* 11899 */                     var $lattr726 = $ret;
/* 11900 */                     $ret = Sk.abstr.gattr($lattr726, 'append', true);
/* 11901 */                     $blk = 2; /* allowing case fallthrough */
/* 11902 */                 case 2:
/* 11903 */                     /* --- function return or resume suspension --- */
/* 11904 */                     if ($ret && $ret.$isSuspension) {
/* 11905 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 374, 12);
/* 11906 */                     }
/* 11907 */                     var $lattr727 = $ret;
/* 11908 */                     if (node === undefined) {
/* 11909 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/* 11910 */                     }
/* 11911 */                     $ret = Sk.abstr.gattr(node, 'cait_node', true);
/* 11912 */                     $blk = 3; /* allowing case fallthrough */
/* 11913 */                 case 3:
/* 11914 */                     /* --- function return or resume suspension --- */
/* 11915 */                     if ($ret && $ret.$isSuspension) {
/* 11916 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 374, 30);
/* 11917 */                     }
/* 11918 */                     var $lattr728 = $ret;
/* 11919 */                     $ret;
/* 11920 */                     $ret = Sk.misceval.callsimOrSuspend($lattr727, $lattr728);
/* 11921 */                     $blk = 4; /* allowing case fallthrough */
/* 11922 */                 case 4:
/* 11923 */                     /* --- function return or resume suspension --- */
/* 11924 */                     if ($ret && $ret.$isSuspension) {
/* 11925 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 374, 12);
/* 11926 */                     }
/* 11927 */                     var $call729 = $ret;
/* 11928 */ 
/* 11929 */                     //
/* 11930 */                     // line 374:
/* 11931 */                     //             self.items.append(node.cait_node)
/* 11932 */                     //             ^
/* 11933 */                     //
/* 11934 */                     Sk.currLineNo = 374;
/* 11935 */                     Sk.currColNo = 12;
/* 11936 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11937 */                     $currLineNo = 374;
/* 11938 */                     $currColNo = 12;
/* 11939 */ 
/* 11940 */ 
/* 11941 */                     //
/* 11942 */                     // line 375:
/* 11943 */                     //             return self.generic_visit(node)
/* 11944 */                     //             ^
/* 11945 */                     //
/* 11946 */                     Sk.currLineNo = 375;
/* 11947 */                     Sk.currColNo = 12;
/* 11948 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11949 */                     $currLineNo = 375;
/* 11950 */                     $currColNo = 12;
/* 11951 */                     if (self === undefined) {
/* 11952 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 11953 */                     }
/* 11954 */                     $ret = Sk.abstr.gattr(self, 'generic_visit', true);
/* 11955 */                     $blk = 5; /* allowing case fallthrough */
/* 11956 */                 case 5:
/* 11957 */                     /* --- function return or resume suspension --- */
/* 11958 */                     if ($ret && $ret.$isSuspension) {
/* 11959 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 375, 19);
/* 11960 */                     }
/* 11961 */                     var $lattr730 = $ret;
/* 11962 */                     if (node === undefined) {
/* 11963 */                         throw new Sk.builtin.UnboundLocalError('local variable \'node\' referenced before assignment');
/* 11964 */                     }
/* 11965 */                     $ret;
/* 11966 */                     $ret = Sk.misceval.callsimOrSuspend($lattr730, node);
/* 11967 */                     $blk = 6; /* allowing case fallthrough */
/* 11968 */                 case 6:
/* 11969 */                     /* --- function return or resume suspension --- */
/* 11970 */                     if ($ret && $ret.$isSuspension) {
/* 11971 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 375, 19);
/* 11972 */                     }
/* 11973 */                     var $call731 = $ret;
/* 11974 */ 
/* 11975 */                     //
/* 11976 */                     // line 375:
/* 11977 */                     //             return self.generic_visit(node)
/* 11978 */                     //                    ^
/* 11979 */                     //
/* 11980 */                     Sk.currLineNo = 375;
/* 11981 */                     Sk.currColNo = 19;
/* 11982 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 11983 */                     $currLineNo = 375;
/* 11984 */                     $currColNo = 19;
/* 11985 */                     return $call731;
/* 11986 */                     return Sk.builtin.none.none$;
/* 11987 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 11988 */                 }
/* 11989 */             } catch (err) {
/* 11990 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 11991 */                     Sk.execStart = Date.now()
/* 11992 */                 }
/* 11993 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 11994 */                     err = new Sk.builtin.ExternalError(err);
/* 11995 */                 }
/* 11996 */                 err.traceback.push({
/* 11997 */                     lineno: $currLineNo,
/* 11998 */                     colno: $currColNo,
/* 11999 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 12000 */                 });
/* 12001 */                 if ($exc.length > 0) {
/* 12002 */                     $err = err;
/* 12003 */                     Sk.err = $err;
/* 12004 */                     $blk = $exc.pop();
/* 12005 */                     continue;
/* 12006 */                 } else {
/* 12007 */                     throw err;
/* 12008 */                 }
/* 12009 */             }
/* 12010 */         }
/* 12011 */     });
/* 12012 */     var $scope742 = (function $has743$(self, node) {
/* 12013 */         // has cell
/* 12014 */         var visit_Name, visit_Num, visitor; /* locals */
/* 12015 */         var self, self, self, visit_Name, visit_Name, visit_Num, visit_Num, visitor, visitor, visitor, visitor, visitor, visitor, visitor, visitor, $loadgbl745, $loadgbl746, $elem747, $loadgbl748, $elem749, $loadtuple750, $loadgbl753, $loadgbl753, $lattr754, $loadgbl767, $loadgbl767, $call768, $lattr769, $lattr769, $lattr770, $loadgbl772, $lattr774, $compareres775, $str776, $loadgbl779, $loadgbl779, $lattr780, $loadgbl794, $loadgbl794, $call795, $lattr796, $lattr796, $lattr797, $loadgbl799;
/* 12016 */         var $wakeFromSuspension = function() {
/* 12017 */             var susp = $scope742.$wakingSuspension;
/* 12018 */             delete $scope742.$wakingSuspension;
/* 12019 */             $blk = susp.$blk;
/* 12020 */             $loc = susp.$loc;
/* 12021 */             $gbl = susp.$gbl;
/* 12022 */             $exc = susp.$exc;
/* 12023 */             $err = susp.$err;
/* 12024 */             Sk.err = $err;
/* 12025 */             $postfinally = susp.$postfinally;
/* 12026 */             $currLineNo = susp.$lineno;
/* 12027 */             $currColNo = susp.$colno;
/* 12028 */             Sk.lastYield = Date.now();
/* 12029 */             $cell = susp.$cell;
/* 12030 */             self = susp.$tmps.self;
/* 12031 */             visit_Name = susp.$tmps.visit_Name;
/* 12032 */             visit_Num = susp.$tmps.visit_Num;
/* 12033 */             visitor = susp.$tmps.visitor;
/* 12034 */             $loadgbl745 = susp.$tmps.$loadgbl745;
/* 12035 */             $loadgbl746 = susp.$tmps.$loadgbl746;
/* 12036 */             $elem747 = susp.$tmps.$elem747;
/* 12037 */             $loadgbl748 = susp.$tmps.$loadgbl748;
/* 12038 */             $elem749 = susp.$tmps.$elem749;
/* 12039 */             $loadtuple750 = susp.$tmps.$loadtuple750;
/* 12040 */             $loadgbl753 = susp.$tmps.$loadgbl753;
/* 12041 */             $lattr754 = susp.$tmps.$lattr754;
/* 12042 */             $loadgbl767 = susp.$tmps.$loadgbl767;
/* 12043 */             $call768 = susp.$tmps.$call768;
/* 12044 */             $lattr769 = susp.$tmps.$lattr769;
/* 12045 */             $lattr770 = susp.$tmps.$lattr770;
/* 12046 */             $loadgbl772 = susp.$tmps.$loadgbl772;
/* 12047 */             $lattr774 = susp.$tmps.$lattr774;
/* 12048 */             $compareres775 = susp.$tmps.$compareres775;
/* 12049 */             $str776 = susp.$tmps.$str776;
/* 12050 */             $loadgbl779 = susp.$tmps.$loadgbl779;
/* 12051 */             $lattr780 = susp.$tmps.$lattr780;
/* 12052 */             $loadgbl794 = susp.$tmps.$loadgbl794;
/* 12053 */             $call795 = susp.$tmps.$call795;
/* 12054 */             $lattr796 = susp.$tmps.$lattr796;
/* 12055 */             $lattr797 = susp.$tmps.$lattr797;
/* 12056 */             $loadgbl799 = susp.$tmps.$loadgbl799;
/* 12057 */             try {
/* 12058 */                 $ret = susp.child.resume();
/* 12059 */             } catch (err) {
/* 12060 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 12061 */                     Sk.execStart = Date.now()
/* 12062 */                 }
/* 12063 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12064 */                     err = new Sk.builtin.ExternalError(err);
/* 12065 */                 }
/* 12066 */                 err.traceback.push({
/* 12067 */                     lineno: $currLineNo,
/* 12068 */                     colno: $currColNo,
/* 12069 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 12070 */                 });
/* 12071 */                 if ($exc.length > 0) {
/* 12072 */                     $err = err;
/* 12073 */                     Sk.err = $err;
/* 12074 */                     $blk = $exc.pop();
/* 12075 */                 } else {
/* 12076 */                     throw err;
/* 12077 */                 }
/* 12078 */             }
/* 12079 */         };
/* 12080 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 12081 */             var susp = new Sk.misceval.Suspension();
/* 12082 */             susp.child = $child;
/* 12083 */             susp.resume = function() {
/* 12084 */                 $scope742.$wakingSuspension = susp;
/* 12085 */                 return $scope742();
/* 12086 */             };
/* 12087 */             susp.data = susp.child.data;
/* 12088 */             susp.$blk = $blk;
/* 12089 */             susp.$loc = $loc;
/* 12090 */             susp.$gbl = $gbl;
/* 12091 */             susp.$exc = $exc;
/* 12092 */             susp.$err = $err;
/* 12093 */             susp.$postfinally = $postfinally;
/* 12094 */             susp.$filename = $filename;
/* 12095 */             susp.$lineno = $lineno;
/* 12096 */             susp.$colno = $colno;
/* 12097 */             susp.optional = susp.child.optional;
/* 12098 */             susp.$cell = $cell;
/* 12099 */             susp.$tmps = {
/* 12100 */                 "self": self,
/* 12101 */                 "visit_Name": visit_Name,
/* 12102 */                 "visit_Num": visit_Num,
/* 12103 */                 "visitor": visitor,
/* 12104 */                 "$loadgbl745": $loadgbl745,
/* 12105 */                 "$loadgbl746": $loadgbl746,
/* 12106 */                 "$elem747": $elem747,
/* 12107 */                 "$loadgbl748": $loadgbl748,
/* 12108 */                 "$elem749": $elem749,
/* 12109 */                 "$loadtuple750": $loadtuple750,
/* 12110 */                 "$loadgbl753": $loadgbl753,
/* 12111 */                 "$lattr754": $lattr754,
/* 12112 */                 "$loadgbl767": $loadgbl767,
/* 12113 */                 "$call768": $call768,
/* 12114 */                 "$lattr769": $lattr769,
/* 12115 */                 "$lattr770": $lattr770,
/* 12116 */                 "$loadgbl772": $loadgbl772,
/* 12117 */                 "$lattr774": $lattr774,
/* 12118 */                 "$compareres775": $compareres775,
/* 12119 */                 "$str776": $str776,
/* 12120 */                 "$loadgbl779": $loadgbl779,
/* 12121 */                 "$lattr780": $lattr780,
/* 12122 */                 "$loadgbl794": $loadgbl794,
/* 12123 */                 "$call795": $call795,
/* 12124 */                 "$lattr796": $lattr796,
/* 12125 */                 "$lattr797": $lattr797,
/* 12126 */                 "$loadgbl799": $loadgbl799
/* 12127 */             };
/* 12128 */             return susp;
/* 12129 */         };
/* 12130 */         var $blk = 0,
/* 12131 */             $exc = [],
/* 12132 */             $loc = {},
/* 12133 */             $cell = {},
/* 12134 */             $gbl = this,
/* 12135 */             $err = undefined,
/* 12136 */             $ret = undefined,
/* 12137 */             $postfinally = undefined,
/* 12138 */             $currLineNo = undefined,
/* 12139 */             $currColNo = undefined;
/* 12140 */         Sk.err = $err;
/* 12141 */         if (typeof Sk.execStart === 'undefined') {
/* 12142 */             Sk.execStart = Date.now()
/* 12143 */         }
/* 12144 */         if (typeof Sk.lastYield === 'undefined') {
/* 12145 */             Sk.lastYield = Date.now()
/* 12146 */         }
/* 12147 */         if ($scope742.$wakingSuspension !== undefined) {
/* 12148 */             $wakeFromSuspension();
/* 12149 */         } else {
/* 12150 */             $cell.node = node;
/* 12151 */             Sk.builtin.pyCheckArgs("has", arguments, 2, 2, false, false);
/* 12152 */         }
/* 12153 */         while (true) {
/* 12154 */             try {
/* 12155 */                 var $dateNow = Date.now();
/* 12156 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 12157 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 12158 */                 }
/* 12159 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 12160 */                     var $susp = $saveSuspension({
/* 12161 */                         data: {
/* 12162 */                             type: 'Sk.yield'
/* 12163 */                         },
/* 12164 */                         resume: function() {}
/* 12165 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 12166 */                     $susp.$blk = $blk;
/* 12167 */                     $susp.optional = true;
/* 12168 */                     return $susp;
/* 12169 */                 }
/* 12170 */                 switch ($blk) {
/* 12171 */                 case 0:
/* 12172 */                     /* --- codeobj entry --- */
/* 12173 */                     if (self === undefined) {
/* 12174 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12175 */                     }
/* 12176 */ 
/* 12177 */ 
/* 12178 */                     //
/* 12179 */                     // line 383:
/* 12180 */                     //         """
/* 12181 */                     //         ^
/* 12182 */                     //
/* 12183 */                     Sk.currLineNo = 383;
/* 12184 */                     Sk.currColNo = 8;
/* 12185 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12186 */                     $currLineNo = 383;
/* 12187 */                     $currColNo = 8;
/* 12188 */                     var $str744 = new Sk.builtins['str']('\n        Determine if this node has the given `node`.\n        ');
/* 12189 */ 
/* 12190 */                     //
/* 12191 */                     // line 386:
/* 12192 */                     //         if isinstance(node, (int, float)):
/* 12193 */                     //         ^
/* 12194 */                     //
/* 12195 */                     Sk.currLineNo = 386;
/* 12196 */                     Sk.currColNo = 8;
/* 12197 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12198 */                     $currLineNo = 386;
/* 12199 */                     $currColNo = 8;
/* 12200 */                     var $loadgbl745 = Sk.misceval.loadname('isinstance', $gbl);
/* 12201 */                     var $loadgbl746 = Sk.misceval.loadname('int_$rw$', $gbl);
/* 12202 */                     var $elem747 = $loadgbl746;
/* 12203 */                     var $loadgbl748 = Sk.misceval.loadname('float_$rw$', $gbl);
/* 12204 */                     var $elem749 = $loadgbl748;
/* 12205 */                     var $loadtuple750 = new Sk.builtins['tuple']([$elem747, $elem749]);
/* 12206 */                     $ret;
/* 12207 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl745, $cell.node, $loadtuple750);
/* 12208 */                     $blk = 3; /* allowing case fallthrough */
/* 12209 */                 case 3:
/* 12210 */                     /* --- function return or resume suspension --- */
/* 12211 */                     if ($ret && $ret.$isSuspension) {
/* 12212 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 386, 11);
/* 12213 */                     }
/* 12214 */                     var $call751 = $ret;
/* 12215 */ 
/* 12216 */                     //
/* 12217 */                     // line 386:
/* 12218 */                     //         if isinstance(node, (int, float)):
/* 12219 */                     //            ^
/* 12220 */                     //
/* 12221 */                     Sk.currLineNo = 386;
/* 12222 */                     Sk.currColNo = 11;
/* 12223 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12224 */                     $currLineNo = 386;
/* 12225 */                     $currColNo = 11;
/* 12226 */                     var $jfalse752 = ($call751 === false || !Sk.misceval.isTrue($call751));
/* 12227 */                     if ($jfalse752) { /*test failed */
/* 12228 */                         $blk = 2;
/* 12229 */                         continue;
/* 12230 */                     }
/* 12231 */ 
/* 12232 */                     //
/* 12233 */                     // line 387:
/* 12234 */                     //             visitor = ast.NodeVisitor()
/* 12235 */                     //             ^
/* 12236 */                     //
/* 12237 */                     Sk.currLineNo = 387;
/* 12238 */                     Sk.currColNo = 12;
/* 12239 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12240 */                     $currLineNo = 387;
/* 12241 */                     $currColNo = 12;
/* 12242 */                     var $loadgbl753 = Sk.misceval.loadname('ast', $gbl);
/* 12243 */                     $ret = Sk.abstr.gattr($loadgbl753, 'NodeVisitor', true);
/* 12244 */                     $blk = 4; /* allowing case fallthrough */
/* 12245 */                 case 4:
/* 12246 */                     /* --- function return or resume suspension --- */
/* 12247 */                     if ($ret && $ret.$isSuspension) {
/* 12248 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 387, 22);
/* 12249 */                     }
/* 12250 */                     var $lattr754 = $ret;
/* 12251 */                     $ret;
/* 12252 */                     $ret = Sk.misceval.callsimOrSuspend($lattr754);
/* 12253 */                     $blk = 5; /* allowing case fallthrough */
/* 12254 */                 case 5:
/* 12255 */                     /* --- function return or resume suspension --- */
/* 12256 */                     if ($ret && $ret.$isSuspension) {
/* 12257 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 387, 22);
/* 12258 */                     }
/* 12259 */                     var $call755 = $ret;
/* 12260 */ 
/* 12261 */                     //
/* 12262 */                     // line 387:
/* 12263 */                     //             visitor = ast.NodeVisitor()
/* 12264 */                     //                       ^
/* 12265 */                     //
/* 12266 */                     Sk.currLineNo = 387;
/* 12267 */                     Sk.currColNo = 22;
/* 12268 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12269 */                     $currLineNo = 387;
/* 12270 */                     $currColNo = 22;
/* 12271 */                     visitor = $call755;
/* 12272 */ 
/* 12273 */                     //
/* 12274 */                     // line 388:
/* 12275 */                     //             has_num = []
/* 12276 */                     //             ^
/* 12277 */                     //
/* 12278 */                     Sk.currLineNo = 388;
/* 12279 */                     Sk.currColNo = 12;
/* 12280 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12281 */                     $currLineNo = 388;
/* 12282 */                     $currColNo = 12;
/* 12283 */                     var $loadlist756 = new Sk.builtins['list']([]);
/* 12284 */                     $cell.has_num = $loadlist756;
/* 12285 */ 
/* 12286 */                     //
/* 12287 */                     // line 390:
/* 12288 */                     //             def visit_Num(self, potential):
/* 12289 */                     //             ^
/* 12290 */                     //
/* 12291 */                     Sk.currLineNo = 390;
/* 12292 */                     Sk.currColNo = 12;
/* 12293 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12294 */                     $currLineNo = 390;
/* 12295 */                     $currColNo = 12;
/* 12296 */                     $scope757.co_name = new Sk.builtins['str']('visit_Num');
/* 12297 */                     $scope757.co_varnames = ['self', 'potential'];
/* 12298 */                     var $funcobj766 = new Sk.builtins['function']($scope757, $gbl, $cell);
/* 12299 */                     visit_Num = $funcobj766;
/* 12300 */ 
/* 12301 */                     //
/* 12302 */                     // line 394:
/* 12303 */                     //             visitor.visit_Num = MethodType(visit_Num, visitor)
/* 12304 */                     //             ^
/* 12305 */                     //
/* 12306 */                     Sk.currLineNo = 394;
/* 12307 */                     Sk.currColNo = 12;
/* 12308 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12309 */                     $currLineNo = 394;
/* 12310 */                     $currColNo = 12;
/* 12311 */                     var $loadgbl767 = Sk.misceval.loadname('MethodType', $gbl);
/* 12312 */                     if (visit_Num === undefined) {
/* 12313 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visit_Num\' referenced before assignment');
/* 12314 */                     }
/* 12315 */                     if (visitor === undefined) {
/* 12316 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 12317 */                     }
/* 12318 */                     $ret;
/* 12319 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl767, visit_Num, visitor);
/* 12320 */                     $blk = 6; /* allowing case fallthrough */
/* 12321 */                 case 6:
/* 12322 */                     /* --- function return or resume suspension --- */
/* 12323 */                     if ($ret && $ret.$isSuspension) {
/* 12324 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 394, 32);
/* 12325 */                     }
/* 12326 */                     var $call768 = $ret;
/* 12327 */ 
/* 12328 */                     //
/* 12329 */                     // line 394:
/* 12330 */                     //             visitor.visit_Num = MethodType(visit_Num, visitor)
/* 12331 */                     //                                 ^
/* 12332 */                     //
/* 12333 */                     Sk.currLineNo = 394;
/* 12334 */                     Sk.currColNo = 32;
/* 12335 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12336 */                     $currLineNo = 394;
/* 12337 */                     $currColNo = 32;
/* 12338 */                     if (visitor === undefined) {
/* 12339 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 12340 */                     }
/* 12341 */                     $ret = Sk.abstr.sattr(visitor, 'visit_Num', $call768, true);
/* 12342 */                     $blk = 7; /* allowing case fallthrough */
/* 12343 */                 case 7:
/* 12344 */                     /* --- function return or resume suspension --- */
/* 12345 */                     if ($ret && $ret.$isSuspension) {
/* 12346 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 394, 12);
/* 12347 */                     }
/* 12348 */ 
/* 12349 */                     //
/* 12350 */                     // line 395:
/* 12351 */                     //             visitor.visit(self.astNode)
/* 12352 */                     //             ^
/* 12353 */                     //
/* 12354 */                     Sk.currLineNo = 395;
/* 12355 */                     Sk.currColNo = 12;
/* 12356 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12357 */                     $currLineNo = 395;
/* 12358 */                     $currColNo = 12;
/* 12359 */                     if (visitor === undefined) {
/* 12360 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 12361 */                     }
/* 12362 */                     $ret = Sk.abstr.gattr(visitor, 'visit', true);
/* 12363 */                     $blk = 8; /* allowing case fallthrough */
/* 12364 */                 case 8:
/* 12365 */                     /* --- function return or resume suspension --- */
/* 12366 */                     if ($ret && $ret.$isSuspension) {
/* 12367 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 395, 12);
/* 12368 */                     }
/* 12369 */                     var $lattr769 = $ret;
/* 12370 */                     if (self === undefined) {
/* 12371 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12372 */                     }
/* 12373 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/* 12374 */                     $blk = 9; /* allowing case fallthrough */
/* 12375 */                 case 9:
/* 12376 */                     /* --- function return or resume suspension --- */
/* 12377 */                     if ($ret && $ret.$isSuspension) {
/* 12378 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 395, 26);
/* 12379 */                     }
/* 12380 */                     var $lattr770 = $ret;
/* 12381 */                     $ret;
/* 12382 */                     $ret = Sk.misceval.callsimOrSuspend($lattr769, $lattr770);
/* 12383 */                     $blk = 10; /* allowing case fallthrough */
/* 12384 */                 case 10:
/* 12385 */                     /* --- function return or resume suspension --- */
/* 12386 */                     if ($ret && $ret.$isSuspension) {
/* 12387 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 395, 12);
/* 12388 */                     }
/* 12389 */                     var $call771 = $ret;
/* 12390 */ 
/* 12391 */                     //
/* 12392 */                     // line 395:
/* 12393 */                     //             visitor.visit(self.astNode)
/* 12394 */                     //             ^
/* 12395 */                     //
/* 12396 */                     Sk.currLineNo = 395;
/* 12397 */                     Sk.currColNo = 12;
/* 12398 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12399 */                     $currLineNo = 395;
/* 12400 */                     $currColNo = 12;
/* 12401 */ 
/* 12402 */ 
/* 12403 */                     //
/* 12404 */                     // line 396:
/* 12405 */                     //             return any(has_num)
/* 12406 */                     //             ^
/* 12407 */                     //
/* 12408 */                     Sk.currLineNo = 396;
/* 12409 */                     Sk.currColNo = 12;
/* 12410 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12411 */                     $currLineNo = 396;
/* 12412 */                     $currColNo = 12;
/* 12413 */                     var $loadgbl772 = Sk.misceval.loadname('any', $gbl);
/* 12414 */                     $ret;
/* 12415 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl772, $cell.has_num);
/* 12416 */                     $blk = 11; /* allowing case fallthrough */
/* 12417 */                 case 11:
/* 12418 */                     /* --- function return or resume suspension --- */
/* 12419 */                     if ($ret && $ret.$isSuspension) {
/* 12420 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 396, 19);
/* 12421 */                     }
/* 12422 */                     var $call773 = $ret;
/* 12423 */ 
/* 12424 */                     //
/* 12425 */                     // line 396:
/* 12426 */                     //             return any(has_num)
/* 12427 */                     //                    ^
/* 12428 */                     //
/* 12429 */                     Sk.currLineNo = 396;
/* 12430 */                     Sk.currColNo = 19;
/* 12431 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12432 */                     $currLineNo = 396;
/* 12433 */                     $currColNo = 19;
/* 12434 */                     return $call773;
/* 12435 */                     $blk = 1; /* allowing case fallthrough */
/* 12436 */                 case 1:
/* 12437 */                     /* --- end of if --- */
/* 12438 */ 
/* 12439 */                     //
/* 12440 */                     // line 399:
/* 12441 */                     //         visitor = ast.NodeVisitor()
/* 12442 */                     //         ^
/* 12443 */                     //
/* 12444 */                     Sk.currLineNo = 399;
/* 12445 */                     Sk.currColNo = 8;
/* 12446 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12447 */                     $currLineNo = 399;
/* 12448 */                     $currColNo = 8;
/* 12449 */                     var $loadgbl779 = Sk.misceval.loadname('ast', $gbl);
/* 12450 */                     $ret = Sk.abstr.gattr($loadgbl779, 'NodeVisitor', true);
/* 12451 */                     $blk = 16; /* allowing case fallthrough */
/* 12452 */                 case 16:
/* 12453 */                     /* --- function return or resume suspension --- */
/* 12454 */                     if ($ret && $ret.$isSuspension) {
/* 12455 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 399, 18);
/* 12456 */                     }
/* 12457 */                     var $lattr780 = $ret;
/* 12458 */                     $ret;
/* 12459 */                     $ret = Sk.misceval.callsimOrSuspend($lattr780);
/* 12460 */                     $blk = 17; /* allowing case fallthrough */
/* 12461 */                 case 17:
/* 12462 */                     /* --- function return or resume suspension --- */
/* 12463 */                     if ($ret && $ret.$isSuspension) {
/* 12464 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 399, 18);
/* 12465 */                     }
/* 12466 */                     var $call781 = $ret;
/* 12467 */ 
/* 12468 */                     //
/* 12469 */                     // line 399:
/* 12470 */                     //         visitor = ast.NodeVisitor()
/* 12471 */                     //                   ^
/* 12472 */                     //
/* 12473 */                     Sk.currLineNo = 399;
/* 12474 */                     Sk.currColNo = 18;
/* 12475 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12476 */                     $currLineNo = 399;
/* 12477 */                     $currColNo = 18;
/* 12478 */                     visitor = $call781;
/* 12479 */ 
/* 12480 */                     //
/* 12481 */                     // line 400:
/* 12482 */                     //         has_name = []
/* 12483 */                     //         ^
/* 12484 */                     //
/* 12485 */                     Sk.currLineNo = 400;
/* 12486 */                     Sk.currColNo = 8;
/* 12487 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12488 */                     $currLineNo = 400;
/* 12489 */                     $currColNo = 8;
/* 12490 */                     var $loadlist782 = new Sk.builtins['list']([]);
/* 12491 */                     $cell.has_name = $loadlist782;
/* 12492 */ 
/* 12493 */                     //
/* 12494 */                     // line 402:
/* 12495 */                     //         def visit_Name(self, potential):
/* 12496 */                     //         ^
/* 12497 */                     //
/* 12498 */                     Sk.currLineNo = 402;
/* 12499 */                     Sk.currColNo = 8;
/* 12500 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12501 */                     $currLineNo = 402;
/* 12502 */                     $currColNo = 8;
/* 12503 */                     $scope783.co_name = new Sk.builtins['str']('visit_Name');
/* 12504 */                     $scope783.co_varnames = ['self', 'potential'];
/* 12505 */                     var $funcobj793 = new Sk.builtins['function']($scope783, $gbl, $cell);
/* 12506 */                     visit_Name = $funcobj793;
/* 12507 */ 
/* 12508 */                     //
/* 12509 */                     // line 406:
/* 12510 */                     //         visitor.visit_Name = MethodType(visit_Name, visitor)
/* 12511 */                     //         ^
/* 12512 */                     //
/* 12513 */                     Sk.currLineNo = 406;
/* 12514 */                     Sk.currColNo = 8;
/* 12515 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12516 */                     $currLineNo = 406;
/* 12517 */                     $currColNo = 8;
/* 12518 */                     var $loadgbl794 = Sk.misceval.loadname('MethodType', $gbl);
/* 12519 */                     if (visit_Name === undefined) {
/* 12520 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visit_Name\' referenced before assignment');
/* 12521 */                     }
/* 12522 */                     if (visitor === undefined) {
/* 12523 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 12524 */                     }
/* 12525 */                     $ret;
/* 12526 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl794, visit_Name, visitor);
/* 12527 */                     $blk = 18; /* allowing case fallthrough */
/* 12528 */                 case 18:
/* 12529 */                     /* --- function return or resume suspension --- */
/* 12530 */                     if ($ret && $ret.$isSuspension) {
/* 12531 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 406, 29);
/* 12532 */                     }
/* 12533 */                     var $call795 = $ret;
/* 12534 */ 
/* 12535 */                     //
/* 12536 */                     // line 406:
/* 12537 */                     //         visitor.visit_Name = MethodType(visit_Name, visitor)
/* 12538 */                     //                              ^
/* 12539 */                     //
/* 12540 */                     Sk.currLineNo = 406;
/* 12541 */                     Sk.currColNo = 29;
/* 12542 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12543 */                     $currLineNo = 406;
/* 12544 */                     $currColNo = 29;
/* 12545 */                     if (visitor === undefined) {
/* 12546 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 12547 */                     }
/* 12548 */                     $ret = Sk.abstr.sattr(visitor, 'visit_Name', $call795, true);
/* 12549 */                     $blk = 19; /* allowing case fallthrough */
/* 12550 */                 case 19:
/* 12551 */                     /* --- function return or resume suspension --- */
/* 12552 */                     if ($ret && $ret.$isSuspension) {
/* 12553 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 406, 8);
/* 12554 */                     }
/* 12555 */ 
/* 12556 */                     //
/* 12557 */                     // line 407:
/* 12558 */                     //         visitor.visit(self.astNode)
/* 12559 */                     //         ^
/* 12560 */                     //
/* 12561 */                     Sk.currLineNo = 407;
/* 12562 */                     Sk.currColNo = 8;
/* 12563 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12564 */                     $currLineNo = 407;
/* 12565 */                     $currColNo = 8;
/* 12566 */                     if (visitor === undefined) {
/* 12567 */                         throw new Sk.builtin.UnboundLocalError('local variable \'visitor\' referenced before assignment');
/* 12568 */                     }
/* 12569 */                     $ret = Sk.abstr.gattr(visitor, 'visit', true);
/* 12570 */                     $blk = 20; /* allowing case fallthrough */
/* 12571 */                 case 20:
/* 12572 */                     /* --- function return or resume suspension --- */
/* 12573 */                     if ($ret && $ret.$isSuspension) {
/* 12574 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 407, 8);
/* 12575 */                     }
/* 12576 */                     var $lattr796 = $ret;
/* 12577 */                     if (self === undefined) {
/* 12578 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12579 */                     }
/* 12580 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/* 12581 */                     $blk = 21; /* allowing case fallthrough */
/* 12582 */                 case 21:
/* 12583 */                     /* --- function return or resume suspension --- */
/* 12584 */                     if ($ret && $ret.$isSuspension) {
/* 12585 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 407, 22);
/* 12586 */                     }
/* 12587 */                     var $lattr797 = $ret;
/* 12588 */                     $ret;
/* 12589 */                     $ret = Sk.misceval.callsimOrSuspend($lattr796, $lattr797);
/* 12590 */                     $blk = 22; /* allowing case fallthrough */
/* 12591 */                 case 22:
/* 12592 */                     /* --- function return or resume suspension --- */
/* 12593 */                     if ($ret && $ret.$isSuspension) {
/* 12594 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 407, 8);
/* 12595 */                     }
/* 12596 */                     var $call798 = $ret;
/* 12597 */ 
/* 12598 */                     //
/* 12599 */                     // line 407:
/* 12600 */                     //         visitor.visit(self.astNode)
/* 12601 */                     //         ^
/* 12602 */                     //
/* 12603 */                     Sk.currLineNo = 407;
/* 12604 */                     Sk.currColNo = 8;
/* 12605 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12606 */                     $currLineNo = 407;
/* 12607 */                     $currColNo = 8;
/* 12608 */ 
/* 12609 */ 
/* 12610 */                     //
/* 12611 */                     // line 408:
/* 12612 */                     //         return any(has_name)
/* 12613 */                     //         ^
/* 12614 */                     //
/* 12615 */                     Sk.currLineNo = 408;
/* 12616 */                     Sk.currColNo = 8;
/* 12617 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12618 */                     $currLineNo = 408;
/* 12619 */                     $currColNo = 8;
/* 12620 */                     var $loadgbl799 = Sk.misceval.loadname('any', $gbl);
/* 12621 */                     $ret;
/* 12622 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl799, $cell.has_name);
/* 12623 */                     $blk = 23; /* allowing case fallthrough */
/* 12624 */                 case 23:
/* 12625 */                     /* --- function return or resume suspension --- */
/* 12626 */                     if ($ret && $ret.$isSuspension) {
/* 12627 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 408, 15);
/* 12628 */                     }
/* 12629 */                     var $call800 = $ret;
/* 12630 */ 
/* 12631 */                     //
/* 12632 */                     // line 408:
/* 12633 */                     //         return any(has_name)
/* 12634 */                     //                ^
/* 12635 */                     //
/* 12636 */                     Sk.currLineNo = 408;
/* 12637 */                     Sk.currColNo = 15;
/* 12638 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12639 */                     $currLineNo = 408;
/* 12640 */                     $currColNo = 15;
/* 12641 */                     return $call800;
/* 12642 */                     return Sk.builtin.none.none$;
/* 12643 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 12644 */                 case 2:
/* 12645 */                     /* --- next branch of if --- */
/* 12646 */ 
/* 12647 */                     //
/* 12648 */                     // line 397:
/* 12649 */                     //         elif node.ast_name != "Name":
/* 12650 */                     //              ^
/* 12651 */                     //
/* 12652 */                     Sk.currLineNo = 397;
/* 12653 */                     Sk.currColNo = 13;
/* 12654 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12655 */                     $currLineNo = 397;
/* 12656 */                     $currColNo = 13;
/* 12657 */                     $ret = Sk.abstr.gattr($cell.node, 'ast_name', true);
/* 12658 */                     $blk = 13; /* allowing case fallthrough */
/* 12659 */                 case 13:
/* 12660 */                     /* --- function return or resume suspension --- */
/* 12661 */                     if ($ret && $ret.$isSuspension) {
/* 12662 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 397, 13);
/* 12663 */                     }
/* 12664 */                     var $lattr774 = $ret;
/* 12665 */                     var $compareres775 = null;
/* 12666 */                     var $str776 = new Sk.builtins['str']('Name');
/* 12667 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr774, $str776, 'NotEq', true));
/* 12668 */                     $blk = 15; /* allowing case fallthrough */
/* 12669 */                 case 15:
/* 12670 */                     /* --- function return or resume suspension --- */
/* 12671 */                     if ($ret && $ret.$isSuspension) {
/* 12672 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 397, 13);
/* 12673 */                     }
/* 12674 */                     $compareres775 = $ret;
/* 12675 */                     var $jfalse777 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 12676 */                     if ($jfalse777) { /*test failed */
/* 12677 */                         $blk = 14;
/* 12678 */                         continue;
/* 12679 */                     }
/* 12680 */                     $blk = 14; /* allowing case fallthrough */
/* 12681 */                 case 14:
/* 12682 */                     /* --- done --- */
/* 12683 */                     var $jfalse778 = ($compareres775 === false || !Sk.misceval.isTrue($compareres775));
/* 12684 */                     if ($jfalse778) { /*test failed */
/* 12685 */                         $blk = 12;
/* 12686 */                         continue;
/* 12687 */                     }
/* 12688 */ 
/* 12689 */                     //
/* 12690 */                     // line 398:
/* 12691 */                     //             return False
/* 12692 */                     //             ^
/* 12693 */                     //
/* 12694 */                     Sk.currLineNo = 398;
/* 12695 */                     Sk.currColNo = 12;
/* 12696 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12697 */                     $currLineNo = 398;
/* 12698 */                     $currColNo = 12;
/* 12699 */                     return Sk.builtin.bool.false$;
/* 12700 */                     $blk = 12; /* allowing case fallthrough */
/* 12701 */                 case 12:
/* 12702 */                     /* --- end of if --- */
/* 12703 */                     $blk = 1; /* jump */
/* 12704 */                     continue;
/* 12705 */                 }
/* 12706 */             } catch (err) {
/* 12707 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 12708 */                     Sk.execStart = Date.now()
/* 12709 */                 }
/* 12710 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12711 */                     err = new Sk.builtin.ExternalError(err);
/* 12712 */                 }
/* 12713 */                 err.traceback.push({
/* 12714 */                     lineno: $currLineNo,
/* 12715 */                     colno: $currColNo,
/* 12716 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 12717 */                 });
/* 12718 */                 if ($exc.length > 0) {
/* 12719 */                     $err = err;
/* 12720 */                     Sk.err = $err;
/* 12721 */                     $blk = $exc.pop();
/* 12722 */                     continue;
/* 12723 */                 } else {
/* 12724 */                     throw err;
/* 12725 */                 }
/* 12726 */             }
/* 12727 */         }
/* 12728 */     });
/* 12729 */     var $scope757 = (function $visit_Num758$(self, potential, $free) {
/* 12730 */         // has free
/* 12731 */         var potential, potential, potential, self, self, $free, $lattr759, $compareres760, $lattr759, $compareres760, $lattr761, $lattr759, $compareres760, $lattr761, $jfalse762, $lattr764;
/* 12732 */         var $wakeFromSuspension = function() {
/* 12733 */             var susp = $scope757.$wakingSuspension;
/* 12734 */             delete $scope757.$wakingSuspension;
/* 12735 */             $blk = susp.$blk;
/* 12736 */             $loc = susp.$loc;
/* 12737 */             $gbl = susp.$gbl;
/* 12738 */             $exc = susp.$exc;
/* 12739 */             $err = susp.$err;
/* 12740 */             Sk.err = $err;
/* 12741 */             $postfinally = susp.$postfinally;
/* 12742 */             $currLineNo = susp.$lineno;
/* 12743 */             $currColNo = susp.$colno;
/* 12744 */             Sk.lastYield = Date.now();
/* 12745 */             potential = susp.$tmps.potential;
/* 12746 */             self = susp.$tmps.self;
/* 12747 */             $free = susp.$tmps.$free;
/* 12748 */             $lattr759 = susp.$tmps.$lattr759;
/* 12749 */             $compareres760 = susp.$tmps.$compareres760;
/* 12750 */             $lattr761 = susp.$tmps.$lattr761;
/* 12751 */             $jfalse762 = susp.$tmps.$jfalse762;
/* 12752 */             $lattr764 = susp.$tmps.$lattr764;
/* 12753 */             try {
/* 12754 */                 $ret = susp.child.resume();
/* 12755 */             } catch (err) {
/* 12756 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 12757 */                     Sk.execStart = Date.now()
/* 12758 */                 }
/* 12759 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12760 */                     err = new Sk.builtin.ExternalError(err);
/* 12761 */                 }
/* 12762 */                 err.traceback.push({
/* 12763 */                     lineno: $currLineNo,
/* 12764 */                     colno: $currColNo,
/* 12765 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 12766 */                 });
/* 12767 */                 if ($exc.length > 0) {
/* 12768 */                     $err = err;
/* 12769 */                     Sk.err = $err;
/* 12770 */                     $blk = $exc.pop();
/* 12771 */                 } else {
/* 12772 */                     throw err;
/* 12773 */                 }
/* 12774 */             }
/* 12775 */         };
/* 12776 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 12777 */             var susp = new Sk.misceval.Suspension();
/* 12778 */             susp.child = $child;
/* 12779 */             susp.resume = function() {
/* 12780 */                 $scope757.$wakingSuspension = susp;
/* 12781 */                 return $scope757();
/* 12782 */             };
/* 12783 */             susp.data = susp.child.data;
/* 12784 */             susp.$blk = $blk;
/* 12785 */             susp.$loc = $loc;
/* 12786 */             susp.$gbl = $gbl;
/* 12787 */             susp.$exc = $exc;
/* 12788 */             susp.$err = $err;
/* 12789 */             susp.$postfinally = $postfinally;
/* 12790 */             susp.$filename = $filename;
/* 12791 */             susp.$lineno = $lineno;
/* 12792 */             susp.$colno = $colno;
/* 12793 */             susp.optional = susp.child.optional;
/* 12794 */             susp.$tmps = {
/* 12795 */                 "potential": potential,
/* 12796 */                 "self": self,
/* 12797 */                 "$free": $free,
/* 12798 */                 "$lattr759": $lattr759,
/* 12799 */                 "$compareres760": $compareres760,
/* 12800 */                 "$lattr761": $lattr761,
/* 12801 */                 "$jfalse762": $jfalse762,
/* 12802 */                 "$lattr764": $lattr764
/* 12803 */             };
/* 12804 */             return susp;
/* 12805 */         };
/* 12806 */         var $blk = 0,
/* 12807 */             $exc = [],
/* 12808 */             $loc = {},
/* 12809 */             $gbl = this,
/* 12810 */             $err = undefined,
/* 12811 */             $ret = undefined,
/* 12812 */             $postfinally = undefined,
/* 12813 */             $currLineNo = undefined,
/* 12814 */             $currColNo = undefined;
/* 12815 */         Sk.err = $err;
/* 12816 */         if (typeof Sk.execStart === 'undefined') {
/* 12817 */             Sk.execStart = Date.now()
/* 12818 */         }
/* 12819 */         if (typeof Sk.lastYield === 'undefined') {
/* 12820 */             Sk.lastYield = Date.now()
/* 12821 */         }
/* 12822 */         if ($scope757.$wakingSuspension !== undefined) {
/* 12823 */             $wakeFromSuspension();
/* 12824 */         } else {
/* 12825 */             Sk.builtin.pyCheckArgs("visit_Num", arguments, 2, 2, false, true);
/* 12826 */         }
/* 12827 */         while (true) {
/* 12828 */             try {
/* 12829 */                 var $dateNow = Date.now();
/* 12830 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 12831 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 12832 */                 }
/* 12833 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 12834 */                     var $susp = $saveSuspension({
/* 12835 */                         data: {
/* 12836 */                             type: 'Sk.yield'
/* 12837 */                         },
/* 12838 */                         resume: function() {}
/* 12839 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 12840 */                     $susp.$blk = $blk;
/* 12841 */                     $susp.optional = true;
/* 12842 */                     return $susp;
/* 12843 */                 }
/* 12844 */                 switch ($blk) {
/* 12845 */                 case 0:
/* 12846 */                     /* --- codeobj entry --- */
/* 12847 */                     if (self === undefined) {
/* 12848 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12849 */                     }
/* 12850 */                     if (potential === undefined) {
/* 12851 */                         throw new Sk.builtin.UnboundLocalError('local variable \'potential\' referenced before assignment');
/* 12852 */                     }
/* 12853 */ 
/* 12854 */ 
/* 12855 */                     //
/* 12856 */                     // line 391:
/* 12857 */                     //                 has_num.append(node == potential.n)
/* 12858 */                     //                 ^
/* 12859 */                     //
/* 12860 */                     Sk.currLineNo = 391;
/* 12861 */                     Sk.currColNo = 16;
/* 12862 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12863 */                     $currLineNo = 391;
/* 12864 */                     $currColNo = 16;
/* 12865 */                     $ret = Sk.abstr.gattr($free.has_num, 'append', true);
/* 12866 */                     $blk = 1; /* allowing case fallthrough */
/* 12867 */                 case 1:
/* 12868 */                     /* --- function return or resume suspension --- */
/* 12869 */                     if ($ret && $ret.$isSuspension) {
/* 12870 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 391, 16);
/* 12871 */                     }
/* 12872 */                     var $lattr759 = $ret;
/* 12873 */                     var $compareres760 = null;
/* 12874 */                     if (potential === undefined) {
/* 12875 */                         throw new Sk.builtin.UnboundLocalError('local variable \'potential\' referenced before assignment');
/* 12876 */                     }
/* 12877 */                     $ret = Sk.abstr.gattr(potential, 'n', true);
/* 12878 */                     $blk = 3; /* allowing case fallthrough */
/* 12879 */                 case 3:
/* 12880 */                     /* --- function return or resume suspension --- */
/* 12881 */                     if ($ret && $ret.$isSuspension) {
/* 12882 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 391, 39);
/* 12883 */                     }
/* 12884 */                     var $lattr761 = $ret;
/* 12885 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($free.node, $lattr761, 'Eq', true));
/* 12886 */                     $blk = 4; /* allowing case fallthrough */
/* 12887 */                 case 4:
/* 12888 */                     /* --- function return or resume suspension --- */
/* 12889 */                     if ($ret && $ret.$isSuspension) {
/* 12890 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 391, 31);
/* 12891 */                     }
/* 12892 */                     $compareres760 = $ret;
/* 12893 */                     var $jfalse762 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 12894 */                     if ($jfalse762) { /*test failed */
/* 12895 */                         $blk = 2;
/* 12896 */                         continue;
/* 12897 */                     }
/* 12898 */                     $blk = 2; /* allowing case fallthrough */
/* 12899 */                 case 2:
/* 12900 */                     /* --- done --- */
/* 12901 */                     $ret;
/* 12902 */                     $ret = Sk.misceval.callsimOrSuspend($lattr759, $compareres760);
/* 12903 */                     $blk = 5; /* allowing case fallthrough */
/* 12904 */                 case 5:
/* 12905 */                     /* --- function return or resume suspension --- */
/* 12906 */                     if ($ret && $ret.$isSuspension) {
/* 12907 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 391, 16);
/* 12908 */                     }
/* 12909 */                     var $call763 = $ret;
/* 12910 */ 
/* 12911 */                     //
/* 12912 */                     // line 391:
/* 12913 */                     //                 has_num.append(node == potential.n)
/* 12914 */                     //                 ^
/* 12915 */                     //
/* 12916 */                     Sk.currLineNo = 391;
/* 12917 */                     Sk.currColNo = 16;
/* 12918 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12919 */                     $currLineNo = 391;
/* 12920 */                     $currColNo = 16;
/* 12921 */ 
/* 12922 */ 
/* 12923 */                     //
/* 12924 */                     // line 392:
/* 12925 */                     //                 return self.generic_visit(potential)
/* 12926 */                     //                 ^
/* 12927 */                     //
/* 12928 */                     Sk.currLineNo = 392;
/* 12929 */                     Sk.currColNo = 16;
/* 12930 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12931 */                     $currLineNo = 392;
/* 12932 */                     $currColNo = 16;
/* 12933 */                     if (self === undefined) {
/* 12934 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 12935 */                     }
/* 12936 */                     $ret = Sk.abstr.gattr(self, 'generic_visit', true);
/* 12937 */                     $blk = 6; /* allowing case fallthrough */
/* 12938 */                 case 6:
/* 12939 */                     /* --- function return or resume suspension --- */
/* 12940 */                     if ($ret && $ret.$isSuspension) {
/* 12941 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 392, 23);
/* 12942 */                     }
/* 12943 */                     var $lattr764 = $ret;
/* 12944 */                     if (potential === undefined) {
/* 12945 */                         throw new Sk.builtin.UnboundLocalError('local variable \'potential\' referenced before assignment');
/* 12946 */                     }
/* 12947 */                     $ret;
/* 12948 */                     $ret = Sk.misceval.callsimOrSuspend($lattr764, potential);
/* 12949 */                     $blk = 7; /* allowing case fallthrough */
/* 12950 */                 case 7:
/* 12951 */                     /* --- function return or resume suspension --- */
/* 12952 */                     if ($ret && $ret.$isSuspension) {
/* 12953 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 392, 23);
/* 12954 */                     }
/* 12955 */                     var $call765 = $ret;
/* 12956 */ 
/* 12957 */                     //
/* 12958 */                     // line 392:
/* 12959 */                     //                 return self.generic_visit(potential)
/* 12960 */                     //                        ^
/* 12961 */                     //
/* 12962 */                     Sk.currLineNo = 392;
/* 12963 */                     Sk.currColNo = 23;
/* 12964 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 12965 */                     $currLineNo = 392;
/* 12966 */                     $currColNo = 23;
/* 12967 */                     return $call765;
/* 12968 */                     return Sk.builtin.none.none$;
/* 12969 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 12970 */                 }
/* 12971 */             } catch (err) {
/* 12972 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 12973 */                     Sk.execStart = Date.now()
/* 12974 */                 }
/* 12975 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 12976 */                     err = new Sk.builtin.ExternalError(err);
/* 12977 */                 }
/* 12978 */                 err.traceback.push({
/* 12979 */                     lineno: $currLineNo,
/* 12980 */                     colno: $currColNo,
/* 12981 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 12982 */                 });
/* 12983 */                 if ($exc.length > 0) {
/* 12984 */                     $err = err;
/* 12985 */                     Sk.err = $err;
/* 12986 */                     $blk = $exc.pop();
/* 12987 */                     continue;
/* 12988 */                 } else {
/* 12989 */                     throw err;
/* 12990 */                 }
/* 12991 */             }
/* 12992 */         }
/* 12993 */     });
/* 12994 */     var $scope783 = (function $visit_Name784$(self, potential, $free) {
/* 12995 */         // has free
/* 12996 */         var potential, potential, potential, self, self, $free, $lattr785, $lattr785, $lattr786, $compareres787, $lattr785, $lattr786, $compareres787, $lattr788, $lattr785, $lattr786, $compareres787, $lattr788, $jfalse789, $lattr791;
/* 12997 */         var $wakeFromSuspension = function() {
/* 12998 */             var susp = $scope783.$wakingSuspension;
/* 12999 */             delete $scope783.$wakingSuspension;
/* 13000 */             $blk = susp.$blk;
/* 13001 */             $loc = susp.$loc;
/* 13002 */             $gbl = susp.$gbl;
/* 13003 */             $exc = susp.$exc;
/* 13004 */             $err = susp.$err;
/* 13005 */             Sk.err = $err;
/* 13006 */             $postfinally = susp.$postfinally;
/* 13007 */             $currLineNo = susp.$lineno;
/* 13008 */             $currColNo = susp.$colno;
/* 13009 */             Sk.lastYield = Date.now();
/* 13010 */             potential = susp.$tmps.potential;
/* 13011 */             self = susp.$tmps.self;
/* 13012 */             $free = susp.$tmps.$free;
/* 13013 */             $lattr785 = susp.$tmps.$lattr785;
/* 13014 */             $lattr786 = susp.$tmps.$lattr786;
/* 13015 */             $compareres787 = susp.$tmps.$compareres787;
/* 13016 */             $lattr788 = susp.$tmps.$lattr788;
/* 13017 */             $jfalse789 = susp.$tmps.$jfalse789;
/* 13018 */             $lattr791 = susp.$tmps.$lattr791;
/* 13019 */             try {
/* 13020 */                 $ret = susp.child.resume();
/* 13021 */             } catch (err) {
/* 13022 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 13023 */                     Sk.execStart = Date.now()
/* 13024 */                 }
/* 13025 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13026 */                     err = new Sk.builtin.ExternalError(err);
/* 13027 */                 }
/* 13028 */                 err.traceback.push({
/* 13029 */                     lineno: $currLineNo,
/* 13030 */                     colno: $currColNo,
/* 13031 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 13032 */                 });
/* 13033 */                 if ($exc.length > 0) {
/* 13034 */                     $err = err;
/* 13035 */                     Sk.err = $err;
/* 13036 */                     $blk = $exc.pop();
/* 13037 */                 } else {
/* 13038 */                     throw err;
/* 13039 */                 }
/* 13040 */             }
/* 13041 */         };
/* 13042 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 13043 */             var susp = new Sk.misceval.Suspension();
/* 13044 */             susp.child = $child;
/* 13045 */             susp.resume = function() {
/* 13046 */                 $scope783.$wakingSuspension = susp;
/* 13047 */                 return $scope783();
/* 13048 */             };
/* 13049 */             susp.data = susp.child.data;
/* 13050 */             susp.$blk = $blk;
/* 13051 */             susp.$loc = $loc;
/* 13052 */             susp.$gbl = $gbl;
/* 13053 */             susp.$exc = $exc;
/* 13054 */             susp.$err = $err;
/* 13055 */             susp.$postfinally = $postfinally;
/* 13056 */             susp.$filename = $filename;
/* 13057 */             susp.$lineno = $lineno;
/* 13058 */             susp.$colno = $colno;
/* 13059 */             susp.optional = susp.child.optional;
/* 13060 */             susp.$tmps = {
/* 13061 */                 "potential": potential,
/* 13062 */                 "self": self,
/* 13063 */                 "$free": $free,
/* 13064 */                 "$lattr785": $lattr785,
/* 13065 */                 "$lattr786": $lattr786,
/* 13066 */                 "$compareres787": $compareres787,
/* 13067 */                 "$lattr788": $lattr788,
/* 13068 */                 "$jfalse789": $jfalse789,
/* 13069 */                 "$lattr791": $lattr791
/* 13070 */             };
/* 13071 */             return susp;
/* 13072 */         };
/* 13073 */         var $blk = 0,
/* 13074 */             $exc = [],
/* 13075 */             $loc = {},
/* 13076 */             $gbl = this,
/* 13077 */             $err = undefined,
/* 13078 */             $ret = undefined,
/* 13079 */             $postfinally = undefined,
/* 13080 */             $currLineNo = undefined,
/* 13081 */             $currColNo = undefined;
/* 13082 */         Sk.err = $err;
/* 13083 */         if (typeof Sk.execStart === 'undefined') {
/* 13084 */             Sk.execStart = Date.now()
/* 13085 */         }
/* 13086 */         if (typeof Sk.lastYield === 'undefined') {
/* 13087 */             Sk.lastYield = Date.now()
/* 13088 */         }
/* 13089 */         if ($scope783.$wakingSuspension !== undefined) {
/* 13090 */             $wakeFromSuspension();
/* 13091 */         } else {
/* 13092 */             Sk.builtin.pyCheckArgs("visit_Name", arguments, 2, 2, false, true);
/* 13093 */         }
/* 13094 */         while (true) {
/* 13095 */             try {
/* 13096 */                 var $dateNow = Date.now();
/* 13097 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 13098 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 13099 */                 }
/* 13100 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 13101 */                     var $susp = $saveSuspension({
/* 13102 */                         data: {
/* 13103 */                             type: 'Sk.yield'
/* 13104 */                         },
/* 13105 */                         resume: function() {}
/* 13106 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 13107 */                     $susp.$blk = $blk;
/* 13108 */                     $susp.optional = true;
/* 13109 */                     return $susp;
/* 13110 */                 }
/* 13111 */                 switch ($blk) {
/* 13112 */                 case 0:
/* 13113 */                     /* --- codeobj entry --- */
/* 13114 */                     if (self === undefined) {
/* 13115 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13116 */                     }
/* 13117 */                     if (potential === undefined) {
/* 13118 */                         throw new Sk.builtin.UnboundLocalError('local variable \'potential\' referenced before assignment');
/* 13119 */                     }
/* 13120 */ 
/* 13121 */ 
/* 13122 */                     //
/* 13123 */                     // line 403:
/* 13124 */                     //             has_name.append(node.id == potential.id)
/* 13125 */                     //             ^
/* 13126 */                     //
/* 13127 */                     Sk.currLineNo = 403;
/* 13128 */                     Sk.currColNo = 12;
/* 13129 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13130 */                     $currLineNo = 403;
/* 13131 */                     $currColNo = 12;
/* 13132 */                     $ret = Sk.abstr.gattr($free.has_name, 'append', true);
/* 13133 */                     $blk = 1; /* allowing case fallthrough */
/* 13134 */                 case 1:
/* 13135 */                     /* --- function return or resume suspension --- */
/* 13136 */                     if ($ret && $ret.$isSuspension) {
/* 13137 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 403, 12);
/* 13138 */                     }
/* 13139 */                     var $lattr785 = $ret;
/* 13140 */                     $ret = Sk.abstr.gattr($free.node, 'id', true);
/* 13141 */                     $blk = 2; /* allowing case fallthrough */
/* 13142 */                 case 2:
/* 13143 */                     /* --- function return or resume suspension --- */
/* 13144 */                     if ($ret && $ret.$isSuspension) {
/* 13145 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 403, 28);
/* 13146 */                     }
/* 13147 */                     var $lattr786 = $ret;
/* 13148 */                     var $compareres787 = null;
/* 13149 */                     if (potential === undefined) {
/* 13150 */                         throw new Sk.builtin.UnboundLocalError('local variable \'potential\' referenced before assignment');
/* 13151 */                     }
/* 13152 */                     $ret = Sk.abstr.gattr(potential, 'id', true);
/* 13153 */                     $blk = 4; /* allowing case fallthrough */
/* 13154 */                 case 4:
/* 13155 */                     /* --- function return or resume suspension --- */
/* 13156 */                     if ($ret && $ret.$isSuspension) {
/* 13157 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 403, 39);
/* 13158 */                     }
/* 13159 */                     var $lattr788 = $ret;
/* 13160 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr786, $lattr788, 'Eq', true));
/* 13161 */                     $blk = 5; /* allowing case fallthrough */
/* 13162 */                 case 5:
/* 13163 */                     /* --- function return or resume suspension --- */
/* 13164 */                     if ($ret && $ret.$isSuspension) {
/* 13165 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 403, 28);
/* 13166 */                     }
/* 13167 */                     $compareres787 = $ret;
/* 13168 */                     var $jfalse789 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 13169 */                     if ($jfalse789) { /*test failed */
/* 13170 */                         $blk = 3;
/* 13171 */                         continue;
/* 13172 */                     }
/* 13173 */                     $blk = 3; /* allowing case fallthrough */
/* 13174 */                 case 3:
/* 13175 */                     /* --- done --- */
/* 13176 */                     $ret;
/* 13177 */                     $ret = Sk.misceval.callsimOrSuspend($lattr785, $compareres787);
/* 13178 */                     $blk = 6; /* allowing case fallthrough */
/* 13179 */                 case 6:
/* 13180 */                     /* --- function return or resume suspension --- */
/* 13181 */                     if ($ret && $ret.$isSuspension) {
/* 13182 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 403, 12);
/* 13183 */                     }
/* 13184 */                     var $call790 = $ret;
/* 13185 */ 
/* 13186 */                     //
/* 13187 */                     // line 403:
/* 13188 */                     //             has_name.append(node.id == potential.id)
/* 13189 */                     //             ^
/* 13190 */                     //
/* 13191 */                     Sk.currLineNo = 403;
/* 13192 */                     Sk.currColNo = 12;
/* 13193 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13194 */                     $currLineNo = 403;
/* 13195 */                     $currColNo = 12;
/* 13196 */ 
/* 13197 */ 
/* 13198 */                     //
/* 13199 */                     // line 404:
/* 13200 */                     //             return self.generic_visit(potential)
/* 13201 */                     //             ^
/* 13202 */                     //
/* 13203 */                     Sk.currLineNo = 404;
/* 13204 */                     Sk.currColNo = 12;
/* 13205 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13206 */                     $currLineNo = 404;
/* 13207 */                     $currColNo = 12;
/* 13208 */                     if (self === undefined) {
/* 13209 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13210 */                     }
/* 13211 */                     $ret = Sk.abstr.gattr(self, 'generic_visit', true);
/* 13212 */                     $blk = 7; /* allowing case fallthrough */
/* 13213 */                 case 7:
/* 13214 */                     /* --- function return or resume suspension --- */
/* 13215 */                     if ($ret && $ret.$isSuspension) {
/* 13216 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 404, 19);
/* 13217 */                     }
/* 13218 */                     var $lattr791 = $ret;
/* 13219 */                     if (potential === undefined) {
/* 13220 */                         throw new Sk.builtin.UnboundLocalError('local variable \'potential\' referenced before assignment');
/* 13221 */                     }
/* 13222 */                     $ret;
/* 13223 */                     $ret = Sk.misceval.callsimOrSuspend($lattr791, potential);
/* 13224 */                     $blk = 8; /* allowing case fallthrough */
/* 13225 */                 case 8:
/* 13226 */                     /* --- function return or resume suspension --- */
/* 13227 */                     if ($ret && $ret.$isSuspension) {
/* 13228 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 404, 19);
/* 13229 */                     }
/* 13230 */                     var $call792 = $ret;
/* 13231 */ 
/* 13232 */                     //
/* 13233 */                     // line 404:
/* 13234 */                     //             return self.generic_visit(potential)
/* 13235 */                     //                    ^
/* 13236 */                     //
/* 13237 */                     Sk.currLineNo = 404;
/* 13238 */                     Sk.currColNo = 19;
/* 13239 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13240 */                     $currLineNo = 404;
/* 13241 */                     $currColNo = 19;
/* 13242 */                     return $call792;
/* 13243 */                     return Sk.builtin.none.none$;
/* 13244 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13245 */                 }
/* 13246 */             } catch (err) {
/* 13247 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 13248 */                     Sk.execStart = Date.now()
/* 13249 */                 }
/* 13250 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13251 */                     err = new Sk.builtin.ExternalError(err);
/* 13252 */                 }
/* 13253 */                 err.traceback.push({
/* 13254 */                     lineno: $currLineNo,
/* 13255 */                     colno: $currColNo,
/* 13256 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 13257 */                 });
/* 13258 */                 if ($exc.length > 0) {
/* 13259 */                     $err = err;
/* 13260 */                     Sk.err = $err;
/* 13261 */                     $blk = $exc.pop();
/* 13262 */                     continue;
/* 13263 */                 } else {
/* 13264 */                     throw err;
/* 13265 */                 }
/* 13266 */             }
/* 13267 */         }
/* 13268 */     });
/* 13269 */     var $scope802 = (function $is_before803$(self, other) {
/* 13270 */         var other, other, other, self, self, self, $lattr805, $compareres806, $lattr805, $compareres806, $lattr807, $lattr805, $compareres806, $lattr807, $jfalse808, $boolopsucc809, $jfalse810, $lattr805, $compareres806, $lattr807, $jfalse808, $boolopsucc809, $jfalse810, $lattr811, $compareres812, $lattr805, $compareres806, $lattr807, $jfalse808, $boolopsucc809, $jfalse810, $lattr811, $compareres812, $lattr813;
/* 13271 */         var $wakeFromSuspension = function() {
/* 13272 */             var susp = $scope802.$wakingSuspension;
/* 13273 */             delete $scope802.$wakingSuspension;
/* 13274 */             $blk = susp.$blk;
/* 13275 */             $loc = susp.$loc;
/* 13276 */             $gbl = susp.$gbl;
/* 13277 */             $exc = susp.$exc;
/* 13278 */             $err = susp.$err;
/* 13279 */             Sk.err = $err;
/* 13280 */             $postfinally = susp.$postfinally;
/* 13281 */             $currLineNo = susp.$lineno;
/* 13282 */             $currColNo = susp.$colno;
/* 13283 */             Sk.lastYield = Date.now();
/* 13284 */             other = susp.$tmps.other;
/* 13285 */             self = susp.$tmps.self;
/* 13286 */             $lattr805 = susp.$tmps.$lattr805;
/* 13287 */             $compareres806 = susp.$tmps.$compareres806;
/* 13288 */             $lattr807 = susp.$tmps.$lattr807;
/* 13289 */             $jfalse808 = susp.$tmps.$jfalse808;
/* 13290 */             $boolopsucc809 = susp.$tmps.$boolopsucc809;
/* 13291 */             $jfalse810 = susp.$tmps.$jfalse810;
/* 13292 */             $lattr811 = susp.$tmps.$lattr811;
/* 13293 */             $compareres812 = susp.$tmps.$compareres812;
/* 13294 */             $lattr813 = susp.$tmps.$lattr813;
/* 13295 */             try {
/* 13296 */                 $ret = susp.child.resume();
/* 13297 */             } catch (err) {
/* 13298 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 13299 */                     Sk.execStart = Date.now()
/* 13300 */                 }
/* 13301 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13302 */                     err = new Sk.builtin.ExternalError(err);
/* 13303 */                 }
/* 13304 */                 err.traceback.push({
/* 13305 */                     lineno: $currLineNo,
/* 13306 */                     colno: $currColNo,
/* 13307 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 13308 */                 });
/* 13309 */                 if ($exc.length > 0) {
/* 13310 */                     $err = err;
/* 13311 */                     Sk.err = $err;
/* 13312 */                     $blk = $exc.pop();
/* 13313 */                 } else {
/* 13314 */                     throw err;
/* 13315 */                 }
/* 13316 */             }
/* 13317 */         };
/* 13318 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 13319 */             var susp = new Sk.misceval.Suspension();
/* 13320 */             susp.child = $child;
/* 13321 */             susp.resume = function() {
/* 13322 */                 $scope802.$wakingSuspension = susp;
/* 13323 */                 return $scope802();
/* 13324 */             };
/* 13325 */             susp.data = susp.child.data;
/* 13326 */             susp.$blk = $blk;
/* 13327 */             susp.$loc = $loc;
/* 13328 */             susp.$gbl = $gbl;
/* 13329 */             susp.$exc = $exc;
/* 13330 */             susp.$err = $err;
/* 13331 */             susp.$postfinally = $postfinally;
/* 13332 */             susp.$filename = $filename;
/* 13333 */             susp.$lineno = $lineno;
/* 13334 */             susp.$colno = $colno;
/* 13335 */             susp.optional = susp.child.optional;
/* 13336 */             susp.$tmps = {
/* 13337 */                 "other": other,
/* 13338 */                 "self": self,
/* 13339 */                 "$lattr805": $lattr805,
/* 13340 */                 "$compareres806": $compareres806,
/* 13341 */                 "$lattr807": $lattr807,
/* 13342 */                 "$jfalse808": $jfalse808,
/* 13343 */                 "$boolopsucc809": $boolopsucc809,
/* 13344 */                 "$jfalse810": $jfalse810,
/* 13345 */                 "$lattr811": $lattr811,
/* 13346 */                 "$compareres812": $compareres812,
/* 13347 */                 "$lattr813": $lattr813
/* 13348 */             };
/* 13349 */             return susp;
/* 13350 */         };
/* 13351 */         var $blk = 0,
/* 13352 */             $exc = [],
/* 13353 */             $loc = {},
/* 13354 */             $gbl = this,
/* 13355 */             $err = undefined,
/* 13356 */             $ret = undefined,
/* 13357 */             $postfinally = undefined,
/* 13358 */             $currLineNo = undefined,
/* 13359 */             $currColNo = undefined;
/* 13360 */         Sk.err = $err;
/* 13361 */         if (typeof Sk.execStart === 'undefined') {
/* 13362 */             Sk.execStart = Date.now()
/* 13363 */         }
/* 13364 */         if (typeof Sk.lastYield === 'undefined') {
/* 13365 */             Sk.lastYield = Date.now()
/* 13366 */         }
/* 13367 */         if ($scope802.$wakingSuspension !== undefined) {
/* 13368 */             $wakeFromSuspension();
/* 13369 */         } else {
/* 13370 */             Sk.builtin.pyCheckArgs("is_before", arguments, 2, 2, false, false);
/* 13371 */         }
/* 13372 */         while (true) {
/* 13373 */             try {
/* 13374 */                 var $dateNow = Date.now();
/* 13375 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 13376 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 13377 */                 }
/* 13378 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 13379 */                     var $susp = $saveSuspension({
/* 13380 */                         data: {
/* 13381 */                             type: 'Sk.yield'
/* 13382 */                         },
/* 13383 */                         resume: function() {}
/* 13384 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 13385 */                     $susp.$blk = $blk;
/* 13386 */                     $susp.optional = true;
/* 13387 */                     return $susp;
/* 13388 */                 }
/* 13389 */                 switch ($blk) {
/* 13390 */                 case 0:
/* 13391 */                     /* --- codeobj entry --- */
/* 13392 */                     if (self === undefined) {
/* 13393 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13394 */                     }
/* 13395 */                     if (other === undefined) {
/* 13396 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/* 13397 */                     }
/* 13398 */ 
/* 13399 */ 
/* 13400 */                     //
/* 13401 */                     // line 411:
/* 13402 */                     //         """
/* 13403 */                     //         ^
/* 13404 */                     //
/* 13405 */                     Sk.currLineNo = 411;
/* 13406 */                     Sk.currColNo = 8;
/* 13407 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13408 */                     $currLineNo = 411;
/* 13409 */                     $currColNo = 8;
/* 13410 */                     var $str804 = new Sk.builtins['str']('\n        Uses tree id to check if self node came before other.\n        Args:\n            other (cait_node): the other node to compare to\n\n        Returns:\n            bool: True if self is before other\n        ');
/* 13411 */ 
/* 13412 */                     //
/* 13413 */                     // line 419:
/* 13414 */                     //         try:
/* 13415 */                     //         ^
/* 13416 */                     //
/* 13417 */                     Sk.currLineNo = 419;
/* 13418 */                     Sk.currColNo = 8;
/* 13419 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13420 */                     $currLineNo = 419;
/* 13421 */                     $currColNo = 8;
/* 13422 */                     $exc.push(1);
/* 13423 */ 
/* 13424 */                     //
/* 13425 */                     // line 420:
/* 13426 */                     //             return self.tree_id < other.tree_id and self.linear_tree == other.linear_tree
/* 13427 */                     //             ^
/* 13428 */                     //
/* 13429 */                     Sk.currLineNo = 420;
/* 13430 */                     Sk.currColNo = 12;
/* 13431 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13432 */                     $currLineNo = 420;
/* 13433 */                     $currColNo = 12;
/* 13434 */                     if (self === undefined) {
/* 13435 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13436 */                     }
/* 13437 */                     $ret = Sk.abstr.gattr(self, 'tree_id', true);
/* 13438 */                     $blk = 6; /* allowing case fallthrough */
/* 13439 */                 case 6:
/* 13440 */                     /* --- function return or resume suspension --- */
/* 13441 */                     if ($ret && $ret.$isSuspension) {
/* 13442 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 420, 19);
/* 13443 */                     }
/* 13444 */                     var $lattr805 = $ret;
/* 13445 */                     var $compareres806 = null;
/* 13446 */                     if (other === undefined) {
/* 13447 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/* 13448 */                     }
/* 13449 */                     $ret = Sk.abstr.gattr(other, 'tree_id', true);
/* 13450 */                     $blk = 8; /* allowing case fallthrough */
/* 13451 */                 case 8:
/* 13452 */                     /* --- function return or resume suspension --- */
/* 13453 */                     if ($ret && $ret.$isSuspension) {
/* 13454 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 420, 34);
/* 13455 */                     }
/* 13456 */                     var $lattr807 = $ret;
/* 13457 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr805, $lattr807, 'Lt', true));
/* 13458 */                     $blk = 9; /* allowing case fallthrough */
/* 13459 */                 case 9:
/* 13460 */                     /* --- function return or resume suspension --- */
/* 13461 */                     if ($ret && $ret.$isSuspension) {
/* 13462 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 420, 19);
/* 13463 */                     }
/* 13464 */                     $compareres806 = $ret;
/* 13465 */                     var $jfalse808 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 13466 */                     if ($jfalse808) { /*test failed */
/* 13467 */                         $blk = 7;
/* 13468 */                         continue;
/* 13469 */                     }
/* 13470 */                     $blk = 7; /* allowing case fallthrough */
/* 13471 */                 case 7:
/* 13472 */                     /* --- done --- */
/* 13473 */                     var $boolopsucc809 = $compareres806;
/* 13474 */                     $boolopsucc809 = $compareres806;
/* 13475 */                     var $jfalse810 = ($compareres806 === false || !Sk.misceval.isTrue($compareres806));
/* 13476 */                     if ($jfalse810) { /*test failed */
/* 13477 */                         $blk = 5;
/* 13478 */                         continue;
/* 13479 */                     }
/* 13480 */                     if (self === undefined) {
/* 13481 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13482 */                     }
/* 13483 */                     $ret = Sk.abstr.gattr(self, 'linear_tree', true);
/* 13484 */                     $blk = 10; /* allowing case fallthrough */
/* 13485 */                 case 10:
/* 13486 */                     /* --- function return or resume suspension --- */
/* 13487 */                     if ($ret && $ret.$isSuspension) {
/* 13488 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 420, 52);
/* 13489 */                     }
/* 13490 */                     var $lattr811 = $ret;
/* 13491 */                     var $compareres812 = null;
/* 13492 */                     if (other === undefined) {
/* 13493 */                         throw new Sk.builtin.UnboundLocalError('local variable \'other\' referenced before assignment');
/* 13494 */                     }
/* 13495 */                     $ret = Sk.abstr.gattr(other, 'linear_tree', true);
/* 13496 */                     $blk = 12; /* allowing case fallthrough */
/* 13497 */                 case 12:
/* 13498 */                     /* --- function return or resume suspension --- */
/* 13499 */                     if ($ret && $ret.$isSuspension) {
/* 13500 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 420, 72);
/* 13501 */                     }
/* 13502 */                     var $lattr813 = $ret;
/* 13503 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr811, $lattr813, 'Eq', true));
/* 13504 */                     $blk = 13; /* allowing case fallthrough */
/* 13505 */                 case 13:
/* 13506 */                     /* --- function return or resume suspension --- */
/* 13507 */                     if ($ret && $ret.$isSuspension) {
/* 13508 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 420, 52);
/* 13509 */                     }
/* 13510 */                     $compareres812 = $ret;
/* 13511 */                     var $jfalse814 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 13512 */                     if ($jfalse814) { /*test failed */
/* 13513 */                         $blk = 11;
/* 13514 */                         continue;
/* 13515 */                     }
/* 13516 */                     $blk = 11; /* allowing case fallthrough */
/* 13517 */                 case 11:
/* 13518 */                     /* --- done --- */
/* 13519 */                     $boolopsucc809 = $compareres812;
/* 13520 */                     var $jfalse815 = ($compareres812 === false || !Sk.misceval.isTrue($compareres812));
/* 13521 */                     if ($jfalse815) { /*test failed */
/* 13522 */                         $blk = 5;
/* 13523 */                         continue;
/* 13524 */                     }
/* 13525 */                     $blk = 5; /* allowing case fallthrough */
/* 13526 */                 case 5:
/* 13527 */                     /* --- end of boolop --- */
/* 13528 */                     return $boolopsucc809;
/* 13529 */                     $exc.pop();
/* 13530 */                     $blk = 3; /* allowing case fallthrough */
/* 13531 */                 case 3:
/* 13532 */                     /* --- orelse --- */
/* 13533 */                     $blk = 4; /* allowing case fallthrough */
/* 13534 */                 case 4:
/* 13535 */                     /* --- end --- */
/* 13536 */                     return Sk.builtin.none.none$;
/* 13537 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13538 */                 case 1:
/* 13539 */                     /* --- except_0_ --- */
/* 13540 */                     var $loadgbl816 = Sk.misceval.loadname('Exception', $gbl);
/* 13541 */                     var $instance817 = Sk.misceval.isTrue(Sk.builtin.isinstance($err, $loadgbl816));
/* 13542 */                     var $jfalse818 = ($instance817 === false || !Sk.misceval.isTrue($instance817));
/* 13543 */                     if ($jfalse818) { /*test failed */
/* 13544 */                         $blk = 2;
/* 13545 */                         continue;
/* 13546 */                     }
/* 13547 */ 
/* 13548 */                     //
/* 13549 */                     // line 422:
/* 13550 */                     //             raise TypeError
/* 13551 */                     //             ^
/* 13552 */                     //
/* 13553 */                     Sk.currLineNo = 422;
/* 13554 */                     Sk.currColNo = 12;
/* 13555 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13556 */                     $currLineNo = 422;
/* 13557 */                     $currColNo = 12;
/* 13558 */                     var $loadgbl819 = Sk.misceval.loadname('TypeError', $gbl);
/* 13559 */                     var $err820 = $loadgbl819;
/* 13560 */                     if ($err820 instanceof Sk.builtin.type) {
/* 13561 */                         throw Sk.misceval.callsim($err820);
/* 13562 */                     } else if (typeof($err820) === 'function') {
/* 13563 */                         throw $err820();
/* 13564 */                     } else {
/* 13565 */                         throw $err820;
/* 13566 */                     }
/* 13567 */                     $blk = 4; /* jump */
/* 13568 */                     continue;
/* 13569 */                 case 2:
/* 13570 */                     /* --- unhandled --- */
/* 13571 */                     throw $err;
/* 13572 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13573 */                 }
/* 13574 */             } catch (err) {
/* 13575 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 13576 */                     Sk.execStart = Date.now()
/* 13577 */                 }
/* 13578 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13579 */                     err = new Sk.builtin.ExternalError(err);
/* 13580 */                 }
/* 13581 */                 err.traceback.push({
/* 13582 */                     lineno: $currLineNo,
/* 13583 */                     colno: $currColNo,
/* 13584 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 13585 */                 });
/* 13586 */                 if ($exc.length > 0) {
/* 13587 */                     $err = err;
/* 13588 */                     Sk.err = $err;
/* 13589 */                     $blk = $exc.pop();
/* 13590 */                     continue;
/* 13591 */                 } else {
/* 13592 */                     throw err;
/* 13593 */                 }
/* 13594 */             }
/* 13595 */         }
/* 13596 */     });
/* 13597 */     var $scope822 = (function $is_ast823$(self, ast_name) {
/* 13598 */         var ast_name, ast_name, ast_name, ast_name, ast_name, self, self, $loadgbl825, $loadgbl826, $loadgbl830, $loadgbl830, $lattr831, $loadgbl830, $lattr831, $lattr832, $loadgbl834, $loadgbl834, $lattr835, $loadgbl834, $lattr835, $lattr836, $loadgbl834, $lattr835, $lattr836, $call837, $loadgbl834, $lattr835, $lattr836, $call837, $lattr838, $loadgbl834, $lattr835, $lattr836, $call837, $lattr838, $call839, $compareres840, $loadgbl834, $lattr835, $lattr836, $call837, $lattr838, $call839, $compareres840, $lattr841, $loadgbl834, $lattr835, $lattr836, $call837, $lattr838, $call839, $compareres840, $lattr841, $call842;
/* 13599 */         var $wakeFromSuspension = function() {
/* 13600 */             var susp = $scope822.$wakingSuspension;
/* 13601 */             delete $scope822.$wakingSuspension;
/* 13602 */             $blk = susp.$blk;
/* 13603 */             $loc = susp.$loc;
/* 13604 */             $gbl = susp.$gbl;
/* 13605 */             $exc = susp.$exc;
/* 13606 */             $err = susp.$err;
/* 13607 */             Sk.err = $err;
/* 13608 */             $postfinally = susp.$postfinally;
/* 13609 */             $currLineNo = susp.$lineno;
/* 13610 */             $currColNo = susp.$colno;
/* 13611 */             Sk.lastYield = Date.now();
/* 13612 */             ast_name = susp.$tmps.ast_name;
/* 13613 */             self = susp.$tmps.self;
/* 13614 */             $loadgbl825 = susp.$tmps.$loadgbl825;
/* 13615 */             $loadgbl826 = susp.$tmps.$loadgbl826;
/* 13616 */             $loadgbl830 = susp.$tmps.$loadgbl830;
/* 13617 */             $lattr831 = susp.$tmps.$lattr831;
/* 13618 */             $lattr832 = susp.$tmps.$lattr832;
/* 13619 */             $loadgbl834 = susp.$tmps.$loadgbl834;
/* 13620 */             $lattr835 = susp.$tmps.$lattr835;
/* 13621 */             $lattr836 = susp.$tmps.$lattr836;
/* 13622 */             $call837 = susp.$tmps.$call837;
/* 13623 */             $lattr838 = susp.$tmps.$lattr838;
/* 13624 */             $call839 = susp.$tmps.$call839;
/* 13625 */             $compareres840 = susp.$tmps.$compareres840;
/* 13626 */             $lattr841 = susp.$tmps.$lattr841;
/* 13627 */             $call842 = susp.$tmps.$call842;
/* 13628 */             try {
/* 13629 */                 $ret = susp.child.resume();
/* 13630 */             } catch (err) {
/* 13631 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 13632 */                     Sk.execStart = Date.now()
/* 13633 */                 }
/* 13634 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13635 */                     err = new Sk.builtin.ExternalError(err);
/* 13636 */                 }
/* 13637 */                 err.traceback.push({
/* 13638 */                     lineno: $currLineNo,
/* 13639 */                     colno: $currColNo,
/* 13640 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 13641 */                 });
/* 13642 */                 if ($exc.length > 0) {
/* 13643 */                     $err = err;
/* 13644 */                     Sk.err = $err;
/* 13645 */                     $blk = $exc.pop();
/* 13646 */                 } else {
/* 13647 */                     throw err;
/* 13648 */                 }
/* 13649 */             }
/* 13650 */         };
/* 13651 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 13652 */             var susp = new Sk.misceval.Suspension();
/* 13653 */             susp.child = $child;
/* 13654 */             susp.resume = function() {
/* 13655 */                 $scope822.$wakingSuspension = susp;
/* 13656 */                 return $scope822();
/* 13657 */             };
/* 13658 */             susp.data = susp.child.data;
/* 13659 */             susp.$blk = $blk;
/* 13660 */             susp.$loc = $loc;
/* 13661 */             susp.$gbl = $gbl;
/* 13662 */             susp.$exc = $exc;
/* 13663 */             susp.$err = $err;
/* 13664 */             susp.$postfinally = $postfinally;
/* 13665 */             susp.$filename = $filename;
/* 13666 */             susp.$lineno = $lineno;
/* 13667 */             susp.$colno = $colno;
/* 13668 */             susp.optional = susp.child.optional;
/* 13669 */             susp.$tmps = {
/* 13670 */                 "ast_name": ast_name,
/* 13671 */                 "self": self,
/* 13672 */                 "$loadgbl825": $loadgbl825,
/* 13673 */                 "$loadgbl826": $loadgbl826,
/* 13674 */                 "$loadgbl830": $loadgbl830,
/* 13675 */                 "$lattr831": $lattr831,
/* 13676 */                 "$lattr832": $lattr832,
/* 13677 */                 "$loadgbl834": $loadgbl834,
/* 13678 */                 "$lattr835": $lattr835,
/* 13679 */                 "$lattr836": $lattr836,
/* 13680 */                 "$call837": $call837,
/* 13681 */                 "$lattr838": $lattr838,
/* 13682 */                 "$call839": $call839,
/* 13683 */                 "$compareres840": $compareres840,
/* 13684 */                 "$lattr841": $lattr841,
/* 13685 */                 "$call842": $call842
/* 13686 */             };
/* 13687 */             return susp;
/* 13688 */         };
/* 13689 */         var $blk = 0,
/* 13690 */             $exc = [],
/* 13691 */             $loc = {},
/* 13692 */             $gbl = this,
/* 13693 */             $err = undefined,
/* 13694 */             $ret = undefined,
/* 13695 */             $postfinally = undefined,
/* 13696 */             $currLineNo = undefined,
/* 13697 */             $currColNo = undefined;
/* 13698 */         Sk.err = $err;
/* 13699 */         if (typeof Sk.execStart === 'undefined') {
/* 13700 */             Sk.execStart = Date.now()
/* 13701 */         }
/* 13702 */         if (typeof Sk.lastYield === 'undefined') {
/* 13703 */             Sk.lastYield = Date.now()
/* 13704 */         }
/* 13705 */         if ($scope822.$wakingSuspension !== undefined) {
/* 13706 */             $wakeFromSuspension();
/* 13707 */         } else {
/* 13708 */             Sk.builtin.pyCheckArgs("is_ast", arguments, 2, 2, false, false);
/* 13709 */         }
/* 13710 */         while (true) {
/* 13711 */             try {
/* 13712 */                 var $dateNow = Date.now();
/* 13713 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 13714 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 13715 */                 }
/* 13716 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 13717 */                     var $susp = $saveSuspension({
/* 13718 */                         data: {
/* 13719 */                             type: 'Sk.yield'
/* 13720 */                         },
/* 13721 */                         resume: function() {}
/* 13722 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 13723 */                     $susp.$blk = $blk;
/* 13724 */                     $susp.optional = true;
/* 13725 */                     return $susp;
/* 13726 */                 }
/* 13727 */                 switch ($blk) {
/* 13728 */                 case 0:
/* 13729 */                     /* --- codeobj entry --- */
/* 13730 */                     if (self === undefined) {
/* 13731 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13732 */                     }
/* 13733 */                     if (ast_name === undefined) {
/* 13734 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ast_name\' referenced before assignment');
/* 13735 */                     }
/* 13736 */ 
/* 13737 */ 
/* 13738 */                     //
/* 13739 */                     // line 425:
/* 13740 */                     //         """
/* 13741 */                     //         ^
/* 13742 */                     //
/* 13743 */                     Sk.currLineNo = 425;
/* 13744 */                     Sk.currColNo = 8;
/* 13745 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13746 */                     $currLineNo = 425;
/* 13747 */                     $currColNo = 8;
/* 13748 */                     var $str824 = new Sk.builtins['str']("\n        Checks self is the type of the specified ast node\n        Args:\n            ast_name (str): The name of the ast node type\n\n        Returns:\n            bool: True if this node's ast name matches the specified one\n        ");
/* 13749 */ 
/* 13750 */                     //
/* 13751 */                     // line 433:
/* 13752 */                     //         if not isinstance(ast_name, str):
/* 13753 */                     //         ^
/* 13754 */                     //
/* 13755 */                     Sk.currLineNo = 433;
/* 13756 */                     Sk.currColNo = 8;
/* 13757 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13758 */                     $currLineNo = 433;
/* 13759 */                     $currColNo = 8;
/* 13760 */                     var $loadgbl825 = Sk.misceval.loadname('isinstance', $gbl);
/* 13761 */                     if (ast_name === undefined) {
/* 13762 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ast_name\' referenced before assignment');
/* 13763 */                     }
/* 13764 */                     var $loadgbl826 = Sk.misceval.loadname('str', $gbl);
/* 13765 */                     $ret;
/* 13766 */                     $ret = Sk.misceval.callsimOrSuspend($loadgbl825, ast_name, $loadgbl826);
/* 13767 */                     $blk = 2; /* allowing case fallthrough */
/* 13768 */                 case 2:
/* 13769 */                     /* --- function return or resume suspension --- */
/* 13770 */                     if ($ret && $ret.$isSuspension) {
/* 13771 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 433, 15);
/* 13772 */                     }
/* 13773 */                     var $call827 = $ret;
/* 13774 */ 
/* 13775 */                     //
/* 13776 */                     // line 433:
/* 13777 */                     //         if not isinstance(ast_name, str):
/* 13778 */                     //                ^
/* 13779 */                     //
/* 13780 */                     Sk.currLineNo = 433;
/* 13781 */                     Sk.currColNo = 15;
/* 13782 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13783 */                     $currLineNo = 433;
/* 13784 */                     $currColNo = 15;
/* 13785 */                     var $unaryop828 = Sk.abstr.numberUnaryOp($call827, 'Not');
/* 13786 */                     var $jfalse829 = ($unaryop828 === false || !Sk.misceval.isTrue($unaryop828));
/* 13787 */                     if ($jfalse829) { /*test failed */
/* 13788 */                         $blk = 1;
/* 13789 */                         continue;
/* 13790 */                     }
/* 13791 */ 
/* 13792 */                     //
/* 13793 */                     // line 434:
/* 13794 */                     //             ast_name = CaitNode.get_ast_name(ast_name.astNode)
/* 13795 */                     //             ^
/* 13796 */                     //
/* 13797 */                     Sk.currLineNo = 434;
/* 13798 */                     Sk.currColNo = 12;
/* 13799 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13800 */                     $currLineNo = 434;
/* 13801 */                     $currColNo = 12;
/* 13802 */                     var $loadgbl830 = Sk.misceval.loadname('CaitNode', $gbl);
/* 13803 */                     $ret = Sk.abstr.gattr($loadgbl830, 'get_ast_name', true);
/* 13804 */                     $blk = 3; /* allowing case fallthrough */
/* 13805 */                 case 3:
/* 13806 */                     /* --- function return or resume suspension --- */
/* 13807 */                     if ($ret && $ret.$isSuspension) {
/* 13808 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 434, 23);
/* 13809 */                     }
/* 13810 */                     var $lattr831 = $ret;
/* 13811 */                     if (ast_name === undefined) {
/* 13812 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ast_name\' referenced before assignment');
/* 13813 */                     }
/* 13814 */                     $ret = Sk.abstr.gattr(ast_name, 'astNode', true);
/* 13815 */                     $blk = 4; /* allowing case fallthrough */
/* 13816 */                 case 4:
/* 13817 */                     /* --- function return or resume suspension --- */
/* 13818 */                     if ($ret && $ret.$isSuspension) {
/* 13819 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 434, 45);
/* 13820 */                     }
/* 13821 */                     var $lattr832 = $ret;
/* 13822 */                     $ret;
/* 13823 */                     $ret = Sk.misceval.callsimOrSuspend($lattr831, $lattr832);
/* 13824 */                     $blk = 5; /* allowing case fallthrough */
/* 13825 */                 case 5:
/* 13826 */                     /* --- function return or resume suspension --- */
/* 13827 */                     if ($ret && $ret.$isSuspension) {
/* 13828 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 434, 23);
/* 13829 */                     }
/* 13830 */                     var $call833 = $ret;
/* 13831 */ 
/* 13832 */                     //
/* 13833 */                     // line 434:
/* 13834 */                     //             ast_name = CaitNode.get_ast_name(ast_name.astNode)
/* 13835 */                     //                        ^
/* 13836 */                     //
/* 13837 */                     Sk.currLineNo = 434;
/* 13838 */                     Sk.currColNo = 23;
/* 13839 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13840 */                     $currLineNo = 434;
/* 13841 */                     $currColNo = 23;
/* 13842 */                     ast_name = $call833;
/* 13843 */                     $blk = 1; /* allowing case fallthrough */
/* 13844 */                 case 1:
/* 13845 */                     /* --- end of if --- */
/* 13846 */ 
/* 13847 */                     //
/* 13848 */                     // line 435:
/* 13849 */                     //         return CaitNode.get_ast_name(self.astNode).lower() == ast_name.lower()
/* 13850 */                     //         ^
/* 13851 */                     //
/* 13852 */                     Sk.currLineNo = 435;
/* 13853 */                     Sk.currColNo = 8;
/* 13854 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13855 */                     $currLineNo = 435;
/* 13856 */                     $currColNo = 8;
/* 13857 */                     var $loadgbl834 = Sk.misceval.loadname('CaitNode', $gbl);
/* 13858 */                     $ret = Sk.abstr.gattr($loadgbl834, 'get_ast_name', true);
/* 13859 */                     $blk = 6; /* allowing case fallthrough */
/* 13860 */                 case 6:
/* 13861 */                     /* --- function return or resume suspension --- */
/* 13862 */                     if ($ret && $ret.$isSuspension) {
/* 13863 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 435, 15);
/* 13864 */                     }
/* 13865 */                     var $lattr835 = $ret;
/* 13866 */                     if (self === undefined) {
/* 13867 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 13868 */                     }
/* 13869 */                     $ret = Sk.abstr.gattr(self, 'astNode', true);
/* 13870 */                     $blk = 7; /* allowing case fallthrough */
/* 13871 */                 case 7:
/* 13872 */                     /* --- function return or resume suspension --- */
/* 13873 */                     if ($ret && $ret.$isSuspension) {
/* 13874 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 435, 37);
/* 13875 */                     }
/* 13876 */                     var $lattr836 = $ret;
/* 13877 */                     $ret;
/* 13878 */                     $ret = Sk.misceval.callsimOrSuspend($lattr835, $lattr836);
/* 13879 */                     $blk = 8; /* allowing case fallthrough */
/* 13880 */                 case 8:
/* 13881 */                     /* --- function return or resume suspension --- */
/* 13882 */                     if ($ret && $ret.$isSuspension) {
/* 13883 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 435, 15);
/* 13884 */                     }
/* 13885 */                     var $call837 = $ret;
/* 13886 */ 
/* 13887 */                     //
/* 13888 */                     // line 435:
/* 13889 */                     //         return CaitNode.get_ast_name(self.astNode).lower() == ast_name.lower()
/* 13890 */                     //                ^
/* 13891 */                     //
/* 13892 */                     Sk.currLineNo = 435;
/* 13893 */                     Sk.currColNo = 15;
/* 13894 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13895 */                     $currLineNo = 435;
/* 13896 */                     $currColNo = 15;
/* 13897 */                     $ret = Sk.abstr.gattr($call837, 'lower', true);
/* 13898 */                     $blk = 9; /* allowing case fallthrough */
/* 13899 */                 case 9:
/* 13900 */                     /* --- function return or resume suspension --- */
/* 13901 */                     if ($ret && $ret.$isSuspension) {
/* 13902 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 435, 15);
/* 13903 */                     }
/* 13904 */                     var $lattr838 = $ret;
/* 13905 */                     $ret;
/* 13906 */                     $ret = Sk.misceval.callsimOrSuspend($lattr838);
/* 13907 */                     $blk = 10; /* allowing case fallthrough */
/* 13908 */                 case 10:
/* 13909 */                     /* --- function return or resume suspension --- */
/* 13910 */                     if ($ret && $ret.$isSuspension) {
/* 13911 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 435, 15);
/* 13912 */                     }
/* 13913 */                     var $call839 = $ret;
/* 13914 */ 
/* 13915 */                     //
/* 13916 */                     // line 435:
/* 13917 */                     //         return CaitNode.get_ast_name(self.astNode).lower() == ast_name.lower()
/* 13918 */                     //                ^
/* 13919 */                     //
/* 13920 */                     Sk.currLineNo = 435;
/* 13921 */                     Sk.currColNo = 15;
/* 13922 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13923 */                     $currLineNo = 435;
/* 13924 */                     $currColNo = 15;
/* 13925 */                     var $compareres840 = null;
/* 13926 */                     if (ast_name === undefined) {
/* 13927 */                         throw new Sk.builtin.UnboundLocalError('local variable \'ast_name\' referenced before assignment');
/* 13928 */                     }
/* 13929 */                     $ret = Sk.abstr.gattr(ast_name, 'lower', true);
/* 13930 */                     $blk = 12; /* allowing case fallthrough */
/* 13931 */                 case 12:
/* 13932 */                     /* --- function return or resume suspension --- */
/* 13933 */                     if ($ret && $ret.$isSuspension) {
/* 13934 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 435, 62);
/* 13935 */                     }
/* 13936 */                     var $lattr841 = $ret;
/* 13937 */                     $ret;
/* 13938 */                     $ret = Sk.misceval.callsimOrSuspend($lattr841);
/* 13939 */                     $blk = 13; /* allowing case fallthrough */
/* 13940 */                 case 13:
/* 13941 */                     /* --- function return or resume suspension --- */
/* 13942 */                     if ($ret && $ret.$isSuspension) {
/* 13943 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 435, 62);
/* 13944 */                     }
/* 13945 */                     var $call842 = $ret;
/* 13946 */ 
/* 13947 */                     //
/* 13948 */                     // line 435:
/* 13949 */                     //         return CaitNode.get_ast_name(self.astNode).lower() == ast_name.lower()
/* 13950 */                     //                                                               ^
/* 13951 */                     //
/* 13952 */                     Sk.currLineNo = 435;
/* 13953 */                     Sk.currColNo = 62;
/* 13954 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 13955 */                     $currLineNo = 435;
/* 13956 */                     $currColNo = 62;
/* 13957 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($call839, $call842, 'Eq', true));
/* 13958 */                     $blk = 14; /* allowing case fallthrough */
/* 13959 */                 case 14:
/* 13960 */                     /* --- function return or resume suspension --- */
/* 13961 */                     if ($ret && $ret.$isSuspension) {
/* 13962 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 435, 15);
/* 13963 */                     }
/* 13964 */                     $compareres840 = $ret;
/* 13965 */                     var $jfalse843 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 13966 */                     if ($jfalse843) { /*test failed */
/* 13967 */                         $blk = 11;
/* 13968 */                         continue;
/* 13969 */                     }
/* 13970 */                     $blk = 11; /* allowing case fallthrough */
/* 13971 */                 case 11:
/* 13972 */                     /* --- done --- */
/* 13973 */                     return $compareres840;
/* 13974 */                     return Sk.builtin.none.none$;
/* 13975 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 13976 */                 }
/* 13977 */             } catch (err) {
/* 13978 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 13979 */                     Sk.execStart = Date.now()
/* 13980 */                 }
/* 13981 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 13982 */                     err = new Sk.builtin.ExternalError(err);
/* 13983 */                 }
/* 13984 */                 err.traceback.push({
/* 13985 */                     lineno: $currLineNo,
/* 13986 */                     colno: $currColNo,
/* 13987 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 13988 */                 });
/* 13989 */                 if ($exc.length > 0) {
/* 13990 */                     $err = err;
/* 13991 */                     Sk.err = $err;
/* 13992 */                     $blk = $exc.pop();
/* 13993 */                     continue;
/* 13994 */                 } else {
/* 13995 */                     throw err;
/* 13996 */                 }
/* 13997 */             }
/* 13998 */         }
/* 13999 */     });
/* 14000 */     var $scope845 = (function $is_method846$(self) {
/* 14001 */         var current; /* locals */
/* 14002 */         var current, current, current, current, current, current, self, self, self, $lattr848, $compareres849, $str850, $compareres854, $lattr857, $compareres858, $str859, $lattr862, $compareres863, $str864;
/* 14003 */         var $wakeFromSuspension = function() {
/* 14004 */             var susp = $scope845.$wakingSuspension;
/* 14005 */             delete $scope845.$wakingSuspension;
/* 14006 */             $blk = susp.$blk;
/* 14007 */             $loc = susp.$loc;
/* 14008 */             $gbl = susp.$gbl;
/* 14009 */             $exc = susp.$exc;
/* 14010 */             $err = susp.$err;
/* 14011 */             Sk.err = $err;
/* 14012 */             $postfinally = susp.$postfinally;
/* 14013 */             $currLineNo = susp.$lineno;
/* 14014 */             $currColNo = susp.$colno;
/* 14015 */             Sk.lastYield = Date.now();
/* 14016 */             current = susp.$tmps.current;
/* 14017 */             self = susp.$tmps.self;
/* 14018 */             $lattr848 = susp.$tmps.$lattr848;
/* 14019 */             $compareres849 = susp.$tmps.$compareres849;
/* 14020 */             $str850 = susp.$tmps.$str850;
/* 14021 */             $compareres854 = susp.$tmps.$compareres854;
/* 14022 */             $lattr857 = susp.$tmps.$lattr857;
/* 14023 */             $compareres858 = susp.$tmps.$compareres858;
/* 14024 */             $str859 = susp.$tmps.$str859;
/* 14025 */             $lattr862 = susp.$tmps.$lattr862;
/* 14026 */             $compareres863 = susp.$tmps.$compareres863;
/* 14027 */             $str864 = susp.$tmps.$str864;
/* 14028 */             try {
/* 14029 */                 $ret = susp.child.resume();
/* 14030 */             } catch (err) {
/* 14031 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 14032 */                     Sk.execStart = Date.now()
/* 14033 */                 }
/* 14034 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 14035 */                     err = new Sk.builtin.ExternalError(err);
/* 14036 */                 }
/* 14037 */                 err.traceback.push({
/* 14038 */                     lineno: $currLineNo,
/* 14039 */                     colno: $currColNo,
/* 14040 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 14041 */                 });
/* 14042 */                 if ($exc.length > 0) {
/* 14043 */                     $err = err;
/* 14044 */                     Sk.err = $err;
/* 14045 */                     $blk = $exc.pop();
/* 14046 */                 } else {
/* 14047 */                     throw err;
/* 14048 */                 }
/* 14049 */             }
/* 14050 */         };
/* 14051 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 14052 */             var susp = new Sk.misceval.Suspension();
/* 14053 */             susp.child = $child;
/* 14054 */             susp.resume = function() {
/* 14055 */                 $scope845.$wakingSuspension = susp;
/* 14056 */                 return $scope845();
/* 14057 */             };
/* 14058 */             susp.data = susp.child.data;
/* 14059 */             susp.$blk = $blk;
/* 14060 */             susp.$loc = $loc;
/* 14061 */             susp.$gbl = $gbl;
/* 14062 */             susp.$exc = $exc;
/* 14063 */             susp.$err = $err;
/* 14064 */             susp.$postfinally = $postfinally;
/* 14065 */             susp.$filename = $filename;
/* 14066 */             susp.$lineno = $lineno;
/* 14067 */             susp.$colno = $colno;
/* 14068 */             susp.optional = susp.child.optional;
/* 14069 */             susp.$tmps = {
/* 14070 */                 "current": current,
/* 14071 */                 "self": self,
/* 14072 */                 "$lattr848": $lattr848,
/* 14073 */                 "$compareres849": $compareres849,
/* 14074 */                 "$str850": $str850,
/* 14075 */                 "$compareres854": $compareres854,
/* 14076 */                 "$lattr857": $lattr857,
/* 14077 */                 "$compareres858": $compareres858,
/* 14078 */                 "$str859": $str859,
/* 14079 */                 "$lattr862": $lattr862,
/* 14080 */                 "$compareres863": $compareres863,
/* 14081 */                 "$str864": $str864
/* 14082 */             };
/* 14083 */             return susp;
/* 14084 */         };
/* 14085 */         var $blk = 0,
/* 14086 */             $exc = [],
/* 14087 */             $loc = {},
/* 14088 */             $gbl = this,
/* 14089 */             $err = undefined,
/* 14090 */             $ret = undefined,
/* 14091 */             $postfinally = undefined,
/* 14092 */             $currLineNo = undefined,
/* 14093 */             $currColNo = undefined;
/* 14094 */         Sk.err = $err;
/* 14095 */         if (typeof Sk.execStart === 'undefined') {
/* 14096 */             Sk.execStart = Date.now()
/* 14097 */         }
/* 14098 */         if (typeof Sk.lastYield === 'undefined') {
/* 14099 */             Sk.lastYield = Date.now()
/* 14100 */         }
/* 14101 */         if ($scope845.$wakingSuspension !== undefined) {
/* 14102 */             $wakeFromSuspension();
/* 14103 */         } else {
/* 14104 */             Sk.builtin.pyCheckArgs("is_method", arguments, 1, 1, false, false);
/* 14105 */         }
/* 14106 */         while (true) {
/* 14107 */             try {
/* 14108 */                 var $dateNow = Date.now();
/* 14109 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 14110 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 14111 */                 }
/* 14112 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 14113 */                     var $susp = $saveSuspension({
/* 14114 */                         data: {
/* 14115 */                             type: 'Sk.yield'
/* 14116 */                         },
/* 14117 */                         resume: function() {}
/* 14118 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 14119 */                     $susp.$blk = $blk;
/* 14120 */                     $susp.optional = true;
/* 14121 */                     return $susp;
/* 14122 */                 }
/* 14123 */                 switch ($blk) {
/* 14124 */                 case 0:
/* 14125 */                     /* --- codeobj entry --- */
/* 14126 */                     if (self === undefined) {
/* 14127 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14128 */                     }
/* 14129 */ 
/* 14130 */ 
/* 14131 */                     //
/* 14132 */                     // line 438:
/* 14133 */                     //         """
/* 14134 */                     //         ^
/* 14135 */                     //
/* 14136 */                     Sk.currLineNo = 438;
/* 14137 */                     Sk.currColNo = 8;
/* 14138 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14139 */                     $currLineNo = 438;
/* 14140 */                     $currColNo = 8;
/* 14141 */                     var $str847 = new Sk.builtins['str']("\n        Checks if self is a method\n\n        Returns:\n            bool: True if I'm a FunctionDef, and if any of my parents are ClassDef.\n        ");
/* 14142 */ 
/* 14143 */                     //
/* 14144 */                     // line 445:
/* 14145 */                     //         if self.ast_name != "FunctionDef":
/* 14146 */                     //         ^
/* 14147 */                     //
/* 14148 */                     Sk.currLineNo = 445;
/* 14149 */                     Sk.currColNo = 8;
/* 14150 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14151 */                     $currLineNo = 445;
/* 14152 */                     $currColNo = 8;
/* 14153 */                     if (self === undefined) {
/* 14154 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14155 */                     }
/* 14156 */                     $ret = Sk.abstr.gattr(self, 'ast_name', true);
/* 14157 */                     $blk = 2; /* allowing case fallthrough */
/* 14158 */                 case 2:
/* 14159 */                     /* --- function return or resume suspension --- */
/* 14160 */                     if ($ret && $ret.$isSuspension) {
/* 14161 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 445, 11);
/* 14162 */                     }
/* 14163 */                     var $lattr848 = $ret;
/* 14164 */                     var $compareres849 = null;
/* 14165 */                     var $str850 = new Sk.builtins['str']('FunctionDef');
/* 14166 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr848, $str850, 'NotEq', true));
/* 14167 */                     $blk = 4; /* allowing case fallthrough */
/* 14168 */                 case 4:
/* 14169 */                     /* --- function return or resume suspension --- */
/* 14170 */                     if ($ret && $ret.$isSuspension) {
/* 14171 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 445, 11);
/* 14172 */                     }
/* 14173 */                     $compareres849 = $ret;
/* 14174 */                     var $jfalse851 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14175 */                     if ($jfalse851) { /*test failed */
/* 14176 */                         $blk = 3;
/* 14177 */                         continue;
/* 14178 */                     }
/* 14179 */                     $blk = 3; /* allowing case fallthrough */
/* 14180 */                 case 3:
/* 14181 */                     /* --- done --- */
/* 14182 */                     var $jfalse852 = ($compareres849 === false || !Sk.misceval.isTrue($compareres849));
/* 14183 */                     if ($jfalse852) { /*test failed */
/* 14184 */                         $blk = 1;
/* 14185 */                         continue;
/* 14186 */                     }
/* 14187 */ 
/* 14188 */                     //
/* 14189 */                     // line 446:
/* 14190 */                     //             return False
/* 14191 */                     //             ^
/* 14192 */                     //
/* 14193 */                     Sk.currLineNo = 446;
/* 14194 */                     Sk.currColNo = 12;
/* 14195 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14196 */                     $currLineNo = 446;
/* 14197 */                     $currColNo = 12;
/* 14198 */                     return Sk.builtin.bool.false$;
/* 14199 */                     $blk = 1; /* allowing case fallthrough */
/* 14200 */                 case 1:
/* 14201 */                     /* --- end of if --- */
/* 14202 */ 
/* 14203 */                     //
/* 14204 */                     // line 447:
/* 14205 */                     //         current = self.parent
/* 14206 */                     //         ^
/* 14207 */                     //
/* 14208 */                     Sk.currLineNo = 447;
/* 14209 */                     Sk.currColNo = 8;
/* 14210 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14211 */                     $currLineNo = 447;
/* 14212 */                     $currColNo = 8;
/* 14213 */                     if (self === undefined) {
/* 14214 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14215 */                     }
/* 14216 */                     $ret = Sk.abstr.gattr(self, 'parent', true);
/* 14217 */                     $blk = 5; /* allowing case fallthrough */
/* 14218 */                 case 5:
/* 14219 */                     /* --- function return or resume suspension --- */
/* 14220 */                     if ($ret && $ret.$isSuspension) {
/* 14221 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 447, 18);
/* 14222 */                     }
/* 14223 */                     var $lattr853 = $ret;
/* 14224 */                     current = $lattr853;
/* 14225 */ 
/* 14226 */                     //
/* 14227 */                     // line 448:
/* 14228 */                     //         while current is not None:
/* 14229 */                     //         ^
/* 14230 */                     //
/* 14231 */                     Sk.currLineNo = 448;
/* 14232 */                     Sk.currColNo = 8;
/* 14233 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14234 */                     $currLineNo = 448;
/* 14235 */                     $currColNo = 8;
/* 14236 */                     $blk = 6; /* allowing case fallthrough */
/* 14237 */                 case 6:
/* 14238 */                     /* --- while test --- */
/* 14239 */ 
/* 14240 */                     //
/* 14241 */                     // line 448:
/* 14242 */                     //         while current is not None:
/* 14243 */                     //         ^
/* 14244 */                     //
/* 14245 */                     Sk.currLineNo = 448;
/* 14246 */                     Sk.currColNo = 8;
/* 14247 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14248 */                     $currLineNo = 448;
/* 14249 */                     $currColNo = 8;
/* 14250 */                     if (current === undefined) {
/* 14251 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/* 14252 */                     }
/* 14253 */                     var $compareres854 = null;
/* 14254 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(current, Sk.builtin.none.none$, 'IsNot', true));
/* 14255 */                     $blk = 10; /* allowing case fallthrough */
/* 14256 */                 case 10:
/* 14257 */                     /* --- function return or resume suspension --- */
/* 14258 */                     if ($ret && $ret.$isSuspension) {
/* 14259 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 448, 14);
/* 14260 */                     }
/* 14261 */                     $compareres854 = $ret;
/* 14262 */                     var $jfalse855 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14263 */                     if ($jfalse855) { /*test failed */
/* 14264 */                         $blk = 9;
/* 14265 */                         continue;
/* 14266 */                     }
/* 14267 */                     $blk = 9; /* allowing case fallthrough */
/* 14268 */                 case 9:
/* 14269 */                     /* --- done --- */
/* 14270 */                     var $jfalse856 = ($compareres854 === false || !Sk.misceval.isTrue($compareres854));
/* 14271 */                     if ($jfalse856) { /*test failed */
/* 14272 */                         $blk = 7;
/* 14273 */                         continue;
/* 14274 */                     }
/* 14275 */                     $blk = 8; /* allowing case fallthrough */
/* 14276 */                 case 8:
/* 14277 */                     /* --- while body --- */
/* 14278 */ 
/* 14279 */                     //
/* 14280 */                     // line 449:
/* 14281 */                     //             if current.ast_name == "ClassDef":
/* 14282 */                     //             ^
/* 14283 */                     //
/* 14284 */                     Sk.currLineNo = 449;
/* 14285 */                     Sk.currColNo = 12;
/* 14286 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14287 */                     $currLineNo = 449;
/* 14288 */                     $currColNo = 12;
/* 14289 */                     if (current === undefined) {
/* 14290 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/* 14291 */                     }
/* 14292 */                     $ret = Sk.abstr.gattr(current, 'ast_name', true);
/* 14293 */                     $blk = 13; /* allowing case fallthrough */
/* 14294 */                 case 13:
/* 14295 */                     /* --- function return or resume suspension --- */
/* 14296 */                     if ($ret && $ret.$isSuspension) {
/* 14297 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 449, 15);
/* 14298 */                     }
/* 14299 */                     var $lattr857 = $ret;
/* 14300 */                     var $compareres858 = null;
/* 14301 */                     var $str859 = new Sk.builtins['str']('ClassDef');
/* 14302 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr857, $str859, 'Eq', true));
/* 14303 */                     $blk = 15; /* allowing case fallthrough */
/* 14304 */                 case 15:
/* 14305 */                     /* --- function return or resume suspension --- */
/* 14306 */                     if ($ret && $ret.$isSuspension) {
/* 14307 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 449, 15);
/* 14308 */                     }
/* 14309 */                     $compareres858 = $ret;
/* 14310 */                     var $jfalse860 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14311 */                     if ($jfalse860) { /*test failed */
/* 14312 */                         $blk = 14;
/* 14313 */                         continue;
/* 14314 */                     }
/* 14315 */                     $blk = 14; /* allowing case fallthrough */
/* 14316 */                 case 14:
/* 14317 */                     /* --- done --- */
/* 14318 */                     var $jfalse861 = ($compareres858 === false || !Sk.misceval.isTrue($compareres858));
/* 14319 */                     if ($jfalse861) { /*test failed */
/* 14320 */                         $blk = 12;
/* 14321 */                         continue;
/* 14322 */                     }
/* 14323 */ 
/* 14324 */                     //
/* 14325 */                     // line 450:
/* 14326 */                     //                 return True
/* 14327 */                     //                 ^
/* 14328 */                     //
/* 14329 */                     Sk.currLineNo = 450;
/* 14330 */                     Sk.currColNo = 16;
/* 14331 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14332 */                     $currLineNo = 450;
/* 14333 */                     $currColNo = 16;
/* 14334 */                     return Sk.builtin.bool.true$;
/* 14335 */                     $blk = 11; /* allowing case fallthrough */
/* 14336 */                 case 11:
/* 14337 */                     /* --- end of if --- */
/* 14338 */ 
/* 14339 */                     //
/* 14340 */                     // line 454:
/* 14341 */                     //             current = current.parent
/* 14342 */                     //             ^
/* 14343 */                     //
/* 14344 */                     Sk.currLineNo = 454;
/* 14345 */                     Sk.currColNo = 12;
/* 14346 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14347 */                     $currLineNo = 454;
/* 14348 */                     $currColNo = 12;
/* 14349 */                     if (current === undefined) {
/* 14350 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/* 14351 */                     }
/* 14352 */                     $ret = Sk.abstr.gattr(current, 'parent', true);
/* 14353 */                     $blk = 20; /* allowing case fallthrough */
/* 14354 */                 case 20:
/* 14355 */                     /* --- function return or resume suspension --- */
/* 14356 */                     if ($ret && $ret.$isSuspension) {
/* 14357 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 454, 22);
/* 14358 */                     }
/* 14359 */                     var $lattr867 = $ret;
/* 14360 */                     current = $lattr867;
/* 14361 */                     $blk = 6; /* jump */
/* 14362 */                     continue;
/* 14363 */                 case 7:
/* 14364 */                     /* --- after while --- */
/* 14365 */ 
/* 14366 */                     //
/* 14367 */                     // line 455:
/* 14368 */                     //         return False
/* 14369 */                     //         ^
/* 14370 */                     //
/* 14371 */                     Sk.currLineNo = 455;
/* 14372 */                     Sk.currColNo = 8;
/* 14373 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14374 */                     $currLineNo = 455;
/* 14375 */                     $currColNo = 8;
/* 14376 */                     return Sk.builtin.bool.false$;
/* 14377 */                     return Sk.builtin.none.none$;
/* 14378 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 14379 */                 case 12:
/* 14380 */                     /* --- next branch of if --- */
/* 14381 */ 
/* 14382 */                     //
/* 14383 */                     // line 452:
/* 14384 */                     //             elif current.ast_name == "FunctionDef":
/* 14385 */                     //                  ^
/* 14386 */                     //
/* 14387 */                     Sk.currLineNo = 452;
/* 14388 */                     Sk.currColNo = 17;
/* 14389 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14390 */                     $currLineNo = 452;
/* 14391 */                     $currColNo = 17;
/* 14392 */                     if (current === undefined) {
/* 14393 */                         throw new Sk.builtin.UnboundLocalError('local variable \'current\' referenced before assignment');
/* 14394 */                     }
/* 14395 */                     $ret = Sk.abstr.gattr(current, 'ast_name', true);
/* 14396 */                     $blk = 17; /* allowing case fallthrough */
/* 14397 */                 case 17:
/* 14398 */                     /* --- function return or resume suspension --- */
/* 14399 */                     if ($ret && $ret.$isSuspension) {
/* 14400 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 452, 17);
/* 14401 */                     }
/* 14402 */                     var $lattr862 = $ret;
/* 14403 */                     var $compareres863 = null;
/* 14404 */                     var $str864 = new Sk.builtins['str']('FunctionDef');
/* 14405 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr862, $str864, 'Eq', true));
/* 14406 */                     $blk = 19; /* allowing case fallthrough */
/* 14407 */                 case 19:
/* 14408 */                     /* --- function return or resume suspension --- */
/* 14409 */                     if ($ret && $ret.$isSuspension) {
/* 14410 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 452, 17);
/* 14411 */                     }
/* 14412 */                     $compareres863 = $ret;
/* 14413 */                     var $jfalse865 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14414 */                     if ($jfalse865) { /*test failed */
/* 14415 */                         $blk = 18;
/* 14416 */                         continue;
/* 14417 */                     }
/* 14418 */                     $blk = 18; /* allowing case fallthrough */
/* 14419 */                 case 18:
/* 14420 */                     /* --- done --- */
/* 14421 */                     var $jfalse866 = ($compareres863 === false || !Sk.misceval.isTrue($compareres863));
/* 14422 */                     if ($jfalse866) { /*test failed */
/* 14423 */                         $blk = 16;
/* 14424 */                         continue;
/* 14425 */                     }
/* 14426 */ 
/* 14427 */                     //
/* 14428 */                     // line 453:
/* 14429 */                     //                 return False
/* 14430 */                     //                 ^
/* 14431 */                     //
/* 14432 */                     Sk.currLineNo = 453;
/* 14433 */                     Sk.currColNo = 16;
/* 14434 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14435 */                     $currLineNo = 453;
/* 14436 */                     $currColNo = 16;
/* 14437 */                     return Sk.builtin.bool.false$;
/* 14438 */                     $blk = 16; /* allowing case fallthrough */
/* 14439 */                 case 16:
/* 14440 */                     /* --- end of if --- */
/* 14441 */                     $blk = 11; /* jump */
/* 14442 */                     continue;
/* 14443 */                 }
/* 14444 */             } catch (err) {
/* 14445 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 14446 */                     Sk.execStart = Date.now()
/* 14447 */                 }
/* 14448 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 14449 */                     err = new Sk.builtin.ExternalError(err);
/* 14450 */                 }
/* 14451 */                 err.traceback.push({
/* 14452 */                     lineno: $currLineNo,
/* 14453 */                     colno: $currColNo,
/* 14454 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 14455 */                 });
/* 14456 */                 if ($exc.length > 0) {
/* 14457 */                     $err = err;
/* 14458 */                     Sk.err = $err;
/* 14459 */                     $blk = $exc.pop();
/* 14460 */                     continue;
/* 14461 */                 } else {
/* 14462 */                     throw err;
/* 14463 */                 }
/* 14464 */             }
/* 14465 */         }
/* 14466 */     });
/* 14467 */     var $scope869 = (function $get_data_state870$(self) {
/* 14468 */         var self, self, self, self, $lattr872, $compareres873, $str874, $lattr877, $str878, $lattr877, $str878, $lsubscr879, $str880, $lattr877, $str878, $lsubscr879, $str880, $lsubscr881, $lattr877, $str878, $lsubscr879, $str880, $lsubscr881, $lattr882;
/* 14469 */         var $wakeFromSuspension = function() {
/* 14470 */             var susp = $scope869.$wakingSuspension;
/* 14471 */             delete $scope869.$wakingSuspension;
/* 14472 */             $blk = susp.$blk;
/* 14473 */             $loc = susp.$loc;
/* 14474 */             $gbl = susp.$gbl;
/* 14475 */             $exc = susp.$exc;
/* 14476 */             $err = susp.$err;
/* 14477 */             Sk.err = $err;
/* 14478 */             $postfinally = susp.$postfinally;
/* 14479 */             $currLineNo = susp.$lineno;
/* 14480 */             $currColNo = susp.$colno;
/* 14481 */             Sk.lastYield = Date.now();
/* 14482 */             self = susp.$tmps.self;
/* 14483 */             $lattr872 = susp.$tmps.$lattr872;
/* 14484 */             $compareres873 = susp.$tmps.$compareres873;
/* 14485 */             $str874 = susp.$tmps.$str874;
/* 14486 */             $lattr877 = susp.$tmps.$lattr877;
/* 14487 */             $str878 = susp.$tmps.$str878;
/* 14488 */             $lsubscr879 = susp.$tmps.$lsubscr879;
/* 14489 */             $str880 = susp.$tmps.$str880;
/* 14490 */             $lsubscr881 = susp.$tmps.$lsubscr881;
/* 14491 */             $lattr882 = susp.$tmps.$lattr882;
/* 14492 */             try {
/* 14493 */                 $ret = susp.child.resume();
/* 14494 */             } catch (err) {
/* 14495 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 14496 */                     Sk.execStart = Date.now()
/* 14497 */                 }
/* 14498 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 14499 */                     err = new Sk.builtin.ExternalError(err);
/* 14500 */                 }
/* 14501 */                 err.traceback.push({
/* 14502 */                     lineno: $currLineNo,
/* 14503 */                     colno: $currColNo,
/* 14504 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 14505 */                 });
/* 14506 */                 if ($exc.length > 0) {
/* 14507 */                     $err = err;
/* 14508 */                     Sk.err = $err;
/* 14509 */                     $blk = $exc.pop();
/* 14510 */                 } else {
/* 14511 */                     throw err;
/* 14512 */                 }
/* 14513 */             }
/* 14514 */         };
/* 14515 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 14516 */             var susp = new Sk.misceval.Suspension();
/* 14517 */             susp.child = $child;
/* 14518 */             susp.resume = function() {
/* 14519 */                 $scope869.$wakingSuspension = susp;
/* 14520 */                 return $scope869();
/* 14521 */             };
/* 14522 */             susp.data = susp.child.data;
/* 14523 */             susp.$blk = $blk;
/* 14524 */             susp.$loc = $loc;
/* 14525 */             susp.$gbl = $gbl;
/* 14526 */             susp.$exc = $exc;
/* 14527 */             susp.$err = $err;
/* 14528 */             susp.$postfinally = $postfinally;
/* 14529 */             susp.$filename = $filename;
/* 14530 */             susp.$lineno = $lineno;
/* 14531 */             susp.$colno = $colno;
/* 14532 */             susp.optional = susp.child.optional;
/* 14533 */             susp.$tmps = {
/* 14534 */                 "self": self,
/* 14535 */                 "$lattr872": $lattr872,
/* 14536 */                 "$compareres873": $compareres873,
/* 14537 */                 "$str874": $str874,
/* 14538 */                 "$lattr877": $lattr877,
/* 14539 */                 "$str878": $str878,
/* 14540 */                 "$lsubscr879": $lsubscr879,
/* 14541 */                 "$str880": $str880,
/* 14542 */                 "$lsubscr881": $lsubscr881,
/* 14543 */                 "$lattr882": $lattr882
/* 14544 */             };
/* 14545 */             return susp;
/* 14546 */         };
/* 14547 */         var $blk = 0,
/* 14548 */             $exc = [],
/* 14549 */             $loc = {},
/* 14550 */             $gbl = this,
/* 14551 */             $err = undefined,
/* 14552 */             $ret = undefined,
/* 14553 */             $postfinally = undefined,
/* 14554 */             $currLineNo = undefined,
/* 14555 */             $currColNo = undefined;
/* 14556 */         Sk.err = $err;
/* 14557 */         if (typeof Sk.execStart === 'undefined') {
/* 14558 */             Sk.execStart = Date.now()
/* 14559 */         }
/* 14560 */         if (typeof Sk.lastYield === 'undefined') {
/* 14561 */             Sk.lastYield = Date.now()
/* 14562 */         }
/* 14563 */         if ($scope869.$wakingSuspension !== undefined) {
/* 14564 */             $wakeFromSuspension();
/* 14565 */         } else {
/* 14566 */             Sk.builtin.pyCheckArgs("get_data_state", arguments, 1, 1, false, false);
/* 14567 */         }
/* 14568 */         while (true) {
/* 14569 */             try {
/* 14570 */                 var $dateNow = Date.now();
/* 14571 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 14572 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 14573 */                 }
/* 14574 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 14575 */                     var $susp = $saveSuspension({
/* 14576 */                         data: {
/* 14577 */                             type: 'Sk.yield'
/* 14578 */                         },
/* 14579 */                         resume: function() {}
/* 14580 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 14581 */                     $susp.$blk = $blk;
/* 14582 */                     $susp.optional = true;
/* 14583 */                     return $susp;
/* 14584 */                 }
/* 14585 */                 switch ($blk) {
/* 14586 */                 case 0:
/* 14587 */                     /* --- codeobj entry --- */
/* 14588 */                     if (self === undefined) {
/* 14589 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14590 */                     }
/* 14591 */ 
/* 14592 */ 
/* 14593 */                     //
/* 14594 */                     // line 458:
/* 14595 */                     //         """
/* 14596 */                     //         ^
/* 14597 */                     //
/* 14598 */                     Sk.currLineNo = 458;
/* 14599 */                     Sk.currColNo = 8;
/* 14600 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14601 */                     $currLineNo = 458;
/* 14602 */                     $currColNo = 8;
/* 14603 */                     var $str871 = new Sk.builtins['str']('\n        Gets the data_state object of self\n\n        Returns:\n            data_state or None: returns data_state if self is a name and exists, otherwise None\n        ');
/* 14604 */ 
/* 14605 */                     //
/* 14606 */                     // line 464:
/* 14607 */                     //         if self.ast_name != "Name":
/* 14608 */                     //         ^
/* 14609 */                     //
/* 14610 */                     Sk.currLineNo = 464;
/* 14611 */                     Sk.currColNo = 8;
/* 14612 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14613 */                     $currLineNo = 464;
/* 14614 */                     $currColNo = 8;
/* 14615 */                     if (self === undefined) {
/* 14616 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14617 */                     }
/* 14618 */                     $ret = Sk.abstr.gattr(self, 'ast_name', true);
/* 14619 */                     $blk = 2; /* allowing case fallthrough */
/* 14620 */                 case 2:
/* 14621 */                     /* --- function return or resume suspension --- */
/* 14622 */                     if ($ret && $ret.$isSuspension) {
/* 14623 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 464, 11);
/* 14624 */                     }
/* 14625 */                     var $lattr872 = $ret;
/* 14626 */                     var $compareres873 = null;
/* 14627 */                     var $str874 = new Sk.builtins['str']('Name');
/* 14628 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr872, $str874, 'NotEq', true));
/* 14629 */                     $blk = 4; /* allowing case fallthrough */
/* 14630 */                 case 4:
/* 14631 */                     /* --- function return or resume suspension --- */
/* 14632 */                     if ($ret && $ret.$isSuspension) {
/* 14633 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 464, 11);
/* 14634 */                     }
/* 14635 */                     $compareres873 = $ret;
/* 14636 */                     var $jfalse875 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14637 */                     if ($jfalse875) { /*test failed */
/* 14638 */                         $blk = 3;
/* 14639 */                         continue;
/* 14640 */                     }
/* 14641 */                     $blk = 3; /* allowing case fallthrough */
/* 14642 */                 case 3:
/* 14643 */                     /* --- done --- */
/* 14644 */                     var $jfalse876 = ($compareres873 === false || !Sk.misceval.isTrue($compareres873));
/* 14645 */                     if ($jfalse876) { /*test failed */
/* 14646 */                         $blk = 1;
/* 14647 */                         continue;
/* 14648 */                     }
/* 14649 */ 
/* 14650 */                     //
/* 14651 */                     // line 465:
/* 14652 */                     //             return None
/* 14653 */                     //             ^
/* 14654 */                     //
/* 14655 */                     Sk.currLineNo = 465;
/* 14656 */                     Sk.currColNo = 12;
/* 14657 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14658 */                     $currLineNo = 465;
/* 14659 */                     $currColNo = 12;
/* 14660 */                     return Sk.builtin.none.none$;
/* 14661 */                     $blk = 1; /* allowing case fallthrough */
/* 14662 */                 case 1:
/* 14663 */                     /* --- end of if --- */
/* 14664 */ 
/* 14665 */                     //
/* 14666 */                     // line 466:
/* 14667 */                     //         try:
/* 14668 */                     //         ^
/* 14669 */                     //
/* 14670 */                     Sk.currLineNo = 466;
/* 14671 */                     Sk.currColNo = 8;
/* 14672 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14673 */                     $currLineNo = 466;
/* 14674 */                     $currColNo = 8;
/* 14675 */                     $exc.push(5);
/* 14676 */ 
/* 14677 */                     //
/* 14678 */                     // line 467:
/* 14679 */                     //             return self.report['tifa']["top_level_variables"][self.id]
/* 14680 */                     //             ^
/* 14681 */                     //
/* 14682 */                     Sk.currLineNo = 467;
/* 14683 */                     Sk.currColNo = 12;
/* 14684 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14685 */                     $currLineNo = 467;
/* 14686 */                     $currColNo = 12;
/* 14687 */                     if (self === undefined) {
/* 14688 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14689 */                     }
/* 14690 */                     $ret = Sk.abstr.gattr(self, 'report', true);
/* 14691 */                     $blk = 9; /* allowing case fallthrough */
/* 14692 */                 case 9:
/* 14693 */                     /* --- function return or resume suspension --- */
/* 14694 */                     if ($ret && $ret.$isSuspension) {
/* 14695 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 467, 19);
/* 14696 */                     }
/* 14697 */                     var $lattr877 = $ret;
/* 14698 */                     var $str878 = new Sk.builtins['str']('tifa');
/* 14699 */                     $ret = Sk.abstr.objectGetItem($lattr877, $str878, true);
/* 14700 */                     $blk = 10; /* allowing case fallthrough */
/* 14701 */                 case 10:
/* 14702 */                     /* --- function return or resume suspension --- */
/* 14703 */                     if ($ret && $ret.$isSuspension) {
/* 14704 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 14705 */                     }
/* 14706 */                     var $lsubscr879 = $ret;
/* 14707 */                     var $str880 = new Sk.builtins['str']('top_level_variables');
/* 14708 */                     $ret = Sk.abstr.objectGetItem($lsubscr879, $str880, true);
/* 14709 */                     $blk = 11; /* allowing case fallthrough */
/* 14710 */                 case 11:
/* 14711 */                     /* --- function return or resume suspension --- */
/* 14712 */                     if ($ret && $ret.$isSuspension) {
/* 14713 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 14714 */                     }
/* 14715 */                     var $lsubscr881 = $ret;
/* 14716 */                     if (self === undefined) {
/* 14717 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14718 */                     }
/* 14719 */                     $ret = Sk.abstr.gattr(self, 'id', true);
/* 14720 */                     $blk = 12; /* allowing case fallthrough */
/* 14721 */                 case 12:
/* 14722 */                     /* --- function return or resume suspension --- */
/* 14723 */                     if ($ret && $ret.$isSuspension) {
/* 14724 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 467, 62);
/* 14725 */                     }
/* 14726 */                     var $lattr882 = $ret;
/* 14727 */                     $ret = Sk.abstr.objectGetItem($lsubscr881, $lattr882, true);
/* 14728 */                     $blk = 13; /* allowing case fallthrough */
/* 14729 */                 case 13:
/* 14730 */                     /* --- function return or resume suspension --- */
/* 14731 */                     if ($ret && $ret.$isSuspension) {
/* 14732 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 14733 */                     }
/* 14734 */                     var $lsubscr883 = $ret;
/* 14735 */                     return $lsubscr883;
/* 14736 */                     $exc.pop();
/* 14737 */                     $blk = 7; /* allowing case fallthrough */
/* 14738 */                 case 7:
/* 14739 */                     /* --- orelse --- */
/* 14740 */                     $blk = 8; /* allowing case fallthrough */
/* 14741 */                 case 8:
/* 14742 */                     /* --- end --- */
/* 14743 */                     return Sk.builtin.none.none$;
/* 14744 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 14745 */                 case 5:
/* 14746 */                     /* --- except_0_ --- */
/* 14747 */                     var $loadgbl884 = Sk.misceval.loadname('KeyError', $gbl);
/* 14748 */                     var $instance885 = Sk.misceval.isTrue(Sk.builtin.isinstance($err, $loadgbl884));
/* 14749 */                     var $jfalse886 = ($instance885 === false || !Sk.misceval.isTrue($instance885));
/* 14750 */                     if ($jfalse886) { /*test failed */
/* 14751 */                         $blk = 6;
/* 14752 */                         continue;
/* 14753 */                     }
/* 14754 */ 
/* 14755 */                     //
/* 14756 */                     // line 469:
/* 14757 */                     //             return None
/* 14758 */                     //             ^
/* 14759 */                     //
/* 14760 */                     Sk.currLineNo = 469;
/* 14761 */                     Sk.currColNo = 12;
/* 14762 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14763 */                     $currLineNo = 469;
/* 14764 */                     $currColNo = 12;
/* 14765 */                     return Sk.builtin.none.none$;
/* 14766 */                     $blk = 8; /* jump */
/* 14767 */                     continue;
/* 14768 */                 case 6:
/* 14769 */                     /* --- unhandled --- */
/* 14770 */                     throw $err;
/* 14771 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 14772 */                 }
/* 14773 */             } catch (err) {
/* 14774 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 14775 */                     Sk.execStart = Date.now()
/* 14776 */                 }
/* 14777 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 14778 */                     err = new Sk.builtin.ExternalError(err);
/* 14779 */                 }
/* 14780 */                 err.traceback.push({
/* 14781 */                     lineno: $currLineNo,
/* 14782 */                     colno: $currColNo,
/* 14783 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 14784 */                 });
/* 14785 */                 if ($exc.length > 0) {
/* 14786 */                     $err = err;
/* 14787 */                     Sk.err = $err;
/* 14788 */                     $blk = $exc.pop();
/* 14789 */                     continue;
/* 14790 */                 } else {
/* 14791 */                     throw err;
/* 14792 */                 }
/* 14793 */             }
/* 14794 */         }
/* 14795 */     });
/* 14796 */     var $scope888 = (function $get_data_type889$(self) {
/* 14797 */         var state; /* locals */
/* 14798 */         var self, self, state, state, state, $lattr891, $compareres893;
/* 14799 */         var $wakeFromSuspension = function() {
/* 14800 */             var susp = $scope888.$wakingSuspension;
/* 14801 */             delete $scope888.$wakingSuspension;
/* 14802 */             $blk = susp.$blk;
/* 14803 */             $loc = susp.$loc;
/* 14804 */             $gbl = susp.$gbl;
/* 14805 */             $exc = susp.$exc;
/* 14806 */             $err = susp.$err;
/* 14807 */             Sk.err = $err;
/* 14808 */             $postfinally = susp.$postfinally;
/* 14809 */             $currLineNo = susp.$lineno;
/* 14810 */             $currColNo = susp.$colno;
/* 14811 */             Sk.lastYield = Date.now();
/* 14812 */             self = susp.$tmps.self;
/* 14813 */             state = susp.$tmps.state;
/* 14814 */             $lattr891 = susp.$tmps.$lattr891;
/* 14815 */             $compareres893 = susp.$tmps.$compareres893;
/* 14816 */             try {
/* 14817 */                 $ret = susp.child.resume();
/* 14818 */             } catch (err) {
/* 14819 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 14820 */                     Sk.execStart = Date.now()
/* 14821 */                 }
/* 14822 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 14823 */                     err = new Sk.builtin.ExternalError(err);
/* 14824 */                 }
/* 14825 */                 err.traceback.push({
/* 14826 */                     lineno: $currLineNo,
/* 14827 */                     colno: $currColNo,
/* 14828 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 14829 */                 });
/* 14830 */                 if ($exc.length > 0) {
/* 14831 */                     $err = err;
/* 14832 */                     Sk.err = $err;
/* 14833 */                     $blk = $exc.pop();
/* 14834 */                 } else {
/* 14835 */                     throw err;
/* 14836 */                 }
/* 14837 */             }
/* 14838 */         };
/* 14839 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 14840 */             var susp = new Sk.misceval.Suspension();
/* 14841 */             susp.child = $child;
/* 14842 */             susp.resume = function() {
/* 14843 */                 $scope888.$wakingSuspension = susp;
/* 14844 */                 return $scope888();
/* 14845 */             };
/* 14846 */             susp.data = susp.child.data;
/* 14847 */             susp.$blk = $blk;
/* 14848 */             susp.$loc = $loc;
/* 14849 */             susp.$gbl = $gbl;
/* 14850 */             susp.$exc = $exc;
/* 14851 */             susp.$err = $err;
/* 14852 */             susp.$postfinally = $postfinally;
/* 14853 */             susp.$filename = $filename;
/* 14854 */             susp.$lineno = $lineno;
/* 14855 */             susp.$colno = $colno;
/* 14856 */             susp.optional = susp.child.optional;
/* 14857 */             susp.$tmps = {
/* 14858 */                 "self": self,
/* 14859 */                 "state": state,
/* 14860 */                 "$lattr891": $lattr891,
/* 14861 */                 "$compareres893": $compareres893
/* 14862 */             };
/* 14863 */             return susp;
/* 14864 */         };
/* 14865 */         var $blk = 0,
/* 14866 */             $exc = [],
/* 14867 */             $loc = {},
/* 14868 */             $gbl = this,
/* 14869 */             $err = undefined,
/* 14870 */             $ret = undefined,
/* 14871 */             $postfinally = undefined,
/* 14872 */             $currLineNo = undefined,
/* 14873 */             $currColNo = undefined;
/* 14874 */         Sk.err = $err;
/* 14875 */         if (typeof Sk.execStart === 'undefined') {
/* 14876 */             Sk.execStart = Date.now()
/* 14877 */         }
/* 14878 */         if (typeof Sk.lastYield === 'undefined') {
/* 14879 */             Sk.lastYield = Date.now()
/* 14880 */         }
/* 14881 */         if ($scope888.$wakingSuspension !== undefined) {
/* 14882 */             $wakeFromSuspension();
/* 14883 */         } else {
/* 14884 */             Sk.builtin.pyCheckArgs("get_data_type", arguments, 1, 1, false, false);
/* 14885 */         }
/* 14886 */         while (true) {
/* 14887 */             try {
/* 14888 */                 var $dateNow = Date.now();
/* 14889 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 14890 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 14891 */                 }
/* 14892 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 14893 */                     var $susp = $saveSuspension({
/* 14894 */                         data: {
/* 14895 */                             type: 'Sk.yield'
/* 14896 */                         },
/* 14897 */                         resume: function() {}
/* 14898 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 14899 */                     $susp.$blk = $blk;
/* 14900 */                     $susp.optional = true;
/* 14901 */                     return $susp;
/* 14902 */                 }
/* 14903 */                 switch ($blk) {
/* 14904 */                 case 0:
/* 14905 */                     /* --- codeobj entry --- */
/* 14906 */                     if (self === undefined) {
/* 14907 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14908 */                     }
/* 14909 */ 
/* 14910 */ 
/* 14911 */                     //
/* 14912 */                     // line 472:
/* 14913 */                     //         """
/* 14914 */                     //         ^
/* 14915 */                     //
/* 14916 */                     Sk.currLineNo = 472;
/* 14917 */                     Sk.currColNo = 8;
/* 14918 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14919 */                     $currLineNo = 472;
/* 14920 */                     $currColNo = 8;
/* 14921 */                     var $str890 = new Sk.builtins['str']("\n\n        Returns:\n            type of the variable associated with this node if it's a name node, otherwise None.\n        ");
/* 14922 */ 
/* 14923 */                     //
/* 14924 */                     // line 477:
/* 14925 */                     //         state = self.get_data_state()
/* 14926 */                     //         ^
/* 14927 */                     //
/* 14928 */                     Sk.currLineNo = 477;
/* 14929 */                     Sk.currColNo = 8;
/* 14930 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14931 */                     $currLineNo = 477;
/* 14932 */                     $currColNo = 8;
/* 14933 */                     if (self === undefined) {
/* 14934 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 14935 */                     }
/* 14936 */                     $ret = Sk.abstr.gattr(self, 'get_data_state', true);
/* 14937 */                     $blk = 1; /* allowing case fallthrough */
/* 14938 */                 case 1:
/* 14939 */                     /* --- function return or resume suspension --- */
/* 14940 */                     if ($ret && $ret.$isSuspension) {
/* 14941 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 477, 16);
/* 14942 */                     }
/* 14943 */                     var $lattr891 = $ret;
/* 14944 */                     $ret;
/* 14945 */                     $ret = Sk.misceval.callsimOrSuspend($lattr891);
/* 14946 */                     $blk = 2; /* allowing case fallthrough */
/* 14947 */                 case 2:
/* 14948 */                     /* --- function return or resume suspension --- */
/* 14949 */                     if ($ret && $ret.$isSuspension) {
/* 14950 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 477, 16);
/* 14951 */                     }
/* 14952 */                     var $call892 = $ret;
/* 14953 */ 
/* 14954 */                     //
/* 14955 */                     // line 477:
/* 14956 */                     //         state = self.get_data_state()
/* 14957 */                     //                 ^
/* 14958 */                     //
/* 14959 */                     Sk.currLineNo = 477;
/* 14960 */                     Sk.currColNo = 16;
/* 14961 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14962 */                     $currLineNo = 477;
/* 14963 */                     $currColNo = 16;
/* 14964 */                     state = $call892;
/* 14965 */ 
/* 14966 */                     //
/* 14967 */                     // line 478:
/* 14968 */                     //         if state is None:
/* 14969 */                     //         ^
/* 14970 */                     //
/* 14971 */                     Sk.currLineNo = 478;
/* 14972 */                     Sk.currColNo = 8;
/* 14973 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 14974 */                     $currLineNo = 478;
/* 14975 */                     $currColNo = 8;
/* 14976 */                     if (state === undefined) {
/* 14977 */                         throw new Sk.builtin.UnboundLocalError('local variable \'state\' referenced before assignment');
/* 14978 */                     }
/* 14979 */                     var $compareres893 = null;
/* 14980 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(state, Sk.builtin.none.none$, 'Is', true));
/* 14981 */                     $blk = 6; /* allowing case fallthrough */
/* 14982 */                 case 6:
/* 14983 */                     /* --- function return or resume suspension --- */
/* 14984 */                     if ($ret && $ret.$isSuspension) {
/* 14985 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 478, 11);
/* 14986 */                     }
/* 14987 */                     $compareres893 = $ret;
/* 14988 */                     var $jfalse894 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 14989 */                     if ($jfalse894) { /*test failed */
/* 14990 */                         $blk = 5;
/* 14991 */                         continue;
/* 14992 */                     }
/* 14993 */                     $blk = 5; /* allowing case fallthrough */
/* 14994 */                 case 5:
/* 14995 */                     /* --- done --- */
/* 14996 */                     var $jfalse895 = ($compareres893 === false || !Sk.misceval.isTrue($compareres893));
/* 14997 */                     if ($jfalse895) { /*test failed */
/* 14998 */                         $blk = 4;
/* 14999 */                         continue;
/* 15000 */                     }
/* 15001 */ 
/* 15002 */                     //
/* 15003 */                     // line 479:
/* 15004 */                     //             return None
/* 15005 */                     //             ^
/* 15006 */                     //
/* 15007 */                     Sk.currLineNo = 479;
/* 15008 */                     Sk.currColNo = 12;
/* 15009 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15010 */                     $currLineNo = 479;
/* 15011 */                     $currColNo = 12;
/* 15012 */                     return Sk.builtin.none.none$;
/* 15013 */                     $blk = 3; /* allowing case fallthrough */
/* 15014 */                 case 3:
/* 15015 */                     /* --- end of if --- */
/* 15016 */                     return Sk.builtin.none.none$;
/* 15017 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 15018 */                 case 4:
/* 15019 */                     /* --- next branch of if --- */
/* 15020 */ 
/* 15021 */                     //
/* 15022 */                     // line 481:
/* 15023 */                     //             return state.type
/* 15024 */                     //             ^
/* 15025 */                     //
/* 15026 */                     Sk.currLineNo = 481;
/* 15027 */                     Sk.currColNo = 12;
/* 15028 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15029 */                     $currLineNo = 481;
/* 15030 */                     $currColNo = 12;
/* 15031 */                     if (state === undefined) {
/* 15032 */                         throw new Sk.builtin.UnboundLocalError('local variable \'state\' referenced before assignment');
/* 15033 */                     }
/* 15034 */                     $ret = Sk.abstr.gattr(state, 'type', true);
/* 15035 */                     $blk = 7; /* allowing case fallthrough */
/* 15036 */                 case 7:
/* 15037 */                     /* --- function return or resume suspension --- */
/* 15038 */                     if ($ret && $ret.$isSuspension) {
/* 15039 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 481, 19);
/* 15040 */                     }
/* 15041 */                     var $lattr896 = $ret;
/* 15042 */                     return $lattr896;
/* 15043 */                     $blk = 3; /* jump */
/* 15044 */                     continue;
/* 15045 */                 }
/* 15046 */             } catch (err) {
/* 15047 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 15048 */                     Sk.execStart = Date.now()
/* 15049 */                 }
/* 15050 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 15051 */                     err = new Sk.builtin.ExternalError(err);
/* 15052 */                 }
/* 15053 */                 err.traceback.push({
/* 15054 */                     lineno: $currLineNo,
/* 15055 */                     colno: $currColNo,
/* 15056 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 15057 */                 });
/* 15058 */                 if ($exc.length > 0) {
/* 15059 */                     $err = err;
/* 15060 */                     Sk.err = $err;
/* 15061 */                     $blk = $exc.pop();
/* 15062 */                     continue;
/* 15063 */                 } else {
/* 15064 */                     throw err;
/* 15065 */                 }
/* 15066 */             }
/* 15067 */         }
/* 15068 */     });
/* 15069 */     var $scope898 = (function $was_type899$(self, tp) {
/* 15070 */         var state; /* locals */
/* 15071 */         var self, self, state, state, state, tp, tp, $lattr901, $compareres903, $lattr906;
/* 15072 */         var $wakeFromSuspension = function() {
/* 15073 */             var susp = $scope898.$wakingSuspension;
/* 15074 */             delete $scope898.$wakingSuspension;
/* 15075 */             $blk = susp.$blk;
/* 15076 */             $loc = susp.$loc;
/* 15077 */             $gbl = susp.$gbl;
/* 15078 */             $exc = susp.$exc;
/* 15079 */             $err = susp.$err;
/* 15080 */             Sk.err = $err;
/* 15081 */             $postfinally = susp.$postfinally;
/* 15082 */             $currLineNo = susp.$lineno;
/* 15083 */             $currColNo = susp.$colno;
/* 15084 */             Sk.lastYield = Date.now();
/* 15085 */             self = susp.$tmps.self;
/* 15086 */             state = susp.$tmps.state;
/* 15087 */             tp = susp.$tmps.tp;
/* 15088 */             $lattr901 = susp.$tmps.$lattr901;
/* 15089 */             $compareres903 = susp.$tmps.$compareres903;
/* 15090 */             $lattr906 = susp.$tmps.$lattr906;
/* 15091 */             try {
/* 15092 */                 $ret = susp.child.resume();
/* 15093 */             } catch (err) {
/* 15094 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 15095 */                     Sk.execStart = Date.now()
/* 15096 */                 }
/* 15097 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 15098 */                     err = new Sk.builtin.ExternalError(err);
/* 15099 */                 }
/* 15100 */                 err.traceback.push({
/* 15101 */                     lineno: $currLineNo,
/* 15102 */                     colno: $currColNo,
/* 15103 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 15104 */                 });
/* 15105 */                 if ($exc.length > 0) {
/* 15106 */                     $err = err;
/* 15107 */                     Sk.err = $err;
/* 15108 */                     $blk = $exc.pop();
/* 15109 */                 } else {
/* 15110 */                     throw err;
/* 15111 */                 }
/* 15112 */             }
/* 15113 */         };
/* 15114 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 15115 */             var susp = new Sk.misceval.Suspension();
/* 15116 */             susp.child = $child;
/* 15117 */             susp.resume = function() {
/* 15118 */                 $scope898.$wakingSuspension = susp;
/* 15119 */                 return $scope898();
/* 15120 */             };
/* 15121 */             susp.data = susp.child.data;
/* 15122 */             susp.$blk = $blk;
/* 15123 */             susp.$loc = $loc;
/* 15124 */             susp.$gbl = $gbl;
/* 15125 */             susp.$exc = $exc;
/* 15126 */             susp.$err = $err;
/* 15127 */             susp.$postfinally = $postfinally;
/* 15128 */             susp.$filename = $filename;
/* 15129 */             susp.$lineno = $lineno;
/* 15130 */             susp.$colno = $colno;
/* 15131 */             susp.optional = susp.child.optional;
/* 15132 */             susp.$tmps = {
/* 15133 */                 "self": self,
/* 15134 */                 "state": state,
/* 15135 */                 "tp": tp,
/* 15136 */                 "$lattr901": $lattr901,
/* 15137 */                 "$compareres903": $compareres903,
/* 15138 */                 "$lattr906": $lattr906
/* 15139 */             };
/* 15140 */             return susp;
/* 15141 */         };
/* 15142 */         var $blk = 0,
/* 15143 */             $exc = [],
/* 15144 */             $loc = {},
/* 15145 */             $gbl = this,
/* 15146 */             $err = undefined,
/* 15147 */             $ret = undefined,
/* 15148 */             $postfinally = undefined,
/* 15149 */             $currLineNo = undefined,
/* 15150 */             $currColNo = undefined;
/* 15151 */         Sk.err = $err;
/* 15152 */         if (typeof Sk.execStart === 'undefined') {
/* 15153 */             Sk.execStart = Date.now()
/* 15154 */         }
/* 15155 */         if (typeof Sk.lastYield === 'undefined') {
/* 15156 */             Sk.lastYield = Date.now()
/* 15157 */         }
/* 15158 */         if ($scope898.$wakingSuspension !== undefined) {
/* 15159 */             $wakeFromSuspension();
/* 15160 */         } else {
/* 15161 */             Sk.builtin.pyCheckArgs("was_type", arguments, 2, 2, false, false);
/* 15162 */         }
/* 15163 */         while (true) {
/* 15164 */             try {
/* 15165 */                 var $dateNow = Date.now();
/* 15166 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 15167 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 15168 */                 }
/* 15169 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 15170 */                     var $susp = $saveSuspension({
/* 15171 */                         data: {
/* 15172 */                             type: 'Sk.yield'
/* 15173 */                         },
/* 15174 */                         resume: function() {}
/* 15175 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 15176 */                     $susp.$blk = $blk;
/* 15177 */                     $susp.optional = true;
/* 15178 */                     return $susp;
/* 15179 */                 }
/* 15180 */                 switch ($blk) {
/* 15181 */                 case 0:
/* 15182 */                     /* --- codeobj entry --- */
/* 15183 */                     if (self === undefined) {
/* 15184 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15185 */                     }
/* 15186 */                     if (tp === undefined) {
/* 15187 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tp\' referenced before assignment');
/* 15188 */                     }
/* 15189 */ 
/* 15190 */ 
/* 15191 */                     //
/* 15192 */                     // line 484:
/* 15193 */                     //         """
/* 15194 */                     //         ^
/* 15195 */                     //
/* 15196 */                     Sk.currLineNo = 484;
/* 15197 */                     Sk.currColNo = 8;
/* 15198 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15199 */                     $currLineNo = 484;
/* 15200 */                     $currColNo = 8;
/* 15201 */                     var $str900 = new Sk.builtins['str']("\n\n         Returns:\n             type of the variable associated with this node if it's a name node, otherwise None.\n         ");
/* 15202 */ 
/* 15203 */                     //
/* 15204 */                     // line 489:
/* 15205 */                     //         state = self.get_data_state()
/* 15206 */                     //         ^
/* 15207 */                     //
/* 15208 */                     Sk.currLineNo = 489;
/* 15209 */                     Sk.currColNo = 8;
/* 15210 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15211 */                     $currLineNo = 489;
/* 15212 */                     $currColNo = 8;
/* 15213 */                     if (self === undefined) {
/* 15214 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15215 */                     }
/* 15216 */                     $ret = Sk.abstr.gattr(self, 'get_data_state', true);
/* 15217 */                     $blk = 1; /* allowing case fallthrough */
/* 15218 */                 case 1:
/* 15219 */                     /* --- function return or resume suspension --- */
/* 15220 */                     if ($ret && $ret.$isSuspension) {
/* 15221 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 489, 16);
/* 15222 */                     }
/* 15223 */                     var $lattr901 = $ret;
/* 15224 */                     $ret;
/* 15225 */                     $ret = Sk.misceval.callsimOrSuspend($lattr901);
/* 15226 */                     $blk = 2; /* allowing case fallthrough */
/* 15227 */                 case 2:
/* 15228 */                     /* --- function return or resume suspension --- */
/* 15229 */                     if ($ret && $ret.$isSuspension) {
/* 15230 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 489, 16);
/* 15231 */                     }
/* 15232 */                     var $call902 = $ret;
/* 15233 */ 
/* 15234 */                     //
/* 15235 */                     // line 489:
/* 15236 */                     //         state = self.get_data_state()
/* 15237 */                     //                 ^
/* 15238 */                     //
/* 15239 */                     Sk.currLineNo = 489;
/* 15240 */                     Sk.currColNo = 16;
/* 15241 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15242 */                     $currLineNo = 489;
/* 15243 */                     $currColNo = 16;
/* 15244 */                     state = $call902;
/* 15245 */ 
/* 15246 */                     //
/* 15247 */                     // line 490:
/* 15248 */                     //         if state is None:
/* 15249 */                     //         ^
/* 15250 */                     //
/* 15251 */                     Sk.currLineNo = 490;
/* 15252 */                     Sk.currColNo = 8;
/* 15253 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15254 */                     $currLineNo = 490;
/* 15255 */                     $currColNo = 8;
/* 15256 */                     if (state === undefined) {
/* 15257 */                         throw new Sk.builtin.UnboundLocalError('local variable \'state\' referenced before assignment');
/* 15258 */                     }
/* 15259 */                     var $compareres903 = null;
/* 15260 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool(state, Sk.builtin.none.none$, 'Is', true));
/* 15261 */                     $blk = 6; /* allowing case fallthrough */
/* 15262 */                 case 6:
/* 15263 */                     /* --- function return or resume suspension --- */
/* 15264 */                     if ($ret && $ret.$isSuspension) {
/* 15265 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 490, 11);
/* 15266 */                     }
/* 15267 */                     $compareres903 = $ret;
/* 15268 */                     var $jfalse904 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 15269 */                     if ($jfalse904) { /*test failed */
/* 15270 */                         $blk = 5;
/* 15271 */                         continue;
/* 15272 */                     }
/* 15273 */                     $blk = 5; /* allowing case fallthrough */
/* 15274 */                 case 5:
/* 15275 */                     /* --- done --- */
/* 15276 */                     var $jfalse905 = ($compareres903 === false || !Sk.misceval.isTrue($compareres903));
/* 15277 */                     if ($jfalse905) { /*test failed */
/* 15278 */                         $blk = 4;
/* 15279 */                         continue;
/* 15280 */                     }
/* 15281 */ 
/* 15282 */                     //
/* 15283 */                     // line 491:
/* 15284 */                     //             return None
/* 15285 */                     //             ^
/* 15286 */                     //
/* 15287 */                     Sk.currLineNo = 491;
/* 15288 */                     Sk.currColNo = 12;
/* 15289 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15290 */                     $currLineNo = 491;
/* 15291 */                     $currColNo = 12;
/* 15292 */                     return Sk.builtin.none.none$;
/* 15293 */                     $blk = 3; /* allowing case fallthrough */
/* 15294 */                 case 3:
/* 15295 */                     /* --- end of if --- */
/* 15296 */                     return Sk.builtin.none.none$;
/* 15297 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 15298 */                 case 4:
/* 15299 */                     /* --- next branch of if --- */
/* 15300 */ 
/* 15301 */                     //
/* 15302 */                     // line 493:
/* 15303 */                     //             return state.was_type(tp)
/* 15304 */                     //             ^
/* 15305 */                     //
/* 15306 */                     Sk.currLineNo = 493;
/* 15307 */                     Sk.currColNo = 12;
/* 15308 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15309 */                     $currLineNo = 493;
/* 15310 */                     $currColNo = 12;
/* 15311 */                     if (state === undefined) {
/* 15312 */                         throw new Sk.builtin.UnboundLocalError('local variable \'state\' referenced before assignment');
/* 15313 */                     }
/* 15314 */                     $ret = Sk.abstr.gattr(state, 'was_type', true);
/* 15315 */                     $blk = 7; /* allowing case fallthrough */
/* 15316 */                 case 7:
/* 15317 */                     /* --- function return or resume suspension --- */
/* 15318 */                     if ($ret && $ret.$isSuspension) {
/* 15319 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 493, 19);
/* 15320 */                     }
/* 15321 */                     var $lattr906 = $ret;
/* 15322 */                     if (tp === undefined) {
/* 15323 */                         throw new Sk.builtin.UnboundLocalError('local variable \'tp\' referenced before assignment');
/* 15324 */                     }
/* 15325 */                     $ret;
/* 15326 */                     $ret = Sk.misceval.callsimOrSuspend($lattr906, tp);
/* 15327 */                     $blk = 8; /* allowing case fallthrough */
/* 15328 */                 case 8:
/* 15329 */                     /* --- function return or resume suspension --- */
/* 15330 */                     if ($ret && $ret.$isSuspension) {
/* 15331 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 493, 19);
/* 15332 */                     }
/* 15333 */                     var $call907 = $ret;
/* 15334 */ 
/* 15335 */                     //
/* 15336 */                     // line 493:
/* 15337 */                     //             return state.was_type(tp)
/* 15338 */                     //                    ^
/* 15339 */                     //
/* 15340 */                     Sk.currLineNo = 493;
/* 15341 */                     Sk.currColNo = 19;
/* 15342 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15343 */                     $currLineNo = 493;
/* 15344 */                     $currColNo = 19;
/* 15345 */                     return $call907;
/* 15346 */                     $blk = 3; /* jump */
/* 15347 */                     continue;
/* 15348 */                 }
/* 15349 */             } catch (err) {
/* 15350 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 15351 */                     Sk.execStart = Date.now()
/* 15352 */                 }
/* 15353 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 15354 */                     err = new Sk.builtin.ExternalError(err);
/* 15355 */                 }
/* 15356 */                 err.traceback.push({
/* 15357 */                     lineno: $currLineNo,
/* 15358 */                     colno: $currColNo,
/* 15359 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 15360 */                 });
/* 15361 */                 if ($exc.length > 0) {
/* 15362 */                     $err = err;
/* 15363 */                     Sk.err = $err;
/* 15364 */                     $blk = $exc.pop();
/* 15365 */                     continue;
/* 15366 */                 } else {
/* 15367 */                     throw err;
/* 15368 */                 }
/* 15369 */             }
/* 15370 */         }
/* 15371 */     });
/* 15372 */     var $scope909 = (function $get_value910$(self) {
/* 15373 */         var value; /* locals */
/* 15374 */         var self, self, self, self, self, self, self, value, value, value, value, value, $lattr912, $compareres913, $str914, $lattr918, $compareres919, $str920, $lattr924, $compareres925, $str926, $lattr929;
/* 15375 */         var $wakeFromSuspension = function() {
/* 15376 */             var susp = $scope909.$wakingSuspension;
/* 15377 */             delete $scope909.$wakingSuspension;
/* 15378 */             $blk = susp.$blk;
/* 15379 */             $loc = susp.$loc;
/* 15380 */             $gbl = susp.$gbl;
/* 15381 */             $exc = susp.$exc;
/* 15382 */             $err = susp.$err;
/* 15383 */             Sk.err = $err;
/* 15384 */             $postfinally = susp.$postfinally;
/* 15385 */             $currLineNo = susp.$lineno;
/* 15386 */             $currColNo = susp.$colno;
/* 15387 */             Sk.lastYield = Date.now();
/* 15388 */             self = susp.$tmps.self;
/* 15389 */             value = susp.$tmps.value;
/* 15390 */             $lattr912 = susp.$tmps.$lattr912;
/* 15391 */             $compareres913 = susp.$tmps.$compareres913;
/* 15392 */             $str914 = susp.$tmps.$str914;
/* 15393 */             $lattr918 = susp.$tmps.$lattr918;
/* 15394 */             $compareres919 = susp.$tmps.$compareres919;
/* 15395 */             $str920 = susp.$tmps.$str920;
/* 15396 */             $lattr924 = susp.$tmps.$lattr924;
/* 15397 */             $compareres925 = susp.$tmps.$compareres925;
/* 15398 */             $str926 = susp.$tmps.$str926;
/* 15399 */             $lattr929 = susp.$tmps.$lattr929;
/* 15400 */             try {
/* 15401 */                 $ret = susp.child.resume();
/* 15402 */             } catch (err) {
/* 15403 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 15404 */                     Sk.execStart = Date.now()
/* 15405 */                 }
/* 15406 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 15407 */                     err = new Sk.builtin.ExternalError(err);
/* 15408 */                 }
/* 15409 */                 err.traceback.push({
/* 15410 */                     lineno: $currLineNo,
/* 15411 */                     colno: $currColNo,
/* 15412 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 15413 */                 });
/* 15414 */                 if ($exc.length > 0) {
/* 15415 */                     $err = err;
/* 15416 */                     Sk.err = $err;
/* 15417 */                     $blk = $exc.pop();
/* 15418 */                 } else {
/* 15419 */                     throw err;
/* 15420 */                 }
/* 15421 */             }
/* 15422 */         };
/* 15423 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/* 15424 */             var susp = new Sk.misceval.Suspension();
/* 15425 */             susp.child = $child;
/* 15426 */             susp.resume = function() {
/* 15427 */                 $scope909.$wakingSuspension = susp;
/* 15428 */                 return $scope909();
/* 15429 */             };
/* 15430 */             susp.data = susp.child.data;
/* 15431 */             susp.$blk = $blk;
/* 15432 */             susp.$loc = $loc;
/* 15433 */             susp.$gbl = $gbl;
/* 15434 */             susp.$exc = $exc;
/* 15435 */             susp.$err = $err;
/* 15436 */             susp.$postfinally = $postfinally;
/* 15437 */             susp.$filename = $filename;
/* 15438 */             susp.$lineno = $lineno;
/* 15439 */             susp.$colno = $colno;
/* 15440 */             susp.optional = susp.child.optional;
/* 15441 */             susp.$tmps = {
/* 15442 */                 "self": self,
/* 15443 */                 "value": value,
/* 15444 */                 "$lattr912": $lattr912,
/* 15445 */                 "$compareres913": $compareres913,
/* 15446 */                 "$str914": $str914,
/* 15447 */                 "$lattr918": $lattr918,
/* 15448 */                 "$compareres919": $compareres919,
/* 15449 */                 "$str920": $str920,
/* 15450 */                 "$lattr924": $lattr924,
/* 15451 */                 "$compareres925": $compareres925,
/* 15452 */                 "$str926": $str926,
/* 15453 */                 "$lattr929": $lattr929
/* 15454 */             };
/* 15455 */             return susp;
/* 15456 */         };
/* 15457 */         var $blk = 0,
/* 15458 */             $exc = [],
/* 15459 */             $loc = {},
/* 15460 */             $gbl = this,
/* 15461 */             $err = undefined,
/* 15462 */             $ret = undefined,
/* 15463 */             $postfinally = undefined,
/* 15464 */             $currLineNo = undefined,
/* 15465 */             $currColNo = undefined;
/* 15466 */         Sk.err = $err;
/* 15467 */         if (typeof Sk.execStart === 'undefined') {
/* 15468 */             Sk.execStart = Date.now()
/* 15469 */         }
/* 15470 */         if (typeof Sk.lastYield === 'undefined') {
/* 15471 */             Sk.lastYield = Date.now()
/* 15472 */         }
/* 15473 */         if ($scope909.$wakingSuspension !== undefined) {
/* 15474 */             $wakeFromSuspension();
/* 15475 */         } else {
/* 15476 */             Sk.builtin.pyCheckArgs("get_value", arguments, 1, 1, false, false);
/* 15477 */         }
/* 15478 */         while (true) {
/* 15479 */             try {
/* 15480 */                 var $dateNow = Date.now();
/* 15481 */                 if ($dateNow - Sk.execStart > Sk.execLimit && Sk.execLimit !== null) {
/* 15482 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/* 15483 */                 }
/* 15484 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/* 15485 */                     var $susp = $saveSuspension({
/* 15486 */                         data: {
/* 15487 */                             type: 'Sk.yield'
/* 15488 */                         },
/* 15489 */                         resume: function() {}
/* 15490 */                     }, 'src/lib/pedal/cait/cait_node.py', $currLineNo, $currColNo);
/* 15491 */                     $susp.$blk = $blk;
/* 15492 */                     $susp.optional = true;
/* 15493 */                     return $susp;
/* 15494 */                 }
/* 15495 */                 switch ($blk) {
/* 15496 */                 case 0:
/* 15497 */                     /* --- codeobj entry --- */
/* 15498 */                     if (self === undefined) {
/* 15499 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15500 */                     }
/* 15501 */ 
/* 15502 */ 
/* 15503 */                     //
/* 15504 */                     // line 496:
/* 15505 */                     //         """"
/* 15506 */                     //         ^
/* 15507 */                     //
/* 15508 */                     Sk.currLineNo = 496;
/* 15509 */                     Sk.currColNo = 8;
/* 15510 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15511 */                     $currLineNo = 496;
/* 15512 */                     $currColNo = 8;
/* 15513 */                     var $str911 = new Sk.builtins['str']('"\n        Returns:\n            Value of node if Num or Str, and get_data_state if Name\n        ');
/* 15514 */ 
/* 15515 */                     //
/* 15516 */                     // line 500:
/* 15517 */                     //         value = None
/* 15518 */                     //         ^
/* 15519 */                     //
/* 15520 */                     Sk.currLineNo = 500;
/* 15521 */                     Sk.currColNo = 8;
/* 15522 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15523 */                     $currLineNo = 500;
/* 15524 */                     $currColNo = 8;
/* 15525 */                     value = Sk.builtin.none.none$;
/* 15526 */ 
/* 15527 */                     //
/* 15528 */                     // line 501:
/* 15529 */                     //         if self.ast_name == "Num":
/* 15530 */                     //         ^
/* 15531 */                     //
/* 15532 */                     Sk.currLineNo = 501;
/* 15533 */                     Sk.currColNo = 8;
/* 15534 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15535 */                     $currLineNo = 501;
/* 15536 */                     $currColNo = 8;
/* 15537 */                     if (self === undefined) {
/* 15538 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15539 */                     }
/* 15540 */                     $ret = Sk.abstr.gattr(self, 'ast_name', true);
/* 15541 */                     $blk = 3; /* allowing case fallthrough */
/* 15542 */                 case 3:
/* 15543 */                     /* --- function return or resume suspension --- */
/* 15544 */                     if ($ret && $ret.$isSuspension) {
/* 15545 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 501, 11);
/* 15546 */                     }
/* 15547 */                     var $lattr912 = $ret;
/* 15548 */                     var $compareres913 = null;
/* 15549 */                     var $str914 = new Sk.builtins['str']('Num');
/* 15550 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr912, $str914, 'Eq', true));
/* 15551 */                     $blk = 5; /* allowing case fallthrough */
/* 15552 */                 case 5:
/* 15553 */                     /* --- function return or resume suspension --- */
/* 15554 */                     if ($ret && $ret.$isSuspension) {
/* 15555 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 501, 11);
/* 15556 */                     }
/* 15557 */                     $compareres913 = $ret;
/* 15558 */                     var $jfalse915 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 15559 */                     if ($jfalse915) { /*test failed */
/* 15560 */                         $blk = 4;
/* 15561 */                         continue;
/* 15562 */                     }
/* 15563 */                     $blk = 4; /* allowing case fallthrough */
/* 15564 */                 case 4:
/* 15565 */                     /* --- done --- */
/* 15566 */                     var $jfalse916 = ($compareres913 === false || !Sk.misceval.isTrue($compareres913));
/* 15567 */                     if ($jfalse916) { /*test failed */
/* 15568 */                         $blk = 2;
/* 15569 */                         continue;
/* 15570 */                     }
/* 15571 */ 
/* 15572 */                     //
/* 15573 */                     // line 502:
/* 15574 */                     //             value = self.n
/* 15575 */                     //             ^
/* 15576 */                     //
/* 15577 */                     Sk.currLineNo = 502;
/* 15578 */                     Sk.currColNo = 12;
/* 15579 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15580 */                     $currLineNo = 502;
/* 15581 */                     $currColNo = 12;
/* 15582 */                     if (self === undefined) {
/* 15583 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15584 */                     }
/* 15585 */                     $ret = Sk.abstr.gattr(self, 'n', true);
/* 15586 */                     $blk = 6; /* allowing case fallthrough */
/* 15587 */                 case 6:
/* 15588 */                     /* --- function return or resume suspension --- */
/* 15589 */                     if ($ret && $ret.$isSuspension) {
/* 15590 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 502, 20);
/* 15591 */                     }
/* 15592 */                     var $lattr917 = $ret;
/* 15593 */                     value = $lattr917;
/* 15594 */                     $blk = 1; /* allowing case fallthrough */
/* 15595 */                 case 1:
/* 15596 */                     /* --- end of if --- */
/* 15597 */ 
/* 15598 */                     //
/* 15599 */                     // line 507:
/* 15600 */                     //         return value
/* 15601 */                     //         ^
/* 15602 */                     //
/* 15603 */                     Sk.currLineNo = 507;
/* 15604 */                     Sk.currColNo = 8;
/* 15605 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15606 */                     $currLineNo = 507;
/* 15607 */                     $currColNo = 8;
/* 15608 */                     if (value === undefined) {
/* 15609 */                         throw new Sk.builtin.UnboundLocalError('local variable \'value\' referenced before assignment');
/* 15610 */                     }
/* 15611 */                     return value;
/* 15612 */                     return Sk.builtin.none.none$;
/* 15613 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/* 15614 */                 case 2:
/* 15615 */                     /* --- next branch of if --- */
/* 15616 */ 
/* 15617 */                     //
/* 15618 */                     // line 503:
/* 15619 */                     //         elif self.ast_name == "Str":
/* 15620 */                     //              ^
/* 15621 */                     //
/* 15622 */                     Sk.currLineNo = 503;
/* 15623 */                     Sk.currColNo = 13;
/* 15624 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15625 */                     $currLineNo = 503;
/* 15626 */                     $currColNo = 13;
/* 15627 */                     if (self === undefined) {
/* 15628 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15629 */                     }
/* 15630 */                     $ret = Sk.abstr.gattr(self, 'ast_name', true);
/* 15631 */                     $blk = 9; /* allowing case fallthrough */
/* 15632 */                 case 9:
/* 15633 */                     /* --- function return or resume suspension --- */
/* 15634 */                     if ($ret && $ret.$isSuspension) {
/* 15635 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 503, 13);
/* 15636 */                     }
/* 15637 */                     var $lattr918 = $ret;
/* 15638 */                     var $compareres919 = null;
/* 15639 */                     var $str920 = new Sk.builtins['str']('Str');
/* 15640 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr918, $str920, 'Eq', true));
/* 15641 */                     $blk = 11; /* allowing case fallthrough */
/* 15642 */                 case 11:
/* 15643 */                     /* --- function return or resume suspension --- */
/* 15644 */                     if ($ret && $ret.$isSuspension) {
/* 15645 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 503, 13);
/* 15646 */                     }
/* 15647 */                     $compareres919 = $ret;
/* 15648 */                     var $jfalse921 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 15649 */                     if ($jfalse921) { /*test failed */
/* 15650 */                         $blk = 10;
/* 15651 */                         continue;
/* 15652 */                     }
/* 15653 */                     $blk = 10; /* allowing case fallthrough */
/* 15654 */                 case 10:
/* 15655 */                     /* --- done --- */
/* 15656 */                     var $jfalse922 = ($compareres919 === false || !Sk.misceval.isTrue($compareres919));
/* 15657 */                     if ($jfalse922) { /*test failed */
/* 15658 */                         $blk = 8;
/* 15659 */                         continue;
/* 15660 */                     }
/* 15661 */ 
/* 15662 */                     //
/* 15663 */                     // line 504:
/* 15664 */                     //             value = self.s
/* 15665 */                     //             ^
/* 15666 */                     //
/* 15667 */                     Sk.currLineNo = 504;
/* 15668 */                     Sk.currColNo = 12;
/* 15669 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15670 */                     $currLineNo = 504;
/* 15671 */                     $currColNo = 12;
/* 15672 */                     if (self === undefined) {
/* 15673 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15674 */                     }
/* 15675 */                     $ret = Sk.abstr.gattr(self, 's', true);
/* 15676 */                     $blk = 12; /* allowing case fallthrough */
/* 15677 */                 case 12:
/* 15678 */                     /* --- function return or resume suspension --- */
/* 15679 */                     if ($ret && $ret.$isSuspension) {
/* 15680 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 504, 20);
/* 15681 */                     }
/* 15682 */                     var $lattr923 = $ret;
/* 15683 */                     value = $lattr923;
/* 15684 */                     $blk = 7; /* allowing case fallthrough */
/* 15685 */                 case 7:
/* 15686 */                     /* --- end of if --- */
/* 15687 */                     $blk = 1; /* jump */
/* 15688 */                     continue;
/* 15689 */                 case 8:
/* 15690 */                     /* --- next branch of if --- */
/* 15691 */ 
/* 15692 */                     //
/* 15693 */                     // line 505:
/* 15694 */                     //         elif self.ast_name == "Name":
/* 15695 */                     //              ^
/* 15696 */                     //
/* 15697 */                     Sk.currLineNo = 505;
/* 15698 */                     Sk.currColNo = 13;
/* 15699 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15700 */                     $currLineNo = 505;
/* 15701 */                     $currColNo = 13;
/* 15702 */                     if (self === undefined) {
/* 15703 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15704 */                     }
/* 15705 */                     $ret = Sk.abstr.gattr(self, 'ast_name', true);
/* 15706 */                     $blk = 14; /* allowing case fallthrough */
/* 15707 */                 case 14:
/* 15708 */                     /* --- function return or resume suspension --- */
/* 15709 */                     if ($ret && $ret.$isSuspension) {
/* 15710 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 505, 13);
/* 15711 */                     }
/* 15712 */                     var $lattr924 = $ret;
/* 15713 */                     var $compareres925 = null;
/* 15714 */                     var $str926 = new Sk.builtins['str']('Name');
/* 15715 */                     $ret = Sk.builtin.bool(Sk.misceval.richCompareBool($lattr924, $str926, 'Eq', true));
/* 15716 */                     $blk = 16; /* allowing case fallthrough */
/* 15717 */                 case 16:
/* 15718 */                     /* --- function return or resume suspension --- */
/* 15719 */                     if ($ret && $ret.$isSuspension) {
/* 15720 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 505, 13);
/* 15721 */                     }
/* 15722 */                     $compareres925 = $ret;
/* 15723 */                     var $jfalse927 = ($ret === false || !Sk.misceval.isTrue($ret));
/* 15724 */                     if ($jfalse927) { /*test failed */
/* 15725 */                         $blk = 15;
/* 15726 */                         continue;
/* 15727 */                     }
/* 15728 */                     $blk = 15; /* allowing case fallthrough */
/* 15729 */                 case 15:
/* 15730 */                     /* --- done --- */
/* 15731 */                     var $jfalse928 = ($compareres925 === false || !Sk.misceval.isTrue($compareres925));
/* 15732 */                     if ($jfalse928) { /*test failed */
/* 15733 */                         $blk = 13;
/* 15734 */                         continue;
/* 15735 */                     }
/* 15736 */ 
/* 15737 */                     //
/* 15738 */                     // line 506:
/* 15739 */                     //             value = self.get_data_state()
/* 15740 */                     //             ^
/* 15741 */                     //
/* 15742 */                     Sk.currLineNo = 506;
/* 15743 */                     Sk.currColNo = 12;
/* 15744 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15745 */                     $currLineNo = 506;
/* 15746 */                     $currColNo = 12;
/* 15747 */                     if (self === undefined) {
/* 15748 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/* 15749 */                     }
/* 15750 */                     $ret = Sk.abstr.gattr(self, 'get_data_state', true);
/* 15751 */                     $blk = 17; /* allowing case fallthrough */
/* 15752 */                 case 17:
/* 15753 */                     /* --- function return or resume suspension --- */
/* 15754 */                     if ($ret && $ret.$isSuspension) {
/* 15755 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 506, 20);
/* 15756 */                     }
/* 15757 */                     var $lattr929 = $ret;
/* 15758 */                     $ret;
/* 15759 */                     $ret = Sk.misceval.callsimOrSuspend($lattr929);
/* 15760 */                     $blk = 18; /* allowing case fallthrough */
/* 15761 */                 case 18:
/* 15762 */                     /* --- function return or resume suspension --- */
/* 15763 */                     if ($ret && $ret.$isSuspension) {
/* 15764 */                         return $saveSuspension($ret, 'src/lib/pedal/cait/cait_node.py', 506, 20);
/* 15765 */                     }
/* 15766 */                     var $call930 = $ret;
/* 15767 */ 
/* 15768 */                     //
/* 15769 */                     // line 506:
/* 15770 */                     //             value = self.get_data_state()
/* 15771 */                     //                     ^
/* 15772 */                     //
/* 15773 */                     Sk.currLineNo = 506;
/* 15774 */                     Sk.currColNo = 20;
/* 15775 */                     Sk.currFilename = 'src/lib/pedal/cait/cait_node.py';
/* 15776 */                     $currLineNo = 506;
/* 15777 */                     $currColNo = 20;
/* 15778 */                     value = $call930;
/* 15779 */                     $blk = 13; /* allowing case fallthrough */
/* 15780 */                 case 13:
/* 15781 */                     /* --- end of if --- */
/* 15782 */                     $blk = 7; /* jump */
/* 15783 */                     continue;
/* 15784 */                 }
/* 15785 */             } catch (err) {
/* 15786 */                 if (err instanceof Sk.builtin.TimeLimitError) {
/* 15787 */                     Sk.execStart = Date.now()
/* 15788 */                 }
/* 15789 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/* 15790 */                     err = new Sk.builtin.ExternalError(err);
/* 15791 */                 }
/* 15792 */                 err.traceback.push({
/* 15793 */                     lineno: $currLineNo,
/* 15794 */                     colno: $currColNo,
/* 15795 */                     filename: 'src/lib/pedal/cait/cait_node.py'
/* 15796 */                 });
/* 15797 */                 if ($exc.length > 0) {
/* 15798 */                     $err = err;
/* 15799 */                     Sk.err = $err;
/* 15800 */                     $blk = $exc.pop();
/* 15801 */                     continue;
/* 15802 */                 } else {
/* 15803 */                     throw err;
/* 15804 */                 }
/* 15805 */             }
/* 15806 */         }
/* 15807 */     });
/* 15808 */     return $scope120;
/* 15809 */ }();
Phase Setup stopwatch: 0 secs

Phase Report: Imported Report: 0.11 secs

Phase Report: Imported Feedback: 0 secs

Phase Report: Imported Imperative: 0.02 secs

Phase Cait: Imported report: 0.14 secs

Phase STM: imported builtins: 0 secs

Phase CaitNode: imported asthelpers: 0.1 secs

Phase CaitNode: imported others: 0.1 secs

Phase CaitNode: self: 0 secs

Phase ASTMAP: imported caitnode: 0.49 secs

Phase ASTMAP: Itself: 0 secs

Phase STM: imported astmap: 0.59 secs

Phase STM: imported caitnode: 0 secs

Phase Cait: Imported STM: 0.8 secs

Phase Cait: Imported CaitNode: 0 secs

Phase Cait: Imported AST: 0 secs

Phase Cait: setup rest of cait_api.py: 0 secs

Phase Imported Cait in Pedal: 1.06 secs

Phase Imported Report in Pedal: 0 secs

Phase Imported Sandbox in Pedal: 0.04 secs

Phase Setup stopwatch: 0 secs

Phase Setup stopwatch: 0 secs

Phase Tifa: imported builtins: 0.01 secs

Phase Tifa: imported report: 0 secs

Phase Tifa: imported type_defs: 0.3 secs

Phase Tifa: imported builtin_defs: 0.12 secs

Phase Tifa: imported type_ops: 0.05 secs

Phase Tifa: imported identifier: 0.01 secs

Phase Tifa: imported state: 0.03 secs

Phase Tifa: imported messages: 0.05 secs

Phase Tifa: built rest: 0 secs

Phase Imported main Tifa: 1.06 secs

Phase Imported rest of Tifa: 0 secs

Phase Imported Tifa in Pedal: 1.09 secs

Phase Imported Source in Pedal: 0.08 secs

Phase CaitNode: imported asthelpers: 2.35 secs

Phase CaitNode: imported others: 0 secs

Phase CaitNode: self: 0 secs

-----
