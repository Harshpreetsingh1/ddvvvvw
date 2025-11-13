//Maximum element using Divide and conquer
function findMaximumEtement(lst) :
if length(lst) —
return null
return findMax(Ø,
function findMax(i,
if
return 1st [i]
mid = (i+j) / 2
return max(
1st)
j, 1st):
findMax(i, mid, 1st),
fin4Max(mid+1, j, 1st))

//Minimum element using Divide and conquer
function findMinimumEtement( 1st) :
if length(lst)
return nutt
return findMin(Ø,
function findMin(i, j, 1st):
# Handle size 1 interval
if i =
return 1st [i]
# Handle size 2 interval
if j - i 1:
return min(lst 1st [i+l])
# Handle size 3 interval
if j - i 2:
1st)
return min(lst [i], 1st [1+1], 1st [1+2] )
third =
midl
= i + third
mid2
= i + 2*third
findMin(i, midl,
minl =
findMin (midl+l,
min2 =
= findMin(mid2+1,
min3
min(minl, min2,
return
1st)
mid2, 1st)
j, 1st)
min3)