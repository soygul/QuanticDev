from manim import *


def highlight_line(code: Code, line_from, line_to):
    if not line_to:
        line_to = line_from
    lines = range(line_from, line_to)

    return [ApplyMethod(code.code[line_no].set_opacity, 1 if line_no in lines else .3) for line_no in range(len(code.code))]


class AnimatedCode(Scene):
    def construct(self):
        code = Code("code.py")
        self.play(ShowCreation(code, lag_ratio=5))
        self.wait()
        self.play(*highlight_line(code, 2, 6))
        self.wait()
        self.play(*highlight_line(code, 8, 10))
        self.wait()
