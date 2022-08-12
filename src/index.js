// You should implement your task here.

module.exports = function towelSort(matrix) {
    let input
    let out = []
    let aaa = []
    breakme: if (matrix == 0 || "object" != typeof(matrix)) {
            return [];
            break breakme
        } else {
            for (let i = 0; i < matrix.length; i++) {
                if (i % 2 == 0) {
                    out.push(matrix[i].join(' '))
                } else if (i % 2 != 0) {

                    for (let j = matrix[i].length; j > 0; j -= 1) {
                        aaa = String(matrix[i]).split(',')

                        console.log(aaa);
                        console.log('1');
                        out.push(aaa[j - 1])
                    }
                }
            }




            return (out.join(' ').split(' '));

        }



}
