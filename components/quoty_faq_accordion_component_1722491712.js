/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1722491712", {
    template: `
    <section class="py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 pl-4 rounded-xl shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h2 class="text-2xl font-bold mb-5 text-white text-shadow">Frequently Asked Questions about Blockchain Block Explorer</h2>
        <!-- Accordion -->
        <div class="space-y-4">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-md transition-all duration-300 hover:bg-opacity-30" :class="[{ 'expanded': term.expanded }]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-6 py-4 text-white" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span class="text-lg">{{ term.title }}</span>
                        <svg class="shrink-0 ml-8 fill-white" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                            <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="text-white grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-6 pb-4 text-base" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            terms: [
                { title: "What is a blockchain block explorer?", description: "A blockchain block explorer is an app that allows you to view and search data on a blockchain network. It provides transparency into transactions, addresses, balances, and other on-chain activity.", expanded: false },
                { title: "How does this app help find new Ethereum blocks?", description: "This app connects to Ethereum nodes and constantly monitors the network for new blocks as they are mined. When a new block is detected, it is immediately indexed and its data is made available for viewing and analysis within the app.", expanded: false },
                { title: "What kind of data can I see for each block?", description: "For each Ethereum block, you can view details like the block number, timestamp, transaction count, miner, difficulty, gas used, and a list of all transactions included in that block.", expanded: false },
                { title: "Is this app only for Ethereum?", description: "Currently this block explorer focuses on Ethereum mainnet and major EVM-compatible chains like Polygon, Binance Smart Chain, etc. However, support for additional blockchains may be added in the future.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
