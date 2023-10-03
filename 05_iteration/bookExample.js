const books=[
    {title:'Book One', genre:'fiction',publish:2020,edition:2084},
    {title:'Book two', genre:'non-fiction',publish:1984,edition:2094},
    {title:'Book three', genre:'history',publish:2003,edition:2094},
    {title:'Book four', genre:'science',publish:1971,edition:2034},
    {title:'Book five', genre:'biology',publish:1981,edition:2024},
    {title:'Book six', genre:'history',publish:1998,edition:2014},
    {title:'Book seven', genre:'physics',publish:1989,edition:2016},
    {title:'Book eight', genre:'retail',publish:2001,edition:2002},
]

// const userbooks=books.filter((bk)=>bk.genre==="history")
const userbooks=books.filter((bk)=>bk.publish<2000 && bk.genre=="history")
console.log(userbooks);