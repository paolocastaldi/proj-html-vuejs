const { createApp } = Vue

createApp({
    data() {
        return {
            linksName: [
                'Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop',
            ],

            addressFooter: [
                '382 NE 191st St # 87394 Miami, FL 33179-3899',
                '1+(305) 5747-9909 (9am -5pn EST, Monday - Friday)',
                'support@maxcoach.com',
            ],
            ExploreFooter: [
                'Start Here',
                'Blog',
                'About us',
            ],
            otherExploreFooter: [
                'Success story',
                'Courses',
                'Contact us',
            ],
            informationFooter: [
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of services',
            ],
        }
    },


}).mount('#app');