/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content" class="pb-8">
            <!-- Hero Section with Full Logo -->
            <div class="relative h-96 md:h-[600px] mt-8 mb-8 rounded-xl mx-4 overflow-hidden shadow-2xl bg-white" style="animation: fadeInUp 0.8s ease-out;">
                <!-- Logo filling entire hero section -->
                <div class="w-full h-full">
                    <img src="../assets/images/earthcafelogo.jpg" alt="Earth Cafe Logo" class="w-full h-full object-cover">
                </div>
            </div>

            <!-- Fresh Juices & Organic Eats -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-200 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0" style="animation: fadeInLeft 0.8s ease-out;">
                            <h2 class="text-4xl font-bold text-gray-900 mb-6">Cold-Pressed Juices<br><span class="text-green-600">Made Fresh Daily</span></h2>
                            <p class="text-xl text-gray-700 mb-6">At Earth Cafe, we're passionate about creating nutritious, delicious cold-pressed juices and organic meals that nourish your body and soul. Our ingredients are locally-sourced and always organic.</p>
                            <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors mt-4" 
                                    onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                View Our Menu
                            </button>
                        </div>
                        <div class="md:w-1/2 relative flex items-center justify-center" style="animation: fadeInRight 0.8s ease-out;">
                            <div class="bg-white rounded-xl p-1 border border-gray-200 shadow-2xl w-full">
                                <div class="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                                         alt="Fresh Juices at Earth Cafe" 
                                         class="max-w-full max-h-full object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Happy Hour Special -->
            <div class="bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl p-6 mx-4 mb-12 border-2 border-yellow-300 shadow-2xl relative overflow-visible" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="text-center w-full">
                    <span class="inline-block bg-yellow-300 text-amber-900 font-bold px-6 py-1 rounded-full text-sm mb-3">DAILY SPECIAL</span>
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-2">HAPPY HOUR</h2>
                    <p class="text-xl text-yellow-100 font-medium mb-6">Start Your Day Right</p>
                    
                    <div class="bg-black/20 rounded-xl p-6 max-w-2xl mx-auto mb-6">
                        <div class="text-8xl mb-4">🥞</div>
                        <div class="text-4xl font-bold text-yellow-300 mb-2">$10 SPECIAL</div>
                        <div class="text-lg text-yellow-100 mb-2">Every Day • 8am - 10am</div>
                        <p class="text-yellow-100">Enjoy our house pancakes or 3 eggs any style. The perfect way to start your morning!</p>
                    </div>
                    
                    <p class="text-yellow-100 text-sm mt-4">Available for dine-in only. No substitutions.</p>
                </div>
            </div>

            <!-- Featured Menu Items -->
            <div class="bg-green-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-green-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Signature Juices</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Our most popular cold-pressed juices that our customers love</p>
                </div>
                <div class="swiper game-day-swiper max-w-6xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Green Detox Juice" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Green Detox</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">A refreshing blend of kale, spinach, cucumber, green apple, and lemon. Packed with nutrients to cleanse and energize your body.</p>
                              <button class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  View Menu
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="https://images.unsplash.com/photo-1603569294250-491f0c4de0d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Sunrise Citrus" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Sunrise Citrus</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">A vibrant blend of orange, carrot, ginger, and turmeric. Packed with vitamin C and antioxidants to boost your immune system.</p>
                              <button class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  View Menu
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="https://images.unsplash.com/photo-1603569305201-0fbc8f0c0b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Beet Blast" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Beet Blast</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">A powerful combination of beets, apple, carrot, and ginger. Naturally sweet and packed with essential nutrients for energy and vitality.</p>
                              <button class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  View Menu
                              </button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination game-day-swiper-pagination"></div>
                </div>

                <!-- View Full Menu CTA -->
                <div class="text-center mt-12">
                    <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')" class="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                        View All Juice Flavors
                    </a>
                </div>
            </div>

            <!-- Community Testimonials -->
            <div class="bg-green-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-green-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">What Our Community Says</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Hear from our health-conscious community about their Earth Cafe experience</p>
                </div>
                <div class="swiper fans-say-swiper max-w-4xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mr-4">SG</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Sarah G.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Green Detox juice changed my morning routine! I feel so energized and refreshed. It's become my daily ritual to start the day right with Earth Cafe's cold-pressed goodness."</p>
                              <div class="text-xs text-gray-500">Wellness Enthusiast</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.8s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mr-4">MT</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Marcus T.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Acai Bowl is my go-to breakfast! Packed with superfoods and fresh fruit, it keeps me full and focused all morning. The perfect balance of nutrition and flavor that makes healthy eating a pleasure."</p>
                              <div class="text-xs text-gray-500">Health Coach</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 1.0s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mr-4">EP</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Elena P.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"As someone with dietary restrictions, I'm so grateful for Earth Cafe's gluten-free and vegan options. The Rainbow Wrap is not only beautiful but absolutely delicious. It's rare to find such amazing flavor in healthy food!"</p>
                              <div class="text-xs text-gray-500">Nutrition Enthusiast</div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination fans-say-swiper-pagination"></div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content" class="pt-12">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-[var(--text-medium)]">Review your items</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Cart Items</h2>
                <div id="cart-items-list"></div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xl font-bold text-[var(--text-dark)]">Total:</span>
                    <span id="cart-total" class="text-xl font-bold text-[var(--primary-color)]">$0.00</span>
                </div>
                <button class="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    `,

    about: `
                <div class="pt-12 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-green-600 mr-4"></div>
                            <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h1>
                        </div>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            Welcome to Earth Cafe, Myrtle Beach's premier destination for fresh, organic, and nourishing food and juices. 
                            Founded in the heart of the Grand Strand, our mission is to bring healthy, delicious, and sustainable food options 
                            to our coastal community.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            Our journey began with a simple vision: to create a welcoming space where health-conscious individuals and 
                            food lovers alike could enjoy meals that are as good for the body as they are for the soul. Every dish and juice 
                            is crafted with care using locally-sourced, organic ingredients to ensure maximum flavor and nutrition.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            Whether you're joining us for a refreshing cold-pressed juice, a nourishing bowl, or one of our famous smoothies, 
                            we invite you to experience the Earth Cafe difference. Thank you for being part of our journey toward a healthier, 
                            more sustainable future.
                        </p>
                    </div>
                </div>

                <!-- Why Myrtle Beach Section -->
                <div class="mb-12">
                    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-blue-500 mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Why Choose Us?</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            At Earth Cafe, we're more than just a cafe - we're a community hub where health-conscious individuals and 
                            food lovers come together to enjoy fresh, organic, and nourishing food that supports a healthy lifestyle 
                            while being kind to our planet. Our unique atmosphere combines the excitement of a vibrant cafe with the 
                            comfort of your favorite local hangout, all while serving up the best food and juices in Myrtle Beach.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-blue-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Fresh, Organic Ingredients</h3>
                                <p class="text-[var(--text-medium)] text-sm">Locally-sourced and carefully selected to ensure maximum flavor and nutrition</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-green-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Sustainable Practices</h3>
                                <p class="text-[var(--text-medium)] text-sm">Eco-friendly practices and sustainable sourcing to minimize our impact on the environment</p>
                            </div>
                        </div>
                </div>

                <!-- Our Mission & Values -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-green-600 mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
                        <p class="text-gray-700 leading-relaxed">
                            To nourish our community with fresh, organic, and delicious food that supports a healthy lifestyle 
                            while being kind to our planet. We're committed to sustainability, local sourcing, and creating 
                            vibrant, nutritious meals that delight the senses.
                        </p>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-green-600 mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-gray-900 mb-4 text-center">Our Values</h2>
                        <ul class="space-y-2 text-gray-700">
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">✓</span>
                                <span>100% organic, locally-sourced ingredients</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">✓</span>
                                <span>Sustainable and eco-friendly practices</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">✓</span>
                                <span>Nutrient-dense, delicious food</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">✓</span>
                                <span>Community health and wellness</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Our Commitment -->
                <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-lg p-8 mb-12">
                    <div class="text-center mb-6">
                        <div class="w-16 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-2">Our Commitment</h2>
                        <p class="text-[var(--primary-color)] font-semibold">"Nourishing Our Community, One Meal at a Time"</p>
                        <p class="text-[var(--primary-color)] font-semibold">"Where Every Game Feels Like Home"</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-sm">
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg text-center">
                            Whether you're here for the big game, a casual night out, or to enjoy our weekly specials, we're committed to making every visit memorable. Our team works tirelessly to ensure you have the best wings, the coldest drinks, and the most delicious sauces in Myrtle Beach. At Dirty Myrtle Wing Company, you're not just a customer - you're part of our wing family.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto pt-12">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-4">
                        <div class="flex items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Phone:</span>
                            <a href="tel:843-808-9277" class="text-[var(--text-medium)] hover:text-yellow-400 transition-colors">843-808-9277</a>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Email:</span>
                            <button onclick="navigator.clipboard.writeText('Troy.dirtymyrtlewingcompany@gmail.com').then(() => { const btn = event.target; const originalText = btn.innerHTML; btn.innerHTML = '✓ Copied to clipboard!'; btn.classList.add('text-green-500'); setTimeout(() => { btn.innerHTML = originalText; btn.classList.remove('text-green-500'); }, 2000); })" 
                                    class="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-color)] text-white rounded-md hover:bg-yellow-600 transition-colors"
                                    title="Click to copy email">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Copy Email
                            </button>
                        </div>
                        <div class="flex items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Address:</span>
                            <span class="text-[var(--text-medium)]">3811 N Kings Hwy, Myrtle Beach, SC 29577</span>
                        </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Hours</h2>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Monday - Sunday:</span>
                            <span class="text-[var(--text-dark)] font-medium">8:00 AM - 4:00 PM</span>
                        </div>
                </div>
            </div>
        </div>
    `,

};
