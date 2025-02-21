function plantHandleClick(name, water, light) {
    let lightRequirement;
    if (light === 1) {
        lightRequirement = 'peu de lumière';
    } else if (light === 2) {
        lightRequirement = 'modérément de lumière';
    } else if (light === 3) {
        lightRequirement = 'beaucoup de lumière';
    } else {
        lightRequirement = 'besoin de lumière inconnu';
    }
    let waterRequirement;
    if (water === 1) {
        waterRequirement = 'peu d\'arrosage';
    } else if (water === 2) {
        waterRequirement = 'modérément d\'arrosage';
    } else if (water === 3) {
        waterRequirement = 'beaucoup d\'arrosage';
    } else {
        waterRequirement = 'besoin d\'arrosage inconnu';
    }
    alert(`${name} requiert ${waterRequirement} et ${lightRequirement}`)
}


function handleBlur(value) {
    if (!value.includes("@")) {
        alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide.');
    }
}

export default {handleBlur, plantHandleClick};

