import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SelectPetScreen from './screens/SelectPetScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import SignUpScreen from './screens/SignUpScreen';
import PetBasicInfoScreen from './screens/PetBasicInfoScreen';
import PetHealthInfoScreen from './screens/PetHealthInfoScreen';
import CategoryMainScreen from './screens/CategoryMainScreen';
import PetFoodCategoryScreen from './screens/PetFoodCategoryScreen';
import PetServiceCategoryScreen from './screens/PetServiceCategoryScreen';
import LifestyleCategoryScreen from './screens/LifestyleCategoryScreen';
import PetEnterCategoryScreen from './screens/PetEnterCategoryScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import CartScreen from './screens/CartScreen';
import ProductCheckoutScreen from './screens/ProductCheckoutScreen';
import ServiceReservationScreen from './screens/ServiceReservationScreen';
import OrderCompleteScreen from './screens/OrderCompleteScreen';
import MyMainScreen from './screens/MyMainScreen';
import MyReservationScreen from './screens/MyReservationScreen';
import MyReportScreen from './screens/MyReportScreen';
import FuneralMainScreen from './screens/FuneralMainScreen';
import FuneralServiceListScreen from './screens/FuneralServiceListScreen';
import FuneralServiceDetailScreen from './screens/FuneralServiceDetailScreen';
import MemorialProductDetailScreen from './screens/MemorialProductDetailScreen';
import MemorialRecordScreen from './screens/MemorialRecordScreen';
import CommunityScreen from './screens/CommunityScreen';
import BottomNav from './components/Layout/BottomNav';
import WebLandingSide from './components/Web/WebLandingSide';

