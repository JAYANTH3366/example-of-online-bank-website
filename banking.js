function getInputValue(secondaryInputId){
    const secondaryInput = document.getElementById(secondaryInputId);
    const secondaryValue = secondaryInput.value;
    const secondaryAmount = parseFloat(secondaryValue);
    secondaryInput.value = ' ';
    return secondaryAmount;
};

function updatePrimaryText(primaryId, secondaryAmount){
    const primaryInput = document.getElementById(primaryId);
    const primaryText = primaryInput.innerText;
    const primaryAmount = parseFloat(primaryText);
    primaryInput.innerText = primaryAmount + secondaryAmount;
};

document.getElementById('deposit-button').addEventListener('click', function() {
    const secondaryAmount = getInputValue('deposit-secondary');
    updatePrimaryText('deposit-primary', secondaryAmount)
    
    const balancePrimary = document.getElementById('balance-primary');
    const balancePrimaryText = balancePrimary.innerText;
    const balancePrimaryAmount = parseFloat(balancePrimaryText);
    balancePrimary.innerText = balancePrimaryAmount + secondaryAmount;
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    const secondaryAmount = getInputValue('withdraw-secondary');
    updatePrimaryText('withdraw-primary', secondaryAmount)     

    const balancePrimary = document.getElementById('balance-primary');
    const balancePrimaryText = balancePrimary.innerText;
    const balancePrimaryAmount = parseFloat(balancePrimaryText);
    balancePrimary.innerText = balancePrimaryAmount - secondaryAmount;   
});



