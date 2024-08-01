/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1722491712", {
    template: `
    <section id="items-table-component" class="py-8 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl backdrop-blur-md bg-opacity-30 border border-white border-opacity-20">
        <h2 id="costs-title" class="text-2xl font-bold mb-5 text-white text-center">Ethereum Blockchain Explorer</h2>
        <div id="costs-table-container" class="overflow-x-auto px-6">
            <table id="costs-table" class="table-auto w-full text-sm">
                <thead id="costs-table-header" class="text-white">
                    <tr>
                        <th id="description-header" class="px-4 py-2">Description</th>
                        <th id="cost-header" scope="col" class="px-4 py-2">Cost</th>
                    </tr>
                </thead>
                <tbody id="costs-table-body">
                    <tr class="group bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300" id="costs-row-1">
                        <th scope="row" class="text-left font-normal px-4 py-5 rounded-l-lg" id="costs-cell-description-1">
                            <div class="font-semibold mb-0.5 text-pink-300" id="costs-link-1">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">
                                    Real-Time Block Tracking
                                </a>
                            </div>
                            <p class="text-white" id="costs-description-1">Get notified instantly when new blocks are mined on the Ethereum network.</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 rounded-r-lg w-1/4" id="costs-cell-cost-1">
                            <a class="text-purple-300 hover:text-white transition-colors duration-300" href="details.html">$19.99/month</a>
                        </td>
                    </tr>
                    <tr class="group bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300" id="costs-row-2">
                        <th scope="row" class="text-left font-normal px-4 py-5 rounded-l-lg" id="costs-cell-description-2">
                            <div class="font-semibold mb-0.5 text-pink-300" id="costs-link-2">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">
                                    Transaction Monitoring
                                </a>
                            </div>
                            <p class="text-white" id="costs-description-2">Monitor and analyze transactions as they occur on the blockchain.</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 rounded-r-lg w-1/4" id="costs-cell-cost-2">
                            <a class="text-purple-300 hover:text-white transition-colors duration-300" href="details.html">$14.99/month</a>
                        </td>
                    </tr>
                    <tr class="group bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300" id="costs-row-3">
                        <th scope="row" class="text-left font-normal px-4 py-5 rounded-l-lg" id="costs-cell-description-3">
                            <div class="font-semibold mb-0.5 text-pink-300" id="costs-link-3">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">Smart Contract Analysis</a>
                            </div>
                            <p class="text-white" id="costs-description-3">Inspect smart contract code, view events, and track contract interactions.</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 rounded-r-lg w-1/4" id="costs-cell-cost-3">
                            <a class="text-purple-300 hover:text-white transition-colors duration-300" href="details.html">$24.99/month</a>
                        </td>
                    </tr>
                    <tr class="group bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300" id="costs-row-4">
                        <th scope="row" class="text-left font-normal px-4 py-5 rounded-l-lg" id="costs-cell-description-4">
                            <div class="font-semibold mb-0.5 text-pink-300" id="costs-link-4">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">Network Data Insights</a>
                            </div>
                            <p class="text-white" id="costs-description-4">Gain insights into network metrics like hashrate, difficulty, and gas prices.</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 rounded-r-lg w-1/4" id="costs-cell-cost-4">
                            <a class="text-purple-300 hover:text-white transition-colors duration-300" href="details.html">$9.99/month</a>
                        </td>
                    </tr>
                    <tr class="group bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300" id="costs-row-5">
                        <th scope="row" class="text-left font-normal px-4 py-5 rounded-l-lg" id="costs-cell-description-5">
                            <div class="font-semibold mb-0.5 text-pink-300" id="costs-link-5">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">Wallet Integration</a>
                            </div>
                            <p class="text-white" id="costs-description-5">Connect your Ethereum wallet for easy tracking of your funds and activities.</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 rounded-r-lg w-1/4" id="costs-cell-cost-5">
                            <a class="text-purple-300 hover:text-white transition-colors duration-300" href="details.html">$12.99/month</a>
                        </td>
                    </tr>
                    <tr class="group bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300" id="costs-row-6">
                        <th scope="row" class="text-left font-normal px-4 py-5 rounded-l-lg" id="costs-cell-description-6">
                            <div class="font-semibold mb-0.5 text-pink-300" id="costs-link-6">
                                <a class="hover:text-white transition-colors duration-300" href="details.html">Customizable Alerts</a>
                            </div>
                            <p class="text-white" id="costs-description-6">Set custom alerts for transactions, contract events, and blockchain metrics.</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 rounded-r-lg w-1/4" id="costs-cell-cost-6">
                            <a class="text-purple-300 hover:text-white transition-colors duration-300" href="details.html">$7.99/month</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot id="costs-table-footer">
                    <tr>
                        <th id="total-description" scope="row" class="text-left font-normal px-4 py-5">
                            <p id="total-description-text" class="italic text-white">TOTAL in USD dollar</p>
                        </th>
                        <td id="total-cost" class="font-semibold text-right text-base underline px-4 py-5 w-1/4 text-pink-300">$90.94/month</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
