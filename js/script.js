document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnex1').addEventListener('click', () => {
        let solution1 = document.getElementById('schwingungsdauer1').value;
        if (solution1.localeCompare('1,23') === 0) {
            document.getElementById('schwingungsdauer1').style.borderColor = 'green';
        } else {
            document.getElementById('schwingungsdauer1').style.borderColor = 'red'
        }
    })
    document.getElementById('btnex2').addEventListener('click', () => {
        let solution2 = document.getElementById('pendellaenge2').value;
        console.log(solution2)
        if (solution2.localeCompare('0,64') === 0) {
            document.getElementById('pendellaenge2').style.borderColor = 'green';
        } else {
            document.getElementById('pendellaenge2').style.borderColor = 'red';
        }
    })
})
