(function(){
    const triggers = document.querySelectorAll('.cool li');
    const background = document.querySelector('.dropdown-background');
    const nav = document.querySelector('.top');

    function handleEnter() {
        this.classList.add('trigger-enter');
        setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    };
    
    const handleLeave = (e) => {
        e.currentTarget.classList.remove('trigger-enter', 'trigger-enter-active');
    };

    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
}());