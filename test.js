const arr = [1,
    true,
    'three',
    function() {
        console.log('hello');
    }
]

console.log(arr[0]);
arr[3]()

const obj = {
    num: 1,
    bool: true,
    str: 'three',
    func: function() {
        'hola'
    }
}

console.log(obj.num, );
obj.func()
