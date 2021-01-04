function showNavbarDropdown()
{
    let dropdownBox = document.querySelector('.dropdown-menu');
    
    dropdownBox.classList.add('show');
}

function hideNavbarDropdown()
{
    let dropdownBox = document.querySelector('.dropdown-menu');

    setTimeout(function()
        {
            dropdownBox.classList.remove('show');
        }
    , 3000);

}