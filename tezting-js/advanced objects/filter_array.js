let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
    ];

    //Note: filter syntax is arr.filter(function(item, index, array) {})

    let filterUsers = users.filter(user => user.id < 3);

    console.log(filterUsers.length);