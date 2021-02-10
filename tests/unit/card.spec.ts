import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Card, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
