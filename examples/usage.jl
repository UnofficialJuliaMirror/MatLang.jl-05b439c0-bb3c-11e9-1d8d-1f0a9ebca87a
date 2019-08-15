# ] add Revise # if you don't have it
# ] add Requires

path=pwd()
if path[end-6:end] != "MatLang"
	error("cd(to the MatLang path)")
end

push!(LOAD_PATH, ".")
using Revise
using MatLang
using Test

# Main Functions Usage
################################################################
clcM() # clears console
################################################################
mZeros=zerosM(2,2); # same as zeros(2,2)

mZeros2=zerosM(Int32,2,2); # same as zeros(Int32,2,2)

mZeros3=zerosM((2,2)); # giving size as Tuple

mZeros4=zerosM(Int32,(2,2)); # giving size as Tuple and also the Int32 type

mZeros5=zerosM([2,2]); # giving size as an Array, non-efficient Matlab way. Array should be Integer otherwise you will get errors.

mZeros6=zerosM(Int32,[2,2]); # giving size as Array, non-efficient Matlab way
################################################################
mOnes=onesM(2,2); # same as ones(2,2)

mOnes2=onesM(Int32,2,2); # same as ones(Int32,2,2)

mOnes3=onesM((2,2)); # giving size as Tuple

mOnes4=onesM(Int32,(2,2)); # giving size as Tuple and also the Int32 type

mOnes5=onesM([2,2]); # giving size as Array, non-efficient Matlab way. Array should be Integer otherwise you will get errors.

mOnes6=onesM(Int32,[2,2]); # giving size as Array, non-efficient Matlab way
################################################################
mRand=randM(2,2); # same as rand(2,2)

mRand2=randM(Int32,2,2); # same as rand(Int32,2,2)

mRand3=randM((2,2)); # giving size as Tuple

mRand4=randM(Int32,(2,2)); # giving size as Tuple and also the Int32 type

mRand5=randM([2,2]); # giving size as Array, non-efficient Matlab way. Array should be Integer otherwise you will get errors.

mRand6=randM(Int32,[2,2]); # giving size as Array, non-efficient Matlab way
################################################################
mEye=eyeM(2,3); # [1 0 0; 0 1 0]

mEye2=eyeM(Int32,2,3); # [1 0 0; 0 1 0]

mEye3=eyeM((2,2))  # giving size as a Tuple. In Julia we use (2,2) instead of giving it as [2,2]

mEye4=eyeM(Int32,(2,2))  # giving size as a Tuple. In Julia we use (2,2) instead of giving it as [2,2]

mEye5=eyeM([2,2]) # non-efficient Matlab way

mEye6=eyeM(Int32,[2,2]) # non-efficient Matlab way

s1=size(ones(2,3)) # getting size from another matrix or calculation
mEye7=eyeM(s1)  # giving size as a variable (Tuple).
################################################################
mDiag=diagM([2,3,4]) # [0 2 0 ; 0 3 0; 0 4]

mDiag2=diagM([2,3,4],1) # [0 2 3 0; 0 0 3 0; 0 0 0 4; 0 0 0 0]

mDiag3=diagM([1 2 3; 4 5 6; 7 8 9]) # [1;5;9]

mDiag4=diagM([1 2 3; 4 5 6; 7 8 9],1) # [2;6]
################################################################





# Julia functions with M suffix
