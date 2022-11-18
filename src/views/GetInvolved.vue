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
  name: "Get Involved",
  data() {
    return {
      contentBlock: {
          title: 'Get Involved - Lorem ipsum',
          copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium et corporis nam perferendis, libero molestiae vel modi saepe, veritatis, consectetur autem! Atque nobis excepturi temporibus, mollitia quasi deserunt nesciunt sapiente?',
          link: {
              url: '/what-we-do',
              text: 'Learn more about us'
          }
      },
      serviceSearch: {
        title: 'Lorem Ipsum',
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium et corporis nam perferendis, libero molestiae vel modi saepe, veritatis, consectetur autem!"
      },
      services: {
        title: 'Lorem Ipsum',
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium et corporis nam perferendis.",
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
