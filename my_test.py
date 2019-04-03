#import ast

#print(ast.dump(ast.parse('1 in 2')))

print("{!r}".format(repr([1,2,3])))
print("{}".format([1,2,3]))
print(repr([1,2,3]))

print(repr([1,2,3])=="{!r}".format([1,2,3]))

print("{}".format(repr({1:2})))