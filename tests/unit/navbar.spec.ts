import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("Card.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(NavBar, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
