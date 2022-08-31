import { useMemo } from 'react';
import { useRouter } from 'next/router';

import BlocksStackedGradient from '@oracle/icons/custom/BlocksStackedGradient';
import ClientOnly from '@hocs/ClientOnly';
import GradientButton from '@oracle/elements/Button/GradientButton';
import KeyboardShortcutButton from '@oracle/elements/Button/KeyboardShortcutButton';
import PipelineV2Gradient from '@oracle/icons/custom/PipelineV2Gradient';
import Spacing from '@oracle/elements/Spacing';
import Tooltip from '@oracle/components/Tooltip';
import { BlocksStacked, PipelineV2 } from '@oracle/icons';
import { PURPLE_BLUE } from '@oracle/styles/colors/gradients';
import { PADDING_UNITS, UNIT } from '@oracle/styles/units/spacing';
import { capitalize } from '@utils/string';

const ICON_SIZE = 3 * UNIT;

export type NavigationItem = {
  Icon: any;
  IconSelected: any;
  id: string;
  isSelected?: (pathname: string) => boolean;
  label: () => string;
  linkProps: {
    as?: string;
    href: string;
  };
};

export type VerticalNavigationProps = {
  navigationItems?: NavigationItem[];
};

function VerticalNavigation({
  navigationItems,
}: VerticalNavigationProps) {
  const router = useRouter();
  const { pathname } = router;

  const buttons = useMemo(() => {
    const items = navigationItems || [
      {
        Icon: PipelineV2,
        IconSelected: PipelineV2Gradient,
        id: 'pipelines',
        label: () => 'Pipelines',
        linkProps: {
          href: 'pipelines',
        },
      },
      {
        Icon: BlocksStacked,
        IconSelected: BlocksStackedGradient,
        id: 'pipeline-runs',
        label: () => 'Pipelines runs',
        linkProps: {
          href: 'pipeline-runs',
        },
      },
    ];

    return items.map(({
      Icon,
      IconSelected,
      id,
      isSelected,
      label,
      linkProps,
    }, idx: Number) => {
      const selected: boolean = isSelected
        ? isSelected(pathname)
        : !!pathname.match(new RegExp(`^/${id}[/]*`));
      const IconToUse = selected && IconSelected ? IconSelected : Icon;

      return (
        <Tooltip
          height={5 * UNIT}
          key={`button-${id}`}
          label={label()}
          size={null}
          widthFitContent
        >
          <Spacing
            mt={idx >= 1 ? PADDING_UNITS : 0}
          >
            {selected && (
              <GradientButton
                backgroundGradient={PURPLE_BLUE}
                backgroundPanel
                basic
                borderWidth={2}
                notClickable
                paddingUnits={1}
              >
                <div
                  style={{
                    height: ICON_SIZE,
                    width: ICON_SIZE,
                  }}
                >
                  <IconToUse muted size={ICON_SIZE} />
                </div>
              </GradientButton>
            )}

            {!selected && (
              <KeyboardShortcutButton
                block
                noHoverUnderline
                noPadding
                linkProps={linkProps}
                sameColorAsText
                uuid={`VerticalNavigation/${id}`}
              >
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 1 * UNIT,
                  }}
                >
                  <IconToUse muted size={ICON_SIZE} />
                </div>
              </KeyboardShortcutButton>
            )}
          </Spacing>
        </Tooltip>
      );
    });
  }, [
    navigationItems,
    pathname,
  ]);


  return (
    <ClientOnly>
      {buttons}
    </ClientOnly>
  );
}

export default VerticalNavigation;
