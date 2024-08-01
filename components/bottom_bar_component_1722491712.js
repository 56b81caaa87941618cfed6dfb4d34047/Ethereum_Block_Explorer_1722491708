/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1722491712", {
    template: `
    <section id="bottom-bar-component" class="fixed bottom-0 z-30 w-full lg:w-1/2 bg-opacity-30 backdrop-blur-lg bg-pink-300 dark:bg-purple-900 rounded-t-3xl shadow-lg">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-6 py-6">
            <div id="action-buttons" class="flex space-x-6 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 text-white font-semibold text-lg bg-opacity-40 bg-pink-500 hover:bg-opacity-60 rounded-2xl border border-white border-opacity-30 shadow-md transition duration-300 ease-in-out transform hover:scale-105" href="contact.html">Contact</a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 font-semibold text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-opacity-70 hover:bg-opacity-90 text-white rounded-2xl border border-white border-opacity-30 shadow-md transition duration-300 ease-in-out transform hover:scale-105">Pay</a>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded:false,
            tab:null
        }
    },
});
