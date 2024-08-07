/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1722491712", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-transparent backdrop-blur-md">
        <h2 id="details-title" class="text-2xl font-bold mb-8 pl-4 text-pink-400 text-shadow-lg">Details</h2>
        <ul id="details-list" class="grid gap-6 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-6 py-6 rounded-xl bg-gradient-to-tr from-purple-500/30 to-pink-500/30 backdrop-blur-lg shadow-lg border border-purple-300/20">
                <div class="font-semibold text-xl mb-2 text-pink-200">Real-Time Ethereum Block Discovery</div>
                <div class="text-purple-100">Our app utilizes cutting-edge technology to instantly detect new Ethereum blocks as they are mined, giving you access to the latest blockchain data.</div>
            </li>
            <li id="start-date" class="px-6 py-6 rounded-xl bg-gradient-to-tr from-purple-500/30 to-pink-500/30 backdrop-blur-lg shadow-lg border border-purple-300/20">
                <div class="font-semibold text-xl mb-2 text-pink-200" id="start-date-des-1">Scalable and Efficient Architecture</div>
                <time class="text-purple-100" id="start-time-des-1">Built with a decentralized and distributed design, our platform can handle high volumes of traffic and data without sacrificing speed or reliability.</time>
            </li>
            <li id="end-date" class="px-6 py-6 rounded-xl bg-gradient-to-tr from-purple-500/30 to-pink-500/30 backdrop-blur-lg shadow-lg border border-purple-300/20">
                <div class="font-semibold text-xl mb-2 text-pink-200" id="end-date-des-1">Seamless Integration with Your Tools</div>
                <time class="text-purple-100" id="end-time-des-1">Easily connect our Ethereum block discovery API to your existing applications, smart contracts, and data analytics pipelines for a unified blockchain monitoring solution.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

