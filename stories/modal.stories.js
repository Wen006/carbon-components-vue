import { storiesOf } from '@storybook/vue';

storiesOf('Modal', module)
  .add('Default', () => ({
    template: `
      <ca-modal
        modalHeading="Modal heading"
        modalLabel="Optional label"
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
        show
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>
      </ca-modal>
    `,
  }))
  .add('Hide', () => ({
    template: `
      <ca-modal
        modalHeading="Modal heading"
        modalLabel="Optional label"
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>
      </ca-modal>
    `,
  }))
  .add('Primary Handler', () => ({
    data: () => ({
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.',
    }),
    template: `
      <ca-modal
        modalHeading="Modal heading"
        modalLabel="Optional label"
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
        :primaryHandler="() => {text = 'Primary Button clicked!'}"
        show
      >
        <p>{{text}}</p>
      </ca-modal>
    `,
  }))
  .add('Secondary Handler', () => ({
    data: () => ({
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.',
    }),
    template: `
      <ca-modal
        modalHeading="Modal heading"
        modalLabel="Optional label"
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
        :secondaryHandler="() => {text = 'Secondary Button clicked!';}"
        show
      >
        <p>{{text}}</p>
      </ca-modal>
    `,
  }))
  .add('Close Handler', () => ({
    data: () => ({
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.',
    }),
    template: `
      <ca-modal
        modalHeading="Modal heading"
        modalLabel="Optional label"
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
        :closeHandler="() => {text = 'Close Button clicked!';}"
        show
      >
        <p>{{text}}</p>
      </ca-modal>
    `,
  }));
