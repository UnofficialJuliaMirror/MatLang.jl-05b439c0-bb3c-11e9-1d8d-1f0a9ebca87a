
################################################################
################################################################
# Entering_Commands
################################################################
################################################################

"""
    clcM

Clear Command Window for Juno or Atom IDE
"""
function clcM()

    if !isdefined(Main, :Juno)
        println("\33[2J")
    end

end
