let employees = [
    [ 'Jaylee Macy', 'marketing' ],
    [ 'John Smith', 'management' ],
    [ 'Blossom Hartley', 'design' ],
    [ 'Austin Carpenter', 'marketing' ],
    [ 'Joan Knowles', 'development' ],
    [ 'Sally Nunez', 'management' ],
    [ 'Laurel Ward', 'development' ],
    [ 'Lark Simon', 'marketing' ],
    [ 'Jane Stone', 'management' ],
    [ 'Courtney Olson', 'development' ],
  ];
  for(let i = 0; i < employees.length; i++){
    if (employees[i][1] === 'development') {
        console.log(employees[i][0]);
    }
  }