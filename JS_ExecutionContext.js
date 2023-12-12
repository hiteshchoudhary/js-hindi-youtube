/*
                     ************************* JAVASCRIPT EXECUTION CONTEXT *************************

    1) {} --> Global Execution Context
    2) Function Execution Context
    3) Eval Execution Context

    {} --> Codes run in two phases:
    i) Memory (Creation Phase)
    ii) Execution Phase

    Let us understand with an example code
    ``````````````````````````````````````
            let val1 = 10
            let val2 = 5
            function addNum(num1,num2){
                let total = num1+num2
                return total
            }
            let result1 = addNum(val1, val2)
            let result2 = addNum(10, 2)
    ````````````````````````````````````````

    Process running behind the above code:
    1) Code performs global execution, runs in global environment, allocates in "this" 
    
    2) Memory phase: stores and collects all variables 

            val1 --> undefined
            val2 --> undefined
            addNum --> definition
            result1 --> undefined
            result2 --> undefined

    3) Execution phase:
            val1 --> 10
            val2 --> 5
            addNum --------------------->>>┌────────────────────────────┐
                                           |  New variable Environment  |
                                           |              +             |     ┌────────────────────────────┐  
                                           |      Execution Thread      |<<---|   DELETE (After execution) |
                                           └────────────────────────────┘     └────────────────────────────┘
                                                          |         
                                                          |
                                                          |
                ┌───────────────────────────┌─────────────┘
                |                           |
                |                           |
            Memory Phase             Execution Phase
                |                           |
    |`````````````````````|     |`````````````````````|   
    | val1 --> undefined  |     |     num1 --> 10     |
    | val2 --> undefined  |     |     num2 --> 5      |
    | total --> undefined |     |     total --> 15    |------->>> Return the "total" to global execution context
    |.....................|     |.....................|
                                    
            
                                           ┌────────────────────────────┐
                                           |  New variable Environment  |
                                           |              +             |     ┌────────────────────────────┐  
                                           |      Execution Thread      |<<---|   DELETE (After execution) |
                                           └────────────────────────────┘     └────────────────────────────┘
                                                          |         
                                                          |
                                                          |
                ┌───────────────────────────┌─────────────┘
                |                           |
                |                           |
            Memory Phase             Execution Phase
                |                           |
    |`````````````````````|     |`````````````````````|   
    | val1 --> undefined  |     |     num1 --> 10     |
    | val2 --> undefined  |     |     num2 --> 5      |
    | total --> undefined |     |     total --> 15    |------->>> Return the "total" to global execution context 
    |.....................|     |.....................|           and the repeatition cycle will continue.....



            *********************************** CALL STACK *****************************************

            LIFO: Last in first out


                                           |                            |
                                           |                            |
                                           |                            |
          ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈➤|                            |
          |                                |____________________________|       
          |                                |     Global Execution       |       
        one()    two()   three()           └────────────────────────────┘
                 

                                           |                            |
              ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈➤ |                            |
              |                            |────────────────────────────|
              |                            |          one()             |
              |                            |____________________________|       
              |                            |     Global Execution       |       
            two()   three()                └────────────────────────────┘



                                           |                            |
                  ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈➤|                            |
                  |                        |────────────────────────────|
                  |                        |          two()             |
                  |                        |────────────────────────────|
                  |                        |          one()             |
                  |                        |────────────────────────────|       
                  |                        |     Global Execution       |       
               three()                     └────────────────────────────┘



                                           
                                                        ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈➤
                                           |            |               |
                                           |         three()            |
                                           |────────────────────────────|
                                           |          two()             |
                                           |────────────────────────────|
                                           |          one()             |
                                           |────────────────────────────|       
                                           |     Global Execution       |       
                                           └────────────────────────────┘
    
 */
