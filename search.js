// Function to search medicine and redirect to its page
function searchMedicine() {
    const medicineInput = document.getElementById('search-medicine').value.toLowerCase();

    // Mapping medicines to their respective HTML pages
    const medicinePages = {
        'acetaminophen': 'acetaminophen.html',
        'advil': 'advil.html',
        'alvedon': 'alvedon.html',
        'aspirin': 'aspirin.html',
        'brufen': 'brufen.html',
        'calpol': 'calpol.html',
        'combiflam': 'combiflam.html',
        'crocin': 'crocin.html',
        'dolo': 'dolo.html',
        'dynapar': 'dynapar.html',
        'emetrol': 'emetrol.html',
        'fexofenadine': 'fexofenadine.html',
        'grilinctus': 'grilinctus.html',
        'ibuprofen': 'ibuprofen.html',
        'ibugesic': 'ibugesic.html',
        'meftal forte': 'meftal-forte.html',
        'motrin': 'motrin.html',
        'naproxen': 'naproxen.html',
        'nicip': 'nicip.html',
        'nurofen': 'nurofen.html',
        'paracetamol': 'paracetamol.html',
        'saridon': 'saridon.html',
        'sinarest': 'sinarest.html',
        'solpadeine': 'solpadeine.html',
        'tamiflu': 'tamiflu.html',
        'theraflu': 'theraflu.html',
        'tixylix': 'tixylix.html',
        'tylenol': 'tylenol.html',
        'vicks action 500': 'vicks-action-500.html',
        'zincovit': 'zincovit.html',
        'acebutolol': 'acebutolol.html',
        'atenolol': 'atenolol.html',
        'bisoprolol': 'bisoprolol.html',
        'bupivacaine': 'bupivacaine.html',
        'captopril': 'captopril.html',
        'carvedilol': 'carvedilol.html',
        'clonidine': 'clonidine.html',
        'diltiazem': 'diltiazem.html',
        'diovan': 'diovan.html',
        'enalapril': 'enalapril.html',
        'felodipine': 'felodipine.html',
        'hydrochlorothiazide': 'hydrochlorothiazide.html',
        'lisinopril': 'lisinopril.html',
        'losartan': 'losartan.html',
        'metoprolol': 'metoprolol.html',
        'minoxidil': 'minoxidil.html',
        'nifedipine': 'nifedipine.html',
        'nitroglycerin': 'nitroglycerin.html',
        'propranolol': 'propranolol.html',
        'ramipril': 'ramipril.html',
        'spironolactone': 'spironolactone.html',
        'sotalol': 'sotalol.html',
        'telmisartan': 'telmisartan.html',
        'verapamil': 'verapamil.html',
        'butalbital': 'butalbital.html',
        'bayer': 'bayer.html',
        'bc powder': 'bc-powder.html',
        'cafcit': 'cafcit.html',
        'cephalexin': 'cephalexin.html',
        'codeine': 'codeine.html',
        'diclofenac': 'diclofenac.html',
        'duloxetine': 'duloxetine.html',
        'excedrin': 'excedrin.html',
        'fioricet': 'fioricet.html',
        'fevadol': 'fevadol.html',
        'flexeril': 'flexeril.html',
        'indomethacin': 'indomethacin.html',
        'lortab': 'lortab.html',
        'lidocaine': 'lidocaine.html',
        'meloxicam': 'meloxicam.html',
        'norgesic': 'norgesic.html',
        'neurontin': 'neurontin.html',
        'panadol': 'panadol.html',
        'saridon': 'saridon.html',
        'sumatriptan': 'sumatriptan.html',
        'soma': 'soma.html',
        'topamax': 'topamax.html',
        'tramadol': 'tramadol.html',
        'voltaren': 'voltaren.html',
        'zolmitriptan': 'zolmitriptan.html',
        'antivert': 'antivert.html',
        'aminosalicylate': 'aminosalicylate.html',
        'bismuth subsalicylate': 'bismuth-subsalicylate.html',
        'chlorpromazine': 'chlorpromazine.html',
        'cyproheptadine': 'cyproheptadine.html',
        'dexamethasone': 'dexamethasone.html',
        'emetrol': 'emetrol.html',
        'fentanyl': 'fentanyl.html',
        'granisetron': 'granisetron.html',
        'metoclopramide': 'metoclopramide.html',
        'meclizine': 'meclizine.html',
        'ondansetron': 'ondansetron.html',
        'prochlorperazine': 'prochlorperazine.html',
        'ritonavir': 'ritonavir.html',
        'scopolamine': 'scopolamine.html',
        'trimethobenzamide': 'trimethobenzamide.html',
        'allegra': 'allegra.html',
        'avomine': 'avomine.html',
        'benadryl': 'benadryl.html',
        'bromhexine': 'bromhexine.html',
        'buscopan': 'buscopan.html',
        'chlorpheniramine': 'chlorpheniramine.html',
        'coldact': 'coldact.html',
        'crocin': 'crocin.html',
        'dextromethorphan': 'dextromethorphan.html',
        'decoff': 'decoff.html',
        'fexofenadine': 'fexofenadine.html',
        'fluimucil': 'fluimucil.html',
        'guaifenesin': 'guaifenesin.html',
        'histaprin': 'histaprin.html',
        'hydrocodone': 'hydrocodone.html',
        'loratadine': 'loratadine.html',
        'lemongrass': 'lemongrass.html',
        'mucinex': 'mucinex.html',
        'medrol': 'medrol.html',
        'nasacort': 'nasacort.html',
        'robitussin': 'robitussin.html',
        'rellin': 'rellin.html',
        'sudafed': 'sudafed.html',
        'sinarest': 'sinarest.html',
        'tixylix': 'tixylix.html',
        'acarbose': 'acarbose.html',
        'alogliptin': 'alogliptin.html',
        'aspart': 'aspart.html',
        'bromocriptine': 'bromocriptine.html',
        'biguanide': 'biguanide.html',
        'dapagliflozin': 'dapagliflozin.html',
        'dulaglutide': 'dulaglutide.html',
        'glimepiride': 'glimepiride.html',
        'glipizide': 'glipizide.html',
        'gliclazide': 'gliclazide.html',
        'metformin': 'metformin.html',
        'miglitol': 'miglitol.html',
        'nateglinide': 'nateglinide.html',
        'netaglinide': 'netaglinide.html',
        'octreotide': 'octreotide.html',
        'pioglitazone': 'pioglitazone.html',
        'pramlintide': 'pramlintide.html',
        'repaglinide': 'repaglinide.html',
        'sitagliptin': 'sitagliptin.html',
        'semaglutide': 'semaglutide.html',
        'tolbutamide': 'tolbutamide.html',
        'tirzepatide': 'tirzepatide.html',
        'vildagliptin': 'vildagliptin.html',
        'adapalene': 'adapalene.html',
        'anastrozole': 'anastrozole.html',
        'asthma inhaler': 'asthma-inhaler.html',
        'acetazolamide': 'acetazolamide.html',
        'amiodarone': 'amiodarone.html',
        'bupropion': 'bupropion.html',
        'buspirone': 'buspirone.html',
        'baclofen': 'baclofen.html',
        'carbamazepine': 'carbamazepine.html',
        'clobetasol': 'clobetasol.html',
        'citalopram': 'citalopram.html',
        'digoxin': 'digoxin.html',
        'doxepin': 'doxepin.html',
        'duloxetine': 'duloxetine.html',
        'dexamethasone': 'dexamethasone.html',
        'diazepam': 'diazepam.html',
        'etoposide': 'etoposide.html',
        'escitalopram': 'escitalopram.html',
        'epinephrine': 'epinephrine.html',
        'fluconazole': 'fluconazole.html',
        'fluoxetine': 'fluoxetine.html',
        'gabapentin': 'gabapentin.html',
        'glyburide': 'glyburide.html',
        'hydroxyzine': 'hydroxyzine.html',
        'hypericum': 'hypericum.html',
        'ibandronate': 'ibandronate.html',
        'isotretinoin': 'isotretinoin.html',
        'mirtazapine': 'mirtazapine.html',
        'metronidazole': 'metronidazole.html',
        'montelukast': 'montelukast.html',
        'melatonin': 'melatonin.html',
        'naproxen': 'naproxen.html',
        'naltrexone': 'naltrexone.html',
        'neostigmine': 'neostigmine.html',
        'prednisone': 'prednisone.html',
        'pyrazinamide': 'pyrazinamide.html',
        'phenytoin': 'phenytoin.html',
        'sertraline': 'sertraline.html',
        'sildenafil': 'sildenafil.html',
        'sulfasalazine': 'sulfasalazine.html',
        'tamsulosin': 'tamsulosin.html',
        'topiramate': 'topiramate.html',
        'tiotropium': 'tiotropium.html',
        'vancomycin': 'vancomycin.html',
        'venlafaxine': 'venlafaxine.html',
        'zaleplon': 'zaleplon.html',
        'zafirlukast': 'zafirlukast.html',
        'ziprasidone': 'ziprasidone.html'
    };

    // Check if the input matches a medicine in the list
    if (medicinePages[medicineInput]) {
        // Redirect to the appropriate medicine page
        window.location.href = medicinePages[medicineInput];
    } else {
        // Show an alert if the medicine isn't found
        alert('Medicine not found. Please try again.');
    }
}

