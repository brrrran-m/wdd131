import { participantTemplate, successTemplate } from './templates.js';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    // Function to generate participant HTML
    function participantTemplate(count) {
        return `
            <section class="participant${count}">
                <p>Participant ${count}</p>
                <div class="item">
                    <label for="fname${count}"> First Name<span>*</span></label>
                    <input id="fname${count}" type="text" name="fname${count}" value="" required />
                </div>
                <div class="item activities">
                    <label for="activity${count}">Activity #<span>*</span></label>
                    <input id="activity${count}" type="text" name="activity${count}" />
                </div>
                <div class="item">
                    <label for="fee${count}">Fee ($)<span>*</span></label>
                    <input id="fee${count}" type="number" name="fee${count}" />
                </div>
                <div class="item">
                    <label for="date${count}">Desired Date <span>*</span></label>
                    <input id="date${count}" type="date" name="date${count}" />
                </div>
                <div class="item">
                    <p>Grade</p>
                    <select>
                        <option selected value="" disabled selected></option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                        <option value="5">5th</option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                        <option value="9">9th</option>
                        <option value="10">10th</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                    </select>
                </div>
            </section>`;
    }

    // Event listener for adding participants
    document.getElementById('add').addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        const participantsFieldset = document.querySelector('.participants');
        const addButton = document.getElementById('add');
        participantsFieldset.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    // Function to handle form submission
    function submitForm(event) {
        event.preventDefault();
        
        let totalFees = 0;
        const feeElements = document.querySelectorAll("[id^=fee]");
        feeElements.forEach(fee => {
            totalFees += parseFloat(fee.value) || 0;
        });

        const adultName = document.getElementById('adult_name').value;
        const numberOfParticipants = document.querySelectorAll('.participant1, .participant2').length;
        
        document.querySelector('form').style.display = 'none';
        const summary = document.getElementById('summary');
        summary.innerHTML = `Thank you ${adultName} for registering. You have registered ${numberOfParticipants} participants and owe $${totalFees} in Fees.`;
        summary.style.display = 'block';
    }

    document.querySelector('form').addEventListener('submit', submitForm);
});
