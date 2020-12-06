from manim import *


def highlight_line(self, tex: Code, number: int = -1):
    return [ApplyMethod(tex.code[line_no].set_opacity, .3 if line_no != number and number != -1 else 1) for line_no in range(len(tex.code))]


class AnimatedCode(Scene):
    def construct(self):
        tex = Code("code.py")
        self.play(ShowCreation(tex, lag_ratio=5))
        self.wait()
        self.play(*self.highlight_line(tex, 4))
        self.wait()
