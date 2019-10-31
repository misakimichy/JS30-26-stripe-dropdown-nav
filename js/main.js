(function(){
    const triggers = document.querySelectorAll('.cool li');
    const background = document.querySelector('.dropdown-background');
    const nav = document.querySelector('.top');

    const handleEnter = () => {
        console.log('Enter!');
    };
    
    const handleLeave = () => {
        console.log('Leave!');
    };

    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
}());