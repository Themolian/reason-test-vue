<template>
  <div>
    <ContentBlock :block="contentBlock" />
    <ServiceSearch :block="serviceSearch" />
    <Services :block="services" />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentBlock from "@/components/ContentBlock.vue";
import ServiceSearch from "@/components/ServiceSearch.vue";
import Services from "@/components/Services.vue";
export default {
  name: "Home",
  data() {
    return {
      contentBlock: {
          title: 'We are a social change charity, helping people to improve their lives through digital.',
          copy: 'We tackle the most pressing issues of our time, working with partners in thousands of communities across the UK and further afield.',
          link: {
              url: '/what-we-do',
              text: 'Learn more about us'
          }
      },
      serviceSearch: {
        title: 'How can we help you?',
        body: "Let us know who you are and what you're looking for, and we'll help get you to the right place."
      },
      services: {
        title: 'What do we do?',
        subtitle: "You might not have heard of us, but we're the people behind the following impactful programmes",
        cards: [
            {
                title: 'Get online week',
                subtitle: 'Lorem ipsum dolor sit amet',
                link: {
                    url: '/what-we-do',
                    text: 'Read More'
                }
            },
            
            {
                title: 'Learn my way',
                subtitle: 'Lorem ipsum dolor sit amet',
                link: {
                    url: '/what-we-do',
                    text: 'Read More'
                }
            },
            {
                title: 'Make it click',
                subtitle: 'Lorem ipsum dolor sit amet',
                link: {
                    url: '/what-we-do',
                    text: 'Read More'
                }
            },
            {
                title: 'Digital you',
                subtitle: 'Lorem ipsum dolor sit amet',
                link: {
                    url: '/what-we-do',
                    text: 'Read More'
                }
            }
        ],
        link: {
            url: '/what-we-do',
            text: 'More about what we do'
        }
      }
    }
  },
  components: {
    ContentBlock,
    ServiceSearch,
    Services
  }
};
</script>
