undefined + 1; // NaN -> NaN
'true' == true // false -> Boolean
false == 'false' // false -> Boolean
null == '' // false -> Boolean
3 ** (9 / 3); // 27 -> Number
!!'false' == !!'true' // true -> Boolean
0 || '0' && 1 // 1 -> Number
1 < 2 < 3 // true -> Boolean
'foo'+ + +'bar' // 'fooNaN' -> String
3 ** 2 / 3; // 3 -> Number
1 < 2 > 3 // false -> Boolean
// (+null == false) < 1; // false -> Boolean
false && true || true // true -> Boolean
false && (true || true); // false -> Boolean
(+null == false) < 1 ** 5; // false -> Boolean