// Updated Flow including new Categories
type AppStep = 
  | 'splash' | 'onboarding' | 'signup' | 'select-pet' 
  | 'pet-basic' | 'pet-health' 
  | 'home' | 'category-main' | 'category-food' | 'category-service' | 'category-lifestyle' | 'category-enter'
  | 'product-list' | 'product-detail' | 'service-detail'
  | 'cart' | 'product-checkout' | 'service-reservation' | 'order-complete'
  | 'my-main' | 'my-reservation' | 'my-report'
  | 'funeral-main' | 'funeral-service-list' | 'funeral-service-detail' | 'memorial-product-detail' | 'memorial-record'
  | 'community-main';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('splash');
  const [selectedPetType, setSelectedPetType] = useState<'cat' | 'dog' | null>(null);
  const [completeType, setCompleteType] = useState<'product' | 'service'>('product');
  
  // Track active tab for BottomNav
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep('onboarding');
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  const handlePetSelect = (type: 'cat' | 'dog') => {
    setSelectedPetType(type);
    setStep('pet-basic');
  };

  // Handle Bottom Navigation
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'home') setStep('home');
    if (tabId === 'category') setStep('category-main');
    if (tabId === 'reserve') setStep('my-reservation');
    if (tabId === 'community') setStep('community-main');
    if (tabId === 'my') setStep('my-main');
  };

  const handleWebSearch = (keyword: string) => {
    setStep('product-list');
  };

  // Nav Logic
  const goBack = () => {
    switch (step) {
      case 'product-detail': setStep('product-list'); break;
      case 'service-detail': setStep('home'); break; 
      case 'product-list': setStep('category-main'); break;
      
      // Category Back Logic
      case 'category-food': setStep('category-main'); break;
      case 'category-service': setStep('category-main'); break;
      case 'category-lifestyle': setStep('category-main'); break;
      case 'category-enter': setStep('category-main'); break;
      case 'category-main': setStep('home'); break;

      case 'pet-health': setStep('pet-basic'); break;
      case 'pet-basic': setStep('select-pet'); break;
      case 'cart': setStep('product-detail'); break; 
      case 'product-checkout': setStep('cart'); break;
      case 'service-reservation': setStep('service-detail'); break;
      case 'order-complete': setStep('home'); break;
      case 'my-reservation': setStep('my-main'); break;
      case 'my-report': setStep('my-main'); break;
      
      // Funeral Flow Back Logic
      case 'funeral-main': setStep('category-main'); break;
      case 'funeral-service-list': setStep('funeral-main'); break;
      case 'funeral-service-detail': setStep('funeral-service-list'); break;
      case 'memorial-product-detail': setStep('funeral-main'); break;
      case 'memorial-record': setStep('funeral-main'); break;

      // Community
      case 'community-main': setStep('home'); break;

      default: setStep('home');
    }
  };

  const showBottomNav = [
    'home', 'category-main', 'category-food', 'category-service', 'category-lifestyle', 'category-enter', 'product-list', 
    'my-main', 'my-reservation', 'my-report', 'community-main'
  ].includes(step);

  return (
    // 1. Outer Background: White
    <div className="min-h-screen w-full bg-white flex justify-center overflow-hidden">
      
      {/* 2. Main Container: Max Width 1440px */}
      <div className="w-full max-w-[1440px] flex h-screen shadow-2xl relative">
        
        {/* 3. LEFT SIDE: Fluid Width (Remaining space) */}
        <div className="flex-1 hidden lg:flex relative z-10 bg-white">
          <WebLandingSide onSearch={handleWebSearch} />
        </div>

        {/* 4. RIGHT SIDE: Fixed Width (425px) */}
        {/* Border-left for separation, White background */}
        <div className="w-full lg:w-[425px] flex-shrink-0 h-full bg-white relative border-l border-gray-100 flex flex-col mx-auto lg:mx-0">
          
          <div className="flex-1 overflow-hidden relative bg-white">
            {step === 'splash' && <SplashScreen />}
            
            {step === 'onboarding' && (
              <OnboardingScreen onFinish={() => setStep('signup')} />
            )}
            
            {step === 'signup' && (
              <SignUpScreen onNext={() => setStep('select-pet')} />
            )}
            
            {step === 'select-pet' && (
              <SelectPetScreen onSelect={handlePetSelect} />
            )}

            {step === 'pet-basic' && (
              <PetBasicInfoScreen 
                petType={selectedPetType}
                onBack={() => setStep('select-pet')}
                onNext={() => setStep('pet-health')}
              />
            )}

            {step === 'pet-health' && (
              <PetHealthInfoScreen 
                onBack={() => setStep('pet-basic')}
                onNext={() => {
                  setStep('home');
                  setActiveTab('home');
                }}
              />
            )}

            {/* Main App Screens */}
            <div className="flex-1 overflow-hidden relative h-full bg-white">
              {step === 'home' && (
                <HomeScreen 
                  onServiceClick={() => setStep('service-detail')}
                  onNavigateToMy={() => handleTabChange('my')}
                />
              )}
              
              {step === 'category-main' && (
                <CategoryMainScreen 
                  onCategorySelect={(categoryId, item) => {
                    if (categoryId === 'funeral') setStep('funeral-main');
                    else setStep('product-list');
                  }} 
                />
              )}

              {step === 'category-food' && (
                 <PetFoodCategoryScreen 
                   onBack={goBack}
                   onSubCategorySelect={() => setStep('product-list')}
                 />
              )}

              {step === 'category-service' && (
                 <PetServiceCategoryScreen 
                   onBack={goBack}
                   onServiceClick={() => setStep('service-detail')}
                 />
              )}

              {step === 'category-lifestyle' && (
                 <LifestyleCategoryScreen 
                   onBack={goBack}
                 />
              )}

              {step === 'category-enter' && (
                 <PetEnterCategoryScreen 
                   onBack={goBack}
                 />
              )}

              {step === 'product-list' && (
                <ProductListScreen 
                  onBack={goBack}
                  onProductClick={() => setStep('product-detail')}
                />
              )}

              {step === 'product-detail' && (
                <ProductDetailScreen 
                  onBack={goBack}
                  onCart={() => setStep('cart')}
                  onBuy={() => setStep('product-checkout')}
                />
              )}

              {step === 'cart' && (
                <CartScreen 
                  onBack={goBack}
                  onCheckout={() => setStep('product-checkout')}
                />
              )}

              {step === 'product-checkout' && (
                <ProductCheckoutScreen 
                  onBack={goBack}
                  onPaymentComplete={() => {
                    setCompleteType('product');
                    setStep('order-complete');
                  }}
                />
              )}

              {step === 'service-detail' && (
                <ServiceDetailScreen 
                  onBack={goBack}
                  onReserve={() => setStep('service-reservation')}
                />
              )}

              {step === 'service-reservation' && (
                <ServiceReservationScreen 
                  onBack={goBack}
                  onReserveComplete={() => {
                    setCompleteType('service');
                    setStep('order-complete');
                  }}
                />
              )}

              {step === 'order-complete' && (
                <OrderCompleteScreen 
                  type={completeType}
                  onHome={() => {
                    setStep('home');
                    setActiveTab('home');
                  }}
                  onDetail={() => console.log('Go to detail')}
                />
              )}

              {step === 'community-main' && (
                <CommunityScreen />
              )}

              {step === 'my-main' && (
                <MyMainScreen 
                  onNavigateToReserve={() => setStep('my-reservation')}
                  onNavigateToReport={() => setStep('my-report')}
                />
              )}

              {step === 'my-reservation' && (
                <MyReservationScreen onBack={goBack} />
              )}

              {step === 'my-report' && (
                <MyReportScreen onBack={goBack} />
              )}

              {step === 'funeral-main' && (
                <FuneralMainScreen 
                  onBack={goBack} 
                  onNavigate={(route) => setStep(route as AppStep)}
                />
              )}
              
              {step === 'funeral-service-list' && (
                <FuneralServiceListScreen 
                  onBack={goBack}
                  onDetail={() => setStep('funeral-service-detail')}
                />
              )}

              {step === 'funeral-service-detail' && (
                <FuneralServiceDetailScreen 
                  onBack={goBack}
                  onReserve={() => {
                    setCompleteType('service');
                    setStep('order-complete');
                  }}
                />
              )}

              {step === 'memorial-product-detail' && (
                <MemorialProductDetailScreen 
                  onBack={goBack}
                  onBuy={() => setStep('product-checkout')}
                />
              )}

              {step === 'memorial-record' && (
                <MemorialRecordScreen onBack={goBack} />
              )}
            </div>

            {showBottomNav && (
              <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;