// Function to show filtered medicine recommendations as user types
function showRecommendations() {
    const input = document.getElementById('search-medicine').value.toLowerCase();
    const recommendations = document.getElementById('medicine-recommendations');
    const medicineList = recommendations.querySelector('ul');

    // Clear the current list
    medicineList.innerHTML = '';

    // If input is not empty, filter and show relevant medicines
    if (input.length > 0) {
        let found = false;
        for (const medicine in medicinePages) {
            if (medicine.startsWith(input)) {
                found = true;
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${medicinePages[medicine]}">${medicine.charAt(0).toUpperCase() + medicine.slice(1)}</a>`;
                medicineList.appendChild(listItem);
            }
        }

        // Display the recommendations if there are matches
        if (found) {
            recommendations.style.display = 'block';
        } else {
            recommendations.style.display = 'none';
        }
    } else {
        recommendations.style.display = 'none';
    }
}

// Hide recommendations if clicked outside the search box
document.addEventListener('click', function(event) {
    const recommendations = document.getElementById('medicine-recommendations');
    const searchBox = document.getElementById('search-medicine');

    // Check if clicked outside the search box or dropdown
    if (!searchBox.contains(event.target) && !recommendations.contains(event.target)) {
        recommendations.style.display = 'none';
    }
});

// Add event listener for input in the search bar to show recommendations
document.getElementById('search-medicine').addEventListener('input', showRecommendations);

// Add event listener for the Enter key
document.getElementById('search-medicine').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchMedicine();
    }
});

// Handle About Us dropdown visibility
document.getElementById('about-us-button').addEventListener('click', function() {
    const contactInfo = document.getElementById('contact-info');
    // Toggle the display of the dropdown
    contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' : 'none';
});

// Hide the About Us dropdown if clicked outside
document.addEventListener('click', function(event) {
    const aboutUs = document.querySelector('.about-us');
    const contactInfo = document.getElementById('contact-info');

    if (!aboutUs.contains(event.target)) {
        contactInfo.style.display = 'none'; // Hide if clicked outside
    }
});