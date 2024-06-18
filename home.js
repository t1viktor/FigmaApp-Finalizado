document.addEventListener('DOMContentLoaded', function() {
    let today = document.querySelector('#today');
    let todayC = document.querySelector('.today');
    let thisWeek = document.querySelector('#thisweek');
    let thisWeekC = document.querySelector('.this-week');
    let mycoupons = document.querySelector('#mycoupons');
    let coupondiv = document.querySelector('.coupon-div')

    
    if (today) {
        today.addEventListener('click', function(e) {
            e.preventDefault();
            todayC.style.display = 'flex';
            todayC.classList.toggle('none');
            todayC.scrollIntoView({ behavior: 'smooth' });
            thisWeekC.style.display = 'none';
            coupondiv.style.display = 'none';

        });
    }

    if (thisWeek) {
        thisWeek.addEventListener('click', function(e) {
            e.preventDefault(); 
            thisWeekC.style.display = 'flex';
            thisWeekC.classList.toggle('none');
            thisWeekC.scrollIntoView({ behavior: 'smooth' });
            todayC.style.display = 'none';
            coupondiv.style.display = 'none';
        });
    }

    if (mycoupons) {
        mycoupons.addEventListener('click', function(e) {
            e.preventDefault(); 
            coupondiv.style.display = 'flex';
            coupondiv.classList.toggle('none');
            coupondiv.scrollIntoView({ behavior: 'smooth' });
            todayC.style.display = 'none';
            thisWeekC.style.display = 'none';
        });
    }
});
