vi.mock("../useNotifications");

import { vi } from "vitest";

import { axe } from "jest-axe";
import { Notifications } from "..";
import {
  renderer,
} from "../../../../../../../shared/test-helpers/render";
import { useNotifications } from "../useNotifications";

const mockedUseNotifications = vi.mocked(useNotifications);

describe("Notifications", () => {
  beforeEach(() => {
    mockedUseNotifications.mockReturnValue({
      data: {
        isNotificationsOpen: false,
        notifications: [
          { id: 1, message: "notif 1", read: true, timeSince: "3hrs" },
          { id: 2, message: "notif 2", read: false, timeSince: "2hrs" },
        ],
        unreadNotifications: [
          { id: 2, message: "notif 2", read: false, timeSince: "2hrs" },
        ],
      },
      actions: { handleNotificationButtonClick: vi.fn() },
    });
  });

  it("should not report accessibility violations", async () => {
    const { container } = renderer(<Notifications />);
    expect(await axe(container)).toHaveNoViolations();
  });

  describe("unread indicator", () => {
    describe("when there are unread notifications", () => {
      it("should display the unread indicator", () => {
        const { getByTestId } = renderer(<Notifications />);
        expect(
          getByTestId("unread-notifications-indicator")
        ).toBeInTheDocument();
      });
    });

    describe("when there no unread notifications", () => {
      beforeEach(() => {
        mockedUseNotifications.mockReturnValue({
          data: { unreadNotifications: [] } as any,
          actions: { handleNotificationButtonClick: vi.fn() },
        });
      });

      it("should not display the indicator", () => {
        const { queryByTestId } = renderer(<Notifications />);
        expect(
          queryByTestId("unread-notifications-indicator")
        ).not.toBeInTheDocument();
      });
    });
  });

  
});
